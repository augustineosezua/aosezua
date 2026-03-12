const experiences = [
  {
    role: "Events Coordinator",
    company: "COMPSA - Computing Students' Association",
    duration: "Sep 2024 - Present",
    location: "Queen's University, ON",
    responsibilities: [
      "Organize and coordinate events for computing students, fostering community engagement and networking opportunities.",
      "Collaborate with fellow executives to plan workshops, socials, and academic support initiatives.",
      "Manage event logistics, promotion, and post-event feedback to continuously improve student experiences.",
    ],
  },
  {
    role: "Design Team Member",
    company: "ROMMio – Range of Motion I/O (QMIND Healthcare Project)",
    duration: "Oct 2024 – Present",
    location: "Queen's University, ON",
    responsibilities: [
      "Shaped the real-time UI of a markerless range-of-motion prototype for shoulder orthopedic assessment, translating raw CV output (33 body landmarks via MediaPipe PoseLandmarker and Intel RealSense D435 depth sensing) into a clear, clinically-legible live interface.",
      "Led demo execution at CUCAI 2026 for a Python application showing skeletal overlays and 3D vector-based angle calculations with an 8-frame smoothing window, presenting to physicians and competition judges.",
      "Wrote technical documentation that turned the team's orthopedic feasibility research into step-by-step reproducible workflows, cutting onboarding time for new contributors.",
    ],
  },
  {
    role: "JavaScript / Web Developer Intern",
    company: "NORCAT",
    duration: "May 2025 – Aug 2025",
    location: "Sudbury, ON",
    responsibilities: [
      "Architected and shipped production-ready full-stack features across an e-commerce platform and internal admin dashboard, turning loosely defined requirements into clean, maintainable code that noticeably tightened product, inventory, and pricing workflows.",
      "Built role-based authentication/authorization across all core operational flows backed by MS SQL, meaningfully improving data integrity and platform reliability.",
      "Owned end-to-end Moneris payment integration, hardening the checkout pipeline with thorough validation and transaction logic to ship a secure, production-grade order flow from cart to confirmation.",
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
