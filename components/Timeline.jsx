const experiences = [
  {
    role: "JavaScript / Web Developer Intern",
    company: "NORCAT",
    duration: "May – Aug 2025",
    location: "Sudbury, ON",
    chip: "bg-coral rotate-3",
    responsibilities: [
      "At NORCAT, I worked on both the customer storefront and the admin dashboard, building tools for products, inventory, and pricing from requirements that often started as a conversation.",
      "I added role-based access controls backed by MS SQL, so staff only saw the data and actions their roles allowed.",
      "I integrated Moneris checkout, including request validation, transaction handling, and the trip from cart to order confirmation.",
    ],
  },
  {
    role: "Design Team Member",
    company: "ROMMio – Range of Motion I/O (QMIND Healthcare Project)",
    duration: "Oct 2024 – Present",
    location: "Queen's University, ON",
    chip: "bg-sun -rotate-2",
    responsibilities: [
      "I designed the live interface for a shoulder-assessment tool. It turns 33 MediaPipe landmarks and Intel RealSense depth data into something a clinician can read at a glance.",
      "I ran our CUCAI 2026 demo for physicians and judges, showing skeletal overlays, 3D angle calculations, and an 8-frame smoothing window.",
      "I documented the research and setup as reproducible steps, so new contributors didn't have to piece the project together from scratch.",
    ],
  },
  {
    role: "Project Manager",
    company: "Queen's University Web Development – QWeb",
    duration: "Feb – Jul 2025",
    location: "Kingston, ON",
    chip: "bg-mint rotate-2",
    responsibilities: [
      "I led a student team building a client website, from the first Figma designs to a deployed Next.js 15 site with a CMS.",
      "I kept the client, designers, and developers aligned through kickoff, reviews, and handoff.",
      "The job taught me when to adjust the plan, when to push back, and how to keep a build moving when the first idea wasn't practical.",
    ],
  },
  {
    role: "Events Coordinator",
    company: "COMPSA – Computing Students' Association",
    duration: "Sep 2024 – Present",
    location: "Queen's University, ON",
    chip: "bg-white -rotate-3",
    responsibilities: [
      "I plan socials, workshops, and study sessions for Queen's computing students.",
      "I work with the rest of the executive team to choose events students will want to attend.",
      "I handle the venue, promotion, and day-of details, then use the feedback to improve the next event.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
      {experiences.map((exp) => (
        <article
          key={exp.role + exp.company}
          className="flex flex-col gap-3.5 bg-white p-5 sticker-lg lg:p-7"
        >
          <div className="flex flex-col-reverse items-start justify-between gap-3 lg:flex-row lg:gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-xl leading-tight font-extrabold lg:text-2xl">
                {exp.role}
              </h3>
              <p className="text-[15px] font-bold text-mint lg:text-[17px]">{exp.company}</p>
            </div>
            <span
              className={`shrink-0 px-3 py-1.5 text-[13px] font-bold whitespace-nowrap sticker-sm ${exp.chip}`}
            >
              {exp.duration}
            </span>
          </div>
          <p className="text-sm font-semibold opacity-65">{exp.location}</p>
          <ul className="flex flex-col gap-2.5 text-[15px] leading-relaxed">
            {exp.responsibilities.map((responsibility) => (
              <li key={responsibility} className="flex gap-2.5">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-ink bg-mint" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
