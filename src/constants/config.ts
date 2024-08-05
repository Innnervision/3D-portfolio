type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    p: string;
    h2: string;
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Sourav Mukherjee — Portfolio",
    fullName: "Sourav Mukherjee",
    email: "souravmukherjee7991@mail.com",
  },
  hero: {
    name: "Sourav Mukherjee",
    p: ["I'm currently researching and developing innovative solutions in the fields of 3D visuals, Metaverse technologies, and AI applications."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview",
      content: `As a dedicated software developer, I specialize in TypeScript, JavaScript, and frameworks like React, Node.js, and Three.js. My current focus is on leveraging these technologies to create efficient, scalable, and user-friendly solutions.`,
    },
    experience: {
      p: "Professional Journey",
      h2: "Work Experience",
    },
    feedbacks: {
      p: "Client Testimonials",
      h2: "Testimonials",
    },
    works: {
      p: "Portfolio Highlights",
      h2: "Projects",
      content: `Explore my portfolio showcasing recent projects where I've applied my expertise in solving complex challenges and implementing cutting-edge technologies. Each project includes links to code repositories and live demos.`,
    },
  },
};
