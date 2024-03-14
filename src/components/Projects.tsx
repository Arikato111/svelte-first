"use client"
import Image from 'next/image'
import Link from 'next/link'
import ProjectsData from '../data/ProjectsData.json'
import { useState } from 'react'
import { motion } from 'framer-motion'
import PopupPreview from './PopupPreview'

export default function Projects() {
    const [selectId, setSelectId] = useState<string>("");
    return <div className="frame">
        <div className='my-10 text-center'>
            <h3 className='font-bold text-2xl sm:text-3xl md:text-5xl'>My Projects</h3>
            <h4 className='text-lg sm:text-xl md:text-2xl'>about website, program and others</h4>
        </div>
        <div>
            {ProjectsData.map((project, idx) => idx < 3 && (
                <div key={idx}
                    className={`my-20 px-5 ${idx % 2 !== 0 ? "flex-row-reverse" : "flex-row"} md:flex`}
                >
                    <motion.div
                        className='cursor-pointer'
                        onClick={() => setSelectId(`${project.id}`)}
                        layoutId={`${project.id}img`}>
                        <div className='px-3 relative flex-1'>
                            <Image className='w-full rounded-lg object-fill shadow' src={project.img} alt={project.title} width={400} height={300} title={project.title} />
                        </div>
                    </motion.div>
                    <motion.div layoutId={`${project.id}title`} className={`flex-1 px-3 ${idx % 2 !== 0 ? "sm:text-right" : ""}`}>
                        <a className='hover:underline' target='_blank' href={project.source}>
                            <h4 className='my-3 text-slate-800 dark:text-slate-200 text-3xl font-bold'>{project.title}</h4>
                        </a>
                        <div className='dark:text-slate-300 text-black'>{project.descript}</div>
                        {!!project.link.length &&
                            <div className='my-3 underline'><a href={project.link} target='_blank'>preview</a></div>
                        }

                    </motion.div>
                </div>
            ))}
            {!!selectId.length && (
                ProjectsData.map((project, idx) => project.id == Number(selectId) && (
                    <PopupPreview key={idx} onCancel={() => setSelectId("")}>
                        <div
                            className={`my-20 lg:w-[50vw] px-5`}>
                            <motion.div layoutId={`${selectId}img`}>
                                <div className='px-3 relative flex-1'>
                                    <Image className='w-full rounded-lg object-fill shadow' src={project.img} alt={project.title} width={400} height={300} title={project.title} />
                                </div>
                            </motion.div>
                            <motion.div layoutId={`${project.id}title`}
                                className={`flex-1 px-3 bg-white dark:bg-black rounded-lg p-3 m-3 shadow-sm`}>
                                <a className='hover:underline' target='_blank' href={project.source}>
                                    <h4 className='my-3 text-slate-800 dark:text-slate-200 text-3xl font-bold'>{project.title}</h4>
                                </a>
                                <div className='dark:text-slate-300 text-black'>{project.descript}</div>
                                {!!project.link.length &&
                                    <div className='my-3 underline'><a href={project.link} target='_blank'>preview</a></div>
                                }

                            </motion.div>
                        </div>
                    </PopupPreview>
                ))
            )}
        </div>
        <div className='text-center'>
            <Link className='border-2 hover:bg-black hover:text-white duration-300 border-black dark:border-white dark:hover:bg-white  text-black dark:text-slate-200 dark:hover:text-black py-2 px-5 rounded-sm font-bold' href={"/projects"}>more</Link>
        </div>

    </div >
}