import Link from "next/link";

export default function Loading() {
  return (
    <div className="min-h-screen w-screen bg-[#f4f8f5]">
      {/* Header Section */}
      <div
        className="bg-[#F0F5F2] lg:h-16 fixed top-0 flex items-center px-8 text-black w-full shadow z-10 py-4"
        id="header"
      >
        <Link href="/" className="w-full text-2xl font-bold cursor-pointer">
          Augustine Osezua
        </Link>
        <div className="hidden lg:flex lg:gap-10 gap-5 lg:text-lg font-medium justify-end w-full">
          <Link className="hover:underline cursor-pointer" href="/">
            Home
          </Link>
          <a className="hover:underline cursor-pointer" href="mailto:augustineosezua1@gmail.com">
            Contact
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-24 px-10 min-h-screen flex items-center justify-center">
        <div className="max-w-[600px] text-center">
          <p className="text-lg text-[#001219] pb-2">Augustine is currently:</p>
          <h1 className="text-4xl font-bold text-[#10B981] pb-4 animate-pulse">Loading...</h1>
        </div>
      </div>
    </div>
  );
}
