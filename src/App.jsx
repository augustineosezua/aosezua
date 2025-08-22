import { useEffect } from "react";
import TypeW from "./Typewrite";
import BouncingBalls from "./BouncingBalls";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex relative bg-[#f4f8f5]">
        <div
          className="bg-[#F0F5F2] h-16 fixed top-0 flex items-center lg:justify-end px-8 text-black w-full shadow z-2"
          id="header">
          <div className="hidden lg:flex lg:gap-10 gap-5 lg:text-lg font-medium">
            <span className="hover:underline cursor-pointer">About</span>
            <span className="hover:underline cursor-pointer">Experience</span>
            <span className="hover:underline cursor-pointer">Projects</span>
            <span className="hover:underline cursor-pointer">Contact</span>
          </div>
        </div>
        <div className="absolute top-16 left-0 w-full h-[calc(100%-var(--spacing)*16)] flex items-center justify-center pointer-events-none">
          <BouncingBalls />
        </div>

        <div id="main-body" className="h-full w-screen mt-16 relative lg:ml-96">
          <div className="text-2xl text-[#001219] flex flex-col gap-3 pt-20 w-[500px] relative z-10" id="hero">
            <span className="font-bold pb-2">Hey, I'm </span>
            <span className="font-bold text-5xl text-[#FAD21A] pb-2">Augustine Osezua</span>
            <div className="text-2xl text-[#001219] flex items-center gap-1 pb-2">
              A{" "}
              <span className="font-bold underline">
                <TypeW />
              </span>
            </div>
            <span className="text-xl pb-4">
              I'm a software engineer who loves turning ideas into user-friendly apps. I enjoy building smooth
              experiences and reliable systems that make a difference.
            </span>
            <button className="bg-[#001219] text-white px-6 py-3 rounded-lg hover:bg-[#02384e] w-fit cursor-pointer">
              View Projects{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
