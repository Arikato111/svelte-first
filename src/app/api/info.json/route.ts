import Certificates from "../../../data/CertificatesData.json";
import Projects from "../../../data/ProjectsData.json";
import AboutMe from "../../../data/AboutMe.json";

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
export function GET() {
  return Response.json({
    ...AboutMe,
    skills: {
      languages,
      tools,
    },
    projects: Projects,
    certificates: Certificates,
  });
}
