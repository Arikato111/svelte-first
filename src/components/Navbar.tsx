"use client"
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)
    return <header className="shadow sticky top-0 z-50 bg-white dark:bg-zinc-950 dark:border-zinc-300 dark:border-b dark-line">
        <nav className="h-14 flex flex-col md:flex-row items-start md:items-center px-5 max-w-[1200px] mx-auto">
            <div className="h-full md:h-auto">
                <Link href={'/'} className="h-14 md:h-auto flex font-bold"  onClick={() => setDropdown(false)}>
                    <div className="flex items-center dark:text-white">
                        <img className="rounded inline-block mx-3 dark:border-white dark:border-2" src="/na.svg" alt="logo" width={32} height={32} />
                        Arikato111
                    </div>
                </Link>
            </div>
            <button className="md:hidden absolute top-0 right-0 p-3" onClick={() => setDropdown(!dropdown)}><MdMenu className="dark:fill-white" size={32} /></button>
            <div className="bg-black dark:bg-slate-200 w-[2px] h-3/6 mx-3 hidden md:block"></div>
            <div className={`w-full shadow md:shadow-none bg-white dark:bg-black md:w-auto ${dropdown ? "block": "hidden md:block"}`}>
                <Link  onClick={() => setDropdown(false)} className="nav-link" href={"/certificates"}>Certificates</Link>
                <Link  onClick={() => setDropdown(false)} className="nav-link" href={"/projects"}>Projects</Link>
                <Link  onClick={() => setDropdown(false)}    className="nav-link" href={"/about"}>About</Link>
                <Link  onClick={() => setDropdown(false)} className="nav-link" href={"/contacts"}>Contacts</Link>
            </div>
        </nav>
    </header>
}