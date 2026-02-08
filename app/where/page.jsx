import Link from "next/link";
import BouncingBalls from "@/components/BouncingBalls";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Where() {
  let title = "Out of Office";
  let date = null;

  try {
    const status = await prisma.status.findFirst({
      orderBy: { updatedAt: "desc" },
    });

    if (status) {
      title = status.title;
      date = status.updatedAt.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
    }
  } catch {}

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

      {/* Bouncing Balls Animation */}
      <div className="absolute top-16 left-0 w-full h-[calc(100%-var(--spacing)*16)] flex items-center justify-center pointer-events-none">
        <BouncingBalls />
      </div>

      {/* Content Section */}
      <div className="pt-24 px-10 min-h-screen flex items-center justify-center">
        <div className="max-w-[600px] text-center">
          <p className="text-lg text-[#001219] pb-2">Augustine is currently:</p>
          <h1 className="text-4xl font-bold text-[#10B981] pb-4">{title}</h1>
          <p className="text-lg text-[#001219] leading-relaxed pb-4">
            {date ? `Last updated ${date}` : "Idk bro, this guy's been missing for a month"}
          </p>
          <Link
            href="/"
            className="inline-block mt-8 bg-[#001219] text-white px-6 py-3 text-lg rounded-lg hover:bg-[#02384e] cursor-pointer"
          >
            ← Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
