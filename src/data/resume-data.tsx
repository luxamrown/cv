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
  "Front End Developer",
  summary:
    "As a Front End Developer, I have to maintaing and developing product and web app. I take my responsibility effectively, and working together with my solid team, I work mostly with TypeScript/Javascript, React. I have over 1.9 years of experience working at PT. Bussan Auto Finance and currently continuing studies at BINUS University Online majoring in Computer Science.",
  avatarUrl: "https://github-production-user-asset-6210df.s3.amazonaws.com/63460549/293489904-fed7ad9f-9f88-4fe5-ac2c-44085fc8c242.jpg",
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
      badges: ["Full Time"],
      title: "Software Developer",
      // logo: ParabolLogo,
      start: "2022",
      end: "Now",
      description:
        "Develop new features based on requirements, Implemented of REST API, Slicing from Figma design",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Golang",
    "Laravel",
  ],
  projects: [
    {
      title: "BAF Website",
      techStack: ["Front End Developer"],
      description:
        "Developing and maintaing main portal website for company employee. Contains company news, articles, policy, information, etc. Presented by PT. Bussan Auto Finance",
      // logo: MonitoLogo,
      link: {
        label: "baf.id",
        href: "https://baf.id/",
      },
    },
    {
      title: "BAF Internal Website",
      techStack: ["Front End Developer"],
      description:
        "Developing and maintaing main website for company profile, company product information, and some services presented by PT. Bussan Auto Finance",
      // logo: MonitoLogo,
      link: {
        // label: "baf.id",
        href: "",
      },
    },
    {
      title: "Internal BAF Content Management System",
      techStack: ["Front End Developer"],
      description:
        "Developing and maintaing Content Management System website for company provide business requirements",
      logo: MonitoLogo,
      // link: {
      //   // label: "baf.id",
        href: "",
      // },
    },
  ],
} as const;
