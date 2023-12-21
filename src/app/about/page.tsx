import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About | Arikato111"
}

export default function About() {
    return <div className='frame'>
        <div className='my-10 text-center'>
            <h3 className='font-bold text-3xl sm:text-4xl  md:text-5xl'>About me</h3>
            <h4 className='texl-lg sm:text-xl md:text-2xl'>I feel lazy, so I let this page empty.</h4>
        </div>
    </div>
}

