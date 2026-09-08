"use client";

import { track } from "@vercel/analytics";

const PROJECTS = [
  {
    title: "TextBin",
    subtitle: "textbin.app",
    description:
      "I wanted the notes to stay private in the database too. TextBin encrypts each one with its own key, wraps that key with a master key, and adds paid plans through Stripe. Better Auth handles sign-in, Resend handles reminders, and Vercel handles deployment.",
    stack: ["Next.js 15", "PostgreSQL", "Prisma", "Stripe", "Better Auth", "Resend", "Vercel"],
    links: {
      demo: "https://textbin.app",
      github: "https://github.com/augustineosezua/textbin",
    },
    image: "",
    placeholder: "bg-sun",
    tilt: "lg:-rotate-[0.8deg]",
  },
  {
    title: "Peckodoro",
    subtitle: "peckodoro.vercel.app",
    description:
      "Peckodoro keeps a Pomodoro timer, Spotify, and an OpenAI-powered study helper in one tab. It remembers your settings between sessions, which means one less thing to set up when it's time to study.",
    stack: ["Next.js", "Spotify Web API", "OpenAI API", "OAuth2", "Vercel"],
    links: {
      demo: "https://peckodoro.vercel.app",
      github: "https://github.com/augustineosezua/peckodoro-display",
    },
    image: "",
    placeholder: "bg-coral",
    tilt: "lg:rotate-[0.8deg]",
  },
  {
    title: "Family Feud",
    subtitle: "Real-time multiplayer web game",
    description:
      "Make a room, send your friends the link, then buzz in and keep score. Socket.IO keeps every screen in sync, including the arguments over who buzzed first.",
    stack: ["React", "Node.js", "Socket.IO", "Git"],
    links: {
      demo: "https://teamtakedown.netlify.app/",
      github: "https://github.com/abdelrmobarak/team-takedown",
    },
    image: "",
    placeholder: "bg-mint",
    tilt: "lg:rotate-[0.6deg]",
  },
  {
    title: "Secret Santa",
    subtitle: "secretsanta.chickengfx.xyz",
    description:
      "Secret Santa handles sign-ups, pairings, and the organizer's admin work. I built the React and Express app on PostgreSQL, then wrote the setup docs so the next organizer wouldn't need me hovering over their shoulder.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Railway"],
    links: {
      demo: "https://secretsanta.chickengfx.xyz",
      github: null,
    },
    image: "",
    placeholder: "bg-cream",
    tilt: "lg:-rotate-[0.6deg]",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function GithubIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3.6 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.5 3.3 6.7 6.4 7a3.4 3.4 0 0 0-.9 2.6V22" />
    </svg>
  );
}

function Card({ project }) {
  return (
    <article
      className={`flex h-full flex-col gap-3.5 bg-white p-[18px] sticker-lg lg:p-6 ${project.tilt}`}
      aria-label={`${project.title} project card`}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-40 w-full border-[3px] border-ink object-cover lg:h-50"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className={`flex h-40 items-center justify-center border-[3px] border-ink text-sm font-bold lg:h-50 ${project.placeholder}`}
        >
          {project.title}
        </div>
      )}

      <div className="flex flex-col gap-1 lg:flex-row lg:items-baseline lg:justify-between lg:gap-3">
        <h3 className="font-display text-2xl font-extrabold lg:text-[30px]">{project.title}</h3>
        <p className="text-sm font-bold text-mint">{project.subtitle}</p>
      </div>

      <p className="text-[15px] leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="border-2 border-ink px-2.5 py-0.5 text-xs font-bold">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-2.5 pt-1.5">
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 bg-mint px-[18px] py-2.5 text-sm font-bold sticker-btn"
            aria-label={`Try ${project.title}`}
            onClick={() => track("project_demo_click", { project: project.title })}
          >
            Try it <ExternalLinkIcon />
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 bg-white px-[18px] py-2.5 text-sm font-bold sticker-btn"
            aria-label={`Open ${project.title} GitHub repository`}
            onClick={() => track("project_github_click", { project: project.title })}
          >
            <GithubIcon /> Code
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {PROJECTS.map((p) => (
        <Card key={p.title} project={p} />
      ))}
    </div>
  );
}
