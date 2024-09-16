import { useState, useContext } from 'react';
import { ThemeContext } from "../helpers/DarkMode";
import CodeSnippet from '../helpers/CodeSnippet';

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const { isDark } = useContext(ThemeContext);
    const faqs = [
        {
            question: "What is this library used for?",
            answer: "This library allows you to easily copy text, images, videos, and other content to the clipboard. It provides a simple API to handle copying functionality across modern browsers with built-in security and feedback features."
        },
        {
            question: "Which browsers are supported?",
            answer: "The library supports all older and modern browsers including Chrome, Firefox, Safari, Edge, and Opera. It ensures consistent performance across these platforms."
        },
        {
            question: "How does the library handle security?",
            answer: "The library includes built-in sanitization to protect against potential security issues. All copied content is sanitized to remove any potentially harmful elements."
        },
        {
            question: "How do I install the library?",
            answer: (
                <div>
                    You can install the library via npm or yarn. Simply run:
                    <CodeSnippet language={'html'} codeString={`
    <script type="module">
        import { copyText } from 'https://cdn.jsdelivr.net/npm/copy-share/copyShare.min.js';
        
        document.getElementById('btn').onclick = () => {
            copyText(document.getElementById('text').value);
        };
    </script>
                    `}/>
                    or
                    <CodeSnippet language={'bash'} codeString={`npm install copy-share`}/>
                </div>
            )
        },
        {
            question: "How do I use the copy functionality?",
            answer: (
                <div>
                    Here’s a basic example of how to use the library:
                    <CodeSnippet codeString={`
    import { copyText } from 'copy-share';
    function handleCopy() {
        copyText('Text to copy');
    }`
}/>
                    This function will copy the specified text to the clipboard.
                </div>
            )
        },
        {
            question: "How can I contribute to the library?",
            answer: <p>We welcome contributions! Please check our <a href="https://github.com/Adam-Elmi/CopyShare.git" className='text-blue-400' target='_blank'>GitHub repository</a> for guidelines on contributing, reporting issues, or submitting feature requests.</p>
        },
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id='FAQ' className={`help faq-caption w-[70%] ml-[30%] mt-16 max-lg:ml-[0%] max-lg:w-full py-8 h-auto px-5  ${isDark ? 'text-white bg-gray-900' : 'text-black bg-white'} max-md:w-full`}>
            <h1 className="text-violet-400 text-[2rem] font-bold text-center">FAQ</h1>
            <div className="mt-5">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-t border-gray-200">
                        <button
                            className={`w-full flex justify-between text-left py-3 px-4 font-semibold text-gray-800 ${isDark ? 'text-white hover:bg-gray-800' : 'text-gray-800 hover:bg-gray-100'}  focus:outline-none`}
                            onClick={() => handleToggle(index)}
                        >
                            {faq.question}
                            <span className='fa-solid fa-caret-down'></span>
                        </button>
                        {activeIndex === index && (
                            <div className="py-2 px-4  leading-8 text-slate-700 bg-slate-200">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
