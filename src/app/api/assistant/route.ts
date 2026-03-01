import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

const SYSTEM_PROMPTS = {
  es: `Eres PatBot, asistente de PatDilet (consultoría tech IA/Cloud).

OBJETIVO PRINCIPAL: Agendar una llamada de consultoría diagnóstica GRATUITA.
Tu trabajo NO es resolver todo, es identificar la necesidad y agendar.

REGLAS:
- Respuestas MUY CORTAS (2-3 líneas máximo)
- Una pregunta a la vez
- Sin tecnicismos - habla simple
- Después de 2-3 mensajes, SIEMPRE propone agendar llamada
- Usa bullet points con guión (-) si necesitas listar algo

SERVICIOS (solo menciona si preguntan):
- IA: chatbots, automatización
- Cloud: infraestructura, DevOps
- Modernización: sistemas legacy

FLUJO IDEAL:
1. Usuario pregunta → respondes breve + 1 pregunta
2. Usuario responde → das info básica + propones agendar
3. Si pregunta detalles → "En la llamada definimos eso. ¿Te paso el link para agendar?"

EJEMPLO RESPUESTA:
"Entendido. Eso tiene solución.

¿Te paso el link para agendar una llamada de 15 min y revisamos tu caso?"

MEMORIA: Si hay historial, reconoce al usuario y continúa.`,

  en: `You are PatBot, assistant at PatDilet (IA/Cloud tech consultancy).

MAIN GOAL: Schedule a FREE diagnostic consultation call.
Your job is NOT to solve everything, it's to identify needs and schedule.

RULES:
- VERY SHORT answers (2-3 lines max)
- One question at a time
- No jargon - keep it simple
- After 2-3 messages, ALWAYS propose scheduling a call
- Use bullet points with dash (-) if you need to list something

SERVICES (only mention if asked):
- AI: chatbots, automation
- Cloud: infrastructure, DevOps
- Modernization: legacy systems

IDEAL FLOW:
1. User asks → brief answer + 1 question
2. User answers → basic info + propose scheduling
3. If they ask details → "Let's define that on the call. Should I send you the scheduling link?"

EXAMPLE RESPONSE:
"Got it. That has a solution.

Want me to share the link to schedule a 15-min call to review your case?"

MEMORY: If there's history, acknowledge the user and continue.`,
};

export async function POST(request: NextRequest) {
  // Parse body once at the start
  let body: { 
    sessionId?: string; 
    message?: string; 
    language?: string; 
    history?: Array<{ role: string; content: string }> 
  };
  
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({
      success: true,
      response: "Disculpa, hubo un error. ¿Podrías repetir tu mensaje?",
    });
  }

  const { sessionId, message, language = "es", history = [] } = body;

  if (!message || !sessionId) {
    return NextResponse.json({
      success: true,
      response: language === "es"
        ? "No recibí tu mensaje. ¿Podrías repetir?"
        : "I didn't receive your message. Could you repeat?",
    });
  }

  try {
    // Build messages array with history
    const messages: Array<{ role: "user" | "assistant"; content: string }> = [
      {
        role: "assistant",
        content: SYSTEM_PROMPTS[language as "es" | "en"] || SYSTEM_PROMPTS.es,
      },
    ];

    // Add conversation history (last 8 messages for context)
    const relevantHistory = history.slice(-8);
    for (const msg of relevantHistory) {
      if (msg.role === "user" || msg.role === "assistant") {
        messages.push({
          role: msg.role as "user" | "assistant",
          content: msg.content,
        });
      }
    }

    // Add current user message
    messages.push({
      role: "user",
      content: message,
    });

    // Initialize ZAI
    const zai = await ZAI.create();

    // Get completion with retry logic
    let aiResponse: string | null = null;
    let attempts = 0;
    const maxAttempts = 2;

    while (!aiResponse && attempts < maxAttempts) {
      try {
        const completion = await zai.chat.completions.create({
          messages: messages,
          thinking: { type: "disabled" },
        });
        aiResponse = completion.choices[0]?.message?.content;
      } catch {
        attempts++;
        if (attempts >= maxAttempts) throw new Error("Max retries reached");
        await new Promise<void>(r => setTimeout(r, 500));
      }
    }

    if (!aiResponse) {
      throw new Error("No response from AI");
    }

    return NextResponse.json({
      success: true,
      response: aiResponse,
    });

  } catch (error) {
    console.error("Assistant API error:", error);
    
    // Return a friendly fallback that pushes to schedule
    const fallbacks: Record<string, string> = {
      es: "Disculpa, tuve un problema técnico. ¿Te paso el link para agendar una llamada y resolvemos tu consulta directamente?",
      en: "Sorry, I had a technical issue. Should I share the link to schedule a call and address your question directly?"
    };
    
    return NextResponse.json({
      success: true,
      response: fallbacks[language] || fallbacks.es,
    });
  }
}
