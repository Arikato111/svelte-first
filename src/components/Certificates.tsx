import Link from 'next/link'
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
                <div key={idx} className='my-7 px-5 flex items-center flex-col'>
                    <img className='w-full rounded-lg object-fill shadow' src={cer.img.low} alt={cer.title} width={300} height={200} title={cer.type} />
                    <div>
                        <h4 className='my-3 font-bold'>{cer.title}</h4>
                    </div>
                </div>
            ))}
        </div>
        <div className='text-center'>
            <Link className='border-2 hover:bg-black hover:text-white duration-300 border-black py-2 px-5 rounded-sm font-bold' href={"/certificates"}>more</Link>
        </div>
    </div>
}