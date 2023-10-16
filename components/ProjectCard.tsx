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
    <div className="h-[390px] mb-5">
      <div className="img-block p-1 duration-500 relative inline-block  w-[320px] h-[390px] overflow-hidden dark:border-slate-200">
        <div className=" shadow-none overflow-hidden">
          <div className="overflow-hidden rounded-md border-2 border-purple-400 dark:border-slate-500 shadow-md shadow-gray-300 dark:shadow-gray-800">
            <img
              width={300}
              height={200}
              className="img-hover shadow-inner h-[200px] w-full object-cover"
              src={src}
              alt="project images"
            />
          </div>
          <h3 className="text-xl py-3 text-zinc-800 dark:text-white">
            <b>{title}</b>
          </h3>
          <div className="dark:text-white">
            <div className="px-3">{descript}</div>
            <div className="link-contact lg:h-0 overflow-hidden duration-500 bottom-1 absolute my-1 w-full">
              <a
                target="_blank"
                className="border-2 border-white shadow dark:shadow-none shadow-gray-400 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 inline-block px-2 hover:px-5 py-1 bg-purple-600 hover:bg-purple-600/90  text-white rounded-md  duration-300 dark:border-white dark:bg-black dark:hover:bg-slate-700"
                href={link}
              >
                website
              </a>
              {"  "}
              <a
                target="_blank"
                className="border-2 border-white shadow dark:shadow-none shadow-gray-400 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 inline-block px-2 hover:px-5 py-1 bg-purple-600 hover:bg-purple-600/90  text-white rounded-md  duration-300 dark:border-white dark:bg-black dark:hover:bg-slate-700"
                href={source}
              >
                source code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
