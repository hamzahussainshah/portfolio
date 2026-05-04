export const SITE = {
  name: "Hamza Hussain Shah",
  role: "Flutter & React Developer",
  email: "hamzahussainshaah@gmail.com",
  whatsapp: "https://wa.me/923175568197",
  github: "https://github.com/hamzahussainshah",
  linkedin: "https://www.linkedin.com/in/hamza-hussain-shah",
  url: "https://hamzahussainshah.dev",
  description:
    "Flutter developer crafting beautiful, performant cross-platform mobile apps with Stacked CLI, Firebase, React & React Native.",
} as const;

export type Skill = {
  icon: string;
  name: string;
  desc: string;
};

export type SkillGroup = {
  id: string;
  label: string;
  caption: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    label: "Mobile Development",
    caption: "Cross-platform iOS & Android — built to scale.",
    items: [
      { icon: "⚡", name: "Flutter", desc: "Pixel-perfect cross-platform apps with Stacked CLI / MVVM architecture." },
      { icon: "⚛", name: "React Native", desc: "Native iOS & Android experiences from a single JavaScript codebase." },
      { icon: "🏗", name: "Clean Architecture", desc: "MVVM, dependency injection and testable, scalable code structure." },
      { icon: "📱", name: "Native iOS / Android", desc: "Platform channels, native modules and store-ready release builds." },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Backend",
    caption: "Serverless, real-time, production-grade infrastructure.",
    items: [
      { icon: "🔥", name: "Firebase Suite", desc: "Auth, Firestore, Cloud Functions, FCM, Storage — full backend in days, not months." },
      { icon: "☁️", name: "Cloud Integrations", desc: "REST APIs, serverless functions and 3rd-party service orchestration." },
      { icon: "📡", name: "Real-time Systems", desc: "Live data sync, presence and chat using Firestore listeners & WebSockets." },
      { icon: "🧱", name: "Scalable Architecture", desc: "Backend design that handles growth without painful rewrites later." },
    ],
  },
  {
    id: "integrations",
    label: "SDKs & Integrations",
    caption: "Plug-in the services your product actually needs.",
    items: [
      { icon: "🔐", name: "Social Auth & SDKs", desc: "Google, Facebook, Apple, TikTok login & sharing flows." },
      { icon: "💳", name: "Payments", desc: "Stripe, in-app purchases (App Store / Play Billing) and subscription handling." },
      { icon: "📊", name: "Analytics", desc: "Firebase Analytics, Mixpanel — funnels, retention and event tracking." },
      { icon: "🔔", name: "Push Notifications", desc: "FCM, OneSignal — segmented campaigns and silent background pushes." },
    ],
  },
  {
    id: "ai",
    label: "AI & Modern Features",
    caption: "The features clients are actually paying for in 2026.",
    items: [
      { icon: "🤖", name: "LLM Integration", desc: "OpenAI, Anthropic Claude and Gemini APIs wired into mobile apps with streaming, function calling & memory." },
      { icon: "🗣", name: "Voice & Speech", desc: "Speech-to-text, text-to-speech and voice agents — hands-free flows users actually enjoy." },
      { icon: "🖼", name: "AI Image & Vision", desc: "Image generation, background removal, OCR and on-device vision with TensorFlow Lite / ML Kit." },
      { icon: "💬", name: "Chat & Real-time", desc: "AI chatbots, smart assistants and live messaging powered by Firestore and WebSockets." },
    ],
  },
  {
    id: "performance",
    label: "Optimization & Performance",
    caption: "Fix the slow, the broken and the tangled.",
    items: [
      { icon: "🚀", name: "Performance Tuning", desc: "Cut startup time, smooth jank, shrink bundle size, profile builds." },
      { icon: "🧹", name: "Refactoring", desc: "Untangle messy or AI-generated code into something maintainable." },
      { icon: "🐛", name: "Production Debugging", desc: "Track down crashes, race conditions and elusive prod-only bugs." },
      { icon: "📈", name: "Scalability Audits", desc: "Review architecture before traffic grows — not after it breaks." },
    ],
  },
  {
    id: "speed",
    label: "Rapid Development",
    caption: "Ship fast without shipping a mess.",
    items: [
      { icon: "⏱", name: "MVP in Weeks", desc: "From idea to App Store / Play Store in 2–6 weeks, fully functional." },
      { icon: "🤖", name: "AI-Assisted Workflow", desc: "Use AI tools to move faster — reviewed and hardened by a real engineer." },
      { icon: "🧩", name: "Prototype → Production", desc: "Take Figma designs or rough demos and turn them into shippable apps." },
      { icon: "🎨", name: "UI / UX from Figma", desc: "Pixel-perfect implementation with attention to spacing, motion and feel." },
    ],
  },
];

// Flat list kept for backwards compatibility with anything else that imports it.
export const skills: Skill[] = skillGroups.flatMap((g) => g.items);

export type ShowcaseKind = "phones" | "wide" | "single";
export type AccentKey = "teal" | "orange" | "purple" | "pink" | "red" | "yellow";

export type Project = {
  num: string;
  kind: string;
  title: string;
  description: string;
  tags: string[];
  accent: AccentKey;
  showcase: ShowcaseKind;
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    num: "01",
    kind: "Flutter App",
    title: "Munich Motor Works",
    description:
      "A premium automotive services app for booking appointments, partner management, and real-time car recovery. Clean teal UI with a rich feature set for luxury car owners.",
    tags: ["Flutter", "Firebase", "Stacked CLI"],
    accent: "teal",
    showcase: "phones",
    images: [
      { src: "/images/munich_1.jpeg", alt: "Munich Motor Works Home" },
      { src: "/images/WhatsApp_Image_2026-05-01_at_16.14.12.jpeg", alt: "Munich Motor Works Support" },
      { src: "/images/WhatsApp_Image_2026-05-01_at_16.14.13.jpeg", alt: "Munich Motor Works Menu" },
    ],
  },
  {
    num: "02",
    kind: "Flutter App",
    title: "PayPause",
    description:
      "A smart personal finance app with impulse-pause technology, salary-cycle budgeting, savings goals and SMS-based expense import. Designed to make you spend smarter.",
    tags: ["Flutter", "Firebase", "FinTech"],
    accent: "orange",
    showcase: "phones",
    images: [
      { src: "/images/WhatsApp_Image_2026-05-01_at_16.16.54.jpeg", alt: "PayPause Home" },
      { src: "/images/paypause_2.jpeg", alt: "PayPause Add Expense" },
      { src: "/images/PayPause.jpeg", alt: "PayPause Settings" },
    ],
  },
  {
    num: "03",
    kind: "Flutter App",
    title: "TouchifyMouse",
    description:
      "Turn your phone into a wireless, low-latency trackpad and keyboard for Mac & Windows. Features a full trackpad, media controls, keyboard emulation and audio mode.",
    tags: ["Flutter", "WebSocket", "Cross-platform"],
    accent: "purple",
    showcase: "wide",
    images: [
      { src: "/images/mobile-1-welcome.png", alt: "TouchifyMouse Welcome" },
      { src: "/images/mobile-3-trackpad.png", alt: "TouchifyMouse Trackpad" },
      { src: "/images/mobile-4-keyboard.png", alt: "TouchifyMouse Keyboard" },
      { src: "/images/mobile-5-media.png", alt: "TouchifyMouse Media" },
    ],
  },
  {
    num: "04",
    kind: "Flutter App",
    title: "AuditionAid",
    description:
      "An AI-powered audition management app for actors. Track auditions by category (Film, TV, Theater, Commercial), manage your calendar, and get smart scheduling assistance via voice AI.",
    tags: ["Flutter", "AI / Voice", "Firebase"],
    accent: "pink",
    showcase: "phones",
    images: [
      { src: "/images/WhatsApp_Image_2026-05-01_at_16.28.18.jpeg", alt: "AuditionAid Splash" },
      { src: "/images/WhatsApp_Image_2026-05-01_at_16.28.17.jpeg", alt: "AuditionAid Home" },
      { src: "/images/WhatsApp_Image_2026-05-01_at_16.28.16.jpeg", alt: "AuditionAid Calendar" },
    ],
  },
  {
    num: "05",
    kind: "Flutter App",
    title: "Love Diet",
    description:
      "A couples wellness app where dieters and personal trainers team up to track weight, meals and progress together. Features shared agreements, a messenger, daily logs and a partner-driven motivation system.",
    tags: ["Flutter", "Firebase", "Health"],
    accent: "red",
    showcase: "phones",
    images: [
      { src: "/images/lovediet_splash.jpeg", alt: "Love Diet splash screen" },
      { src: "/images/lovediet_agreement.jpeg", alt: "Love Diet partner agreement" },
      { src: "/images/lovediet_dashboard.jpeg", alt: "Love Diet daily log dashboard" },
    ],
  },
  {
    num: "06",
    kind: "Flutter App",
    title: "Traiwel — Medical Tourism",
    description:
      "A medical tourism platform connecting patients with hospitals and doctors abroad. Browse hospitals, view detailed profiles with categories and pricing, and message case managers — all in one app.",
    tags: ["Flutter", "Firebase", "Healthcare"],
    accent: "purple",
    showcase: "phones",
    images: [
      { src: "/images/traiwel_login.jpeg", alt: "Traiwel login screen" },
      { src: "/images/traiwel_hospitals.jpeg", alt: "Traiwel hospital search" },
      { src: "/images/traiwel_details.jpeg", alt: "Traiwel hospital details" },
    ],
  },
  {
    num: "07",
    kind: "Flutter App",
    title: "Ringtek — Phone & PBX System",
    description:
      "A business telephony app with dial pad, extensions, address book, SMS, fax and detailed call reporting. Includes a live dashboard for call traffic analytics, ring groups and system management for enterprise workflows.",
    tags: ["Flutter", "VoIP", "Enterprise"],
    accent: "orange",
    showcase: "phones",
    images: [
      { src: "/images/ringtek_dial.png", alt: "Ringtek dial pad" },
      { src: "/images/ringtek_dashboard.jpeg", alt: "Ringtek call traffic dashboard" },
      { src: "/images/ringtek_reports.jpeg", alt: "Ringtek call reports" },
    ],
  },
  {
    num: "08",
    kind: "Flutter App",
    title: "Quizler — Trivia Quiz",
    description:
      "A timed trivia quiz game with leaderboards, score tracking and a polished football-themed UI. Players answer multiple-choice questions across categories — animals, food, history and more — all under the clock.",
    tags: ["Flutter", "Firebase", "Gaming"],
    accent: "yellow",
    showcase: "phones",
    images: [
      { src: "/images/quizler_home.jpeg", alt: "Quizler home screen" },
      { src: "/images/quizler_quiz.jpeg", alt: "Quizler timed question" },
      { src: "/images/quizler_score.jpeg", alt: "Quizler score round" },
    ],
  },
];

export const stats = [
  { num: "20", suffix: "+", label: "Apps Shipped" },
  { num: "4", suffix: "+", label: "Years Experience" },
  { num: "Flutter", suffix: " & React", label: "Core Stack" },
  { num: "Firebase", suffix: " · AI", label: "Backend & Integrations" },
];

export const highlights = [
  { label: "Primary Stack", value: "Flutter · Dart · Stacked CLI" },
  { label: "Mobile Platforms", value: "iOS · Android · React Native" },
  { label: "Backend", value: "Firebase · Firestore · Cloud Functions" },
  { label: "AI Integrations", value: "OpenAI · Claude · Voice & Vision APIs" },
  { label: "Web", value: "React · Next.js · TypeScript" },
  { label: "Architecture", value: "MVVM · Clean Code · REST APIs" },
  { label: "Tools", value: "Git · Figma · VS Code · Android Studio" },
];

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export type Service = {
  icon: string;
  title: string;
  desc: string;
};

export const integrations: { label: string; group: string }[] = [
  { label: "Google Sign-In", group: "Auth" },
  { label: "Apple Sign-In", group: "Auth" },
  { label: "Facebook Login", group: "Auth" },
  { label: "TikTok Login", group: "Auth" },
  { label: "Phone OTP", group: "Auth" },
  { label: "Stripe", group: "Payments" },
  { label: "RevenueCat", group: "Payments" },
  { label: "App Store IAP", group: "Payments" },
  { label: "Play Billing", group: "Payments" },
  { label: "OpenAI", group: "AI" },
  { label: "Claude API", group: "AI" },
  { label: "Gemini", group: "AI" },
  { label: "Firebase", group: "Backend" },
  { label: "Firestore", group: "Backend" },
  { label: "Cloud Functions", group: "Backend" },
  { label: "FCM Push", group: "Engagement" },
  { label: "OneSignal", group: "Engagement" },
  { label: "Branch / Deep Links", group: "Engagement" },
  { label: "Stream Chat", group: "Real-time" },
  { label: "Agora", group: "Real-time" },
  { label: "Mixpanel", group: "Analytics" },
  { label: "Firebase Analytics", group: "Analytics" },
];

export const services: Service[] = [
  {
    icon: "💰",
    title: "App Launch & Monetization",
    desc: "Submit to App Store & Play Store, set up subscriptions and in-app purchases with RevenueCat / StoreKit / Play Billing, integrate Stripe — get your app live and earning, not stuck in review.",
  },
  {
    icon: "🛠",
    title: "Rescue & Improve Existing Apps",
    desc: "I take over half-built, AI-generated or early-stage apps and turn them into stable, shippable products. Untangle messy code, fix architecture, get back on track.",
  },
  {
    icon: "🚀",
    title: "MVP → Production-Ready",
    desc: "From Figma or rough prototype to App Store and Play Store in weeks — proper auth, analytics, payments, push notifications and a real Firebase backend.",
  },
  {
    icon: "💬",
    title: "Real-Time & Engagement",
    desc: "Live chat, video calls, group messaging, push notifications, deep links and presence — built with Firestore, WebSockets, FCM and Stream / Agora when you need to scale.",
  },
  {
    icon: "🤖",
    title: "AI Features That Actually Work",
    desc: "OpenAI / Claude / Gemini chatbots with streaming and memory, voice assistants, OCR, image generation — wired into mobile UX with proper rate-limiting, caching and cost control.",
  },
  {
    icon: "⚡",
    title: "Performance & Bug Fixes",
    desc: "Slow screens, frame drops, prod-only crashes, broken builds, failing release pipelines — I find the root cause and fix it for good, not just patch it.",
  },
];
