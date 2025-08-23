import { useEffect } from "react";
import TypeW from "./Typewrite";
import BouncingBalls from "./BouncingBalls";
import Icons from "./Icons";
import Timeline from "./Timeline";
import linkedinIcon from "./assets/about-svgs/linkedin.svg";
import ProjectsGrid from "./ProjectGrid";
import GithubIcon from "./assets/about-svgs/github.svg";
import navIcon from "./assets/about-svgs/nav.svg";
import MobileNav from "./MobileNav";

function App() {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="h-screen w-screen bg-[#f4f8f5] pt-20">
        {/* Header Section */}
        <div
          className="bg-[#F0F5F2] lg:h-16 fixed top-0 flex items-center px-8 text-black w-full shadow z-2 py-4"
          id="header"
        >
          <div className="w-full text-2xl font-bold cursor-pointer" onClick={toTop}>
            Augustine Osezua
          </div>
          <div className="hidden lg:flex lg:gap-10 gap-5 lg:text-lg font-medium justify-end w-full">
            <a className="hover:underline cursor-pointer" href="#about">
              About
            </a>
            <a className="hover:underline cursor-pointer" href="#experience">
              Experience
            </a>
            <a className="hover:underline cursor-pointer" href="#projects">
              Projects
            </a>
            <a className="hover:underline cursor-pointer" href="mailto:augustineosezua1@gmail.com">
              Contact
            </a>
          </div>
        </div>
        <MobileNav />
        {/* Bouncing Balls Animation */}
        <div className="absolute top-16 left-0 w-full h-[calc(100%-var(--spacing)*16)] flex items-center justify-center pointer-events-none">
          <BouncingBalls />
        </div>
        <div id="body" className="w-screen mt-16 relative h-full">
          {/* Hero Section */}
          <div
            className="text-2xl text-[#001219] lg:ml-60 px-4 lg:px-0 word-break flex flex-col gap-3 w-full z-10 h-[calc((100%)-var(--spacing)*16)]"
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
            <div className="flex items-center gap-4" id="contact">
              <a className="bg-[#001219] text-white px-6 py-3 text-lg rounded-lg hover:bg-[#02384e] w-fit cursor-pointer" href="mailto:augustineosezua1@gmail.com">
                Contact Me{" "}
              </a>{" "}
              <a
                className="w-14 flex-shrink-0 hover:cursor-pointer"
                href="https://www.linkedin.com/in/augustineosezua/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" />
              </a>
              <a
                className="w-14 flex-shrink-0 hover:cursor-pointer"
                href="https://github.com/chickenjsx"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={GithubIcon} alt="GitHub Icon" />
              </a>
            </div>
          </div>
          <div
            className="text-2xl text-[#001219] flex flex-col items-center gap-1 bg-[#E6EBE8]"
            id="sections"
          >
            <div
              id="about"
              className="h-[calc((100vh)-var(--spacing)*16)] pt-16 flex flex-col gap-3 w-full lg:px-60 px-10"
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
              id="experience"
              className="relative min-h-[calc((100vh)-var(--spacing)*16)] pt-16 flex items-end flex-col gap-3 w-full bg-[#f4f8f5] lg:px-60 px-10 text-right pb-10"
            >
              <div className="absolute top-16 left-0 w-full min-h-[calc(100%-var(--spacing)*16)] flex items-center justify-center pointer-events-none">
                <BouncingBalls />
              </div>
              <h2 className="font-bold">Experience</h2>
              <div className="text-base max-w-[500px] text-justify">
                <Timeline />
              </div>
            </div>
            <div
              className="relative min-h-[calc((100vh)-var(--spacing)*16)] pt-16 flex flex-col gap-3 w-full lg:px-60 px-10 pb-10"
              id="projects"
            >
              <h2 className="font-bold">Projects</h2>
              <div className="text-base text-justify">
                <ProjectsGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
