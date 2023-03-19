import { FC } from "react";

type ProjectCardProps = {
  title: string;
  descript: string;
  link: string;
  source: string;
  src: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  descript,
  link,
  source,
  src,
}) => {
  return (
    <div className="img-block sm:scale-95 sm:hover:scale-100 duration-500 relative inline-block border-2 my-3 shadow-none border-purple-300 w-[320px] h-[350px] rounded-lg overflow-hidden sm:shadow-md shadow-zinc-400 dark:shadow-zinc-500 dark:bg-slate-800">
      <div className="overflow-hidden">
        <img
          className="img-hover sm:scale-125 w-full h-[200px] duration-500 object-cover"
          src={src}
          alt="project images"
        />
      </div>
      <h3 className="text-xl py-1 text-zinc-800 dark:text-white">{title}</h3>
      <div className="dark:text-white">
        <div>{descript}</div>
        <div className="bottom-0 absolute my-1 w-full">
          <a
            target="_blank"
            className="px-2 py-1 bg-purple-400 hover:bg-purple-500 border border-purple-500 text-white rounded hover:scale-105 duration-200 inline-block dark:border-white dark:bg-slate-800 dark:hover:bg-slate-700"
            href={link}
          >
            website
          </a>
          {"  "}
          <a
            target="_blank"
            className="px-2 py-1 bg-purple-400 hover:bg-purple-500 border border-purple-500 text-white rounded hover:scale-105 duration-200 inline-block dark:border-white dark:bg-slate-800 dark:hover:bg-slate-700"
            href={source}
          >
            source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
