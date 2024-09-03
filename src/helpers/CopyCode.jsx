import { useContext } from 'react';
import { Code } from './Code';
import CodeSnippet from './CodeSnippet';
import { copyCode_docs } from './MyData';

export function CopyCode() {

    return (
        <div id='CopyCode' className="flex flex-col gap-5 mb-5">
            <h1 className="relative text-[2rem] font-bold text-blue-300"><span className="fa-solid fa-cube text-[1.6rem]"></span> {copyCode_docs.method}</h1>
            <Code title={'copyCode'}>
                <CodeSnippet codeString={copyCode_docs.syntax}/>
            </Code>
            <p className={`leading-8 text-[1.1rem] bg-violet-100 text-black p-3 rounded-lg `}>
                {copyCode_docs.description}
            </p>
            <Code title={'copyCode'}>
                <CodeSnippet codeString={copyCode_docs.example1}/>
            </Code>
            <p className="bg-violet-100 text-black p-3 rounded-lg text-[1.1rem] leading-8">{copyCode_docs.Parameter}</p>
            <p className="text-[1.5rem] font-bold">Example</p>
            <Code title={'copyCode'}>
                <CodeSnippet codeString={copyCode_docs.example2}/>
            </Code>
            <p className="bg-violet-100 text-black p-3 rounded-lg text-[1.1rem] leading-8">{copyCode_docs.ex_descrip}</p>
            <p className="text-[1.5rem] font-bold">Practical Example</p>
            <Code title={'copyCode'}>
                <CodeSnippet codeString={copyCode_docs.practical_example}/>
            </Code>
            <ul className="bg-green-100 text-black p-3 rounded-lg text-[1.1rem] leading-8 list-disc px-10">
                {copyCode_docs.ex_descrip_2.map((text, id) => (
                    <li key={id}>{text}</li>
                ))}
            </ul>
            <hr className='border-[1.2px] mt-5 text-black'/>
        </div>
    )
};