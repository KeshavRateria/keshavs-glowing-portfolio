// Edit this file to update the portfolio content.
export const profile = {
  name: "Keshav Rateria",
  degree: "B.Tech Computer Science and Engineering",
  institution: "VIT Vellore",
  stage: "First-year student",
  // Add real links here. Leave empty ("") to show a placeholder.
  email: "",
  github: "",
  linkedin: "",
};

export const skillGroups = [
  { title: "Programming", icon: "{ }", items: ["C++", "Python"] },
  { title: "Databases", icon: "DB", items: ["MySQL"] },
  { title: "Web Fundamentals", icon: "</>", items: ["HTML", "CSS"] },
];

export const exploring = [
  "Data Structures and Algorithms",
  "Embedded Systems",
  "Artificial Intelligence and Machine Learning",
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  status: string;
  contribution: string;
  planned?: string[];
};

export const projects: Project[] = [
  {
    title: "School Management System",
    description:
      "A Python and MySQL project designed to organise school-related information, including student records, teacher access, fees, and academic results.",
    tech: ["Python", "MySQL"],
    status: "Completed (learning project)",
    contribution: "[Editable] Describe your role and what you built.",
  },
  {
    title: "Smart Immersion Cooling System",
    description:
      "A multidisciplinary engineering project exploring ESP32-based temperature monitoring and automated cooling, with planned integration of fluid monitoring and solar power.",
    tech: ["ESP32", "C++", "Sensors", "Embedded Systems"],
    status: "In development",
    contribution: "[Editable] Describe your role and what you built.",
    planned: ["Fluid monitoring", "Solar power integration"],
  },
];

export const journey = [
  { title: "Building Foundations", text: "Learning programming fundamentals and developing problem-solving skills." },
  { title: "Exploring Projects", text: "Applying programming knowledge to practical software and engineering projects." },
  { title: "Expanding Horizons", text: "Exploring embedded systems, software development, and AI/ML." },
  { title: "What's Next", text: "Building stronger technical foundations, creating more substantial projects, and gaining practical experience." },
];

export const beyond = [
  { title: "Interests", text: "[Editable] Add the topics and fields you enjoy." },
  { title: "Hobbies", text: "[Editable] Add what you like doing away from the screen." },
  { title: "Personal Philosophy", text: "[Editable] Add a principle you try to live or learn by." },
  { title: "Curious About", text: "[Editable] Add the questions and ideas you want to explore." },
];
