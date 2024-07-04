// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Certificates from "@/Data/CertificatesData.json";
import Projects from "@/Data/ProjectsData.json";
import AboutMe from "@/Data/AboutMe.json";

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
    ...AboutMe,
    skills: {
      languages,
      tools,
    },
    projects: Projects,
    certificates: Certificates,
  });
}
