const experiences = [
  {
    role: "Web Developer Intern",
    company: "NORCAT",
    duration: "May 2025 - August 2025",
    location: "Sudbury, ON",
    responsibilities: [
      "Contributed to the design, development, and maintenance of responsive web applications supporting training and innovation programs.",
      "Worked across the stack: building front-end interfaces (HTML, CSS, JavaScript) and back-end services (Express.js).",
      "Engineered a complete authentication system from the ground up, applying best practices in agile development and secure software design.",
    ],
  },
  {
    role: "Project Manager",
    company: "Queen's University Web Development - QWeb",
    duration: "Feb 2025 - July 2025",
    location: "Kingston, ON",
    responsibilities: [
      "Led a client project from initial Figma design through to a fully deployed website with integrated CMS, built on Next.js 15.",
      "Coordinated between developers, designers, and the client to deliver a professional, scalable platform.",
      "Strengthened leadership skills by balancing project timelines, client expectations, and technical implementation.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Simple timeline line */}
        <div className="absolute left-4 top-8 bottom-8 w-px bg-gray-300"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative pb-8 last:pb-0">
            {/* Simple dot */}
            <div className="absolute left-2 top-6 w-4 h-4 bg-[#10B981] rounded-full border-2 border-white shadow-sm"></div>

            {/* Content */}
            <div className="ml-12">
              <h3 className="text-lg font-semibold text-[#001219] mb-1">
                {exp.role}
              </h3>
              <p className="text-[#10B981] font-medium mb-1">{exp.company}</p>
              <p className="text-sm text-gray-600 mb-3">
                {exp.duration} • {exp.location}
              </p>

              <div className="space-y-1">
                {exp.responsibilities.map((responsibility, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    • {responsibility}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
