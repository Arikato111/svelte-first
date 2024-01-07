import Link from "next/link";

export default function AboutMenu() {
    return <div className="p-3 bg-white dark:bg-zinc-950 dark:text-slate-200 dark-line rounded-lg m-3 shadow border box mx-auto">
        <ul className="flex justify-around md:justify-normal">
            <li className="mx-3"><Link href={'/about'}>Main</Link></li>
            <li className="mx-3"><Link href={'/about/questions'}>Questions</Link></li>
            <li className="mx-3"><Link href={'/about/music'}>Music</Link></li>
        </ul>
    </div>

}