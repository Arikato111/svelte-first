"use client"
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)
    return <header>
        <nav>
            <div className="h-full md:h-auto">
                <Link href={'/'} className="h-14 md:h-auto flex font-bold" onClick={() => setDropdown(false)}>
                    <div className="flex items-center dark:text-white">
                        <img className="rounded inline-block mx-3 dark:border-white dark:border-2" src="/na.svg" alt="logo" width={32} height={32} />
                        Arikato111
                    </div>
                </Link>
            </div>
            <button className="md:hidden flex absolute top-0 right-0 p-3" onClick={() => setDropdown(!dropdown)}><MdMenu className="dark:fill-white" size={32} /></button>
            <div className="bg-black dark:bg-slate-200 w-[2px] h-3/6 mx-3 hidden md:block"></div>
            <div className={`w-11/12 top-16 md:top-0 rounded-lg bg-white/95 dark:bg-black/95 dark:border dark:md:border-none md:bg-transparent absolute shadow-lg md:shadow-none md:relative md:shadow-none  md:w-auto ${dropdown ? "block" : "hidden md:block"}`}>
                <Link onClick={() => setDropdown(false)} className="nav-link" href={"/certificates"}>Certificates</Link>
                <Link onClick={() => setDropdown(false)} className="nav-link" href={"/projects"}>Projects</Link>
                <Link onClick={() => setDropdown(false)} className="nav-link" href={"/about"}>About</Link>
                <Link onClick={() => setDropdown(false)} className="nav-link" href={"/contacts"}>Contacts</Link>
            </div>
        </nav>
    </header>
}