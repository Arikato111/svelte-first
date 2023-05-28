import { FC } from "react";
import Link from "next/link";

type BannerProps = {
    isSwiching: boolean;
}

const Banner: FC<BannerProps> = ({ isSwiching }) => {
    return <div className='text-3xl text-center sm:text-6xl text-slate-800 dark:text-slate-200 font-medium'>
        {isSwiching ?
            (<>
                ぼくの名前は <span className="text-purple-700 use-font font-bold"
                ><Link href={'/novel'}><span>ナワサン。</span></Link></span
                ><span className="inline-block duration-300 ease-in-out transition">🌳</span>
            </>) :
            (<>
                Hello!, I&apos;m <span className="text-purple-700 use-font font-bold changename"
                ><span>Arikato111</span></span
                ><span
                    className="inline-block hover:rotate-45 duration-300 ease-in-out transition"
                >👋</span
                ></>)
        }
    </div>
}

export default Banner;