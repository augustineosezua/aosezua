"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import Header from "@/components/Header";
import TypeW from "@/components/Typewrite";
import BouncingBalls from "@/components/BouncingBalls";
import Marquee from "@/components/Marquee";
import Timeline from "@/components/Timeline";
import ProjectsGrid from "@/components/ProjectGrid";
import { GithubIcon } from "@/components/ProjectGrid";

const STACK = [
  { name: "React" },
  { name: "Next.js", color: "bg-mint" },
  { name: "Node.js" },
  { name: "JavaScript", color: "bg-sun" },
  { name: "Python" },
  { name: "Java" },
  { name: "PostgreSQL", color: "bg-coral" },
  { name: "MySQL" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Git" },
  { name: "Figma" },
  { name: "Illustrator" },
];

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function SectionHeading({ number, title, color, tilt }) {
  return (
    <div className="flex items-center gap-3 lg:gap-4">
      <span
        className={`inline-flex h-9 w-9 items-center justify-center font-display text-base font-extrabold sticker lg:h-11 lg:w-11 lg:text-xl ${color} ${tilt}`}
      >
        {number}
      </span>
      <h2 className="font-display text-[38px] font-extrabold tracking-tight lg:text-[56px]">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="dots min-h-screen pt-20">
      <Header />

      {/* Hero */}
      <section className="relative grid grid-cols-1 gap-10 px-5 pt-10 pb-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-16 lg:pt-24 lg:pb-20">
        <div className="flex flex-col gap-[18px] lg:gap-6">
          <span className="w-fit -rotate-3 bg-coral px-3 py-1.5 text-sm font-bold sticker lg:px-4 lg:py-2 lg:text-base">
            Hey, I&apos;m
          </span>
          <h1 className="font-display text-[60px] leading-[0.92] font-extrabold tracking-[-0.03em] lg:text-[104px]">
            Augustine
            <br />
            Osezua
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-lg font-semibold lg:gap-3 lg:text-[26px]">
            <span>A</span>
            <span className="rotate-[1.5deg] bg-mint px-2.5 py-0.5 sticker lg:px-3.5 lg:py-1">
              <TypeW />
            </span>
          </div>
          <p className="max-w-[520px] text-[17px] leading-relaxed lg:text-xl">
            I build full-stack web apps, and I&apos;m happiest somewhere between a rough sketch and
            a stubborn bug. I&apos;m currently studying Computing at Queen&apos;s University.
          </p>
          <div className="flex items-center gap-3 pt-1 lg:gap-3.5 lg:pt-2" id="contact">
            <a
              href="mailto:augustineosezua1@gmail.com"
              className="inline-flex items-center gap-2.5 bg-ink px-5 py-3.5 text-base font-bold text-cream sticker-btn lg:px-7 lg:py-4 lg:text-lg"
              onClick={() => track("contact_click", { location: "hero" })}
            >
              Send me an email <ArrowIcon />
            </a>
            <a
              className="inline-flex h-[50px] w-[50px] items-center justify-center bg-white sticker-btn lg:h-14 lg:w-14"
              href="https://www.linkedin.com/in/augustineosezua/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              onClick={() => track("social_click", { platform: "linkedin" })}
            >
              <LinkedInIcon />
            </a>
            <a
              className="inline-flex h-[50px] w-[50px] items-center justify-center bg-white sticker-btn lg:h-14 lg:w-14"
              href="https://github.com/augustineosezua"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              onClick={() => track("social_click", { platform: "github" })}
            >
              <GithubIcon size={22} />
            </a>
          </div>
          <div className="flex gap-2.5 pt-3 lg:hidden">
            <span className="-rotate-3 bg-white px-3 py-1.5 font-display text-[13px] font-extrabold sticker-sm">
              Queen&apos;s CS &apos;28
            </span>
            <span className="rotate-3 bg-sun px-3 py-1.5 font-display text-[13px] font-extrabold sticker-sm">
              Spider-Man fan
            </span>
          </div>
        </div>

        <div className="relative h-56 lg:h-[480px]">
          <BouncingBalls />
          <span className="absolute right-4 top-6 z-10 hidden rotate-6 bg-white px-4 py-2.5 font-display text-lg font-extrabold sticker lg:block">
            Queen&apos;s CS &apos;28
          </span>
          <span className="absolute bottom-6 left-2 z-10 hidden -rotate-6 bg-sun px-4 py-2.5 font-display text-lg font-extrabold sticker lg:block">
            Spider-Man fan
          </span>
        </div>
      </section>

      <Marquee />

      {/* About */}
      <section
        id="about"
        className="grid scroll-mt-20 grid-cols-1 gap-8 px-5 pt-12 pb-8 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-16 lg:pt-24 lg:pb-20"
      >
        <div className="flex flex-col gap-5">
          <SectionHeading number="01" title="About" color="bg-coral" tilt="-rotate-6" />
          <div className="flex flex-col gap-4 text-base leading-relaxed lg:text-[19px]">
            <p>
              I&apos;m a Computing student at Queen&apos;s, graduating in 2028. What I like most about
              software is how quickly an idea becomes something you can poke at, break, fix, and
              hand to someone else.
            </p>
            <p>
              So far, my work has taken me through web apps, computer vision, and lower-level
              programming. I pay attention to the interface, but I care just as much about what
              lives behind it: understandable code and a project the next person can pick up
              without a guided tour.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-white p-5 sticker-lg lg:rotate-1 lg:p-7">
          <h3 className="font-display text-xl font-extrabold lg:text-[26px]">
            Tools I&apos;ve worked with
          </h3>
          <div className="flex flex-wrap gap-2 lg:gap-2.5">
            {STACK.map((item) => (
              <span
                key={item.name}
                className={`px-3 py-1.5 text-[13px] font-bold sticker-sm lg:px-3.5 lg:py-2 lg:text-[15px] ${item.color ?? "bg-cream"}`}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="flex scroll-mt-20 flex-col gap-5 px-5 py-8 lg:gap-8 lg:px-16 lg:pt-16 lg:pb-20"
      >
        <SectionHeading number="02" title="Experience" color="bg-sun" tilt="rotate-6" />
        <Timeline />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="flex scroll-mt-20 flex-col gap-5 px-5 pt-8 pb-12 lg:gap-8 lg:px-16 lg:pt-16 lg:pb-24"
      >
        <SectionHeading number="03" title="Projects" color="bg-mint" tilt="-rotate-3" />
        <ProjectsGrid />
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-6 border-t-[3px] border-ink bg-ink px-5 pt-12 pb-8 text-cream lg:gap-10 lg:px-16 lg:pt-18 lg:pb-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-display text-[40px] leading-none font-extrabold tracking-tight lg:text-[56px]">
              Say hello.
            </p>
            <p className="max-w-[440px] text-base leading-relaxed opacity-80 lg:text-lg">
              Got an internship, a side project, or a stubborn bug worth talking through? I&apos;d
              love to hear about it.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3.5">
            <a
              href="mailto:augustineosezua1@gmail.com"
              className="inline-flex items-center gap-3 border-[3px] border-cream bg-sun px-5 py-3.5 text-[15px] font-bold text-ink shadow-[6px_6px_0_var(--color-mint)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-mint)] lg:px-7 lg:py-4 lg:text-xl"
              onClick={() => track("contact_click", { location: "footer" })}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              augustineosezua1@gmail.com
            </a>
            <div className="flex flex-wrap gap-2 lg:gap-2.5">
              <a
                href="https://www.linkedin.com/in/augustineosezua/"
                target="_blank"
                rel="noreferrer noopener"
                className="border-[3px] border-cream px-4 py-2.5 text-sm font-bold hover:bg-cream hover:text-ink lg:text-[15px]"
                onClick={() => track("social_click", { platform: "linkedin" })}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/augustineosezua"
                target="_blank"
                rel="noreferrer noopener"
                className="border-[3px] border-cream px-4 py-2.5 text-sm font-bold hover:bg-cream hover:text-ink lg:text-[15px]"
                onClick={() => track("social_click", { platform: "github" })}
              >
                GitHub
              </a>
              <Link
                href="/where"
                className="border-[3px] border-cream px-4 py-2.5 text-sm font-bold hover:bg-cream hover:text-ink lg:text-[15px]"
              >
                Where am I?
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 border-t border-cream/25 pt-4 text-xs font-semibold opacity-60 lg:flex-row lg:justify-between lg:pt-5 lg:text-[13px]">
          <span>Augustine Osezua</span>
          <span>Built with Next.js · Kingston, ON</span>
        </div>
      </footer>
    </div>
  );
}
