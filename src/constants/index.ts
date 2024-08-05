import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
 
  backend,
  
  javascript,
  
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
 threejs,
  python,
  csharp,
  cpp,
  unity,
  ai,
  ml,
  arvr,
  medical,
  xr,
  generativeAI,
  aiSolutions,
  mobileProgramming,
  cbnits,
  sdlc,
  virtualInfocom,
  securityManagement,
  videoTranslator,
  unitySentimentAnalysis,
  
} from "../assets";

 export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Metaverse Developer",
    icon: xr,
  },
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "AI/ML Specialist",
    icon: ai,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "AI",
    icon: ai,
  },
  {
    name: "Machine Learning",
    icon: ml,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Senior Software Developer",
    companyName: "Mobile Programming LLC",
    icon: mobileProgramming,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Led groundbreaking AR projects across platforms, specializing in landscape applications for iOS, iPad, tablets, and Android.",
      "Utilized Google and Apple toolkits, employing native libraries for optimal AR performance.",
      "Pioneered Metaverse applications, developing cross-platform AR solutions for the web.",
      "Conducted big data research, contributing to IoT advancements and solving complex problems.",
      "Streamlined development processes through DevOps for efficient and scalable AR application deployment.",
      "Written custom AR libraries from scratch, integrating neuroscience principles to enhance user experiences.",
    ],
  },
  // {
  //   title: "Team Lead",
  //   companyName: "Webskitters Pvt Ltd",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - June 2023",
  //   points: [
  //     "Led a team of 5 programmers, 5 artists, and 3 designers, overseeing projects like RadGolf and Poker 2D/3D.",
  //     "Merged technologies such as Android Studio, Xcode, and Angular with Unity for cross-platform game development.",
  //     "Engaged in client discussions, ensuring seamless communication and project updates.",
  //     "Demonstrated expertise in IoT-based Unity projects and board/RPG game development.",
  //   ],
  // },
  {
    title: "Senior Unity Developer",
    companyName: "Cbnits",
    icon: cbnits,
    iconBg: "#383E56",
    date: "June 2022 - Jan 2023",
    points: [
      "Led a medical Metaverse project, enabling doctors to use VR headsets for remote consultations and prescriptions.",
      "Integrated IoT devices for seamless medication delivery, enhancing healthcare accessibility and patient care.",
    ],
  },
  {
    title: "Unity Engineer",
    companyName: "SDLC Corp",
    icon: sdlc,
    iconBg: "#383E56",
    date: "April 2021 - June 2022",
    points: [
      "Completed full-stack projects at Fujitsu, focusing on efficient and scalable database and backend services.",
      "Developed a 3D full-stack project for room design and modification, highlighting skills in backend technologies and Unity development.",
    ],
  },
  {
    title: "Game Developer",
    companyName: "VirtualInfoCom / ILead",
    icon: virtualInfocom,
    iconBg: "#E6DEDD",
    date: "May 2019 - March 2021",
    points: [
      "Delivered engaging lectures encompassing indie game development, networking, and architecture across various programming languages.",
      "Formed diverse and skilled teams for collaborative game development projects, fostering an environment of innovation and shared expertise.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sourav proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sourav does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sourav optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Big Data Management with AI",
    description:
      "Implementing AI solutions for big data management, enhancing data processing, storage, and retrieval. Focused on creating efficient algorithms for data analysis, helping organizations leverage their data for strategic decision-making.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "big data",
        color: "green-text-gradient",
      },
      {
        name: "data analysis",
        color: "pink-text-gradient",
      },
    ],
    image: aiSolutions,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "3D Models Using GPT",
    description:
      "Developing 3D models using GPT-3, enhancing the realism and interactivity of virtual environments. This project merges AI and 3D modeling to create advanced virtual experiences.",
    tags: [
      {
        name: "GPT-3",
        color: "blue-text-gradient",
      },
      {
        name: "3D modeling",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: generativeAI,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Security Management and Risk Analysis Using AI",
    description:
      "Utilizing AI to enhance security management and risk analysis, identifying potential threats and vulnerabilities. Developing tools for automated risk assessment, helping organizations strengthen their security posture.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "security",
        color: "green-text-gradient",
      },
      {
        name: "risk analysis",
        color: "pink-text-gradient",
      },
    ],
    image: securityManagement,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Video Translator Using Python [Completed]",
    description:
      "Developed a Python-based video translation tool, automating the translation of video content into multiple languages. This project enhances accessibility and broadens the reach of multimedia content.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "video translation",
        color: "green-text-gradient",
      },
      {
        name: "automation",
        color: "pink-text-gradient",
      },
    ],
    image: videoTranslator,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Medical Report Analysis with Python [Running]",
    description:
      "Ongoing project using Python for medical report analysis, applying machine learning algorithms to interpret medical data. Aimed at assisting healthcare professionals in diagnosing and predicting medical conditions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "medical analysis",
        color: "green-text-gradient",
      },
      {
        name: "machine learning",
        color: "pink-text-gradient",
      },
    ],
    image: medical,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Sentiment Analysis with Python in Unity Editor [Done]",
    description:
      "Integrated sentiment analysis into the Unity editor using Python, enabling real-time sentiment evaluation in game development. This project enhances the interactivity and responsiveness of game environments.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "sentiment analysis",
        color: "pink-text-gradient",
      },
    ],
    image: unitySentimentAnalysis,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "AR Real-Time Strategy Game in Unity/Vuforia [Testing Phase]",
    description:
      "Developing an augmented reality real-time strategy game using Unity and Vuforia, blending physical and virtual worlds. This project aims to create immersive and strategic gaming experiences.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "AR",
        color: "green-text-gradient",
      },
      {
        name: "Vuforia",
        color: "pink-text-gradient",
      },
    ],
    image: arvr,
    sourceCodeLink: "https://github.com/",
  },
];

// const expertise: TExpertise[] = [
//   {
//     title: "GCP/Azure/AWS Automation, Serverless, Security Advance",
//     description: "Expertise in cloud services, automation, and security. Experienced in deploying and managing serverless applications on GCP, Azure, and AWS.",
//   },
//   {
//     title: "Forensic Science",
//     description: "Applying AI and machine learning to forensic science, developing tools and techniques for digital investigations and evidence analysis.",
//   },
//   {
//     title: "Medical Neuroscience and Anatomy",
//     description: "Leveraging advanced technologies in medical neuroscience and anatomy to develop educational tools and applications for healthcare professionals.",
//   },
// ];

export {
 
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
