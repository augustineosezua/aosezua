import Link from "next/link";
import Header from "@/components/Header";
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
        timeZone: "America/New_York",
      });
    }
  } catch (error) {
    console.error("Failed to load status:", error);
  }

  return (
    <div className="dots flex min-h-screen flex-col pt-20">
      <Header />

      <main className="relative flex flex-grow items-center justify-center px-5 py-16 lg:px-16">
        <div className="absolute inset-0 hidden lg:block">
          <BouncingBalls scale={0.7} />
        </div>

        <div className="relative flex w-full max-w-[620px] flex-col gap-5 bg-white p-7 sticker-lg lg:-rotate-1 lg:p-12 lg:shadow-[12px_12px_0_var(--color-ink)]">
          <span className="absolute -top-5 -left-3 -rotate-6 bg-sun px-3 py-1.5 text-sm font-bold sticker lg:-top-6 lg:-left-4 lg:px-4 lg:py-2 lg:text-[15px]">
            Right now
          </span>
          <p className="text-lg font-semibold lg:text-xl">Here&apos;s what I&apos;m up to:</p>
          <h1 className="font-display text-[44px] leading-none font-extrabold tracking-[-0.03em] text-mint lg:text-7xl">
            {title}
          </h1>
          <p className="flex items-center gap-2.5 text-[15px] font-semibold opacity-70">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-mint" />
            {date ? `Last updated ${date} ET` : "Status unavailable"}
          </p>
          <Link
            href="/"
            className="mt-2 inline-flex w-fit items-center gap-2.5 bg-ink px-6 py-3.5 text-[17px] font-bold text-cream sticker-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5" />
              <path d="M11 18l-6-6 6-6" />
            </svg>
            Back to my site
          </Link>
        </div>
      </main>
    </div>
  );
}
