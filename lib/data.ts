export const personalInfo = {
  name: "Era Trivedi",
  title: "Full-Stack Developer & AI Enthusiast",
  tagline: "Building intelligent, scalable applications that solve real-world problems.",
  email: "eratrivedi2002@gmail.com",
  phone: "+91-9140506453",
  github: "https://github.com/Misaa20",
  linkedin: "https://www.linkedin.com/in/era-trivedi-87b091248",
  leetcode: "https://leetcode.com/u/Era02/",
  location: "India",
};

export const bio = `I'm a Computer Science Engineering student at Chandigarh University with a passion for building full-stack applications powered by AI and machine learning. I specialize in the MERN stack and have hands-on experience integrating NLP models, building intelligent systems, and creating seamless user experiences.

When I'm not coding, I lead technical communities, organize hackathons, and continuously push my problem-solving skills on LeetCode.`;

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "Chandigarh University",
  location: "Mohali, Punjab",
  duration: "Aug 2022 – Present",
  cgpa: "8.14 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Full Stack Development",
    "Computer Networks",
    "Operating Systems",
    "Database Management Systems",
    "Distributed Systems",
    "Object Oriented Programming",
  ],
};

export const skills = {
  languages: ["C", "C++", "Java", "Python", "JavaScript (ES6)", "TypeScript"],
  frameworks: [
    "React.js",
    "Node.js",
    "Express.js",
    "Redux",
    "Tailwind CSS",
    "NLTK",
    "Hugging Face Transformers",
  ],
  databases: ["MongoDB", "MySQL", "PostgreSQL"],
  tools: ["AWS", "Docker", "Git", "Linux", "Postman"],
};

export const projects = [
  {
    title: "Job Match",
    subtitle: "AI-Powered Job Portal",
    description:
      "A full-stack AI-driven platform that revolutionizes job searching through intelligent resume parsing, automated skill extraction, and smart job matching algorithms.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    highlights: [
      "Built intelligent resume parsing with automated skill extraction",
      "Implemented JWT-based authentication with role-based access control",
      "Designed scalable dashboards with job filtering and match scoring",
      "Created end-to-end application tracking system",
    ],
    github: "https://job-match-uxvl.vercel.app",
  },
  {
    title: "Mental Health Web App",
    subtitle: "AI-Assisted Wellness Platform",
    description:
      "An AI-powered mental wellness system that helps users track their emotional health through secure journaling, mood analysis, and personalized recommendations.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "NLP", "Hugging Face Transformers"],
    highlights: [
      "Integrated Hugging Face Transformer models for sentiment analysis",
      "Built secure journaling system with emotion detection",
      "Designed RESTful APIs and data-driven dashboards",
      "Implemented personalized coping recommendations based on mood patterns",
    ],
    github: "https://github.com/Misaa20/mental-health-web-app",
  },
  {
    title: "MoneyTrail",
    subtitle: "Personal Finance Management System",
    description:
      "A comprehensive full-stack finance application for real-time income and expense tracking with interactive visualizations and actionable financial insights.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    highlights: [
      "Built real-time income and expense tracking system",
      "Designed secure REST APIs with authentication and validation",
      "Implemented interactive data visualizations for financial insights",
      "Created intuitive dashboard for financial management",
    ],
    github: "https://github.com/Misaa20/Expense-Tracker",
  },
];

export const experience = [
  {
    type: "work",
    title: "NLP and Web Scraping Training",
    organization: "Chandigarh University",
    duration: "Jun 2024 – Jul 2024",
    description:
      "Intensive in-house training focused on natural language processing and data extraction techniques.",
    highlights: [
      "Designed Python-based data pipelines to scrape, preprocess, and analyze large-scale textual data",
      "Implemented BeautifulSoup, Requests, and Regex for structured data extraction",
      "Performed text cleaning, normalization, and preprocessing to support NLP workflows",
    ],
  },
  {
    type: "leadership",
    title: "Assistant Manager",
    organization: "Hack-Tech Community",
    duration: "Jul 2024 – Dec 2024",
    description:
      "Led technical initiatives and community building for one of the largest tech communities on campus.",
    highlights: [
      "Led technical events, hackathons, and team coordination for a 500+ member community",
      "Mentored junior members and organized skill-building workshops",
    ],
  },
  {
    type: "leadership",
    title: "Class Representative",
    organization: "Chandigarh University",
    duration: "Aug 2022 – Apr 2025",
    description: "Served as the primary liaison between students and faculty.",
    highlights: [
      "Acted as liaison between faculty and students, ensuring effective communication",
      "Resolved academic issues and facilitated smooth class operations",
    ],
  },
];

export const achievements = [
  {
    title: "200+ DSA Problems Solved",
    description: "Consistent problem solver on LeetCode, focusing on algorithms and data structures",
    link: "https://leetcode.com/u/Era02/",
  },
  {
    title: "NPTEL Certified – Cloud Computing",
    description: "Certification from IIT Kharagpur covering cloud infrastructure and services",
    date: "Jan 2025",
  },
  {
    title: "IBM Certified – Relational Databases",
    description: "Coursera certification covering RDBMS fundamentals and SQL",
    date: "Mar 2024",
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
];
