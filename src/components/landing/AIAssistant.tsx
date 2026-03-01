"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppStore, useHydration } from "@/lib/store";
import { getTranslations } from "@/lib/i18n";

// Component to render message content with proper formatting
function MessageContent({ content }: { content: string }) {
  // Parse and render content with line breaks and bullets
  const lines = content.split('\n');
  
  return (
    <div className="whitespace-pre-wrap">
      {lines.map((line, index) => {
        // Check if line is a bullet point (starts with -)
        if (line.trim().startsWith('- ')) {
          return (
            <div key={index} className="flex items-start gap-2 my-0.5">
              <span className="text-primary mr-1">•</span>
              <span>{line.trim().substring(2)}</span>
            </div>
          );
        }
        // Regular line
        return <div key={index}>{line || '\u00A0'}</div>;
      })}
    </div>
  );
}

export function AIAssistant() {
  const {
    language,
    assistantOpen,
    setAssistantOpen,
    assistantMessages,
    addAssistantMessage,
    clearAssistantMessages,
    assistantNeedsReset,
    setAssistantNeedsReset,
    assistantSessionId,
    isReturningUser,
    getWelcomeMessage,
  } = useAppStore();

  const isHydrated = useHydration();
  const t = getTranslations(language);
  const assistant = t.assistant;

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle language change - reset chat
  useEffect(() => {
    if (assistantNeedsReset && isHydrated) {
      clearAssistantMessages();
      addAssistantMessage({
        role: "assistant",
        content: getWelcomeMessage(),
      });
      setAssistantNeedsReset(false);
    }
  }, [assistantNeedsReset, isHydrated, clearAssistantMessages, addAssistantMessage, setAssistantNeedsReset, getWelcomeMessage]);

  // Load welcome message for returning users or new users
  useEffect(() => {
    if (isHydrated && assistantOpen && assistantMessages.length === 0) {
      addAssistantMessage({
        role: "assistant",
        content: getWelcomeMessage(),
      });
    }
  }, [isHydrated, assistantOpen, assistantMessages.length, addAssistantMessage, getWelcomeMessage]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [assistantMessages]);

  // Focus input when opened
  useEffect(() => {
    if (assistantOpen) {
      inputRef.current?.focus();
    }
  }, [assistantOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    addAssistantMessage({ role: "user", content: userMessage });
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: assistantSessionId,
          message: userMessage,
          language,
          history: assistantMessages,
        }),
      });

      const data = await response.json();

      if (data.success && data.response) {
        addAssistantMessage({ role: "assistant", content: data.response });
      } else {
        addAssistantMessage({
          role: "assistant",
          content: language === "es"
            ? "Disculpa, hubo un error. Intenta de nuevo."
            : "Sorry, there was an error. Please try again.",
        });
      }
    } catch {
      addAssistantMessage({
        role: "assistant",
        content: language === "es"
          ? "Error de conexión. Intenta de nuevo."
          : "Connection error. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClose = () => {
    setAssistantOpen(false);
  };

  const handleReset = () => {
    clearAssistantMessages();
    addAssistantMessage({
      role: "assistant",
      content: language === "es"
        ? "¡Listo! Conversación reiniciada. ¿En qué puedo ayudarte?"
        : "Done! Conversation reset. How can I help you?",
    });
  };

  // Don't render until hydrated to avoid SSR mismatch
  if (!isHydrated) return null;

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!assistantOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setAssistantOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg flex items-center justify-center group"
          >
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
            {isReturningUser && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">!</span>
              </span>
            )}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-ping opacity-20" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {assistantOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-100px)] glass border border-border/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {assistant.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs text-muted-foreground">
                      {isReturningUser 
                        ? (language === "es" ? "Te recuerdo" : "I remember you")
                        : "Online"
                      }
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleReset}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  title={language === "es" ? "Nueva conversación" : "New conversation"}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {assistantMessages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] px-3 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-secondary/80 text-foreground rounded-bl-none"
                    }`}
                  >
                    <MessageContent content={msg.content} />
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <div className="bg-secondary/80 px-3 py-2.5 rounded-xl rounded-bl-none">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/30">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={assistant.placeholder}
                  disabled={isLoading}
                  className="flex-1 bg-secondary/50 border-border/50 focus:border-primary/50"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
