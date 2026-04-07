"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRight, Sparkles, BookOpen, Atom, FlaskConical, Calculator, PenTool, Globe, Dumbbell, Languages, Code, Microscope } from "lucide-react";

const topCards = [
  {
    id: "01",
    title: "CBSE Classes 6-10",
    desc: "Strong conceptual foundation in Mathematics, Science, English, Social Science & Hindi",
    icon: <BookOpen className="w-8 h-8" />,
    gradient: "from-indigo-600 to-blue-600",
    highlight: true,
  },
  {
    id: "02",
    title: "CBSE Classes 11-12",
    desc: "Science & Commerce streams with board exam & competitive exam integrated coaching",
    icon: <Atom className="w-8 h-8" />,
    gradient: "from-violet-600 to-purple-600",
    highlight: false,
  },
];

const bottomCards = [
  { id: "03", title: "Physics", desc: "Mechanics, optics, electricity & modern physics", icon: <Atom className="w-7 h-7" />, gradient: "from-blue-500 to-cyan-500" },
  { id: "04", title: "Chemistry", desc: "Organic, inorganic & physical chemistry", icon: <FlaskConical className="w-7 h-7" />, gradient: "from-emerald-500 to-teal-500" },
  { id: "05", title: "Mathematics", desc: "Algebra, calculus, geometry & trigonometry", icon: <Calculator className="w-7 h-7" />, gradient: "from-amber-500 to-orange-500" },
  { id: "06", title: "Biology", desc: "Botany, zoology & human physiology", icon: <Microscope className="w-7 h-7" />, gradient: "from-green-500 to-emerald-500" },
  { id: "07", title: "English", desc: "Grammar, literature & writing skills", icon: <PenTool className="w-7 h-7" />, gradient: "from-rose-500 to-pink-500" },
  { id: "08", title: "CHSE Science", desc: "Complete +2 science stream for CHSE board", icon: <Globe className="w-7 h-7" />, gradient: "from-indigo-500 to-violet-500" },
  { id: "09", title: "CHSE Arts", desc: "History, Political Science, Economics & more", icon: <Languages className="w-7 h-7" />, gradient: "from-purple-500 to-fuchsia-500" },
  { id: "10", title: "JEE & NEET Prep", desc: "Foundation & advanced competitive exam coaching", icon: <Dumbbell className="w-7 h-7" />, gradient: "from-red-500 to-rose-500" },
  { id: "11", title: "Computer Science", desc: "Programming, data structures & IT fundamentals", icon: <Code className="w-7 h-7" />, gradient: "from-sky-500 to-blue-500" },
  { id: "12", title: "Doubt Clearing", desc: "One-on-one expert sessions for tough topics", icon: <Sparkles className="w-7 h-7" />, gradient: "from-violet-500 to-indigo-500" },
];

function CourseCard({
  id,
  title,
  desc,
  icon,
  gradient,
  onClick,
  featured,
  tall,
}: {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  gradient: string;
  onClick: () => void;
  featured?: boolean;
  tall?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={[
        "group relative isolate overflow-hidden cursor-pointer flex flex-col justify-between",
        tall
          ? "h-[240px] sm:h-[280px] md:h-[300px]"
          : "h-[200px] sm:h-[220px] md:h-[240px]",
        "rounded-2xl sm:rounded-3xl p-6 sm:p-8",
        "border border-slate-200/80 bg-white",
        "shadow-sm transition-all duration-500 ease-out",
        "hover:-translate-y-2 hover:shadow-xl hover:border-indigo-200/60",
      ].join(" ")}
    >
      {/* Gradient accent on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-[inherit]`} />

      {/* Large outline number */}
      <div
        className={[
          "pointer-events-none absolute -bottom-4 right-2 z-0 select-none",
          "text-[90px] sm:text-[120px] font-black leading-none",
          "text-slate-100 transition-all duration-700 ease-out",
          "group-hover:-translate-y-3 group-hover:scale-105 group-hover:text-indigo-100",
        ].join(" ")}
      >
        {id}
      </div>

      <div className="relative z-10 flex w-full justify-between items-start">
        {/* Icon */}
        <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
          {icon}
        </div>

        {featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 sm:px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/20 transition-transform duration-500 group-hover:scale-105">
            <Sparkles className="h-3.5 w-3.5" />
            Popular
          </span>
        )}
      </div>

      {/* Content Footer */}
      <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0 relative z-10">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-slate-500 mt-1.5 leading-snug">{desc}</p>

        <div className="mt-3 flex items-center justify-between opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Learn more
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const router = useRouter();

  const handleCardClick = () => {
    router.push("/courses");
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-slate-50/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-50 via-slate-50 to-white" />
      <div className="pointer-events-none absolute top-1/4 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-100/50 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-violet-100/30 blur-[120px]" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center text-center md:text-left h-full py-6 md:py-0">
            <div className="inline-flex items-center gap-3 mx-auto md:mx-0 mb-5">
              <span className="h-[2px] w-10 bg-primary rounded-full"></span>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Our Programs
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Courses We <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
                Offer
              </span>
            </h2>

            <p className="text-slate-600 mt-6 max-w-md mx-auto md:mx-0 text-base sm:text-lg leading-relaxed font-medium">
              Comprehensive coaching programs designed for CBSE & CHSE students
              from classes 6 to 12. Expert faculty, structured curriculum, and
              regular assessments to help every student achieve their academic goals.
            </p>
          </div>

          {/* RIGHT: 2 FEATURED CARDS */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {topCards.map((item, idx) => (
              <CourseCard
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
                gradient={item.gradient}
                tall
                featured={idx === 0}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
          {bottomCards.map((item) => (
            <CourseCard
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
              gradient={item.gradient}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
