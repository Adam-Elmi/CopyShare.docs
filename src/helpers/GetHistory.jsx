import { Code } from './Code';
import CodeSnippet from './CodeSnippet';
import { getHistory_docs } from './MyData';
import Note from './Note';

export function GetHistory() {
    return (
        <div id='GetHistory' className="flex flex-col gap-5 mb-5">
            <h1 className="relative text-[2rem] font-bold text-blue-300"><span className="fa-solid fa-cube text-[1.6rem]"></span> {getHistory_docs.method}</h1>
            <Code title={'GetHistory'}>
                <CodeSnippet codeString={getHistory_docs.syntax}/>
            </Code>
            <p className="leading-8 text-[1.1rem] bg-violet-100 text-black p-3 rounded-lg ">
                {getHistory_docs.description}
            </p>
            <Code title={'getHistory'}>
                <CodeSnippet codeString={getHistory_docs.example1}/>
            </Code>
            <p className="bg-violet-100 text-black p-3 rounded-lg text-[1.1rem] leading-8">{getHistory_docs.Parameter}</p>
            <p className="text-[1.5rem] font-bold">Example</p>
            <Code title={'getHistory'}>
                <CodeSnippet codeString={getHistory_docs.example2}/>
            </Code>
            <p className="bg-violet-100 text-black p-3 rounded-lg text-[1.1rem] leading-8">{getHistory_docs.ex_descrip}</p>
            <p className="text-[1.5rem] font-bold">Practical Example</p>
            <Code title={'getHistory'}>
                <CodeSnippet codeString={getHistory_docs.practical_example}/>
            </Code>
            <ul className="bg-green-100 text-black p-3 rounded-lg text-[1.1rem] leading-8 list-disc px-10">
                {getHistory_docs.ex_descrip_2.map((text, id) => (
                    <li key={id}>{text}</li>
                ))}
            </ul>
            <Note correct={'Using getHistory with other methods'} correctMessage={'Works as expected'}  incorrect={'Using getHistory itself'} incorrectMessage={'Will not work as expected'}/>
            <hr className='border-[1.2px] mt-5 text-black'/>
        </div>
    )
};
