import Link from 'next/link'
import ProjectsData from '../data/ProjectsData.json'

export default function Projects() {
    return <div className="frame">
        <div className='my-10 text-center'>
            <h3 className='font-bold text-2xl sm:text-3xl md:text-5xl'>My Projects</h3>
            <h4 className='text-lg sm:text-xl md:text-2xl'>about website, program and others</h4>
        </div>
        <div>
            {ProjectsData.map((project, idx) => idx < 3 && (
                <div key={idx} className={`my-20 px-5 ${idx % 2 !== 0 ? "flex-row-reverse": "flex-row"} md:flex`}>
                    <div className='px-3 relative flex-1'>
                        <img className='w-full rounded-lg object-fill shadow' src={project.img} alt={project.title} width={300} height={200} title={project.title} />
                    </div>
                    <div className='flex-1 px-3'>
                        <a className='hover:underline' target='_blank' href={project.source}>
                            <h4 className='my-3 text-slate-800 text-3xl font-bold'>{project.title}</h4>
                        </a>
                        <div>{project.descript}</div>
                    </div>
                </div>
            ))}
        </div>
        <div className='text-center'>
            <Link className='border-2 hover:bg-black hover:text-white duration-300 border-black py-2 px-5 rounded-sm font-bold' href={"/projects"}>more</Link>
        </div>

    </div>
}