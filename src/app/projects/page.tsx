import { Metadata } from 'next'
import ProjectsData from '../../data/ProjectsData.json'
import { DefaultMetaTag } from '@/components/MetaTag'

export const metadata: Metadata = {
    ...(DefaultMetaTag("Projects | Arikato111")),
    title: "Projects | Arikato111"
}

export default function ProjectsPage() {
    return <main>
        <div className="frame">
            <div className='my-10 text-center'>
                <h1 className='font-bold text-3xl sm:text-4xl  md:text-5xl'>My Projects</h1>
                <h2 className='texl-lg sm:text-xl md:text-2xl'>about website, program and others</h2>
            </div>

            <div className='bg-gray-50 py-1'>
                <div className='box-lg'>
                    {ProjectsData.map((project, idx) => (
                        <div key={idx} className={`my-20 px-5 ${idx % 2 !== 0 ? "flex-row-reverse" : "flex-row"} sm:flex`}>
                            <div className='px-3 relative flex-1'>
                                <img className='w-full rounded-lg object-fill shadow' src={project.img} alt={project.title} width={300} height={200} title={project.title} />
                            </div>
                            <div className={`flex-1 px-3 ${idx % 2 !== 0 ? "sm:text-right" : ""}`}>
                                <a className='hover:underline' target='_blank' href={project.source}>
                                    <h4 className='my-3 text-slate-800 text-3xl font-bold'>{project.title}</h4>
                                </a>
                                <div>{project.descript}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </main>
}