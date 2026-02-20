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
    role: "Full Stack & Computer Vision Developer",
    company: "ROMio – Range of Motion I/O (QMIND Research Team)",
    duration: "Oct 2024 – Present",
    location: "Queen's University, ON",
    responsibilities: [
      "Building a web system to estimate shoulder range of motion (ROM) from exercise videos using computer vision.",
      "Implemented a Flask + Next.js pipeline for video upload, MediaPipe/OpenPose pose extraction, and ROM visualization.",
      "Collaborating with an interdisciplinary team to align features with rehabilitation research objectives.",
    ],
  },
  {
    role: "JavaScript/Web Dev Intern",
    company: "NORCAT",
    duration: "May 2025 - Aug 2025",
    location: "Sudbury, ON",
    responsibilities: [
      "Built a full-stack e-commerce platform with an admin dashboard for product, inventory, and pricing management.",
      "Designed a custom authentication/authorization system and integrated MS SQL for data persistence.",
      "Integrated Moneris payment processing to support secure checkout and order flow.",
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
