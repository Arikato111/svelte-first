import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    onCancel: Function,


}
export default function PopupPreview(props: Props) {
    return <div
        className='fixed flex justify-center items-center w-full h-[100vh] top-0 left-0 z-50 bg-zinc-300/60 dark:bg-zinc-900/80'
        onClick={() => props.onCancel()}>
        <style>{`body { overflow: hidden; } `}</style>
        {props.children}
    </div>


}