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
  level: number;
};

export const skills: Skill[] = [
  { icon: "⚡", name: "Flutter", desc: "Pixel-perfect cross-platform apps for iOS & Android with Stacked CLI architecture.", level: 95 },
  { icon: "⚛", name: "React Native", desc: "Native mobile experiences using JavaScript with React Native ecosystem.", level: 80 },
  { icon: "🌐", name: "React / Web", desc: "Modern web applications with React, responsive design and clean UX.", level: 78 },
  { icon: "🔥", name: "Firebase", desc: "Firestore, Auth, Cloud Functions, Storage — robust serverless backend services.", level: 88 },
  { icon: "🏗", name: "Stacked CLI", desc: "Clean MVVM architecture for scalable, testable Flutter codebases.", level: 90 },
  { icon: "🎨", name: "UI / UX Design", desc: "Figma to code — crafting beautiful interfaces with attention to detail.", level: 82 },
];

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
      "A couples wellness app where dieters and personal trainers track weight, meals, and progress together. Features shared agreements, a messenger, and daily diet scheduling.",
    tags: ["Flutter", "Firebase", "Health"],
    accent: "red",
    showcase: "phones",
    images: [
      { src: "/images/ld_phone1.png", alt: "Love Diet Agreement" },
      { src: "/images/ld_phone3.png", alt: "Love Diet Messenger" },
      { src: "/images/ld_phone4.png", alt: "Love Diet Dashboard" },
    ],
  },
  {
    num: "06",
    kind: "Flutter App",
    title: "Medical Tourism",
    description:
      "A hospitality & medical tourism management platform connecting patients, case managers, and hospitals. Includes inbox, proposals, visa tracking and doctor listings.",
    tags: ["Flutter", "Firebase", "Healthcare"],
    accent: "purple",
    showcase: "phones",
    images: [
      { src: "/images/med_phone1.png", alt: "Medical Tourism Settings" },
      { src: "/images/med_phone2.png", alt: "Medical Tourism Inbox" },
      { src: "/images/med_phone3.png", alt: "Medical Tourism Hospital" },
    ],
  },
  {
    num: "07",
    kind: "Flutter App",
    title: "PPOS — Phone & PBX System",
    description:
      "A business telephony app supporting dial pad, extensions, address book, SMS, fax, reports and system management for enterprise communication workflows.",
    tags: ["Flutter", "VoIP", "Enterprise"],
    accent: "orange",
    showcase: "single",
    images: [{ src: "/images/image_original_2.png", alt: "PPOS App" }],
  },
  {
    num: "08",
    kind: "Flutter App",
    title: "Football Fanatic",
    description:
      "A football quiz and scoring game with leaderboards, global rankings, player profiles and competitive multiplayer scoring — built for passionate football fans.",
    tags: ["Flutter", "Firebase", "Gaming"],
    accent: "yellow",
    showcase: "phones",
    images: [
      { src: "/images/fb_phone1.png", alt: "Football Fanatic Leaderboard" },
      { src: "/images/fb_phone2.png", alt: "Football Fanatic Home" },
      { src: "/images/fb_phone3.png", alt: "Football Fanatic Splash" },
    ],
  },
];

export const stats = [
  { num: "8", suffix: "+", label: "Apps Shipped" },
  { num: "3", suffix: "+", label: "Years Experience" },
  { num: "Flutter", suffix: " & React", label: "Core Stack" },
  { num: "Firebase", suffix: ".", label: "Backend Services" },
];

export const highlights = [
  { label: "Primary Stack", value: "Flutter · Dart · Stacked CLI" },
  { label: "Mobile Platforms", value: "iOS · Android · React Native" },
  { label: "Backend", value: "Firebase · Firestore · Cloud Functions" },
  { label: "Web", value: "React · Next.js · TypeScript" },
  { label: "Architecture", value: "MVVM · Clean Code · REST APIs" },
  { label: "Tools", value: "Git · Figma · VS Code · Android Studio" },
];

export const navLinks = [
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
