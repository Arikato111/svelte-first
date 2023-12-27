import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Music | Arikato111"
}

export default function MusicLayout({children}: {children: ReactNode}) {
    return children
}