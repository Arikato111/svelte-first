import { FC, useEffect, useState } from "react";
import { isDark } from "./CheckMode";


const ToggleMode: FC = () => {
    const [text, setText] = useState("")

    useEffect(() => {
        let checkText = isDark() ? "🌚" : "🌞"
        setText(checkText)
    }, [])

    function changeMode() {
        let state = window.document.documentElement.classList.contains("dark");
        if (state) {
            window.document.documentElement.classList.remove("dark");
            setText("🌞")
        } else {
            window.document.documentElement.classList.add("dark");
            setText("🌚")
        }
    }
    return <div className="absolute top-0 right-0 text-5xl p-2 print:hidden">
        <button onClick={changeMode}>
            {text}
        </button>
    </div>
}
export default ToggleMode;