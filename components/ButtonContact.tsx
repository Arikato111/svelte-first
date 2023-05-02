import { FC } from "react";

type ButtonContactInput = {
  Class?: string;
  title: string;
  Icon: FC;
};

const ButtonContact: FC<ButtonContactInput> = ({ title, Icon, Class }) => {
  return (
    <div
      className={`${Class ?? ""} duration-200 bg-purple-400 hover:bg-purple-500
  dark:bg-slate-900 text-white dark:text-slate-200
    fill-white  dark:fill-slate-200 flex justify-center 
    items-center rounded-lg border-2 py-1 px-3 font-medium
     border-purple-500 dark:border-slate-200 
     dark:hover:bg-gray-700 m-1 hover:scale-105
     shadow-md shadow-gray-300 dark:shadow-none`}
    >
      <span className="inline-block w-8 mx-1">
        <Icon />
      </span>
      <span>{title}</span>
    </div>
  );
};

export default ButtonContact;
