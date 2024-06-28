import React, { useState } from 'react'
import { useRef } from 'react';
export const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const totalVideos = 4;
    const nextVdRef = useRef(null);

    const handleVideoLoaded = () => {
        setLoadedVideos((prevLoaded) => prevLoaded + 1);
    }
    const handleMiniVdClick = () => {

        setHasClicked(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1));
    }
    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;


    return (
        <div className='relative h-dvh w-screen overlow-x-hidden '>

            <div id='video-frame' className='relative  z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75 '>

                <div >

                    <div className=' mask-clip-path absolute 
                     absolute-center z-50 size-64 cursor-pointer
                      overflow-hidden rounded-lg'
                        >
                         <div
                         onClickCapture={handleMiniVdClick}
                         className='origin-center scale-50  opacity-0 transition-all duration-500 ease-in
                         hover:opacity-100'>
                       
                        <video
                            loop
                            ref={nextVdRef}
                            src={getVideoSrc(currentIndex + 1)}
                            muted
                            autoPlay
                            id='`current`'
                       />


                      </div>
                    </div>

                </div>

            </div>




        </div>
    )
}
