export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  Backend: [
    { name: "Java", icon: "java", color: "#f89820" },
    { name: "Spring Boot", icon: "spring", color: "#6db33f" },
    { name: "Spring Security", icon: "springsecurity", color: "#6db33f" },
    { name: "Hibernate", icon: "hibernate", color: "#59666c" },
    { name: "JPA", icon: "jpa", color: "#6db33f" },
    { name: "REST APIs", icon: "api", color: "#22d3ee" },
    { name: "JWT Auth", icon: "jwt", color: "#d63aff" },
  ],
  Frontend: [
    { name: "React", icon: "react", color: "#61dafb" },
    { name: "JavaScript", icon: "js", color: "#f7df1e" },
    { name: "HTML/CSS", icon: "html", color: "#e34f26" },
    { name: "Axios", icon: "axios", color: "#5a29e4" },
  ],
  Database: [
  { name: "MySQL", icon: "mysql", color: "#4479a1" },
  { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
  { name: "MongoDB", icon: "mongodb", color: "#47a248" },
],
  "Tools & Platforms": [
    { name: "Git", icon: "git", color: "#f05032" },
    { name: "GitHub", icon: "github", color: "#ffffff" },
    { name: "Postman", icon: "postman", color: "#ff6c37" },
    { name: "Docker", icon: "docker", color: "#2496ed" },
    { name: "Linux", icon: "linux", color: "#fcc624" },
    { name: "AWS", icon: "aws", color: "#ff9900" },
  ],
  "Core Concepts": [
    { name: "OOP", icon: "oop", color: "#f59e0b" },
    { name: "DBMS", icon: "dbms", color: "#22d3ee" },
    { name: "Data Structures", icon: "ds", color: "#3b82f6" },
    { name: "SOLID Principles", icon: "solid", color: "#8b5cf6" },
    { name: "Design Patterns", icon: "patterns", color: "#22d3ee" },
    { name: "MVC Architecture", icon: "mvc", color: "#60a5fa" },
  ],
  "AI & Emerging Technologies": [
    { name: "Python", icon: "python", color: "#3776ab" },
    { name: "TensorFlow", icon: "tensorflow", color: "#ff6f00" },
    { name: "Generative AI", icon: "genai", color: "#22d3ee" },
  ],
};

export const projects = [
  {
  id: 1,
  title: "VaultEdge",
  subtitle: "Secure Digital Banking Platform",
  description:
    "Built a production-oriented full-stack banking platform with secure authentication, transaction management, and role-based access control. Designed using Spring Boot and React with a focus on scalability, security, and clean architecture principles.",
  image: "/images/vaultedge.png",
  features: [
    "JWT Authentication & OTP Verification",
    "Role-Based Access Control (RBAC)",
    "Fund Transfer & Transaction History",
    "EMI Calculator & Account Management",
    "Admin Dashboard with Analytics",
    "Spring Security Integration"
  ],

  tech: [
    "Java",
    "Spring Boot",
    "React",
    "JWT",
    "MySQL",
    "Axios",
    "Spring Security"
  ],

  color: "#22d3ee",

  github:
    "https://github.com/yagnesh-lakshman-sai/VaultEdge-Enterprise-Banking-System",

  demo: "https://vault-edge-ui.vercel.app",

  type: "Full Stack"
},
  {
    id: 2,
    title: "MedSync",
    subtitle: "Healthcare Management Microservices Platform",
    description:
      "A scalable hospital management platform built using Spring Boot microservices architecture with secure JWT authentication, API Gateway, service discovery, asynchronous notifications, and automated document generation.",
    image: "/images/medsync.png",
    features: [
      "Microservices Architecture with API Gateway & Eureka",
      "JWT Authentication and Role-Based Access Control",
      "Patient, Staff & Appointment Management APIs",
      "Document Generation using Thymeleaf + Flying Saucer",
      "Notification Service with SendGrid",
      "AWS S3 Integration for Report Storage",
      "Optimized APIs from 650ms → 220ms response time",
    ],

    tech: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Spring Security",
      "JWT",
      "MySQL",
      "Eureka",
      "API Gateway",
      "SendGrid",
      "AWS S3",
      "Thymeleaf",
    ],

    color: "#10b981",

    github: "https://github.com/yagnesh-lakshman-sai/MedSync",

    demo: null,

    type: "Microservices",
  },
  {
    id: 3,
    title: "ExpenseIQ",
    subtitle: "Expense Management Backend System",
    description:
      "A clean, layered backend system for expense management. Built with strict DTO patterns, comprehensive exception handling, and automated database seeding for reliable data integrity.",
    image: "/images/expenseiq.png",  
    features: [
      "Layered Architecture (Controller/Service/Repository)",
      "DTO Pattern Implementation",
      "Full CRUD REST APIs",
      "Category Management System",
      "Global Exception Handling",
      "Spring Data JPA + Hibernate",
      "Automated DB Seeding",
    ],
    tech: ["Java", "Spring Boot", "JPA", "Hibernate", "MySQL", "REST APIs"],
    color: "#8b5cf6",
    github: "https://github.com/yagnesh-lakshman-sai/ExpenseIQ",
    demo: null,
    type: "Backend",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Top 10 Finalist",
    subtitle: "CodeSpark India Hackathon 2025",
    description:
      "Recognized among the top 10 teams out of 363+ participants nationwide for building FreeBird, an offline emergency safety application.",
    icon: "trophy",
    stat: "363+",
    statLabel: "Teams Participated",
    color: "#f59e0b",
  },

  {
    id: 2,
    title: "Enterprise Projects",
    subtitle: "Production-Oriented Systems",
    description:
      "Designed and developed secure full-stack applications using Spring Boot, React, JWT authentication, and MySQL.",
    icon: "shield",
    stat: "3+",
    statLabel: "Major Projects",
    color: "#22d3ee",
  },

  {
    id: 3,
    title: "Industry Experience",
    subtitle: "Generative AI & ML Internships",
    description:
      "Completed internships in Generative AI and Machine Learning with practical exposure to model development and backend integrations.",
    icon: "briefcase",
    stat: "2",
    statLabel: "Internships",
    color: "#10b981",
  },

  {
    id: 4,
    title: "Professional Certifications",
    subtitle: "Java • Spring Boot • Microservices",
    description:
      "Certified in Core Java, Linux, Spring Boot, and Microservices with practical exposure to scalable backend systems.",
    icon: "certificate",
    stat: "4+",
    statLabel: "Certifications",
    color: "#8b5cf6",
  },

  // {
  //   id: 5,
  //   title: "Problem Solving",
  //   subtitle: "LeetCode • CodeChef",
  //   description:
  //     "Practicing DSA and competitive programming with focus on arrays, trees, graphs, dynamic programming, and interview preparation.",
  //   icon: "code",
  //   stat: "200+",
  //   statLabel: "Problems Solved",
  //   color: "#3b82f6",
  // },
];

export const experiences = [
  {
    id: 1,
    role: "Generative AI Intern",
    company: "Codegnan",
    period: "2025",
    duration: "3 Months",
    description:
      "Worked on prompt engineering, AI integrations, and workflow automation while gaining exposure to REST APIs and modern software development practices.",
    highlights: [
      "Prompt Engineering",
      "REST API Integration",
      "Workflow Automation",
    ],
    color: "#22d3ee",
  },

  {
    id: 2,
    role: "Machine Learning Intern",
    company: "SkillDzire",
    period: "2025",
    duration: "2 Months",
    description:
      "Built machine learning solutions using Python and TensorFlow with focus on data preprocessing, model training, and performance evaluation.",
    highlights: [
      "TensorFlow Models",
      "Data Preprocessing",
      "Model Evaluation",
    ],
    color: "#8b5cf6",
  },

  {
  id: 3,
  role: "Java Backend Developer",
  company: "VaultEdge (Personal Project)",
  period: "2025",
  duration: "3 Months",
  description:
    "Built a production-oriented digital banking platform using Spring Boot and React with secure authentication, transaction management, and scalable backend architecture.",
  highlights: [
    "Built 35+ REST APIs",
    "JWT Authentication & RBAC",
    "Fund Transfer & EMI Module",
    "Spring Security Integration",
  ],
  color: "#10b981",
},

{
  id: 4,
  role: "Java Microservices Developer",
  company: "MedSync (Personal Project)",
  period: "2026",
  duration: "2 Months",
  description:
    "Designed and implemented a scalable hospital management system using Spring Boot microservices architecture with secure communication and cloud integrations.",
  highlights: [
    "API Gateway & Eureka Discovery",
    "JWT Security & Role-Based Access",
    "AWS S3 Document Storage",
    "SendGrid Notification Service",
  ],
  color: "#f59e0b",
},
];

export const techMarquee = [
  "Java",
  "Spring Boot",
  "React",
  "MySQL",
  "JWT",
  "Hibernate",
  "Docker",
  "AWS",
  "Linux",
  "MongoDB",
  "REST APIs",
  "Spring Security",
  "Git",
  "Postman",
  "JavaScript",
  "JPA",
  "Python",
];
