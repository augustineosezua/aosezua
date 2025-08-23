import { useEffect } from "react";
import TypeW from "./Typewrite";
import BouncingBalls from "./BouncingBalls";
import Icons from "./Icons";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-[#f4f8f5] pt-20">
        {/* Header Section */}
        <div
          className="bg-[#F0F5F2] h-16 fixed top-0 flex items-center lg:justify-end px-8 text-black w-full shadow z-2"
          id="header"
        >
          <div className="hidden lg:flex lg:gap-10 gap-5 lg:text-lg font-medium">
            <span className="hover:underline cursor-pointer">About</span>
            <span className="hover:underline cursor-pointer">Experience</span>
            <span className="hover:underline cursor-pointer">Projects</span>
            <span className="hover:underline cursor-pointer">Contact</span>
          </div>
        </div>
        {/* Bouncing Balls Animation */}
        <div className="absolute top-16 left-0 w-full h-[calc(100%-var(--spacing)*16)] flex items-center justify-center pointer-events-none">
          <BouncingBalls />
        </div>
        <div id="main-body" className="w-screen mt-16 relative h-full">
          {/* Hero Section */}
          <div
            className="text-2xl text-[#001219] lg:ml-60 flex flex-col gap-3 w-full z-10 h-[calc((100%)-var(--spacing)*16)]"
            id="hero"
          >
            <span className="font-bold pb-2">Hey, I'm </span>
            <span className="font-bold text-5xl text-[#10B981] pb-2">
              Augustine Osezua
            </span>
            <div className="text-2xl text-[#001219] flex items-center gap-1 pb-2">
              A{" "}
              <span className="font-bold underline">
                <TypeW />
              </span>
            </div>
            <span className="text-xl pb-4 max-w-[500px]">
              I love turning ideas into user-friendly apps. I enjoy building
              smooth experiences and reliable systems that make a difference.
            </span>
            <button className="bg-[#001219] text-white px-6 py-3 rounded-lg hover:bg-[#02384e] w-fit cursor-pointer">
              Contact Me{" "}
            </button>
          </div>
          <div
            className="text-2xl text-[#001219] flex flex-col items-center gap-1 pb-2 bg-[#E6EBE8] "
            id="sections"
          >
            <div
              id="about"
              className="h-[calc((100vh)-var(--spacing)*16)] pt-32 flex flex-col gap-3 w-full lg:px-60"
            >
              <div className="max-w-[500px] ">
                <h2 className="font-bold">About</h2>
                <p className="text-lg pt-2">
                  I'm Augustine, a Computing student at Queen's University with
                  a passion for building practical and impactful technology. My
                  interests span web development, database systems, and
                  algorithm design, and I enjoy turning complex ideas into
                  clean, functional solutions. I'm especially drawn to projects
                  at the intersection of software and health care, where
                  technology can directly improve people's lives.
                </p>
                <h3 className="font-bold pt-4">My Tech Stack</h3>
              </div>
              <div className="relative overflow-hidden h-20 rounded-lg">
                <div className="flex gap-6 items-center h-full animate-scroll-horizontal">
                  <Icons />
                </div>
              </div>
            </div>
            <div
              id="projects"
              className="h-[calc((100vh)-var(--spacing)*16)] pt-32 flex flex-col gap-3 w-full bg-[#f4f8f5] lg:px-60 text-right"
            >
              <h2 className="font-bold">Experience</h2>
              <p className="text-lg pt-2">
                Hey Guys some of my experiences here
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
