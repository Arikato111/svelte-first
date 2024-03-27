import AboutMeData from '../../../data/AboutMe.json'
import { GrFormNext } from "react-icons/gr";

export default function QuestionsPage() {
    return <main className="box px-5 pb-10 bg-gray-50 dark:bg-zinc-950 dark:text-slate-200 rounded-lg py-3 mb-10">
        <h3 className='font-bold text-2xl sm:text-3xl'>คำถาม</h3>
        {AboutMeData.questions.map((que, idx) => (
            <div className='mt-5 hover:cursor-pointer' key={idx}>
                <a tabIndex={idx} href='#' className='font-bold text-lg flex items-center question-action'>
                    <span className={"duration-300 question-point"}>
                        <GrFormNext size={28} />
                    </span>
                    {que.question}
                </a>
                <div className={"mx-5 overflow-hidden duration-300 question-content"}>{que.answer.map((ans, idx) => (
                    <p key={idx}>{ans}</p>
                ))}</div>
            </div>
        ))}
    </main>
}