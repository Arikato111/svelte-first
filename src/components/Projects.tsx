import Link from 'next/link'
import ProjectsData from '../data/ProjectsData.json'

export default function Projects() {
    return <div className="frame">
        <div className='my-10 text-center'>
            <h3 className='font-bold text-5xl '>My Projects</h3>
            <h4 className='text-2xl'>about website, program and others</h4>
        </div>
        <div className='grid grid-cols-2'>
            {ProjectsData.map((project, idx) => idx < 6 && (
                <div key={idx} className='project-card  my-7 px-5 flex items-center flex-col'>
                    <div className='relative'>
                        <div className="project-detail">{project.descript}</div>
                        <img className='project-img w-full rounded-lg object-fill shadow' src={project.img} alt={project.title} width={300} height={200} title={project.title} />
                    </div>
                    <div>
                        <a className='hover:underline' target='_blank' href={project.source}>
                            <h4 className='my-3 font-bold'>{project.title}</h4>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        <div className='text-center'>
            <Link className='border-2 hover:bg-black hover:text-white duration-300 border-black py-2 px-5 rounded-sm' href={"/certificates"}>more</Link>
        </div>

    </div>
}