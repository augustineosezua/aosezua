import TypeW from "./Typewrite";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex">
        <div
          className="bg-[#F0F5F2] h-16 fixed flex items-center lg:justify-end px-8 text-black w-full shadow"
          id="header"
        >
          <div className="hidden lg:flex lg:gap-10 gap-5 lg:text-lg font-medium">
            <span className="hover:underline cursor-pointer">About</span>
            <span className="hover:underline cursor-pointer">Experience</span>
            <span className="hover:underline cursor-pointer">Projects</span>
            <span className="hover:underline cursor-pointer">Contact</span>
          </div>
        </div>
        <div id="main-body" className="h-full w-screen pt-16 relative">
          <div className="text-2xl text-[#001219] w-full justify-center flex items-center flex-col gap-3 pt-20">
            <span className="font-bold">Hey, I'm </span>
            <span className="font-bold text-5xl text-[#FAD21A]">Augustine Osezua</span>
            <div className="text-2xl text-[#001219] flex items-center gap-1">
              A{" "}
              <span className="font-bold underline">
                <TypeW />
              </span>
            </div>
          </div>
          <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 h-[400px] bg-red-500 w-[800px] rounded-tl-full rounded-tr-full">

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
