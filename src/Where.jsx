import { Link } from "react-router-dom";
import BouncingBalls from "./BouncingBalls";

function Where() {
  // TODO: Replace with data from database
  const message = {
    title: "Asleep.. What y'all know about QHacks?",
    date: "February 8, 2026 at 12:00PM"
  };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-screen bg-[#f4f8f5]">
      {/* Header Section */}
      <div
        className="bg-[#F0F5F2] lg:h-16 fixed top-0 flex items-center px-8 text-black w-full shadow z-10 py-4"
        id="header"
      >
        <Link to="/" className="w-full text-2xl font-bold cursor-pointer" onClick={toTop}>
          Augustine Osezua
        </Link>
        <div className="hidden lg:flex lg:gap-10 gap-5 lg:text-lg font-medium justify-end w-full">
          <Link className="hover:underline cursor-pointer" to="/">
            Home
          </Link>
          <a className="hover:underline cursor-pointer" href="mailto:augustineosezua1@gmail.com">
            Contact
          </a>
        </div>
      </div>

      {/* Bouncing Balls Animation */}
      <div className="absolute top-16 left-0 w-full h-[calc(100%-var(--spacing)*16)] flex items-center justify-center pointer-events-none">
        <BouncingBalls />
      </div>

      {/* Content Section */}
      <div className="pt-24 px-10 min-h-screen flex items-center justify-center">
        <div className="max-w-[600px] text-center">
          <h1 className="text-4xl font-bold text-[#10B981] pb-4">{message.title}</h1>
          <p className="text-lg text-[#001219] leading-relaxed pb-4">
            Last updated {message.date}
          </p>
          <Link 
            to="/" 
            className="inline-block mt-8 bg-[#001219] text-white px-6 py-3 text-lg rounded-lg hover:bg-[#02384e] cursor-pointer"
          >
            ← Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Where