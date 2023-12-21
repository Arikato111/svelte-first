import type { NextApiRequest, NextApiResponse } from "next";
import Certificates from "../../../data/CertificatesData.json";
import Projects from "../../../data/ProjectsData.json";

type language = {
  id: number;
  title: string;
  level: "Strong" | "Medium" | "Little";
};

type LanguageList = language[];

const languages = <LanguageList>[
  {
    id: 0,
    title: "TypeScript",
    level: "Strong",
  },
  {
    id: 1,
    title: "JavaScript",
    level: "Strong",
  },
  {
    id: 2,
    title: "PHP",
    level: "Strong",
  },
  {
    id: 3,
    title: "Python",
    level: "Medium",
  },
  {
    id: 4,
    title: "Dart",
    level: "Little",
  },
  {
    id: 5,
    title: "Rust",
    level: "Medium",
  },
  {
    id: 6,
    title: "C",
    level: "Medium",
  },
];

const tools = [
  "React",
  "Nextjs",
  "Svelte",
  "Tailwindcss",
  "Nodejs",
  "MySQL",
  "Flutter",
  "Git",
  "bash & linux",
  "vscode",
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({
    name: "Nawasan Wisitsingkhon",
    contact: {
      github: "https://github.com/Arikato111",
      linkedin: "https://www.linkedin.com/in/nawasan/",
      youtube: "https://youtube.com/@Arikato111",
    },
    education: {
      name: "Ubon Ratchathani University",
      faculty: "Science",
      major: "information and communication technology",
    },
    skills: {
      languages,
      tools,
    },
    projects: Projects,
    certificates: Certificates,
  });
}

export function GET() {
  return Response.json({
    name: "Nawasan Wisitsingkhon",
    contact: {
      github: "https://github.com/Arikato111",
      linkedin: "https://www.linkedin.com/in/nawasan/",
      youtube: "https://youtube.com/@Arikato111",
    },
    education: {
      name: "Ubon Ratchathani University",
      faculty: "Science",
      major: "information and communication technology",
    },
    skills: {
      languages,
      tools,
    },
    projects: Projects,
    certificates: Certificates,
  });
}
