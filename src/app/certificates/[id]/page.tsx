import CertificatesData from '../../../data/CertificatesData.json'
import Link from 'next/link'
import ErrorPage from '@/app/error'


export default function CertificateId({ params }: { params: { id: string } }) {
    const cer = CertificatesData.filter(c => c.id == Number(params.id))[0]
    if (!cer.title) return <ErrorPage />
    return <main className='frame'>
        <div className='my-10 text-center'>
            <h3 className='font-bold text-5xl '>{cer.title}</h3>
            <h4 className='text-2xl'>from studying, competition and others</h4>
        </div>
        <div className="bg-gray-50">
            <div className="box">
                <img src={cer.img.high} alt={cer.title} />
            </div>
        </div>
        <div className='text-center mt-10'>
            <a className='border-2 hover:bg-black hover:text-white duration-300 border-black py-2 px-5 rounded-sm font-bold' href={cer.link} target='_blank'>source</a>
        </div>

    </main>
}