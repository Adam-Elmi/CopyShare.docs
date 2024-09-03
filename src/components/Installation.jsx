import { useContext } from "react";
import CodeSnippet from "../helpers/CodeSnippet";
import { Code } from "../helpers/Code";
import TextAreaCopy from "../helpers/TextAreaCopy";
import { ThemeContext } from "../helpers/DarkMode";
import { code } from "../helpers/ExtraData";

const Installation = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <div id="How to install" className={`installation w-[70%] ml-[30%] px-5 flex flex-col gap-5 mt-16 max-lg:ml-[0%] max-lg:w-full py-8 h-auto  ${isDark ? 'text-white bg-gray-900' : 'text-gray-600 bg-white'} max-md:w-full`}>
        <h2 className="text-2xl font-bold mb-4 text-violet-400">Installation</h2>
        
        <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Step 1: Install the Library</h3>
            <p className="mb-2 ">Using npm:</p>
            <CodeSnippet language={'bash'} codeString={'npm install copy-share'}/>
        </div>
        <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Step 2: Import and Use the Component</h3>
            <p className="mb-2">Import the component into your React project:</p>
            <CodeSnippet codeString={'import { copyText } from "copy-share";'}/>
            <p className="mb-2 mt-5">Then use it in your project:</p>
            <div id="showcase" className={`flex flex-col h-auto relative w-full justify-between items-center gap-4 max-md:flex-col max-md:w-full  px-4 py-5`}>
                    <Code title={'copyText'}>
                        <CodeSnippet codeString={code}/>
                    </Code>                    
                    <div className="w-full relative  flex justify-center items-center  leading-10 text-[1.2rem] max-md:w-full max-md:max-w-[100%]">
                        <TextAreaCopy/>
                    </div>
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Alternative: Include via HTML Script Tag</h3>
            <p className="mb-2">You can also include the library directly in your HTML file:</p>
            <CodeSnippet language={'html'} codeString={`
            <script type="module">
                import { copyText } from 'https://cdn.jsdelivr.net/npm/copy-share@1.1.0/copyShare.min.js';
                    document.getElementById('btn').onclick = () => {
                        copyText(document.getElementById('text').value);
                };
            </script>
`}/>
        </div>
    );
};

export default Installation;
