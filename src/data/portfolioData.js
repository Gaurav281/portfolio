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
      url: "https://github.com/your-github-username",
      icon: "FaGithub",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/your-linkedin-username",
      icon: "FaLinkedin",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/your-leetcode-username",
      icon: "FaCode",
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
      institution: "Gateway Institute of Engineering & Technology",
      year: "2022 – 2026",
      grade: "CGPA: 7.4",
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
      id: "ecommerce-clone",
      title: "E-Commerce Clone",
      description:
        "A full-featured e-commerce platform with product listings, cart, authentication, and payment integration.",
      category: "fullstack",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "JWT",
      ],
      github: "https://github.com/your-github/ecommerce-clone",
      live: "",
      image: "/projects/ecommerce.jpg",
    },
    {
      id: "stack-overflow-clone",
      title: "Stack Overflow Clone",
      description:
        "A Q&A platform with question posting, answering, voting system, OTP-based authentication, and multi-language support.",
      category: "fullstack",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Email OTP",
      ],
      github: "https://github.com/your-github/stackoverflow-clone",
      live: "",
      image: "/projects/stackoverflow.png",
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

  resumeUrl: "/resume.pdf", // place your resume in public folder
};

export default portfolioData;
