import Image from "next/image"
import AboutMeData from '../../data/AboutMe.json'

export default function About() {
    return <div className='mb-10 box bg-gray-50 rounded-lg pt-3 pb-10'>
        <div className='my-10 text-center'>
            <h3 className='font-bold text-3xl sm:text-4xl  md:text-5xl'>About me</h3>
            <h4 className='texl-lg sm:text-xl md:text-2xl'>Let's get to know me better</h4>
        </div>
        <div className="text-center">
            <Image className="shadow inline-block rounded-lg" src={"https://avatars.githubusercontent.com/u/96001130?v=4"} alt="profile" width={300} height={300} />
        </div>
        <div className="text-center my-3">
            <div className="font-bold text-lg my-4">
                ชื่อ {AboutMeData.name}
            </div>
            <div className="whitespace-normal px-3">
                {AboutMeData.detail}
            </div>
        </div>
    </div>
}

