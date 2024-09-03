import { useState } from 'react';
import { copyLink } from 'copy-share';
const Link = () => {
    const defaultText = 'https://discord.com/users/750205351210778804';
    const [text, setText] = useState(defaultText);
    return (
        <div className='w-full border-2 border-violet-200 flex gap-5 items-center bg-gray-900 h-auto shadow-md overflow-hidden'>
            <input onChange={(e) => setText(e.target.value)} type="text" value={defaultText} className="flex-1 bg-transparent ml-2 px-2 italic  text-violet-200" />
            <button onClick={() => copyLink(text)} className="fa-regular fa-copy bg-gray-800 p-3 text-white" title="Copy"></button>
        </div>
    );
};

export default Link;