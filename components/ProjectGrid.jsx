const PROJECTS = [
  {
    title: "TextBin",
    subtitle: "Privacy-first notes app",
    description:
      "A privacy-first notes app supporting anonymous notes and signed-in users with deterministic key derivation. Features client-side 256-bit encryption (zero-knowledge storage) and Stripe subscriptions for premium features.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "TailwindCSS"],
    links: {
      demo: "https://textbin.app",
      github: "https://github.com/chickenjsx/textbin-display",
    },
    image: "",
  },
  {
    title: "Peckodoro",
    subtitle: "Pomodoro with Spotify & AI Study Assistant",
    description:
      "A Pomodoro web app with Spotify playback control via OAuth + Spotify Web API and an AI study assistant powered by OpenAI API. Deployed on Vercel with GitHub-based CI/CD.",
    stack: ["Next.js", "Spotify Web API", "OpenAI API", "OAuth", "Vercel"],
    links: {
      demo: "https://peckodoro.vercel.app",
      github: "https://github.com/chickenjsx/peckodoro-display",
    },
    image: "",
  },
  {
    title: "Family Feud",
    subtitle: "Realtime multiplayer web game",
    description:
      "A web-based Family Feud game with room join, buzzing, scoring, and smooth realtime updates.",
    stack: ["React", "Node.js", "Socket.IO", "Git"],
    links: {
      demo: "https://teamtakedown.netlify.app/",
      github: "https://github.com/abdelrmobarak/team-takedown",
    },
    image: "",
  },
  {
    title: "Secret Santa",
    subtitle: "Automated gift exchange",
    description:
      "A full-stack gift-exchange app that generates pairings, manages participants, and supports notification workflows. Implements event/admin flows with secure user management.",
    stack: ["React", "Node.js", "Express", "MySQL", "Heroku"],
    links: {
      demo: "https://ss.chickengfx.xyz",
      github: null,
    },
    image: "",
  },
];

function ExternalLinkIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 7.5H6A1.5 1.5 0 004.5 9v9A1.5 1.5 0 006 19.5h9a1.5 1.5 0 001.5-1.5v-2.25"
      />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5a11.5 11.5 0 00-3.636 22.411c.575.105.785-.249.785-.555 0-.274-.01-1.157-.015-2.102-3.193.695-3.868-1.54-3.868-1.54-.523-1.33-1.278-1.684-1.278-1.684-1.044-.714.079-.699.079-.699 1.154.081 1.761 1.186 1.761 1.186 1.027 1.76 2.694 1.251 3.35.957.104-.744.402-1.251.73-1.54-2.55-.288-5.233-1.276-5.233-5.678 0-1.255.45-2.28 1.186-3.085-.119-.289-.514-1.45.113-3.02 0 0 .966-.31 3.167 1.178a10.99 10.99 0 015.767 0c2.2-1.488 3.165-1.178 3.165-1.178.628 1.57.233 2.731.114 3.02.738.805 1.185 1.83 1.185 3.085 0 4.414-2.688 5.387-5.247 5.67.414.357.783 1.062.783 2.142 0 1.545-.014 2.79-.014 3.172 0 .307.208.664.79.552A11.5 11.5 0 0012 .5z" />
    </svg>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#E6EBE8] px-3 py-1 text-xs font-medium text-[#001219]">
      {children}
    </span>
  );
}

function Card({ project }) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md border border-gray-200"
      role="region"
      aria-label={`${project.title} project card`}
    >
      {project.image ? (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}

      <h3 className="text-lg font-semibold text-[#001219]">{project.title}</h3>
      <p className="mt-1 text-sm text-[#10B981] font-medium">
        {project.subtitle}
      </p>

      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-[#10B981] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#059669]"
            aria-label={`Open ${project.title} live demo`}
          >
            Live <ExternalLinkIcon />
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-[#001219] transition hover:bg-gray-50"
            aria-label={`Open ${project.title} GitHub repository`}
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
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {PROJECTS.map((p) => (
        <Card key={p.title} project={p} />
      ))}
    </div>
  );
}
