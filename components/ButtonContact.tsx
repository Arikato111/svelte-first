import { FC } from "react";

type ButtonContactInput = {
  Class?: string;
  title: string;
  Icon: FC;
};

const ButtonContact: FC<ButtonContactInput> = ({ title, Icon, Class }) => {
  return (
    <div
      className={`${Class ?? ""} duration-300 bg-purple-600 hover:bg-purple-600/90
  dark:bg-black text-white dark:text-slate-200
    fill-white  dark:fill-slate-200 flex justify-center 
    items-center rounded-lg border-2 py-1 px-3 font-medium
     border-white dark:border-slate-200 
     dark:hover:bg-gray-700 m-1 hover:scale-105
     shadow hover:shadow-lg hover:shadow-gray-300 shadow-gray-400 dark:shadow-none`}
    >
      <span className="inline-block w-8 mx-1">
        <Icon />
      </span>
      <span>{title}</span>
    </div>
  );
};

export default ButtonContact;
