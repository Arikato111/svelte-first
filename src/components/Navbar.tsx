"use client"
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)
    return <header className="box-lg sticky py-2 top-0 z-50 bg-transparent dark:bg-zinc-950 dark:border-zinc-600 dark:border-b dark-line">
        <nav 
        className="w-11/12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative bg-white/90 backdrop-blur-sm rounded-3xl h-14 flex flex-col md:flex-row justify-center items-center md:items-center px-5 max-w-[1200px] mx-auto">
        {/* <nav className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white/90 rounded-3xl h-14 flex flex-col md:flex-row justify-center items-center md:items-center px-5 max-w-[1200px] mx-auto"> */}
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
            <div className={`w-11/12 top-16 md:top-0 rounded-lg bg-white/95 md:bg-transparent absolute shadow-lg md:shadow-none md:relative md:shadow-none  md:w-auto ${dropdown ? "block" : "hidden md:block"}`}>
                <Link onClick={() => setDropdown(false)} className="nav-link" href={"/certificates"}>Certificates</Link>
                <Link onClick={() => setDropdown(false)} className="nav-link" href={"/projects"}>Projects</Link>
                <Link onClick={() => setDropdown(false)} className="nav-link" href={"/about"}>About</Link>
                <Link onClick={() => setDropdown(false)} className="nav-link" href={"/contacts"}>Contacts</Link>
            </div>
        </nav>
    </header>
}