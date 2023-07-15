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
      <div className="inline-block transition-all duration-500">
        <img
          className="w-80 shadow lg:hover:shadow-lg shadow-gray-400 lg:hover:shadow-gray-300 hover:scale-105 duration-300 dark:shadow-slate-600   rounded border-2 border-purple-400"
          src={src}
          alt={alt}
          title={alt}
        />
      </div>
    </div>
  );
};

export default CertificateShow;
