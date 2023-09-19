import { FC } from "react";

type CertificateShowProps = {
  src: string;
  alt: string;
  type: string;
};
const CertificateShow: FC<CertificateShowProps> = ({ src, alt, type }) => {
  return (
    <div className="m-10 inline-block">
      <div className="dark:text-slate-200 font-bold">{type}</div>
      <div className="lg:hover:scale-105 inline-block transition-all shadow lg:hover:shadow-lg shadow-gray-400 lg:hover:shadow-gray-300 duration-300 dark:shadow-slate-700 dark:hover:shadow-slate-800 rounded border-2 border-purple-400  dark:saturate-50 dark:hover:saturate-100">
        <img
          width={300}
          height={200}
          className="w-80"
          src={src}
          alt={alt}
          title={alt}
        />
      </div>
    </div>
  );
};

export default CertificateShow;
