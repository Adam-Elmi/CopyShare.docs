import { useState, useContext } from 'react';
import { ThemeContext } from "../helpers/DarkMode";
import CodeSnippet from '../helpers/CodeSnippet';
import { Link } from 'react-router-dom';

export function Support() {
    const { isDark } = useContext(ThemeContext);
    return (
        <div id='Support' className={`support-section w-[70%] ml-[30%] max-lg:ml-[0%] max-lg:w-full py-8 h-auto px-5  ${isDark ? 'text-white bg-gray-800' : 'text-black bg-slate-100'} max-md:w-full`}>
            <h1 className="text-violet-400 text-[2rem] font-bold text-center">Support</h1>
            <p className="mt-2 mb-5 text-gray-600  text-[1.1rem]">
                If you need help or have any questions about using the library, here are some ways you can get support:
            </p>
            <ul className="list-disc list-inside space-y-5 text-[1.1rem]">
                <li>
                    <strong>Documentation:</strong> Visit our <Link to={'/api-references'} className="text-blue-500 hover:underline">official documentation</Link> for detailed guides and examples.
                </li>
                <li>
                    <strong>GitHub Issues:</strong> Report any bugs or request new features on our <a href="#" className="text-blue-500 hover:underline">GitHub repository</a>.
                </li>
                <li>
                    <strong>Email Support:</strong> For direct assistance, email us at <a href="mailto:adamcade123@gmail.com" className="text-blue-500 hover:underline">adamcade123@gmail.com</a>.
                </li>
            </ul>
        </div>
    );
}
