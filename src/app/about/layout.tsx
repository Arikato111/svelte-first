import { Metadata } from "next"
import { DefaultMetaTag } from "@/components/MetaTag"
import { ReactNode } from "react"
import AboutMenu from "./menu"

export const metadata: Metadata = {
    ...(DefaultMetaTag("About | Arikato111")),
    title: "About | Arikato111"
}

export default function AboutLayout({children}: {children: ReactNode}) {
    return <>
        <AboutMenu />
       {children}
    </>
}