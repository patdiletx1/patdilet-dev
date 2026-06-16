export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  results: string[];
  gradientFrom: string;
  gradientTo: string;
  icon: string;
  isFeatured: boolean;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechItem {
  name: string;
  category: string;
}

export const projects: Project[] = [
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    tagline: "Automatiza tu comunicación con clientes vía WhatsApp",
    description: "Sistema automatizado de gestión de clientes vía WhatsApp con respuestas inteligentes, chatbots y workflow de seguimiento.",
    longDescription: "Plataforma completa de automatización WhatsApp que integra un twin digital con IA, gestor de campañas, respuestas automáticas inteligentes y un dashboard de métricas en tiempo real. Perfecto para negocios que reciben decenas o cientos de mensajes diarios y quieren responder al instante sin perder el toque humano.",
    features: [
      "Respuestas automáticas con IA contextual",
      "Twin digital que aprende de tu negocio",
      "Campañas de marketing automatizadas",
      "Dashboard con métricas y analytics",
      "Integración con WhatsApp Business API",
      "Seguimiento automatizado de leads",
    ],
    technologies: ["Python", "Twilio", "OpenAI", "MongoDB", "FastAPI", "Docker"],
    results: [
      "80% de consultas respondidas automáticamente",
      "50% más rápido en tiempo de respuesta",
      "30% aumento en conversión de leads",
    ],
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-600",
    icon: "MessageSquare",
    isFeatured: true,
    githubUrl: "https://github.com/patdilet/whatsapp-automation",
  },
  {
    slug: "data-scraper-platform",
    title: "Data Scraper Platform",
    tagline: "Extracción de datos web a escala industrial",
    description: "Plataforma de scraping distribuido que extrae datos estructurados de cientos de fuentes con Playwright y Selenium.",
    longDescription: "Arquitectura distribuida de scraping que orquesta cientos de navegadores headless para extraer datos de cualquier fuente web. Con sistema de colas, retry automático, detección de cambios y almacenamiento estructurado. Ideal para inteligencia de mercado, monitoreo de competencia y generación de leads B2B.",
    features: [
      "Scraping distribuido con colas de trabajo",
      "Rotación automática de proxies",
      "Detección inteligente de cambios",
      "Exportación a múltiples formatos",
      "Programación recurrente de tareas",
      "Panel de monitoreo en vivo",
    ],
    technologies: ["Python", "Playwright", "Selenium", "Azure", "Redis", "PostgreSQL"],
    results: [
      "10K+ registros extraídos por hora",
      "99.5% de tasa de éxito",
      "150+ fuentes monitoreadas",
    ],
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-600",
    icon: "Database",
    isFeatured: true,
    githubUrl: "https://github.com/patdilet/data-scraper",
  },
  {
    slug: "ecommerce-integration",
    title: "Ecommerce Integration",
    tagline: "Middleware que conecta tu ERP con el mundo ecommerce",
    description: "Middleware .NET que conecta ERP con múltiples plataformas de ecommerce sincronizando inventario, pedidos y envíos.",
    longDescription: "Middleware robusto en .NET que sincroniza en tiempo real tu ERP con Shopify, WooCommerce, Mercado Libre y más. Gestión centralizada de inventario, pedidos, envíos y facturación electrónica SII. Elimina los errores de entrada manual y duplica la velocidad de despacho.",
    features: [
      "Sincronización bidireccional de inventario",
      "Gestión unificada de pedidos multicanal",
      "Facturación electrónica SII automatizada",
      "Reglas de despacho inteligentes",
      "Dashboard de operaciones en tiempo real",
      "Integración con transportistas",
    ],
    technologies: [".NET", "C#", "SQL Server", "Azure", "Entity Framework", "RabbitMQ"],
    results: [
      "0 errores de inventario por sincronización",
      "2x velocidad de procesamiento de pedidos",
      "100% automatización de facturación",
    ],
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-600",
    icon: "ShoppingCart",
    isFeatured: true,
    githubUrl: "https://github.com/patdilet/ecommerce-middleware",
  },
  {
    slug: "ai-chatbot-saas",
    title: "AI Chatbot SaaS",
    tagline: "SaaS de chatbots con IA generativa para empresas",
    description: "SaaS de chatbots con IA generativa usando DeepSeek y OpenAI, con dashboard de métricas y entrenamiento personalizado.",
    longDescription: "SaaS multi-tenant de chatbots inteligentes que usa modelos de última generación (DeepSeek, OpenAI, Claude) para dar respuestas precisas y contextuales. Cada cliente entrena su bot con su propia base de conocimiento. Ideal para soporte técnico, ventas y atención al cliente 24/7.",
    features: [
      "Multi-tenant con aislamiento de datos",
      "Entrenamiento con documentos propios",
      "Dashboard de conversaciones y métricas",
      "Integración con CRM y ticketing",
      "Modelos intercambiables (DeepSeek, OpenAI, Claude)",
      "API REST para integración externa",
    ],
    technologies: ["TypeScript", "React", "Next.js", "DeepSeek", "OpenAI", "PostgreSQL"],
    results: [
      "90% de precisión en respuestas",
      "80% menos tickets de soporte",
      "Disponibilidad 24/7",
    ],
    gradientFrom: "from-orange-500",
    gradientTo: "to-rose-600",
    icon: "Bot",
    isFeatured: true,
    githubUrl: "https://github.com/patdilet/ai-chatbot-saas",
  },
  {
    slug: "whatsapp-twin",
    title: "Twin Digital WhatsApp",
    tagline: "Un clon digital tuyo que responde WhatsApp automáticamente",
    description: "Twin digital con IA que aprende de tu negocio y responde como tú lo harías en WhatsApp.",
    longDescription: "Un asistente virtual que se entrena con el historial de conversaciones, catálogo de productos y políticas de tu negocio. Responde en WhatsApp con tu mismo tono y estilo, aprende de cada interacción, y escala tu atención al cliente sin perder calidad. Incluye derivación inteligente a humano cuando es necesario.",
    features: [
      "Entrenamiento con datos de tu negocio",
      "Respuestas en tu tono y estilo",
      "Derivación inteligente a humano",
      "Catálogo de productos integrado",
      "Estadísticas de conversaciones",
      "Modo aprendizaje continuo",
    ],
    technologies: ["Python", "OpenAI", "Twilio", "MongoDB", "FastAPI", "Docker"],
    results: [
      "Responde el 85% de consultas sin intervención",
      "Clientes no distinguen entre bot y humano",
      "Atención 24/7 los 365 días",
    ],
    gradientFrom: "from-cyan-400",
    gradientTo: "to-teal-500",
    icon: "MessageSquare",
    isFeatured: true,
    githubUrl: "https://github.com/patdilet/whatsapp-twin",
  },
  {
    slug: "boleta-sii",
    title: "Boleta SII Automática",
    tagline: "Emite boletas electrónicas SII sin mover un dedo",
    description: "Sistema que emite boletas electrónicas SII automáticamente al recibir un pago.",
    longDescription: "Integración que conecta tu pasarela de pago (Flow, Khipu, Mercado Pago, Webpay) con el SII para emitir boletas electrónicas de forma totalmente automática. Cuando un cliente paga, el sistema genera timbra, envía y almacena la boleta sin intervención manual. Incluye envío automático por email y registro contable.",
    features: [
      "Conexión directa con SII",
      "Soporte múltiples pasarelas de pago",
      "Envío automático por email",
      "Registro contable integrado",
      "Anulación y nota de crédito automática",
      "Dashboard de facturación",
    ],
    technologies: [".NET", "C#", "SQL Server", "Azure Functions", "SII API"],
    results: [
      "100% de boletas emitidas en < 30 segundos",
      "0 errores de tipeo en facturación",
      "Ahorro de 20+ horas semanales",
    ],
    gradientFrom: "from-blue-500",
    gradientTo: "to-indigo-600",
    icon: "Database",
    isFeatured: true,
    githubUrl: "https://github.com/patdilet/boleta-sii",
  },
  {
    slug: "lead-scraper",
    title: "Lead Scraper Inteligente",
    tagline: "Extrae leads calificados de cualquier fuente web",
    description: "Scraper inteligente que encuentra y califica leads B2B de tu industria automáticamente.",
    longDescription: "Motor de scraping que recorre directorios web, redes sociales y sitios de tu industria para encontrar leads potenciales. Usa IA para calificar cada lead según tu perfil de cliente ideal, enriquece los datos con información pública y los ingresa directamente a tu CRM. Ahorra semanas de investigación manual.",
    features: [
      "Búsqueda por industria y ubicación",
      "Calificación automática con IA",
      "Enriquecimiento de datos (email, teléfono, redes)",
      "Integración con CRM (HubSpot, Salesforce)",
      "Exportación a CSV/Excel",
      "Programación recurrente",
    ],
    technologies: ["Python", "Playwright", "OpenAI", "PostgreSQL", "Docker", "Redis"],
    results: [
      "500+ leads calificados por día",
      "80% tasa de datos correctos",
      "Reduce investigación manual en 90%",
    ],
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-600",
    icon: "Database",
    isFeatured: true,
    githubUrl: "https://github.com/patdilet/lead-scraper",
  },
  {
    slug: "dogwatch",
    title: "DogWatch",
    tagline: "Monitoreo inteligente para mascotas con IoT",
    description: "Sistema IoT con cámaras y sensores para monitorear y cuidar a tu mascota remotamente.",
    longDescription: "Plataforma IoT que conecta cámaras, sensores de movimiento y alimentadores automáticos en una sola app. Recibe alertas en tiempo real cuando tu mascota necesita atención, programa comidas, y revisa el historial de actividad. Ideal para dueños que viajan o pasan largas horas fuera de casa.",
    features: [
      "Transmisión de video en vivo",
      "Detección de movimiento con IA",
      "Alimentación programada remota",
      "Alertas push en tiempo real",
      "Historial de actividad diario",
      "Múltiples dispositivos simultáneos",
    ],
    technologies: ["TypeScript", "React", "Node.js", "MongoDB", "WebSocket", "Raspberry Pi"],
    results: [
      "95% precisión en detección de eventos",
      "Latencia < 2 segundos en alertas",
      "1000+ mascotas monitoreadas",
    ],
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-600",
    icon: "Bot",
    isFeatured: false,
    githubUrl: "https://github.com/patdilet/dogwatch",
  },
  {
    slug: "whatsapp-misiones",
    title: "WhatsApp Misiones",
    tagline: "Campañas interactivas en WhatsApp con mecánica de juegos",
    description: "Plataforma de gamificación para WhatsApp que convierte campañas de marketing en misiones interactivas.",
    longDescription: "Sistema que transforma tus campañas de marketing en experiencias interactivas tipo 'misiones' dentro de WhatsApp. Los usuarios completan desafíos, ganan puntos y canjean recompensas - todo sin salir de la app de mensajería. Incrementa el engagement y la retención de clientes de forma radical.",
    features: [
      "Misiones interactivas en WhatsApp",
      "Sistema de puntos y recompensas",
      "Leaderboards y competencias",
      "Segmentación de audiencia",
      "Analytics de participación",
      "Integración con CRM y ecommerce",
    ],
    technologies: ["Python", "Twilio", "MongoDB", "Redis", "FastAPI", "Docker"],
    results: [
      "3x engagement comparado con email marketing",
      "60% tasa de finalización de misiones",
      "40% aumento en retention de clientes",
    ],
    gradientFrom: "from-green-400",
    gradientTo: "to-emerald-600",
    icon: "MessageSquare",
    isFeatured: false,
    githubUrl: "https://github.com/patdilet/whatsapp-misiones",
  },
  {
    slug: "factura-mbc",
    title: "Factura MBC",
    tagline: "Facturación masiva para múltiples empresas en un solo sistema",
    description: "Sistema multi-empresa de facturación electrónica con automatización de procesos contables.",
    longDescription: "Plataforma de facturación electrónica diseñada para contadores y empresas que manejan múltiples razones sociales. Emite boletas, facturas, notas de crédito y débito para todas tus empresas desde un solo lugar. Automatiza la contabilización, los reportes mensuales y la presentación de IVA ante el SII.",
    features: [
      "Multi-empresa desde un solo login",
      "Todos los tipos de documentos SII",
      "Automatización de libro de compras/ventas",
      "Reportes contables mensuales",
      "Importación/exportación masiva CSV",
      "API para integración con ERP",
    ],
    technologies: [".NET", "C#", "SQL Server", "Azure", "Blazor", "SII API"],
    results: [
      "90% menos tiempo en facturación mensual",
      "0 multas por atraso en declaraciones",
      "Gestiona 50+ empresas simultáneamente",
    ],
    gradientFrom: "from-sky-500",
    gradientTo: "to-blue-700",
    icon: "Database",
    isFeatured: false,
    githubUrl: "https://github.com/patdilet/factura-mbc",
  },
  {
    slug: "jarvis-web",
    title: "Jarvis Web",
    tagline: "Asistente web con IA para gestionar tu negocio desde el navegador",
    description: "Asistente inteligente web que automatiza tareas administrativas y operativas diarias.",
    longDescription: "Un dashboard inteligente que funciona como tu asistente personal de negocios. Redacta correos, programa reuniones, analiza reportes, busca información y ejecuta tareas administrativas - todo desde comandos en lenguaje natural. Potenciado por modelos de IA de última generación y conectado a tus herramientas de trabajo.",
    features: [
      "Comandos en lenguaje natural",
      "Automatización de tareas administrativas",
      "Análisis de reportes y documentos",
      "Integración con calendario y email",
      "Búsqueda inteligente en documentos",
      "Workflows personalizables",
    ],
    technologies: ["TypeScript", "Next.js", "React", "OpenAI", "PostgreSQL", "Docker"],
    results: [
      "5+ horas ahorradas por día",
      "95% precisión en ejecución de tareas",
      "Integración con 10+ herramientas",
    ],
    gradientFrom: "from-slate-400",
    gradientTo: "to-slate-600",
    icon: "Bot",
    isFeatured: false,
    githubUrl: "https://github.com/patdilet/jarvis-web",
  },
];

export const services: Service[] = [
  {
    id: "whatsapp-automation",
    title: "Automatización WhatsApp",
    description: "Integraciones y bots para WhatsApp Business API que automatizan atención al cliente, notificaciones y campañas. Desde $499 USD.",
    icon: "chat",
  },
  {
    id: "custom-bot",
    title: "Bot Personalizado",
    description: "Bots inteligentes con IA que conectan tus herramientas favoritas (Slack, Telegram, CRM, ERP) en flujos automáticos. Desde $799 USD.",
    icon: "robot",
  },
  {
    id: "scraper",
    title: "Scraper / Data Pipeline",
    description: "Extractores de datos web robustos con Playwright y Selenium, con limpieza, transformación y almacenamiento automatizado. Desde $999 USD.",
    icon: "database",
  },
  {
    id: "web-app",
    title: "App Web Full Stack",
    description: "Aplicaciones web modernas con React, Next.js y TypeScript. Rápidas, accesibles y escalables desde el día uno. Desde $2,499 USD.",
    icon: "monitor",
  },
  {
    id: "consulting",
    title: "Consultoría Técnica",
    description: "Asesoría en arquitectura de software, automatización de procesos y optimización de sistemas .NET y cloud. $80 USD/hora.",
    icon: "user",
  },
  {
    id: "devops",
    title: "DevOps y CI/CD",
    description: "Pipelines de integración y despliegue continuo con Docker, Azure DevOps y GitHub Actions. Infraestructura como código. Desde $1,499 USD.",
    icon: "settings",
  },
];

export const techStack: TechItem[] = [
  { name: ".NET", category: "backend" },
  { name: "C#", category: "lenguaje" },
  { name: "ASP.NET Core", category: "backend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "lenguaje" },
  { name: "Python", category: "lenguaje" },
  { name: "SQL Server", category: "base de datos" },
  { name: "MongoDB", category: "base de datos" },
  { name: "Azure", category: "cloud" },
  { name: "Docker", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "DeepSeek", category: "ia" },
  { name: "OpenAI", category: "ia" },
  { name: "Playwright", category: "herramientas" },
  { name: "Selenium", category: "herramientas" },
];
