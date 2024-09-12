import { ThemeContext } from "../helpers/DarkMode";
import { useContext } from "react";
import CodeSnippet from "../helpers/CodeSnippet";
import { Code } from "../helpers/Code";
import TextAreaCopy from "../helpers/TextAreaCopy";
import Image from "../helpers/Image";
import Video from "../helpers/Video";
import { Console } from "../helpers/Console";
import { Introduction } from "./Introduction";
import { code, code2, code3, code4, output } from "../helpers/ExtraData";

export function QuickStart() {
    const { isDark } = useContext(ThemeContext);
    
    return (
        <section id="Quick Start"  className={`getting-started w-[70%] ml-[30%] mt-16 max-lg:ml-[0%] max-lg:w-full py-8 h-auto  ${isDark ? 'text-white bg-gray-900' : 'text-black bg-white'} max-md:w-full`}>
            {/* Showcase */}
            {/* Copy Text */}
            <div className={`w-full flex flex-col justify-center items-center gap-5 py-10 px-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                <h1 className="text-violet-400 text-[2rem] font-bold">Quick Start</h1>
                <p className="mt-2 mb-5 text-gray-600 leading-10 text-center text-[1.2rem]">
                    Start quickly with this simple and flexible library.
                </p>
                <p className="text-center text-[2rem] font-bold max-lg:text-[1.5rem]">Easily Copy Text into the Clipboard with Feedback</p>
                <p className="leading-10 text-center text-[1.2rem]">The <span className={`${isDark ? "bg-gray-800" :"bg-violet-200"} mx-1 text-violet-400 py-1 px-3 rounded-lg font-bold`}>copyText</span> method copies the specified text to the clipboard and provides feedback on success or failure.</p>
                <div id="purpose" className={`flex flex-col h-auto relative w-full justify-between items-center gap-4 max-md:flex-col max-md:w-full  px-4 py-5`}>
                    <Code title={'copyText'}>
                        <CodeSnippet codeString={code}/>
                    </Code>                    
                    <div className="w-full relative  flex justify-center items-center  leading-10 text-[1.2rem] max-md:w-full max-md:max-w-[100%]">
                        <TextAreaCopy/>
                    </div>
                </div>
            </div>
            {/* Copy Image */}
            <div className={`w-full flex flex-col justify-center items-center gap-5 py-10 px-4 ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`}>
                <p className="text-center text-[2rem] font-bold max-lg:text-[1.5rem]">Instantly Copy Images to the Clipboard with Ease</p>
                <p className="leading-10 text-center text-[1.2rem]">The <span className={`${isDark ? "bg-gray-800" :"bg-violet-200"} mx-1 text-violet-400 py-1 px-3 rounded-lg font-bold`}>copyImage</span> 
                method enables copying any image type, including JPG, PNG, and others, directly to the clipboard. It overcomes browser limitations that typically restrict copying to PNG, providing feedback on success or failure.
                </p>
                <div id="purpose" className={`flex flex-col relative w-full justify-between items-center gap-4 max-md:flex-col max-md:w-full  px-4 py-5`}>
                    <Code title={'copyImage'}>
                        <CodeSnippet codeString={code2}/>
                    </Code>  
                    <div className="w-full relative  flex justify-center items-center  leading-10 text-[1.2rem] max-md:w-full max-md:max-w-[100%]">
                            <Image/>
                    </div>
                </div>
            </div>
            {/* Copy Video */}
            <div className={`w-full h-auto flex flex-col justify-center items-center gap-5 py-10 px-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                <p className="text-center text-[2rem] font-bold max-lg:text-[1.5rem]">Simple Copy of Video URLs to Clipboard</p>
                <p className="leading-10 text-center text-[1.2rem]">The <span className={`${isDark ? "bg-gray-800" :"bg-violet-200"} mx-1 text-violet-400 py-1 px-3 rounded-lg font-bold`}>copyVideoUrl</span> 
                method allows you to easily copy video URLs to the clipboard and provides feedback on whether the copy action was successful.
                </p>
                <div id="purpose" className={`flex flex-col relative w-full justify-between items-center gap-4 max-md:flex-col max-md:w-full  px-4 py-5`}>
                    <Code title={'CopyVideoUrl'}>
                        <CodeSnippet codeString={code3}/>
                    </Code>  
                    <div className="w-full relative  flex justify-center items-center  leading-10 text-[1.2rem] max-md:w-full max-md:max-w-[100%]">
                            <Video/>
                    </div>                  
                </div>
            </div>
            {/* Get History */}
            <div className={`w-full flex flex-col justify-center items-center h-auto gap-5 py-10 px-4 ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`}>
                <p className="text-center text-[2rem] font-bold max-lg:text-[1.5rem]">Review Your Clipboard History from All Copy Methods</p>
                <p className="leading-10 text-center text-[1.2rem]">The <span className={`${isDark ? "bg-gray-800" :"bg-violet-200"} mx-1 text-violet-400 py-1 px-3 rounded-lg font-bold`}>getHistory</span> 
                method logs and displays all the data you've copied using various methods like <span className={`${isDark ? "bg-gray-800" :"bg-slate-200"} mx-1 text-green-400 py-1 px-3 rounded-lg font-bold`}>copyText</span>, <span className={`${isDark ? "bg-gray-800" :"bg-slate-200"} mx-1 text-green-400 py-1 px-3 rounded-lg font-bold`}>copyImage</span>, <span className={`${isDark ? "bg-gray-800" :"bg-slate-200"} mx-1 text-green-400 py-1 px-3 rounded-lg font-bold`}>copyVideoUrl</span>, and others, offering a complete history of your clipboard activity.
                </p>
                <div id="purpose" className={`flex flex-col relative w-full justify-between items-center gap-4 max-md:flex-col max-md:w-full  px-4 py-5`}>
                    <Code title={'getHistory'}>
                        <CodeSnippet codeString={code4}/>
                    </Code>  
                    <div className="w-full relative flex justify-center h-auto items-center  leading-10 text-[1.2rem] max-md:w-full max-md:max-w-[100%]">
                            <Console>
                                <CodeSnippet codeString={output}/>
                            </Console>
                    </div>                  
                </div>
            </div>
            <Introduction/>
        </section>
    )
}
