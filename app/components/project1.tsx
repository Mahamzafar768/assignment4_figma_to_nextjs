import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowRoundForward} from "react-icons/io";

const Project1 = () => {
  return (
    <>
      <section className="py-10 px-4 md:px-10 lg:px-20 my-10 font-sans">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="my-4 text-xl md:text-2xl font-semibold">
              01/ PROJECT NAME
            </h2>
            <h3 className="my-4 text-base md:text-lg lg:text-xl">
              Goblin concept digital sculpture with <br className="hidden md:block" /> human-like skin. Learned a lot of quick tips <br className="hidden md:block" /> and look development.
            </h3>
            <p className="text-[#606060] text-sm md:text-base">
              Sculpted in ZBrush, Retopologized and UVs done <br className="hidden md:block" /> in Maya, Textured in Mari, Rendered using Arnold.
            </p>
            <div className="mt-10 md:mt-20">
              <Link
                href="/project1-details"
                className="underline text-black text-lg md:text-2xl lg:text-3xl flex items-center gap-2 justify-center lg:justify-start"
              >
                More shots from this project <GoArrowUpRight size={24} className='animate-bounce' />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              src={'/Thumbnail.png'}
              width={640}
              height={364}
              alt="profile"
              className="rounded-lg w-full"
            />
          </div>
        </div>
        <hr className='hidden md:block mt-14 h-[3px] bg-[#181717]'/>
      </section>
      <section className="py-10 px-4 md:px-10 lg:px-20 my-10 font-sans">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="my-4 text-xl md:text-2xl font-semibold">
            02 / PROJECT NAME
            </h2>
            <h3 className="my-4 text-base md:text-lg lg:text-xl">
            Subsurface weight, specular roughness, <br className="hidden md:block" />  diffuse maps generated with the procedure <br className="hidden md:block" />  and manual techniques.
            </h3>
            
            <div className="mt-10 md:mt-28">
              <Link
                href="/project1-details"
                className="underline text-black text-lg md:text-2xl lg:text-3xl flex items-center gap-2 justify-center lg:justify-start"
              >
                See case study <IoIosArrowRoundForward size={30} />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              src={'/Thumbnail.png'}
              width={640}
              height={364}
              alt="profile"
              className="rounded-lg w-full"
            />
          </div>
        </div>
        <hr className='hidden md:block mt-14 h-[3px] bg-[#181717]'/>
      </section>

      <section className="py-10 px-4 md:px-10 lg:px-20 my-10 font-sans">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="my-4 text-xl md:text-2xl font-semibold">
            03 / PROJECT NAME
            </h2>
            <h3 className="my-4 text-base md:text-lg lg:text-xl">
            Experimental creature modeling for school <br className="hidden md:block" /> project.
            </h3>
            
            <div className="mt-10 md:mt-28">
              <Link
                href="/project1-details"
                className="underline text-black text-lg md:text-2xl lg:text-3xl flex items-center gap-2 justify-center lg:justify-start"
              >
                Project WIP 
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              src={'/Thumbnail.png'}
              width={640}
              height={364}
              alt="profile"
              className="rounded-lg w-full"
            />
          </div>
        </div>
        <hr className='hidden md:block mt-14 h-[3px] bg-[#181717]'/>
      </section>
    </>
  );
};

export default Project1;


