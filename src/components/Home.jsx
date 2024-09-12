import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../helpers/DarkMode";
import {sections, advantages} from "../helpers/MyData";
import CodeSnippet from "../helpers/CodeSnippet";
import { Code } from "../helpers/Code";
import TextAreaCopy from "../helpers/TextAreaCopy";
import Image from "../helpers/Image";
import Video from "../helpers/Video";
import { Console } from "../helpers/Console";
import { code, code2, code3, code4, output } from "../helpers/ExtraData";

export function Home() {
    const { isDark } = useContext(ThemeContext);

    return (
        <section className={`w-full mt-16 max-lg:ml-[0%] max-lg:w-full pt-8 h-auto ${isDark ? 'text-white bg-gray-900' : 'text-black bg-white'} max-md:w-full`}>
            <div className={`w-full flex justify-center items-center flex-col px-4`}>
                {/* Logo */}
                <div className="flex justify-center items-center  gap-3 mb-3 w-[500px] max-md:w-fit max-md:justify-center">
                        <span className="bg-blue-500 flex justify-center items-center text-[3rem] extra-sm:text-[2rem] w-[50px] h-[50px] extra-sm:w-[30px] extra-sm:h-[30px]  grapple text-white text-center">C</span>
                        <h1 className={`text-[3rem] extra-sm:text-[2rem] grapple bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}>CopyShare</h1>
                </div>
                {/* Description */}
                <p className="text-center leading-8 text-[1.5rem] max-md:text-[1rem]">A lightweight JS library for copying data, with feedback and support for older and modern browsers.</p>
            </div>
            <div className={`w-full flex justify-center items-center px-4 py-16`}>
                <div className="w-full max-w-[950px] flex flex-wrap gap-5 justify-center">
                    {sections.map((section, id) => (
                        <div key={id} className={` ${isDark ? 'bg-slate-800 border-gray-700' : 'bg-slate-100 border-slate-200'} border cursor-pointer rounded-xl shadow-sm w-full max-w-[450px] h-[80px] py-2 px-4 flex justify-between items-center my-3`}>
                            <div className="flex justify-center items-center gap-5">
                                <span className={`${section.icon} ${isDark ? 'text-slate-50' : "text-gray-500"}`}></span>
                                <p className={`font-bold ${isDark ? 'text-white' : 'text-gray-600'} hover:text-blue-400`}><Link to={section.path}>{section.header}</Link></p>
                            </div>
                            <span className={`fa-solid fa-arrow-right ${isDark ? 'text-slate-50' : "text-gray-500"}`}></span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Advantages of the library */}
            <div className={`w-full flex flex-col justify-center items-center px-4 gap-5 py-[5rem] ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`}>
                <p className="text-[2rem] font-bold">Why CopyShare?</p>
                <div className="w-full max-w-[1000px] flex flex-wrap gap-5 justify-center items-center">
                    {
                        advantages.map((advantage, id) => (
                        <div key={id} className={`w-full max-w-[450px] h-[150px] ${isDark ? "bg-[#112]" : 'bg-white'} shadow-md border ${isDark ? 'border-violet-500' : 'border-slate-200'} rounded-lg p-2 flex flex-col my-3`}>
                            <div className="flex items-center gap-5 my-1">
                                <div className={`border-b ${isDark ? 'border-b-violet-500' : 'border-b-slate-200'} flex justify-center items-center w-full p-2`}>
                                    <span className={`${advantage.icon} text-violet-400 text-[1.2rem] mr-5`}></span>
                                    <p className={`text-violet-400 font-bold text-[1.2rem]`}>{advantage.header}</p>
                                </div>
                            </div>
                            <div className="flex-1 w-full flex justify-center items-center">
                                <p className="pl-8 text-[1.2rem]">{advantage.description}</p>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
            {/* Showcase */}
            {/* Copy Text */}
            <div className={`w-full flex flex-col justify-center items-center gap-5 py-10 px-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                <p className="text-center text-[3rem] font-bold max-lg:text-[2rem]">Easily Copy Text into the Clipboard with Feedback</p>
                <p className="leading-10 text-center text-[1.2rem]">The <span className={`${isDark ? "bg-gray-800" :"bg-violet-200"} mx-1 text-violet-400 py-1 px-3 rounded-lg font-bold`}>copyText</span> method copies the specified text to the clipboard and provides feedback on success or failure.</p>
                <div id="showcase" className={`flex relative w-full justify-between items-center gap-4 max-md:flex-col max-md:w-full  px-4 py-5`}>
                    <Code title={'copyText'}>
                        <CodeSnippet codeString={code}/>
                    </Code>                    
                <div className="w-full relative max-w-[50%] flex justify-center items-center  leading-10 text-[1.2rem] max-md:w-full max-md:max-w-[100%]">
                        <TextAreaCopy/>
                    </div>
                </div>
            </div>
            {/* Copy Image */}
            <div className={`w-full flex flex-col justify-center items-center gap-5 py-10 px-4 ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`}>
                <p className="text-center text-[3rem] font-bold max-lg:text-[2rem]">Instantly Copy Images to the Clipboard with Ease</p>
                <p className="leading-10 text-center text-[1.2rem]">The <span className={`${isDark ? "bg-gray-800" :"bg-violet-200"} mx-1 text-violet-400 py-1 px-3 rounded-lg font-bold`}>copyImage</span> 
                method enables copying any image type, including JPG, PNG, and others, directly to the clipboard. It overcomes browser limitations that typically restrict copying to PNG, providing feedback on success or failure.
                </p>
                <div id="showcase" className={`flex relative w-full justify-between items-center gap-4 max-md:flex-col max-md:w-full  px-4 py-5`}>
                    <div className="w-full relative max-w-[50%] flex justify-center items-center  leading-10 text-[1.2rem] max-md:w-full max-md:max-w-[100%]">
                            <Image/>
                    </div>
                    <Code title={'copyImage'}>
                        <CodeSnippet codeString={code2}/>
                    </Code>                    
                </div>
            </div>
            {/* Copy Video */}
            <div className={`w-full h-auto flex flex-col justify-center items-center gap-5 py-10 px-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                <p className="text-center text-[3rem] font-bold max-lg:text-[2rem]">Simple Copy of Video URLs to Clipboard</p>
                <p className="leading-10 text-center text-[1.2rem]">The <span className={`${isDark ? "bg-gray-800" :"bg-violet-200"} mx-1 text-violet-400 py-1 px-3 rounded-lg font-bold`}>copyVideoUrl</span> 
                method allows you to easily copy video URLs to the clipboard and provides feedback on whether the copy action was successful.
                </p>
                <div id="showcase" className={`flex relative w-full justify-between items-center gap-4 max-md:flex-col max-md:w-full  px-4 py-5`}>
                    <Code title={'CopyVideoUrl'}>
                        <CodeSnippet codeString={code3}/>
                    </Code>  
                    <div className="w-full relative max-w-[50%] flex justify-center items-center  leading-10 text-[1.2rem] max-md:w-full max-md:max-w-[100%]">
                            <Video/>
                    </div>                  
                </div>
            </div>
            {/* Get History */}
            <div className={`w-full flex flex-col justify-center items-center h-auto gap-5 py-10 px-4 ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`}>
                <p className="text-center text-[3rem] font-bold max-lg:text-[2rem]">Review Your Clipboard History from All Copy Methods</p>
                <p className="leading-10 text-center text-[1.2rem]">The <span className={`${isDark ? "bg-gray-800" :"bg-violet-200"} mx-1 text-violet-400 py-1 px-3 rounded-lg font-bold`}>getHistory</span> 
                method logs and displays all the data you've copied using various methods like <span className={`${isDark ? "bg-gray-800" :"bg-slate-200"} mx-1 text-green-400 py-1 px-3 rounded-lg font-bold`}>copyText</span>, <span className={`${isDark ? "bg-gray-800" :"bg-slate-200"} mx-1 text-green-400 py-1 px-3 rounded-lg font-bold`}>copyImage</span>, <span className={`${isDark ? "bg-gray-800" :"bg-slate-200"} mx-1 text-green-400 py-1 px-3 rounded-lg font-bold`}>copyVideoUrl</span>, and others, offering a complete history of your clipboard activity.
                </p>
                <div id="showcase" className={`flex flex-wrap relative w-full justify-between items-center gap-4 max-md:flex-col max-md:w-full  px-4 py-5`}>
                    <Code title={'getHistory'}>
                        <CodeSnippet codeString={code4}/>
                    </Code>  
                    <div className="w-full relative flex justify-center h-auto items-center leading-10 text-[1.2rem] max-md:w-full max-md:max-w-[100%]">
                            <Console>
                                <CodeSnippet codeString={output}/>
                            </Console>
                    </div>                  
                </div>
            </div>
        </section>
    )
}
