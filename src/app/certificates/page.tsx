import Link from "next/link"
import Image from "next/image"
import CertificatesData from '../../data/CertificatesData.json'
import { Metadata } from "next"
import { DefaultMetaTag } from '../../components/MetaTag'

export const metadata: Metadata = {
    ...(DefaultMetaTag("Certificates | Arikato111")),
    title: "Certificates | Arikato111"
}

export default function CertifacatePage() {
    if (CertificatesData[0].id == 0) CertificatesData.reverse()
    return <main className='frame dark:bg-black dark:text-slate-200'>
        <div className='my-10 text-center'>
            <h1 className='font-bold text-3xl sm:text-4xl  md:text-5xl'>My Certificates</h1>
            <h2 className='texl-lg sm:text-xl md:text-2xl'>from studying, competition and others</h2>
        </div>
        <div className=" bg-gray-50 bg-dark">
            <div className="box-lg">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    {CertificatesData.map((cer, idx) => (
                        <div key={idx} className='my-7 px-5 flex items-center flex-col'>
                            <Link href={'/certificates/' + cer.id}>
                                <Image className="w-full rounded-lg object-fill shadow" src={cer.img.high} alt={cer.title} width={400} height={300} title={cer.type} />
                           </Link>
                            <div>
                                <h4 className='my-3 font-bold'>{cer.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </main>
}