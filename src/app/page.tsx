import Banner from '@/components/Banner'
import { Certificates } from '@/components/Certificates'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import { Metadata } from 'next'
import Image from 'next/image'
import { DefaultMetaTag } from '@/components/MetaTag'


export const metadata: Metadata = {
  ...(DefaultMetaTag("Arikato111")),
  title: "Arikato111",

}

export default function Home() {
  return (
    <main className='dark:bg-black'>
      <div className='box-lg dark:bg-black dark:text-white'>
        <Banner />
      </div>
      <Image className="mt-5 mb-20 object-cover h-[400px] w-[100vw]" src={"/j2.jpg"} alt='sky' width={1000} height={600} />
      <div className='bg-gray-50 bg-dark dark:text-white'>
        <div className='box'>
          <Certificates />
        </div>
      </div>
      <div className="box dark:bg-black text-white">
        <Projects />
      </div>
      <div className='bg-gray-50 bg-dark dark:text-slate-200'>
        <div className='box'>
          <Contact />
        </div>
      </div>
    </main>
  )
}
