import { FaGithub, FaLinkedin, FaLinkedinIn, FaNpm, FaYoutube, FaYoutubeSquare } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

export default function Contact() {
    return <div className="frame">
        <div className='my-10 text-center'>
            <h3 className='font-bold text-2xl sm:text-3xl md:text-5xl'>My Contacts</h3>
            <h4 className='text-lg sm:text-xl md:text-2xl'>social media, source code and others</h4>
        </div>
        <div className='flex justify-center items-center'>
            <a className='menu-link' href="https://github.com/Arikato111" target='_blank'>
                <FaGithub className="size-10 md:size-14" size={58} />
            </a>
            <a className='menu-link' href="https://www.linkedin.com/in/nawasan/" target='_blank'>
                <FaLinkedin className="size-10 md:size-14" size={58} />
            </a>
            <a className='menu-link' href="mailto:contact@nawasan.dev" target='_blank'>
                <MdMail className="size-10 md:size-14" size={58} />
            </a>

            <a className='menu-link' href="https://youtube.com/@Arikato111" target='_blank'>
                <FaYoutube className="size-10 md:size-14" size={58} />
            </a>
            <a className='menu-link' href="https://www.npmjs.com/~arikato111" target='_blank'>
                <FaNpm className="size-10 md:size-14" size={58} />
            </a>

        </div>
    </div>
}