"use client"
import { useState } from 'react'
import AboutMeData from '../../../data/AboutMe.json'

const YoutubeIframe = ({ youtube_id }: { youtube_id: string }) => {
    return <iframe
    className='mx-auto'
        width="360"
        height="200"
        src={`https://www.youtube.com/embed/${youtube_id}?vq=medium&loop=1&modestbranding=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    />
}

export default function Music() {
    const [musicOn, setMusicOn] = useState(-1)
    return <div className='mb-10 box  pt-3 pb-10'>
        <div className='my-10 text-center'>
            <h3 className='font-bold text-3xl sm:text-4xl  md:text-5xl'>Music</h3>
            <h4 className='texl-lg sm:text-xl md:text-2xl'>My favorite or like music</h4>
        </div>
        <div className="text-center md:grid grid-cols-2">
            {AboutMeData.music.map((music, idx) => (
                <div key={idx} className='text-center mb-10'>
                    <div className='text-center'>
                        {musicOn == idx ?
                            <YoutubeIframe youtube_id={music.youtube_id} />
                            :
                            <img  onClick={() => setMusicOn(idx)} className='hover:cursor-pointer inline-block rounded-lg object-cover w-[360px] h-[200px] shadow' width={360} height={200} src={`https://i.ytimg.com/vi/${music.youtube_id}/hqdefault.jpg`} alt="" />
                        }
                    </div>
                    <div className='py-1'><a className='hover:underline' href={music.link} target='_blank'>{music.name}</a></div>
                </div>
            ))}
        </div>
    </div>

}