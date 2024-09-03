import { Code } from './Code';
import CodeSnippet from './CodeSnippet';
import { copyClear_docs } from './MyData';

export function CopyClear() {

    return (
        <div id='CopyClear' className="flex flex-col gap-5 mb-5">
            <h1 className="relative text-[2rem] font-bold text-blue-300"><span className="fa-solid fa-cube text-[1.6rem]"></span> {copyClear_docs.method}</h1>
            <Code title={'copyClear'}>
                <CodeSnippet codeString={copyClear_docs.syntax}/>
            </Code>
            <p className={`leading-8 text-[1.1rem] bg-violet-100 text-black p-3 rounded-lg `}>
                {copyClear_docs.description}
            </p>
            <Code title={'copyClear'}>
                <CodeSnippet codeString={copyClear_docs.example1}/>
            </Code>
            <p className="bg-violet-100 text-black p-3 rounded-lg text-[1.1rem] leading-8">{copyClear_docs.Parameter}</p>
            <p className="text-[1.5rem] font-bold">Example</p>
            <Code title={'copyClear'}>
                <CodeSnippet codeString={copyClear_docs.example2}/>
            </Code>
            <p className="bg-violet-100 text-black p-3 rounded-lg text-[1.1rem] leading-8">{copyClear_docs.ex_descrip}</p>
            <p className="text-[1.5rem] font-bold">Practical Example</p>
            <Code title={'copyClear'}>
                <CodeSnippet codeString={copyClear_docs.practical_example}/>
            </Code>
            <ul className="bg-green-100 text-black p-3 rounded-lg text-[1.1rem] leading-8 list-disc px-10">
                {copyClear_docs.ex_descrip_2.map((text, id) => (
                    <li key={id}>{text}</li>
                ))}
            </ul>
            <hr className='border-[1.2px] mt-5 text-black'/>
        </div>
    )
};
