import type { Metadata } from "next";
import HomeCta from "../components/HomeCta";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore our comprehensive coaching programs for CBSE & CHSE classes 6-12. Science, Commerce, Arts streams, JEE & NEET foundation coaching available at BrightMind Academy.",
};

const programs = [
  {
    id: "middle-school",
    title: "Classes 6-8 (Middle School)",
    board: "CBSE",
    subjects: ["Mathematics", "Science", "English", "Social Science", "Hindi/Odia"],
    features: ["Concept-building approach", "Activity-based learning", "Regular class tests", "Parent-teacher interactions"],
    gradient: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    id: "cbse-secondary",
    title: "Classes 9-10 (Secondary)",
    board: "CBSE",
    subjects: ["Mathematics", "Science", "English", "Social Science", "Hindi/Odia"],
    features: ["Board exam focused preparation", "NCERT + reference books", "Mock board exams", "Previous year paper practice"],
    gradient: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
  },
  {
    id: "cbse-science",
    title: "Class 11-12 Science (CBSE)",
    board: "CBSE",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
    features: ["Board + JEE/NEET integrated", "Lab practicals guidance", "Weekly problem-solving sessions", "Comprehensive study material"],
    gradient: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-100",
  },
  {
    id: "cbse-commerce",
    title: "Class 11-12 Commerce (CBSE)",
    board: "CBSE",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics/IP", "English"],
    features: ["Practical case studies", "Project guidance", "CA foundation basics", "Board exam mastery"],
    gradient: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
  },
  {
    id: "chse-science",
    title: "Class 11-12 Science (CHSE)",
    board: "CHSE",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English/MIL"],
    features: ["CHSE syllabus focused", "Chapter-wise test series", "Board exam strategies", "Lab & practical support"],
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
  },
  {
    id: "chse-arts",
    title: "Class 11-12 Arts (CHSE)",
    board: "CHSE",
    subjects: ["History", "Political Science", "Economics", "Geography/Sociology", "English/MIL"],
    features: ["Answer writing practice", "Map & diagram guidance", "Essay writing workshops", "Current affairs sessions"],
    gradient: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100",
  },
  {
    id: "competitive",
    title: "JEE & NEET Foundation",
    board: "Competitive",
    subjects: ["Physics", "Chemistry", "Mathematics (JEE)", "Biology (NEET)"],
    features: ["Foundation from Class 8", "Advanced problem solving", "National-level test series", "Mentorship from toppers"],
    gradient: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
  },
  {
    id: "doubt-clearing",
    title: "Doubt Clearing Sessions",
    board: "All Boards",
    subjects: ["Any subject on request"],
    features: ["One-on-one sessions", "Flexible scheduling", "Expert faculty", "Focused topic coverage"],
    gradient: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-100",
  },
];

export default function CoursesPage() {
  return (
    <div className="scroll-smooth">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
            <span className="text-sm font-medium text-white/90">Our Programs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Courses & Programs
          </h1>
          <p className="text-lg text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Comprehensive coaching programs designed for CBSE & CHSE students from
            classes 6 to 12. Choose the program that fits your academic goals.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className={`rounded-2xl border ${program.borderColor} ${program.bgColor} p-8 scroll-mt-24 hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {program.title}
                  </h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${program.gradient}`}>
                    {program.board}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 mb-3">Subjects Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-3">Key Features:</p>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCta />
    </div>
  );
}
