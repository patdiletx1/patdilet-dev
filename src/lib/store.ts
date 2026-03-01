import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Language, getTranslations, detectBrowserLanguage } from "@/lib/i18n";

export type UserRole = "ceo" | "cto" | "pm" | "other" | null;
export type UserChallenge = "ai" | "infrastructure" | "legacy" | "advisory" | null;
export type CompanySize = "startup" | "sme" | "enterprise" | null;

interface UserPreferences {
  role: UserRole;
  challenge: UserChallenge;
  companySize: CompanySize;
}

interface AppState {
  // Hydration state
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;

  // Language
  language: Language;
  setLanguage: (lang: Language) => void;
  t: () => ReturnType<typeof getTranslations>;

  // Onboarding
  showOnboarding: boolean;
  setShowOnboarding: (show: boolean) => void;
  onboardingComplete: boolean;
  setOnboardingComplete: (complete: boolean) => void;

  // User Preferences
  preferences: UserPreferences;
  setPreferences: (prefs: Partial<UserPreferences>) => void;

  // AI Assistant
  assistantOpen: boolean;
  setAssistantOpen: (open: boolean) => void;
  assistantMessages: Array<{ role: "user" | "assistant"; content: string }>;
  addAssistantMessage: (message: { role: "user" | "assistant"; content: string }) => void;
  clearAssistantMessages: () => void;
  assistantNeedsReset: boolean;
  setAssistantNeedsReset: (needs: boolean) => void;
  resetAssistantWithWelcome: (welcomeMessage: string) => void;
  
  // Session & returning user
  assistantSessionId: string;
  isReturningUser: boolean;
  getWelcomeMessage: () => string;

  // Recommended Service (based on preferences)
  getRecommendedService: () => string | null;
}

// Generate a unique session ID
const generateSessionId = () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Hydration state
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),

      // Language
      language: "es",
      setLanguage: (lang) => {
        const currentLang = get().language;
        if (currentLang !== lang) {
          set({ 
            language: lang,
            assistantNeedsReset: true,
          });
        }
      },
      t: () => getTranslations(get().language),

      // Onboarding
      showOnboarding: false,
      setShowOnboarding: (show) => set({ showOnboarding: show }),
      onboardingComplete: false,
      setOnboardingComplete: (complete) => set({ onboardingComplete: complete }),

      // User Preferences
      preferences: {
        role: null,
        challenge: null,
        companySize: null,
      },
      setPreferences: (prefs) =>
        set((state) => ({
          preferences: { ...state.preferences, ...prefs },
        })),

      // AI Assistant
      assistantOpen: false,
      setAssistantOpen: (open) => set({ assistantOpen: open }),
      assistantMessages: [],
      addAssistantMessage: (message) =>
        set((state) => ({
          assistantMessages: [...state.assistantMessages, message],
        })),
      clearAssistantMessages: () => set({ 
        assistantMessages: [],
        assistantSessionId: generateSessionId(),
        isReturningUser: false,
      }),
      assistantNeedsReset: false,
      setAssistantNeedsReset: (needs) => set({ assistantNeedsReset: needs }),
      resetAssistantWithWelcome: (welcomeMessage) => set({
        assistantMessages: [{ role: "assistant", content: welcomeMessage }],
        assistantNeedsReset: false,
        assistantSessionId: generateSessionId(),
      }),

      // Session & returning user
      assistantSessionId: generateSessionId(),
      isReturningUser: false,
      getWelcomeMessage: () => {
        const { language, isReturningUser, preferences } = get();
        
        if (isReturningUser) {
          // Returning user - personalized greeting
          const returnMessages = {
            es: "¡Hola de nuevo! Me acuerdo de nuestra conversación anterior. ¿En qué más puedo ayudarle?",
            en: "Hello again! I remember our previous conversation. How else can I help you today?"
          };
          return returnMessages[language];
        }
        
        // New user
        const newMessages = {
          es: "¡Hola! Soy el asistente de PatDilet. ¿En qué puedo ayudarle hoy?",
          en: "Hi! I'm the PatDilet assistant. How can I help you today?"
        };
        return newMessages[language];
      },

      // Recommended Service
      getRecommendedService: () => {
        const { challenge } = get().preferences;
        switch (challenge) {
          case "ai":
            return "ai";
          case "infrastructure":
            return "cloud";
          case "legacy":
            return "modernization";
          default:
            return null;
        }
      },
    }),
    {
      name: "patdilet-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        language: state.language,
        onboardingComplete: state.onboardingComplete,
        preferences: state.preferences,
        // Persist conversation memory
        assistantMessages: state.assistantMessages,
        assistantSessionId: state.assistantSessionId,
        isReturningUser: state.assistantMessages.length > 0,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
        
        // Detect browser language on first visit
        const stored = localStorage.getItem("patdilet-storage");
        if (!stored && state) {
          const detected = detectBrowserLanguage();
          if (detected !== state.language) {
            state.setLanguage(detected);
          }
        }
        
        // Mark as returning user if there are previous messages
        if (state?.assistantMessages && state.assistantMessages.length > 0) {
          state.isReturningUser = true;
        }
      },
    }
  )
);

// Hook to check if store is hydrated (safe for SSR)
export const useHydration = () => {
  return useAppStore((state) => state._hasHydrated);
};
