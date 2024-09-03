import { copyVideoUrl } from "copy-share";
import { useRef } from "react";
import video from '/src/assets/video/vseason2.mp4';

const Video = () => {
    const videoRef = useRef(null);
    return (
        <div className="relative w-full bg-black h-[320px] border rounded-lg shadow-md overflow-hidden flex justify-center items-center">
            <button 
                onClick={() => copyVideoUrl(videoRef.current.src)}
                className="fa-regular fa-copy absolute top-0 right-0 bg-gray-900 p-3 text-white z-10" 
                title="Copy"
            ></button>
            <div className="relative w-full h-full">
                <video 
                    ref={videoRef}
                    controls 
                    src={video}
                    className="absolute inset-0 w-full h-full object-cover"
                ></video>
            </div>
        </div>
    );
};

export default Video;
