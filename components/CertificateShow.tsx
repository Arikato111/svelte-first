import { FC } from "react";

type CertificateShowProps = {
    src: string;
    alt: string;
    type: string;
}
const CertificateShow: FC<CertificateShowProps> = ({ src, alt, type }) => {
    return <div className="m-10 inline-block">
        <span className="dark:text-slate-200 font-bold">{type}</span>
        {/* <Atropos
            class="my-atropos shadow-lg hover:shadow-none  hidden shadow-slate-400 dark:shadow-slate-600  lg:inline-block lg:hover:scale-125 transition-all duration-500"
        >
            <img
                class="w-80 hidden lg:inline-block rounded-lg border-2 border-purple-400"
                {src}
                {alt}
                title={alt}
            />
        </Atropos> */}
        <div className="inline-block transition-all duration-500">
            <img
                className="w-80 shadow-lg shadow-slate-400 dark:shadow-slate-600   rounded-lg border-2 border-purple-400"
                src={src}
                alt={alt}
                title={alt}
            />
        </div>
    </div>
}

export default CertificateShow;