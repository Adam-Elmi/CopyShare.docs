import { useContext } from 'react';
import { ThemeContext } from './DarkMode';
import { Code } from './Code';
import CodeSnippet from './CodeSnippet';
import TextAreaCopy from './TextAreaCopy';
import { copyText_docs } from './MyData';
import { code } from './ExtraData';

export function CopyText() {
    const { isDark } = useContext(ThemeContext);

    return (
        <div id='CopyText' className="flex flex-col gap-5 mb-5">
                <h1 className="relative text-[2rem] font-bold text-blue-300"><span className="fa-solid fa-cube text-[1.6rem]"></span> {copyText_docs.method}</h1>
                <Code title={'copyText'}>
                    <CodeSnippet  codeString={copyText_docs.syntax}/>
                </Code>
                <p className="leading-8 text-[1.1rem] bg-violet-100 text-black p-3 rounded-lg ">
                    {copyText_docs.description}
                </p>
                <Code title={'copyText'}>
                    <CodeSnippet  codeString={copyText_docs.example1}/>
                </Code>
                <p className="bg-violet-100 text-black p-3 rounded-lg text-[1.1rem] leading-8">{copyText_docs.Parameter}</p>
                <p className="text-[1.5rem] font-bold">Example</p>
                <Code title={'copyText'}>
                    <CodeSnippet  codeString={copyText_docs.example2}/>
                </Code>
                <p className="bg-violet-100 text-black p-3 rounded-lg text-[1.1rem] leading-8">{copyText_docs.ex_descrip}</p>
                <p className="text-[1.5rem] font-bold">Practical Example</p>
                <Code title={'copyText'}>
                    <CodeSnippet  codeString={copyText_docs.practical_example}/>
                </Code>
                <div className={`w-full flex flex-col justify-center items-center gap-5 py-10 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                <div id="showcase" className={`flex relative w-full justify-between items-center gap-4 max-md:flex-col max-md:w-full py-5`}>
                <div className="w-full relative flex justify-center items-center  leading-10 text-[1.2rem] max-md:w-full max-md:max-w-[100%]">
                        <TextAreaCopy/>
                    </div>
                </div>
            </div>
                <ul className="bg-green-100 text-black p-3 rounded-lg text-[1.1rem] leading-8 list-disc px-10">
                    {copyText_docs.ex_descrip_2.map((text, id) => (
                        <li key={id}>{text}</li>
                    ))}
                </ul>
                <hr className='border-[1.2px] mt-5 text-black'/>
            </div>
    )
};