import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-20 font-sans">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:max-w-lg">
            <h2 className="my-4 text-xl sm:text-2xl lg:text-3xl font-semibold">
              Hi, I’m Mehmet Akif Karasu, <br /> 3D artist & sculptor.
            </h2>
            <h3 className="my-4 text-sm sm:text-base lg:text-lg">
              My work is mainly focused on third-dimension modeling, texturing,
              and rendering. I like exploring the creatures with a touch of dark
              surrealism for characters and production.
            </h3>
            <p className="text-[#606060] text-sm sm:text-base">
              Now I’m an interactive media design student in Istanbul ⏤
              currently freelancing and seeking internship opportunities.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full sm:w-3/4 lg:w-1/3 py-10">
            <Image
              src={"/profile.png"}
              width={521}
              height={490}
              alt="profile"
              className="rounded-lg mx-auto lg:mx-0"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-20 font-sans">
        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col sm:flex-row gap-8">
            <h1 className="underline text-base sm:text-lg font-semibold">
              Main Software
            </h1>
            <h3 className="text-sm sm:text-base">
              Pixologic ZBrush, Autodesk Maya, The Foundry Mari,<br /> Arnold
              Renderer, Blender, Forger
            </h3>
          </div>
         
          <div className="flex flex-col sm:flex-row gap-14">
            <h1 className="underline text-base sm:text-lg font-semibold">
              Main Skills
            </h1>
            <h3 className="text-sm sm:text-base">
              Organic and Polygonal Modeling, UV Layout,<br /> Texturing, Retopology,
              Illustration, Sound Design
            </h3>
          </div>
        </div>
      </section>

      <hr className="hidden md:block mt-14 h-[3px] bg-[#181717] w-[90%] mx-auto" />

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-20 font-sans">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="text-center lg:text-left">
            <h3 className="font-bold text-lg sm:text-xl">
              I am thrilled to answer <br /> your next project.
            </h3>
          </div>
          <div className="text-center lg:text-right">
            <h2 className="font-bold text-lg sm:text-xl">
              makifkarasu@outlook.com
            </h2>
            <Link
              href={
                "https://www.linkedin.com/in/makif-karasu-6a8a6a261/"
              }
              className="text-blue-600 underline"
            >
              View Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
