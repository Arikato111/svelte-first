"use client"
import { Metadata } from "next";
import Link from "next/link";
import { TbZoomQuestion } from "react-icons/tb";

export const metadata: Metadata = {
    title: "Not found page"
}

export default function ErrorPage() {
    return <main className="flex flex-col h-[80vh] justify-center items-center">
        <TbZoomQuestion size={58} /> 
        <div className="text-4xl">Not found this page</div>
        <div><Link className="text-xl hover:underline" href={'/'}>go to home</Link></div>
    </main>
}