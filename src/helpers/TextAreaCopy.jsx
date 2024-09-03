import React, { useState } from 'react';
import { copyText, copyHistory } from 'copy-share';
const TextAreaCopy = () => {
    const defaultText = 'Adam, a developer, was frustrated by the need to repeatedly write the same code for copying and sharing content, which was both time-consuming and error-prone. To address this, he created CopyShare, a library designed to simplify and streamline the process. CopyShare allows developers to handle text, images, and videos with ease, manage clipboard history, and avoid redundant coding. This solution saves time and reduces the risk of errors, making it easier for developers to integrate copy functionality into their projects.';
    const [text, setText] = useState(defaultText);
    return (
        <div className='w-full flex flex-col bg-white h-[320px] border rounded-lg shadow-md overflow-hidden'>
            <div className='bg-violet-500 border-b p-2 flex justify-end'>
                <button onClick={() => copyText(text).then(() => copyHistory())} className='text-white bg-gray-900 py-1 px-4 rounded-lg'>Copy</button>
            </div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} id="textArea" className='w-full h-full outline-none text-black p-4 resize-none'>
            </textarea>
        </div>
    );
};

export default TextAreaCopy;
