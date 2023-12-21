import Link from "next/link"
import CertificatesData from '../../data/CertificatesData.json'
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Certificates | Arikato111"
}

export default function CertifacatePage() {
    if (CertificatesData[0].id == 0) CertificatesData.reverse()
    return <div className='frame'>
        <div className='my-10 text-center'>
            <h1 className='font-bold text-5xl'>My Certificates</h1>
            <h2 className='text-2xl'>from studying, competition and others</h2>
        </div>
        <div className=" bg-gray-50">
            <div className="box-lg">
                <div className='grid grid-cols-3'>
                    {CertificatesData.map((cer, idx) => (
                        <div key={idx} className='my-7 px-5 flex items-center flex-col'>
                            <Link href={'/certificates/' + cer.id}>
                            <img className='w-full rounded-lg object-fill shadow' src={cer.img.low} alt={cer.title} width={300} height={200} title={cer.type} />
                            </Link>
                            <div>
                                <h4 className='my-3 font-bold'>{cer.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
}