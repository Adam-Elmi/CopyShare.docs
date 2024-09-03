import { copyImage, copyHistory } from "copy-share";
import { useRef, useEffect, useState } from "react";
import image from '/src/assets/pic/Naruto-gathering.jpg';
const Image = () => {
    const imageRef = useRef(null);
    
    useEffect(() => {
        // Log the imageRef.current after the component mounts
        if (imageRef.current) {
            console.log(imageRef.current.src);
        }
    }, []); // Empty dependency array means this runs once when the component mounts

    const handleCopy = () => {
        if (imageRef.current) {
            copyImage(imageRef.current.src);
        }
    };
    return (
        <div className='w-full relative flex flex-col bg-white h-[320px] border rounded-lg shadow-md overflow-hidden'>
            <button onClick={handleCopy} className="fa-regular fa-copy absolute top-0 right-0 bg-gray-900 p-3 text-white" title="Copy"></button>
            <img ref={imageRef} src={image} alt="picture" className='max-w-full object-cover w-full h-full' />
        </div>
    );
};

export default Image;
