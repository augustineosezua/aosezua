const STACK = [
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Python",
  "Java",
  "MySQL",
  "JavaScript",
  "HTML",
  "CSS",
  "Figma",
  "Illustrator",
  "Git",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y-[3px] border-ink bg-mint py-3 lg:py-4">
      <div className="animate-scroll-horizontal items-center gap-6 lg:gap-10">
        {[0, 1, 2].map((set) =>
          STACK.map((name) => (
            <div key={`${set}-${name}`} className="flex items-center gap-6 lg:gap-10">
              <span className="font-display text-lg font-extrabold whitespace-nowrap lg:text-[22px]">
                {name}
              </span>
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-ink" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
