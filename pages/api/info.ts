// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Certificates from "@/Data/CertificatesData.json";
import Projects from "@/Data/ProjectsData.json";

type language = {
  id: number;
  title: string;
  level: string;
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
    level: "little",
  },
];

const tools = [
  {
    id: 0,
    title: "React",
  },
  {
    id: 1,
    title: "Nextjs",
  },
  {
    id: 2,
    title: "Svelte",
  },
  {
    id: 3,
    title: "Tailwindcss",
  },
  {
    id: 4,
    title: "Nodejs",
  },
  {
    id: 5,
    title: "MySQL",
  },
  {
    id: 6,
    title: "Flutter",
  },
  {
    id: 7,
    title: "Git",
  },
  {
    id: 8,
    title: "bash & linux",
  },
  {
    id: 9,
    title: "vscode",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({
    name: "Nawasan Wisitsingkhon",
    contact: {
      github: "https://github.com/Arikato111",
      linkedin: "https://www.linkedin.com/in/nawasan-wisitsingkhon/",
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
