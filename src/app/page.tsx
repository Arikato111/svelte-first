import Banner from '@/components/Banner'
import { Certificates } from '@/components/Certificates'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import { Metadata } from 'next'
import Image from 'next/image'
import { DefaultMetaTag } from '@/components/MetaTag'


export const metadata: Metadata = {
  ...(DefaultMetaTag("Home | Arikato111")),
  title: "Arikato111",

}

export default function Home() {
  return (
    <main>
      <div className='box-lg'>
        <Banner />
      </div>
      <Image className="mt-5 mb-20 object-cover h-[400px] w-[100vw]" src={"/j2.jpg"} alt='sky' width={2000} height={1000} />
      <div className='bg-gray-50'>
        <div className='box'>
          <Certificates />
        </div>
      </div>
      <div className="box">
        <Projects />
      </div>
      <div className='bg-gray-50'>
        <div className='box'>
          <Contact />
        </div>
      </div>
    </main>
  )
}
