import { Code } from './Code';
import CodeSnippet from './CodeSnippet';
import Image from './Image';
import { ThemeContext } from './DarkMode';
import { copyImage_docs } from './MyData';
import { useContext } from 'react';
import { code2 } from './ExtraData';

export function CopyImage() {
    const { isDark } = useContext(ThemeContext);
    return (
        <div id='CopyImage' className="flex flex-col gap-5 mb-5">
            <h1  className="relative text-[2rem] font-bold text-blue-300"><span className="fa-solid fa-cube text-[1.6rem]"></span> {copyImage_docs.method}</h1>
            <Code title={'copyImage'}>
                <CodeSnippet codeString={copyImage_docs.syntax}/>
            </Code>
            <p className="leading-8 text-[1.1rem] bg-violet-100 text-black p-3 rounded-lg ">
                {copyImage_docs.description}
            </p>
            <Code title={'copyImage'}>
                <CodeSnippet codeString={copyImage_docs.example1}/>
            </Code>
            <p className="bg-violet-100 text-black p-3 rounded-lg text-[1.1rem] leading-8">{copyImage_docs.Parameter}</p>
            <p className="text-[1.5rem] font-bold">Example</p>
            <Code title={'copyImage'}>
                <CodeSnippet codeString={copyImage_docs.example2}/>
            </Code>
            <p className="bg-violet-100 text-black p-3 rounded-lg text-[1.1rem] leading-8">{copyImage_docs.ex_descrip}</p>
            <p className="text-[1.5rem] font-bold">Practical Example</p>
            <Code title={'copyImage'}>
                <CodeSnippet codeString={code2}/>
            </Code>  
            <div className="w-full relative  flex justify-center items-center  leading-10 text-[1.2rem] max-md:w-full max-md:max-w-[100%]">
                    <Image/>
            </div>
            <ul className="bg-green-100 text-black p-3 rounded-lg text-[1.1rem] leading-8 list-disc px-10">
                {copyImage_docs.ex_descrip_2.map((text, id) => (
                    <li key={id}>{text}</li>
                ))}
            </ul>
            <hr className='border-[1.2px] mt-5 text-black'/>
        </div>
    )
};