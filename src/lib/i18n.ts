export type Language = "es" | "en";

export const translations = {
  es: {
    // Navbar
    nav: {
      services: "Servicios",
      about: "Nosotros",
      cases: "Casos de Éxito",
      contact: "Contacto",
      cta: "Agendar Consultoría",
    },
    // Hero
    hero: {
      badge: "Arquitecto de Soluciones Senior",
      title: "Ingeniería de Software",
      titleHighlight: "que impulsa su crecimiento",
      subtitle: "Especialistas en transformar procesos manuales en flujos inteligentes.",
      subtitle2: "Soluciones Cloud e Inteligencia Artificial diseñadas para empresas que no pueden permitirse fallar.",
      cta: "Agendar Consultoría Diagnóstica",
      ctaSecondary: "Conocer Servicios",
      trust: "Confianza de empresas a nivel global",
      trust1: "Proyectos Internacionales",
      trust2: "Liderazgo de Equipos Remotos",
      trust3: "Arquitectura Escalable",
    },
    // Services
    services: {
      label: "Nuestros Servicios",
      title: "Pilares de ",
      titleHighlight: "Solución",
      subtitle: "Cada servicio está diseñado para resolver problemas reales de negocio, no solo implementar tecnología por implementarla.",
      card1: {
        title: "IA Generativa y Agentes",
        description: "Implementación de modelos de lenguaje para automatizar tareas, desde atención al cliente hasta análisis de datos complejos. Transformamos su operación con inteligencia artificial aplicada.",
        features: ["Chatbots Inteligentes", "Análisis Predictivo", "Automatización de Procesos"],
        cta: "Conocer más",
      },
      card2: {
        title: "Arquitectura Cloud e Infraestructura",
        description: "Diseño de sistemas resilientes y seguros que crecen de forma orgánica con la demanda del negocio. Infraestructura que escala con usted, no contra usted.",
        features: ["Multi-Cloud Strategy", "DevOps & CI/CD", "Seguridad Integrada"],
        cta: "Conocer más",
      },
      card3: {
        title: "Modernización y Transformación",
        description: "Rescate de sistemas antiguos (Legacy) para llevarlos a estándares modernos de velocidad y seguridad. Sin interrupciones, sin riesgos innecesarios.",
        features: ["Migración Progresiva", "Refactoring Seguro", "Microservicios"],
        cta: "Conocer más",
      },
    },
    // About
    about: {
      label: "El Factor Humano",
      title: "Tecnología con propósito, ",
      titleHighlight: "explicada de forma simple",
      p1: "Sabemos que detrás de cada línea de código hay una meta de negocio. Nos enfocamos en la transparencia, el trabajo colaborativo y la comunicación clara, eliminando la barrera entre el lenguaje técnico y los resultados reales.",
      p2: "Como Arquitecto de Soluciones, he liderado equipos remotos (Pods) en proyectos internacionales, siempre con un enfoque práctico: ",
      p2Highlight: "entregar valor medible",
      quote: '"La mejor arquitectura es aquella que ',
      quoteHighlight: "resuelve el problema",
      quoteEnd: ' de la forma más simple posible."',
      available: "Disponible para proyectos",
    },
    // Cases
    cases: {
      label: "Casos de Éxito",
      title: "Problemas reales, ",
      titleHighlight: "soluciones medibles",
      subtitle: "Cada proyecto cuenta una historia de transformación. Estos son algunos resultados concretos de nuestra colaboración con clientes.",
      case1: {
        category: "Visión Computacional",
        problem: "Inspecciones técnicas manuales que consumían horas de trabajo",
        solution: "Implementación de visión computacional con IA para análisis automático",
        impact: "Reducción en tiempo de proceso",
      },
      case2: {
        category: "Cloud Architecture",
        problem: "Infraestructura legacy incapaz de manejar picos de demanda",
        solution: "Migración a arquitectura cloud con auto-scaling y microservicios",
        impact: "Disponibilidad del sistema",
      },
      case3: {
        category: "IA Generativa",
        problem: "Atención al cliente saturada con tiempos de respuesta elevados",
        solution: "Agente de IA conversacional con integración de knowledge base",
        impact: "Aumento en productividad",
      },
      case4: {
        category: "DevOps",
        problem: "Procesos de deploy manuales propensos a errores",
        solution: "Pipeline CI/CD automatizado con tests y despliegue continuo",
        impact: "Reducción en tiempo de release",
      },
      cta: "¿Listo para escribir su propio caso de éxito?",
      ctaLink: "Hablemos de su proyecto",
    },
    // Contact
    contact: {
      label: "Contacto",
      title: "Construyamos ",
      titleHighlight: "juntos el futuro",
      subtitle: "La primera consulta diagnóstica es sin compromiso. Analizaremos su situación y le propondremos un camino claro hacia la solución.",
      cardTitle: "Consultoría Diagnóstica Gratuita",
      cardDesc: "Una llamada de 30 minutos para entender su desafío y proponer una estrategia inicial.",
      cardCta: "Agendar Llamada",
      email: "Email",
      availability: "Disponibilidad",
      availabilityValue: "Global - Equipos Remotos",
      trust1: "Respuesta en menos de 24 horas",
      trust2: "Sin compromiso de contratación",
      formName: "Nombre",
      formNamePlaceholder: "Su nombre",
      formEmail: "Email",
      formEmailPlaceholder: "patdiletx@gmail.com",
      formCompany: "Empresa ",
      formCompanyOptional: "(opcional)",
      formCompanyPlaceholder: "Nombre de su empresa",
      formSubject: "Asunto",
      formSubjectPlaceholder: "¿En qué podemos ayudarle?",
      formMessage: "Mensaje",
      formMessagePlaceholder: "Cuéntenos sobre su proyecto o desafío...",
      formSubmit: "Enviar Mensaje",
      formSubmitting: "Enviando...",
      formSuccess: "¡Mensaje Enviado!",
      formSuccessDesc: "Gracias por contactarnos. Te responderemos en breve.",
    },
    // Footer
    footer: {
      tagline: "Construimos el futuro de su empresa sobre bases sólidas: Inteligencia Artificial aplicada y Arquitectura Cloud escalable.",
      services: "Servicios",
      company: "Empresa",
      rights: "Todos los derechos reservados.",
      made: "Hecho con pasión por la tecnología",
    },
    // Onboarding
    onboarding: {
      title: "Bienvenido a PatDilet",
      subtitle: "Permítame hacerle algunas preguntas para personalizar su experiencia",
      q1: "¿Cuál es su rol principal?",
      q1a1: "CEO / Dueño de Negocio",
      q1a2: "CTO / Líder Técnico",
      q1a3: "Gerente de Proyecto",
      q1a4: "Otro",
      q2: "¿Qué desafío enfrenta actualmente?",
      q2a1: "Necesito automatizar procesos con IA",
      q2a2: "Mi infraestructura no escala",
      q2a3: "Tengo sistemas legacy que modernizar",
      q2a4: "Busco asesoría estratégica",
      q3: "¿Cuál es el tamaño de su organización?",
      q3a1: "Startup (1-10 personas)",
      q3a2: "PYME (11-100 personas)",
      q3a3: "Empresa Grande (100+ personas)",
      start: "Comenzar",
      next: "Siguiente",
      finish: "Ver Contenido Personalizado",
      skip: "Omitir",
    },
    // AI Assistant
    assistant: {
      title: "Asistente PatDilet",
      placeholder: "Escriba su mensaje...",
      welcome: "¡Hola! Soy el asistente de PatDilet. ¿En qué puedo ayudarle hoy?",
      thinking: "Pensando...",
      send: "Enviar",
    },
  },
  en: {
    // Navbar
    nav: {
      services: "Services",
      about: "About Us",
      cases: "Success Cases",
      contact: "Contact",
      cta: "Schedule Consultation",
    },
    // Hero
    hero: {
      badge: "Senior Solutions Architect",
      title: "Software Engineering",
      titleHighlight: "that drives your growth",
      subtitle: "Specialists in transforming manual processes into intelligent workflows.",
      subtitle2: "Cloud Solutions and Artificial Intelligence designed for companies that cannot afford to fail.",
      cta: "Schedule Diagnostic Consultation",
      ctaSecondary: "Explore Services",
      trust: "Trusted by companies worldwide",
      trust1: "International Projects",
      trust2: "Remote Team Leadership",
      trust3: "Scalable Architecture",
    },
    // Services
    services: {
      label: "Our Services",
      title: "Solution ",
      titleHighlight: "Pillars",
      subtitle: "Each service is designed to solve real business problems, not just implement technology for its own sake.",
      card1: {
        title: "Generative AI & Agents",
        description: "Implementation of language models to automate tasks, from customer service to complex data analysis. We transform your operation with applied artificial intelligence.",
        features: ["Intelligent Chatbots", "Predictive Analysis", "Process Automation"],
        cta: "Learn More",
      },
      card2: {
        title: "Cloud Architecture & Infrastructure",
        description: "Design of resilient and secure systems that grow organically with business demand. Infrastructure that scales with you, not against you.",
        features: ["Multi-Cloud Strategy", "DevOps & CI/CD", "Integrated Security"],
        cta: "Learn More",
      },
      card3: {
        title: "Modernization & Transformation",
        description: "Rescue of legacy systems to bring them to modern standards of speed and security. No interruptions, no unnecessary risks.",
        features: ["Progressive Migration", "Safe Refactoring", "Microservices"],
        cta: "Learn More",
      },
    },
    // About
    about: {
      label: "The Human Factor",
      title: "Technology with purpose, ",
      titleHighlight: "explained simply",
      p1: "We know that behind every line of code there is a business goal. We focus on transparency, collaborative work, and clear communication, eliminating the barrier between technical language and real results.",
      p2: "As a Solutions Architect, I have led remote teams (Pods) in international projects, always with a practical approach: ",
      p2Highlight: "deliver measurable value",
      quote: '"The best architecture is one that ',
      quoteHighlight: "solves the problem",
      quoteEnd: ' in the simplest way possible."',
      available: "Available for projects",
    },
    // Cases
    cases: {
      label: "Success Cases",
      title: "Real problems, ",
      titleHighlight: "measurable solutions",
      subtitle: "Each project tells a story of transformation. These are some concrete results from our collaboration with clients.",
      case1: {
        category: "Computer Vision",
        problem: "Manual technical inspections consuming hours of work",
        solution: "Implementation of computer vision with AI for automatic analysis",
        impact: "Reduction in process time",
      },
      case2: {
        category: "Cloud Architecture",
        problem: "Legacy infrastructure unable to handle demand peaks",
        solution: "Migration to cloud architecture with auto-scaling and microservices",
        impact: "System availability",
      },
      case3: {
        category: "Generative AI",
        problem: "Saturated customer service with high response times",
        solution: "Conversational AI agent with knowledge base integration",
        impact: "Productivity increase",
      },
      case4: {
        category: "DevOps",
        problem: "Manual deployment processes prone to errors",
        solution: "Automated CI/CD pipeline with tests and continuous deployment",
        impact: "Reduction in release time",
      },
      cta: "Ready to write your own success story?",
      ctaLink: "Let's talk about your project",
    },
    // Contact
    contact: {
      label: "Contact",
      title: "Let's build the future ",
      titleHighlight: "together",
      subtitle: "The first diagnostic consultation is without commitment. We will analyze your situation and propose a clear path to the solution.",
      cardTitle: "Free Diagnostic Consultation",
      cardDesc: "A 30-minute call to understand your challenge and propose an initial strategy.",
      cardCta: "Schedule Call",
      email: "Email",
      availability: "Availability",
      availabilityValue: "Global - Remote Teams",
      trust1: "Response within 24 hours",
      trust2: "No hiring commitment",
      formName: "Name",
      formNamePlaceholder: "Your name",
      formEmail: "Email",
      formEmailPlaceholder: "patdiletx@gmail.com",
      formCompany: "Company ",
      formCompanyOptional: "(optional)",
      formCompanyPlaceholder: "Your company name",
      formSubject: "Subject",
      formSubjectPlaceholder: "How can we help you?",
      formMessage: "Message",
      formMessagePlaceholder: "Tell us about your project or challenge...",
      formSubmit: "Send Message",
      formSubmitting: "Sending...",
      formSuccess: "Message Sent!",
      formSuccessDesc: "Thank you for contacting us. We will respond shortly.",
    },
    // Footer
    footer: {
      tagline: "We build the future of your company on solid foundations: Applied Artificial Intelligence and Scalable Cloud Architecture.",
      services: "Services",
      company: "Company",
      rights: "All rights reserved.",
      made: "Made with passion for technology",
    },
    // Onboarding
    onboarding: {
      title: "Welcome to PatDilet",
      subtitle: "Let me ask you a few questions to personalize your experience",
      q1: "What is your primary role?",
      q1a1: "CEO / Business Owner",
      q1a2: "CTO / Technical Leader",
      q1a3: "Project Manager",
      q1a4: "Other",
      q2: "What challenge are you currently facing?",
      q2a1: "I need to automate processes with AI",
      q2a2: "My infrastructure doesn't scale",
      q2a3: "I have legacy systems to modernize",
      q2a4: "I'm looking for strategic advisory",
      q3: "What is the size of your organization?",
      q3a1: "Startup (1-10 people)",
      q3a2: "SME (11-100 people)",
      q3a3: "Enterprise (100+ people)",
      start: "Start",
      next: "Next",
      finish: "See Personalized Content",
      skip: "Skip",
    },
    // AI Assistant
    assistant: {
      title: "PatDilet Assistant",
      placeholder: "Type your message...",
      welcome: "Hi! I'm the PatDilet assistant. How can I help you today?",
      thinking: "Thinking...",
      send: "Send",
    },
  },
} as const;

export type Translations = typeof translations.es | typeof translations.en;

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}

export function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "es";
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith("es") ? "es" : "en";
}
