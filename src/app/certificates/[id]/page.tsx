import CertificatesData from '../../../data/CertificatesData.json'
import Image from 'next/image'
import ErrorPage from '@/app/not-found'

export default async function CertificateId({ params }: { params: { id: string } }) {
    const cer = CertificatesData.filter(c => c.id == Number(params.id))[0]
    if (!cer.title) return <ErrorPage />

    return <>
        <main className='frame'>
            <div className='my-10 text-center'>
                <h3 className='font-bold text-3xl sm:text-4xl  md:text-5xl'>{cer.title}</h3>
                <h4 className='texl-lg sm:text-xl md:text-2xl'>{cer.type}</h4>
            </div>
            <div className="bg-gray-50">
                <div className="box">
                    <Image src={cer.img.high} alt={cer.title} width={1920} height={1080} />
                </div>
            </div>
            <div className='text-center mt-10'>
                <a className='border-2 hover:bg-black hover:text-white duration-300 border-black py-2 px-5 rounded-sm font-bold' href={cer.link} target='_blank'>source</a>
            </div>
        </main>
    </>
}