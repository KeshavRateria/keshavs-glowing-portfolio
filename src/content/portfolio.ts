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
    contribution: "Designed and implemented the application's core functionality, including role-based operations, database connectivity, and data management using Python and MySQL.",
  },
  {
    title: "Smart Immersion Cooling System",
    description:
      "A multidisciplinary engineering project exploring ESP32-based temperature monitoring and automated cooling, with planned integration of fluid monitoring and solar power.",
    tech: ["ESP32", "C++", "Sensors", "Embedded Systems"],
    status: "In development",
    contribution: " Responsible for embedded software development, including ESP32 programming, sensor integration, flow-monitoring logic, and buzzer-based safety alerts using C++ and Wokwi simulation.",
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
  { title: "Interests", text: "Exploring artificial intelligence, software development, emerging technologies, and entrepreneurship." },
  { title: "Hobbies", text: "[Editable] Add what you like doing away from the screen." },
  { title: "Personal Philosophy", text: "[Editable] Add a principle you try to live or learn by." },
  { title: "Curious About", text: "[Editable] Add the questions and ideas you want to explore." },
];

// CV: place your real PDF at public/Keshav_Rateria_CV.pdf. Until it exists,
// the CV buttons show "CV coming soon" instead of a broken download.
export const cv = { url: "/Keshav_Rateria_CV.pdf", filename: "Keshav_Rateria_CV.pdf" };

export const lookingFor = {
  intro:
    "I'm interested in opportunities that allow me to apply my programming fundamentals, strengthen my problem-solving skills, and gain practical experience by working on real-world projects.",
  areas: [
    "Software Development",
    "Web Development",
    "Data Structures and Algorithms",
    "Artificial Intelligence and Emerging Technologies",
  ],
  opportunities: [
    "Beginner-friendly internships",
    "Academic and collaborative projects",
    "Suitable beginner-level freelance projects",
    "Hackathons and collaborative learning opportunities",
  ],
  closing: "I'm eager to learn, contribute, and grow through hands-on experience.",
};
