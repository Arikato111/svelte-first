import Link from 'next/link'
import Image from 'next/image'
import CertificatesData from '../data/CertificatesData.json'

export function Certificates() {
    if(CertificatesData[0].id == 0) CertificatesData.reverse()
    return <div className='frame'>
        <div className='my-10 text-center'>
            <h3 className='font-bold text-2xl sm:text-2xl md:text-5xl '>My Certificates</h3>
            <h4 className='text-lg sm:text-xl md:text-2xl'>from studying, competition and others</h4>
        </div>
        <div className='grid md:grid-cols-2'>
            {CertificatesData.map((cer, idx) => idx < 6 && (
                <div key={idx} className='my-7 px-10 flex items-center flex-col'>
                    <Link href={"/certificates/" + cer.id}>
                        <Image className='w-full rounded-lg object-fill shadow' src={cer.img.high} alt={cer.title} width={400} height={300} title={cer.type} />
                    </Link>
                    <div>
                        <h4 className='my-3 font-bold'>{cer.title}</h4>
                    </div>
                </div>
            ))}
        </div>
        <div className='text-center'>
            <Link className='border-2 hover:bg-black hover:text-white duration-300 border-black dark:border-white dark:hover:bg-white dark:hover:text-black py-2 px-5 rounded-sm font-bold' href={"/certificates"}>more</Link>
        </div>
    </div>
}