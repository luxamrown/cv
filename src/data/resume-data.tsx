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
        "Develop new feature and services based on requirements, implemented of REST API, slicing from Figma design",
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
      end: "Now",
      description:["Bina Nusantara Computer Club (BNCC) is a computer-based student organization at Binus University. BNCC is a place for students to develop soft skills and hard skills because it is supported by several products such as IT learning courses, online media portals, software house and several IT-based events.", 
      "- Enrolled UI/UX Course",
      "- Contributed as a Back End dev in Technology Project Member, develop server side logic and managing git repository",
      ]
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
    {
      title: "Hackathon Website",
      techStack: ["Back End Developer"],
      description:
        "Develop a final project in the BNCC Technology Project Member program to create a website about hackathon with laravel. Contributed as back end and set up the git repository for working system",
      // logo: MonitoLogo,
      link: {
        // label: "baf.id",
        href: "https://github.com/luxamrown/tpm-be-bncc",
      },
    },
  ],
} as const;
