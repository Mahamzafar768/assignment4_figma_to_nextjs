import React from 'react';
import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
    return (
        <>
            <section className="flex flex-col justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 font-sans">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-[200px] gap-8 h-[70vh] w-full">
                    {/* Left Text Section */}
                    <div className="text-center md:text-left">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-light">Hello, I'm</h1>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">Mehmat Akif</h1>
                    </div>
                    {/* Right Description Section */}
                    <div className="text-center md:text-left max-w-md">
                        <h3 className="text-sm sm:text-base md:text-lg">
                            A senior-year design student who is trying to specialize in 3D modeling & texturing.
                        </h3>
                    </div>
                </div>
                {/* Arrow Down */}
                <div>
                    <FaArrowDown size={37} className="animate-bounce text-gray-600 text-left"/>
                </div>
            </section>
        </>
    );
};

export default Hero;
