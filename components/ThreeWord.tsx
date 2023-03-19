type ThreeWordInput = {
    word1: string,
    word2: string,
    word3: string,
}

export default function ThreeWord({ word1, word2, word3 }: ThreeWordInput) {
    return <div className="text-center text-slate-800 dark:text-slate-500">
        <div className="text-2xl m-5 tracking-wide font-medium uppercase sm:inline-block border-b-2 border-black sm:border-none">
            {word1}
        </div>
        <span className="hidden text-2xl sm:inline">|</span>
        <div className="text-2xl m-5 tracking-wide font-medium uppercase sm:inline-block border-b-2 border-black sm:border-none">
            {word2}
        </div>
        <span className="hidden text-2xl sm:inline">|</span>
        <div className="text-2xl m-5 tracking-wide font-medium uppercase sm:inline-block border-b-2 border-black sm:border-none">
            {word3}
        </div>
    </div>

}