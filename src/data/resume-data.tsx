import {
  MonitoLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mohamad El Abror S.",
  initials: "MEA",
  location: "DKI Jakarta",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  // about:
  //   "Front End Developer focused on building products with extra attention to detail",
  about:
  "Software Engineer",
  summary:
    "As a Software Engineer, I have to maintaing and developing product and web app. I take my responsibility effectively, and working together with my solid team, I work mostly with TypeScript/Javascript, React. I have over 3 years of experience working at PT. Bussan Auto Finance and currently continuing studies at BINUS University Online majoring in Computer Science.",
  avatarUrl: "/profile.jpg",
  personalWebsiteUrl: "",
  contact: {
    email: "mohamadelabror70@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/luxamrown",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohamadelabror/",
        icon: LinkedInIcon,
      },
    ],
    tel:""
  },
  education: [
    {
      school: "BINUS University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2023",
      end: "2027",
    },
    {
      school: "Senior High School State 6 of Jakarta",
      degree: "High School Diploma in Natural Science (MIPA)",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "PT. Bussan Auto Finance",
      link: "https://baf.id",
      badges: ["Full Time", "Contract"],
      title: "Front End Engineer",
      // logo: ParabolLogo,
      start: "2022",
      end: "Now",
      description:
        "Research, innovate and develop new feature and services based on requirements, develop client side logic, implemented of REST API, slicing design from Figma design",
    }
  ],
  organization: [
    {
      company: "Bina Nusantara Computer Club (BNCC)",
      link: "https://bncc.net",
      badges: [],
      title: "Activist",
      // logo: ParabolLogo,
      start: "2023",
      end: "2025",
      description:["Bina Nusantara Computer Club (BNCC) is a computer-based student organization at Binus University. BNCC is a place for students to develop soft skills and hard skills because it is supported by several products such as IT learning courses, online media portals, software house and several IT-based events.", 
      "- Enrolled UI/UX Course",
      "- Completing back end course and contributed as a back end dev in Technology Project Member final project, develop server side logic and managing git repository",
      "- Attended soft-skills seminars and leadership training",
      "- Became a committee of Technoscape 2024 at Technology and Registration Division as a back end developer",
      "- Trainer for Front End workshop at BNCC Codesign 2024 and attended by more than 800 participants"
    ]
    }
  ],
  skills: [
    "Javascript/Typescript",
    "React",
    "Golang",
    "Laravel",
    "Flutter",
    "Rust",
    "Solidity"
  ],
  hobbies: [
    "Reading a Book",
    "Playing Musical Instrument",
    "Workout"
  ],
  projects: [
    {
      title: "BAF Website",
      techStack: ["Front End"],
      description:
        "Developing and maintaining main portal website for company employee. Contains company news, articles, policy, information, etc. Presented by PT Bussan Auto Finance.",
      // logo: MonitoLogo,
      link: {
        label: "baf.id",
        href: "https://baf.id/",
      },
    },
    {
      title: "BAF Internal Website",
      techStack: ["Front End"],
      description:
        "Developing and maintaining main website for company profile, company product information, and some services presented by PT Bussan Auto Finance.",
      // logo: MonitoLogo,
      link: {
        // label: "baf.id",
        href: "",
      },
    },
    {
      title: "Internal BAF Content Management System",
      techStack: ["Front End"],
      description:
        "Developing and maintaining a CMS website to support the company's business requirements.",
      // logo: MonitoLogo,
      // link: {
      //   // label: "baf.id",
        href: "",
      // },
    },
    {
      title: "BAF Stand Alone Web Application",
      techStack: ["Front End"],
      description:
        "Developing and maintaining standalone web applications for external business integration with PT Bussan Auto Finance services.",
      // logo: MonitoLogo,
      // link: {
      //   // label: "baf.id",
        href: "",
      // },
    },
    {
      title: "TechnoScape 2025",
      techStack: ["Lead", "Full-stack"],
      description:
        "Built the event website and supporting system infrastructure for TechnoScape 2025 by BNCC (Bina Nusantara Computer Club).",
      // logo: MonitoLogo,
      link: {
        // label: "baf.id",
        href: "",
      },
    },
  ],
} as const;
