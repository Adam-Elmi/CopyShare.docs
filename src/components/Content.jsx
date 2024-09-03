import { useContext } from "react";
import { CopyText } from "../helpers/CopyText";
import { CopyImage } from "../helpers/CopyImage";
import { CopyVideoUrl } from "../helpers/CopyVideoUrl";
import { CopyLink } from "../helpers/CopyLink";
import { CopyCode } from "../helpers/CopyCode.jsx";
import { CopyHistory } from "../helpers/CopyHistory";
import { CopyClear } from "../helpers/CopyClear.jsx";
import { ThemeContext } from "../helpers/DarkMode.jsx";

export function Content() {
    const { isDark } = useContext(ThemeContext);
    return (
        <section className={`api w-[70%] ml-[30%] mt-16 max-lg:ml-[0%] ${isDark ? 'text-white' : 'text-black'} max-lg:w-full py-8 h-auto p-5  max-md:w-full`}>
            <div className="flex justify-center items-center flex-col my-8">
                <p className={`text-violet-400 text-center text-[2rem] font-bold`}>API Reference</p>
                <p className={`leading-8 text-[1.1rem] p-2`}>This section provides concise documentation for methods designed to handle copying operations, such as copying text and images to the clipboard. Each method is simple to use and includes practical examples to help you integrate them into your web applications.</p>
            </div>
            <CopyText/>
            <CopyImage/>
            <CopyVideoUrl/>
            <CopyLink/>
            <CopyCode/>
            <CopyHistory/>
            <CopyClear/>
        </section>
    )
}