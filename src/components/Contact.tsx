import { FaGithub, FaLinkedin, FaLinkedinIn, FaNpm, FaYoutube, FaYoutubeSquare } from 'react-icons/fa'
import {MdMail} from 'react-icons/md'

export default function Contact() {
    return <div className="frame">
        <div className='my-10 text-center'>
            <h3 className='font-bold text-5xl '>My Contacts</h3>
            <h4 className='text-2xl'>social media, source code and others</h4>
        </div>
        <div className='flex justify-center items-center'>
            <a className='mx-3 hover:scale-105 duration-150' href="https://github.com/Arikato111" target='_blank'>
                <FaGithub size={58} />
            </a>
            <a className='mx-3 hover:scale-105 duration-150' href="https://www.linkedin.com/in/nawasan/" target='_blank'>
                <FaLinkedin size={58} />
            </a>
            <a className='mx-3 hover:scale-105 duration-150' href="mailto:contact@nawasan.dev" target='_blank'>
                <MdMail size={58} />    
            </a>
 
            <a className='mx-3 hover:scale-105 duration-150' href="https://youtube.com/@Arikato111" target='_blank'>
                <FaYoutube size={58} />
            </a>
            <a className='mx-3 hover:scale-105 duration-150' href="https://www.npmjs.com/~arikato111" target='_blank'>
                <FaNpm size={58} />
            </a>

        </div>
    </div>
}