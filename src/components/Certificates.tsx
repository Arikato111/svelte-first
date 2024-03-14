"use client"
import Link from 'next/link'
import Image from 'next/image'
import CertificatesData from '../data/CertificatesData.json'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import PopupPreview from './PopupPreview'

export function Certificates() {
    const [selectId, setSelectId] = useState("");
    if (CertificatesData[0].id == 0) CertificatesData.reverse()
    return <div className='frame'>
        <div className='my-10 text-center'>
            <h3 className='font-bold text-2xl sm:text-2xl md:text-5xl '>My Certificates</h3>
            <h4 className='text-lg sm:text-xl md:text-2xl'>from studying, competition and others</h4>
        </div>
        <div className='grid md:grid-cols-2'>
            {CertificatesData.map((cer, idx) => idx < 6 && (
                <div key={idx} className='my-7 px-10 flex items-center flex-col'
                    onClick={() => setSelectId(`${cer.id}`)}
                >
                    <motion.div className='cursor-pointer' layoutId={`${cer.id}`}>
                        <Image className='w-full rounded-lg object-fill shadow' src={cer.img.high} alt={cer.title} width={400} height={300} title={cer.type} />
                        <Image className='hidden' src={cer.img.high} alt={cer.title} width={1920} height={1080} title={cer.type} />
                    </motion.div>
                    <div>
                        <Link href={"/certificates/" + cer.id}>
                            <h4 className='my-3 font-bold'>{cer.title}</h4>
                        </Link>
                    </div>
                </div>
            ))}
            <AnimatePresence>
                {!!selectId.length && CertificatesData.map((cer, idx) => cer.id == Number(selectId) && (
                    <PopupPreview key={idx} onCancel={() => setSelectId("")}>
                        <motion.div layoutId={`${cer.id}`} key={idx} className='w-full lg:w-[50vw]'
                            onClick={() => setSelectId(`${cer.id}`)}
                        >
                            <Image className='w-full rounded-lg object-fill shadow' src={cer.img.high} alt={cer.title} width={400} height={300} title={cer.type} />
                        </motion.div>
                    </PopupPreview>
                ))}
            </AnimatePresence>
        </div>
        <div className='text-center'>
            <Link className='border-2 hover:bg-black hover:text-white duration-300 border-black dark:border-white dark:hover:bg-white dark:hover:text-black py-2 px-5 rounded-sm font-bold' href={"/certificates"}>more</Link>
        </div>
    </div>
}