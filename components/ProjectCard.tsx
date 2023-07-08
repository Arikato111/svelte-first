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
    <div className="h-[370px] mb-5">
      <div className="img-block sm:shadow-purple-200 sm:hover:shadow-purple-200 dark:hover:shadow-lg dark:shadow-md dark:shadow-slate-600 dark:hover:shadow-slate-800 bg-white p-1 dark:p-0 border sm:scale-95 sm:hover:scale-100 duration-500 relative inline-block  w-[320px] h-[370px] rounded-lg overflow-hidden sm:shadow sm:hover:shadow-lg dark:border-slate-200  dark:bg-slate-800">
        <div className=" shadow-none border-purple-500 rounded-lg overflow-hidden">
          <div className="overflow-hidden">
            <img
              className="img-hover sm:scale-125 w-full h-[200px] duration-500 object-cover"
              src={src}
              alt="project images"
            />
          </div>
          <h3 className="text-heading text-xl py-1 text-zinc-800 dark:text-white">
            {title}
          </h3>
          <div className="dark:text-white">
            <div>{descript}</div>
            <div className="descript-hide border-y-2 py-5 px-3 my-3 flex justify-center items-center text-center font-bold overflow-hidden">
            {title} 
            </div>
            <div className="link-contact bottom-1 absolute my-1 w-full">
              <a
                target="_blank"
                className="border-2 border-white shadow dark:shadow-none shadow-gray-400 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 inline-block px-2 hover:px-5 py-1 bg-purple-600 hover:bg-purple-600/90  text-white rounded  duration-200 dark:border-white dark:bg-slate-800 dark:hover:bg-slate-700"
                href={link}
              >
                website
              </a>
              {"  "}
              <a
                target="_blank"
                className="border-2 border-white shadow dark:shadow-none shadow-gray-400 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 inline-block px-2 hover:px-5 py-1 bg-purple-600 hover:bg-purple-600/90  text-white rounded  duration-200 dark:border-white dark:bg-slate-800 dark:hover:bg-slate-700"
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
