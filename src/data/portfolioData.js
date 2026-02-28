export const portfolioData = {
  personalInfo: {
    name: "Gaurav",
    title: "MERN Stack Developer",
    email: "gauravkhatri281@gmail.com",
    location: "Sonipat, Haryana, India",
    bio: "MERN Stack Developer skilled in building dynamic and scalable web applications using React, Node.js, Express, and MongoDB. Strong in Data Structures & Algorithms, REST APIs, authentication, and performance optimization with a focus on user-centric solutions.",
    avatar: "/avatar.png", // add your photo in public folder
  },

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Gaurav281",
      icon: "FaGithub",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gaurav-khatri-v8",
      icon: "FaLinkedin",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/9rAy3ImtDx/",
      icon: "FaCode",
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
      institution: "Gateway Institute of Engineering & Technology",
      year: "2022 – 2026",
      grade: "CGPA: 7.5",
      location: "Sonipat, Haryana",
    },
  ],

  experience: [
    {
      role: "Full Stack Web Developer Intern",
      company: "Null Classes",
      period: "July 2024 – August 2024",
      description: [
        "Worked on MERN stack projects with a strong focus on clean coding practices.",
        "Implemented Data Structures and Algorithms in real-world applications.",
        "Developed a user-friendly Question & Answer platform similar to Stack Overflow.",
        "Built secure authentication, search functionality, and voting system.",
        "Handled MongoDB database design and created responsive UI using React, CSS, and JavaScript.",
      ],
    },
  ],

  services: [
    {
      title: "MERN Stack Development",
      description:
        "Building full-stack web applications using React, Node.js, Express, and MongoDB.",
      icon: "FaCode",
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive, modern, and user-friendly interfaces with React and Tailwind CSS.",
      icon: "FaReact",
    },
    {
      title: "Backend & APIs",
      description:
        "Developing secure REST APIs with authentication using JWT and OTP-based verification.",
      icon: "FaServer",
    },
    {
      title: "Database Design",
      description:
        "Designing and managing scalable MongoDB databases for real-world applications.",
      icon: "FaDatabase",
    },
  ],

  projects: [
  {
    id: "cpp-http-server",
    title: "High-Performance HTTP Web Server in C++",
    description:
      "Architected a lightweight multithreaded HTTP server from scratch using C++ and BSD sockets. Implemented thread pools, WebSocket support, and foundational WebRTC signaling workflow while applying TCP/IP networking, RAII, STL, and memory-safe design principles.",
    category: "systems",
    tech: [
      "C++",
      "Multithreading",
      "BSD Sockets",
      "TCP/IP",
      "WebSocket",
      "WebRTC",
      "STL",
      "Linux",
    ],
    github: "https://github.com/Gaurav281/http_web_server", 
    live: "",
    image: "/projects/cpp_server.jpeg",
  },
  {
    id: "twitter-platform",
    title: "Twitter – Scalable Social Media Platform",
    description:
      "Built a full-stack Twitter-like social media platform using Node.js, GraphQL, Prisma ORM, PostgreSQL, and Supabase. Implemented Google OAuth 2.0 authentication, JWT session management, Redis caching, real-time tweet interactions, and scalable frontend using React, TypeScript, and TailwindCSS.",
    category: "fullstack",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "TailwindCSS",
      "JWT",
      "Google OAuth",
    ],
    github: "https://github.com/Gaurav281/Twitter",
    live: "",
    image: "/projects/twitter.png",
  },
  {
    id: "openrouter-ai",
    title: "OpenRouter AI Integration Platform",
    description:
      "Developed a scalable backend integration layer for OpenRouter API enabling dynamic large language model routing. Implemented asynchronous request handling, structured logging, rate limiting, and extensible architecture for future AI model integrations.",
    category: "backend",
    tech: [
      "Node.js",
      "Express",
      "OpenRouter API",
      "Asynchronous Programming",
      "Rate Limiting",
      "REST APIs",
      "Logging",
    ],
    github: "https://github.com/Gaurav281/open_router",
    live: "",
    image: "/projects/open_router.png",
  },
],

  skills: [
    { name: "React.js", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Express.js", level: 75 },
    { name: "Data Structures & Algorithms", level: 80 },
    { name: "Python", level: 70 },
    { name: "C / C++", level: 70 },
    { name: "SQL", level: 65 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Git & GitHub", level: 75 },
  ],

  certifications: [
    "Mastering Data Structures & Algorithms – LinkedIn Learning",
    "React & CSS3 – LinkedIn Learning",
    "Computer Networks, OS, DBMS, OOPs – LinkedIn Learning",
    "JavaScript & Node-RED – IBM",
    "Clean Coding – IBM",
    "C Programming & Data Structures – Great Learning",
  ],

  achievements: [
    "President of Web Minds Club",
    "1st Rank in Web Wizard Competition",
    "Solved multiple problems on LeetCode",
    "Built 3+ Full Stack Projects",
  ],

  resumeUrl: "resume.pdf", // place your resume in public folder
};

export default portfolioData;
