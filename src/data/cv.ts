export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "facebook" | "stack-overflow" | "linkedin" | "mail" | "flickr";
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
};

export type EducationEntry = {
  school: string;
  degree: string;
  field?: string;
  gpa?: string;
  period: string;
};

export type Skill = {
  category: string;
  items: string[];
};

export type Project = {
  name: string;
  org: string;
  meta: string;
  role: string;
  task: string;
  tech: string;
  period: string;
  link?: { label: string; href: string }[];
  failed?: boolean;
};

export type Highlight = {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
};

export type Interest = {
  title: string;
  description?: string;
  link?: string;
};

export const profile = {
  firstName: "Phat",
  lastName: "Huynh",
  title: "Fullstack Developer",
  tagline: "Backend-leaning fullstack engineer — .NET, TypeScript, microservices, cloud.",
  phone: "(+84) 839 29 10 95",
  email: "skordesign@outlook.com",
  location: "Vietnam",
  initials: "PH",
  avatar: "/profile.png",
  lastUpdated: "May 2026",
  summary: [
    "Backend: .NET, NodeTS (TypeScript)",
    "DevTools: Docker, Kubernetes, CI/CD",
    "Web Frontend: Blazor WebAssembly, Angular (2+), React",
    "Mobile: Flutter, Xamarin",
    "Other: Tensorflow, Firebase, Microservices, RabbitMQ, gRPC, AWS",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/skordesign", icon: "github" },
    { label: "Facebook", href: "https://facebook.com/skordesign", icon: "facebook" },
    { label: "Flickr", href: "https://flickr.com/skoraphy", icon: "flickr" },
    { label: "Stack Overflow", href: "https://stackoverflow.com/users/12083327/phat-huynh", icon: "stack-overflow" },
  ] satisfies SocialLink[],
  nuget: "https://www.nuget.org/packages?q=skordesign",
} as const;

export const experience: Experience[] = [
  {
    title: ".NET Tech Lead",
    company: "Beetech Solution",
    period: "Oct 2022 – Present",
    description:
      "Design and develop the Hegg gamification platform (.NET 7+, PostgreSQL, nginx, CentOS, Angular).",
    current: true,
  },
  {
    title: ".NET Tech Lead",
    company: "Bitto Solution",
    period: "Oct 2021 – Oct 2022",
    description:
      "Designed software architecture and built core services (.NET 7, PostgreSQL, gRPC, Dapr). Microservices on AWS (EKS, ECR, CodeCommit).",
  },
  {
    title: ".NET Developer",
    company: "Tekcent Vietnam",
    period: "Jul 2019 – Oct 2021",
    description:
      "Developed mobile social apps (Xamarin). R&D on Sitecore-integrated Flutter apps, Microsoft OCR customization (ReactJS, Azure), and mobile CI/CD (Fastlane, Flutter).",
  },
  {
    title: ".NET Developer",
    company: "Robert Bosch Vietnam Company Limited",
    period: "Dec 2017 – Jul 2019",
    description: "Built .NET desktop (WPF), web (AngularJS), and mobile (Xamarin) applications.",
  },
  {
    title: "NodeJS & Qt Developer",
    company: "Beetech Solutions",
    period: "Apr 2018 – Dec 2018",
    description:
      "Built an API and management system for a pet-shop using NodeTS (TypeScript). Built Linux ARM software running on Jetson TX2 using C++.",
  },
];

export const education: EducationEntry[] = [
  {
    school: "HUTECH University",
    degree: "Software Engineer",
    field: "Software Engineering",
    gpa: "2.76 / 4",
    period: "Aug 2013 – Jul 2017",
  },
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["C#", "TypeScript", "Dart", "JavaScript", "C++", "Python"],
  },
  {
    category: "Frameworks & SDKs",
    items: [".NET Core / 7+", "ASP.NET", "Blazor", "Angular", "React", "Xamarin", "Flutter", "Electron", "NestJS"],
  },
  {
    category: "Data & Infra",
    items: ["PostgreSQL", "MySQL", "MSSQL", "Redis", "Docker", "Kubernetes", "nginx", "Prometheus", "gRPC", "RabbitMQ"],
  },
  {
    category: "Cloud",
    items: ["AWS (EKS / ECR / S3)", "Azure (Media / Cognitive / IoT Edge)", "Firebase", "Google Cloud", "Dapr"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Visual Studio", "VS Code", "Ubuntu / CentOS"],
  },
];

export const workedOn: string[] = [
  "Angular with TypeScript — Redux, MVVM, Messaging patterns, RxJS",
  ".NET Core MVC, Razor Pages, Blazor, .NET gRPC",
  "Flutter with Dart",
  "Microservices with RabbitMQ — built the library myself",
  "Deploying .NET Core + Angular to Linux (Google Cloud VPS)",
  "HTML, CSS, SCSS",
  "MVC experience but prefer SPA — Angular + .NET Core API",
  "Electron — solid for desktop wrappers",
  "NodeTS, Express, NestJS, Handlebars (~1 month exploration)",
];

export const projects: Project[] = [
  // Global Cybersoft
  {
    name: "SCADA — Train Control System",
    org: "Global Cybersoft (Vietnam) LTD.",
    meta: ".NET Desktop · 8 members",
    role: "Developer",
    task: "Tool to import/export XLSX↔CSV and CSV↔Database.",
    tech: "WPF, C#, Visual Studio, MSSQL",
    period: "Apr 2017 – Jul 2017 (4 mo)",
  },
  // Bosch
  {
    name: "BPT — Business Planning Tools",
    org: "Robert Bosch Vietnam",
    meta: ".NET Web · 2 members",
    role: "Developer (Support)",
    task: "Maintain functions and fix bugs.",
    tech: "HTML, CSS, Bootstrap 4, C#, WebAPI, AngularJS, jQuery",
    period: "Dec 2017 – Jan 2018 (2 mo)",
  },
  {
    name: "Nobel — Database Management & Report Printing",
    org: "Robert Bosch Vietnam",
    meta: ".NET Desktop · 12 members",
    role: "Developer (Core)",
    task: "Implement functions, design UI.",
    tech: "WPF, XAML, Dapper, Autofac, Caliburn.Micro",
    period: "Feb 2018 – May 2018 (4 mo)",
  },
  {
    name: "Avaya — Medcom Mobile (proposal)",
    org: "Robert Bosch Vietnam",
    meta: "Xamarin · solo",
    role: "Developer (Core)",
    task: "Built POC Xamarin app — earned 200,000 USD proposal for the company.",
    tech: "Xamarin, XAML, Azure Cloud Messaging, Caliburn.Micro, .NET Standard",
    period: "Jun 2018 (1 mo)",
  },
  {
    name: "PVDatabase — Database Management & Security System",
    org: "Robert Bosch Vietnam",
    meta: ".NET Desktop · 5 members",
    role: "Developer (Core)",
    task: "Implement functions, design UI, integrate TCU.",
    tech: "DevExpress, WPF, Autofac, Dapper, WebAPI, .NET Core, TCU Device",
    period: "Jul 2018 – Mar 2019 (9 mo)",
  },
  // Beetech (early)
  {
    name: "Pet84 — Petshop Mobile + Backoffice",
    org: "Beetech Solution",
    meta: "NodeTS backend, React Native mobile · 2 members",
    role: "Backend Developer",
    task: "Built management system and API for the mobile app.",
    tech: "TypeScript, Node, Express, TypeORM, MySQL, Firebase Cloud Messaging",
    period: "Apr 2018 – Jul 2018 (4 mo)",
    link: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.beetech.pet84.android&hl=en_US" },
      { label: "App Store", href: "https://itunes.apple.com/us/app/pet84-com/id1439685727?mt=8" },
    ],
  },
  {
    name: "ScanScope — Linux software for Jetson TX2",
    org: "Beetech Solution",
    meta: "Qt · 2 members",
    role: "Developer",
    task: "Implemented functions and UI for embedded device.",
    tech: "C++, Qt, Linux, SQLite",
    period: "Jul 2018 – Dec 2018 (6 mo)",
  },
  // Tekcent
  {
    name: "Taikoo Social — Hong Kong Social App",
    org: "Tekcent",
    meta: "Xamarin Forms · 4 members",
    role: "Xamarin Developer",
    task: "Implemented UI, integrated to backend, built custom controls and plugins, wired up Azure services.",
    tech: "Xamarin Forms / Android, Azure Media, Azure Cognitive Services (Form Recognizer), Azure IoT Edge",
    period: "from Jul 2019",
  },
  {
    name: "OCR Research",
    org: "Tekcent",
    meta: "OCR Engine · solo",
    role: "R&D Engineer",
    task: "POC using Tensorflow (invoice detection), OpenCV (alignment), Tesseract (text extraction).",
    tech: "Tensorflow, Google Colab, OpenCV, Python, Tesseract",
    period: "from Mar 2021",
  },
  // Bitto
  {
    name: "Popeyes — F&B System",
    org: "Bitto Solution",
    meta: "Backend Microservices · 4 members",
    role: "Team Leader",
    task: "Designed system architecture and implemented core functions.",
    tech: ".NET 7, Redis Pub/Sub, Dapr, K8s, Docker, PostgreSQL, EKS, ECR, S3",
    period: "Jan 2022 – Jan 2023",
  },
  {
    name: "VMStyle — E-commerce System",
    org: "Bitto Solution",
    meta: "Backend Microservices · 3 members",
    role: "Team Leader",
    task: "Designed system architecture and implemented core functions.",
    tech: ".NET 6, Redis Pub/Sub, Background Hosted Services, IIS, PostgreSQL",
    period: "Feb 2022 – Jul 2022",
  },
  // Freelance
  {
    name: "Extrim — Shoes Care Web & Backoffice",
    org: "Freelance",
    meta: ".NET Web · solo",
    role: "Fullstack Developer",
    task: "Built management system and website for the client.",
    tech: ".NET Core, AngularJS, Bootstrap 4, MySQL, Ubuntu, nginx",
    period: "Jan 2019 (1 week)",
  },
  {
    name: "KAI Coffee — Backend",
    org: "Freelance",
    meta: ".NET Core REST API · solo",
    role: "Backend Developer",
    task: "Built backend for a mobile app.",
    tech: ".NET Core, MySQL, Ubuntu, nginx, iPOS.vn, eSMS",
    period: "Jun 2020 – Jul 2020 (2 mo)",
  },
  {
    name: "CSET — Tensorflow image recognition",
    org: "Freelance",
    meta: "Tensorflow on Flutter · solo",
    role: "R&D",
    task: "Retrain object detection model in Colab, integrate with Flutter mobile app.",
    tech: "Colab, Tensorflow, Flutter",
    period: "May 2020 (1 mo)",
    failed: true,
  },
  // Open Source
  {
    name: "Skor.UI — Reusable Xamarin Controls",
    org: "Open Source",
    meta: "Xamarin · me + community",
    role: "Developer",
    task: "Designed and built reusable UI controls for Xamarin.Forms.",
    tech: "Xamarin.Forms / Android / iOS, .NET Standard",
    period: "Ongoing",
    link: [{ label: "GitHub", href: "https://github.com/skordesign/SKOR.UI" }],
  },
];

// Placeholder — user will fill in post-2023 work
export const highlights: Highlight[] = [
  {
    title: "Add a highlight here",
    description:
      "Recent shipped work, OSS contributions, talks, or notable side-projects since the old CV (Sept 2023). Edit src/data/cv.ts to fill this in.",
    tags: ["TODO"],
  },
];

export const interests: Interest[] = [
  {
    title: "Learning Unreal Engine 5",
    link: "https://www.unrealengine.com/en-US/unreal-engine-5",
  },
];
