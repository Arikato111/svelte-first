import Link from "next/link";

export default function Navbar() {
    return <header className="shadow sticky top-0 z-50 bg-white">
        <nav className="h-14 flex items-center px-5 max-w-[1200px] mx-auto">
            <Link href={'/'} className="font-bold">
                <div className="flex items-center">
                <img className="rounded inline-block mx-3" src="/na.svg" alt="logo" width={32} height={32} />
                Arikato111
            </div>
            </Link>
            <div className="bg-black w-[2px] h-3/6 mx-3"></div>
            <Link className="nav-link" href={"/certificates"}>Certificates</Link>
            <Link className="nav-link" href={"/projects"}>Projects</Link>
            <Link className="nav-link" href={"/about"}>About</Link>
            <Link className="nav-link" href={"/contact"}>Contact</Link>
        </nav>
    </header>
}