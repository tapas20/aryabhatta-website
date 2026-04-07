// app/projects/page.tsx
"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Flame,
  Zap,
  Building2,
  Weight,
  Calendar,
  ArrowRight,
  BarChart3,
  Award,
  Clock,
} from "lucide-react";

/* ─────────────────────── ANIMATIONS ─────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ─────────────────────── HERO IMAGE ─────────────────────── */
const HERO_IMAGE = "/assets/Demolition.jpg";

/* ─────────────────────── CONTACTS ─────────────────────── */
const CONTACT = {
  email: "info@alsyedgroup.net",
  website: "www.alsyedgroup.net",
  phone1: "+966 13 839 4673",
  phone2: "+966 53 664 9777",
  address:
    "7321 Business Tower, Dhahran Jubail Expressway, Dammam, Kingdom of Saudi Arabia",
};

/* ─────────────────────── TYPES ─────────────────────── */
type CategoryId = "all" | "fabrication" | "firefighting" | "electrical" | "mep";

type Project = {
  scope: string;
  project: string;
  weight?: string;
  year: string;
  category: Exclude<CategoryId, "all">;
  role?: string;
  status?: string;
};

/* ─────────────────────── CATEGORIES ─────────────────────── */
const CATEGORIES: {
  id: CategoryId;
  label: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}[] = [
  {
    id: "all",
    label: "All Projects",
    icon: <BarChart3 className="w-4 h-4" />,
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    id: "fabrication",
    label: "Fabrication",
    icon: <Wrench className="w-4 h-4" />,
    color: "text-blue-600",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    id: "firefighting",
    label: "Fire Fighting",
    icon: <Flame className="w-4 h-4" />,
    color: "text-red-500",
    gradient: "from-red-500/20 to-red-500/5",
  },
  {
    id: "electrical",
    label: "Electrical",
    icon: <Zap className="w-4 h-4" />,
    color: "text-amber-500",
    gradient: "from-amber-500/20 to-amber-500/5",
  },
  {
    id: "mep",
    label: "MEP & Civil",
    icon: <Building2 className="w-4 h-4" />,
    color: "text-emerald-600",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
];

const CATEGORY_ACCENT: Record<Exclude<CategoryId, "all">, string> = {
  fabrication: "from-blue-500 to-blue-600",
  firefighting: "from-red-500 to-red-600",
  electrical: "from-amber-500 to-amber-600",
  mep: "from-emerald-500 to-emerald-600",
};

const CATEGORY_TAG_STYLE: Record<Exclude<CategoryId, "all">, string> = {
  fabrication: "bg-blue-50 text-blue-700 border-blue-200",
  firefighting: "bg-red-50 text-red-700 border-red-200",
  electrical: "bg-amber-50 text-amber-700 border-amber-200",
  mep: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const CATEGORY_LABEL: Record<Exclude<CategoryId, "all">, string> = {
  fabrication: "Fabrication",
  firefighting: "Fire Fighting",
  electrical: "Electrical",
  mep: "MEP & Civil",
};

/* ─────────────────────── ALL PROJECTS ─────────────────────── */
const PROJECTS: Project[] = [
  // ===================== FABRICATION =====================
  {
    scope: "Fabrication of pipe racks, walkway, ladders, handrails, light steel structures building (onsite)",
    project: "Aramco & Ar-Razi",
    weight: "250 Tons",
    year: "Jun 2009",
    category: "fabrication",
  },
  {
    scope: "Fabrication of pipe racks, staircase, ladders, platforms, handrails, grating, M/C base frames",
    project: "SODA",
    weight: "210 Tons",
    year: "2009",
    category: "fabrication",
  },
  {
    scope: "Fabrication and installation of steel structural and roof sheet",
    project: "Cooled Store",
    weight: "250 Tons",
    year: "Aug 2009",
    category: "fabrication",
  },
  {
    scope: "Fabrication and installation of pipes and supports, switch racks, and column steel structural",
    project: "PEPK",
    weight: "220 Tons",
    year: "Dec 2009",
    category: "fabrication",
  },
  {
    scope: "Fabrication of pipe pool, walkway, and heavy steel structures",
    project: "Berri Gas Plant",
    weight: "250 Tons",
    year: "May 2010",
    category: "fabrication",
  },
  {
    scope: "Steel building fabrication",
    project: "Phase II",
    weight: "175 Tons",
    year: "Sep 2010",
    category: "fabrication",
  },
  {
    scope: "Electrical panel and cable tray supports fabrication works",
    project: "Gulf Farabi",
    weight: "185 Tons",
    year: "Nov 2010",
    category: "fabrication",
  },
  {
    scope: "Steel structural fabrication and erection (overhead crane)",
    project: "Hangars",
    weight: "254 Tons",
    year: "Nov 2010",
    category: "fabrication",
  },
  {
    scope: "Steel building fabrication",
    project: "Stadium",
    weight: "385 Tons",
    year: "June 2010",
    category: "fabrication",
  },
  {
    scope: "Steel structural fabrication platforms, handrails, grating",
    project: "Naval Forces",
    weight: "250 Tons",
    year: "June 2011",
    category: "fabrication",
  },
  {
    scope: "Manual HDG Shell Assy.",
    project: "Al-Rashed Fasteners",
    weight: "165 Tons",
    year: "July 2011",
    category: "fabrication",
  },
  {
    scope: "Steel structural fabrication",
    project: "Hangars",
    weight: "275 Tons",
    year: "Oct 2011",
    category: "fabrication",
  },
  {
    scope: "Electrical panel and cable tray supports fabrication",
    project: "HADEED",
    weight: "135 Tons",
    year: "Feb 2012",
    category: "fabrication",
  },
  {
    scope: "Steel structural fabrication",
    project: "Hangars",
    weight: "125 Tons",
    year: "April 2012",
    category: "fabrication",
  },
  {
    scope: "Caged ladders and handrails",
    project: "SHARQ III Ex",
    weight: "124 Tons",
    year: "June 2012",
    category: "fabrication",
  },
  {
    scope: "Handrails",
    project: "CRISTAL EX",
    weight: "50 Tons",
    year: "July 2012",
    category: "fabrication",
  },
  {
    scope: "Cooling tower steel structural fabrication",
    project: "JANA",
    weight: "135 Tons",
    year: "Aug 2012",
    category: "fabrication",
  },
  {
    scope: "Heavy duty gratings",
    project: "SHARQ III Ex",
    weight: "125 Tons",
    year: "Sep 2012",
    category: "fabrication",
  },
  {
    scope: "Barring plate fabrication",
    project: "Fabrication",
    weight: "225 Tons",
    year: "Oct 2012",
    category: "fabrication",
  },
  {
    scope: "Template plate fabrication",
    project: "HYUNDAI",
    weight: "135 Tons",
    year: "Nov 2013",
    category: "fabrication",
  },
  {
    scope: "Cast in parts",
    project: "Saudi Kayan Cooling Tower – Jubail",
    weight: "75 Tons",
    year: "Dec 2013",
    category: "fabrication",
  },
  {
    scope: "Belt conveyor support heavy steel structural fabrication",
    project: "ALTUWAIRQI",
    weight: "750 Tons",
    year: "May 2013",
    category: "fabrication",
  },
  {
    scope: "Heavy steel structural fabrication, ducting",
    project: "BeeA'h",
    weight: "50 Tons",
    year: "2014",
    category: "fabrication",
  },
  {
    scope: "Cooling tower caged ladders and handrails gangways",
    project: "Saudi Kayan Cooling Tower – Jubail",
    weight: "125 Tons",
    year: "2015",
    category: "fabrication",
  },

  // ===================== FIRE FIGHTING =====================
  {
    scope: "Plumbing, supply, and installation of fire fighting system",
    project: "Abqaiq Industrial Area",
    year: "2011",
    category: "firefighting",
    role: "Main Contractor",
  },
  {
    scope: "Plumbing, supply, and installation of fire fighting system",
    project: "Dallah Industrial Area",
    year: "2011",
    category: "firefighting",
    role: "Main Contractor",
  },
  {
    scope: "Plumbing, supply, and installation of fire fighting system",
    project: "Jubail",
    year: "2012",
    category: "firefighting",
    role: "Main Contractor",
  },
  {
    scope: "Supply and installation of fire fighting system",
    project: "Jubail Industrial Area",
    year: "2012",
    category: "firefighting",
    role: "Main Contractor",
  },
  {
    scope: "Plumbing, supply, and installation of fire fighting system",
    project: "Dammam",
    year: "2012–2013",
    category: "firefighting",
    role: "Main Contractor",
  },
  {
    scope: "Supply and installation of fire fighting system",
    project: "Khobar",
    year: "2014",
    category: "firefighting",
    role: "Sub-Contractor",
  },

  // ===================== ELECTRICAL =====================
  {
    scope: "Electrical: conduit/fittings, light wiring, LGT panels, cabling, FM 200 fire alarm. Instrumentation: control panels, heat trace cabling. Mechanical: valves, pumps, tank levels",
    project: "Aramco & Ar-Razi",
    year: "2006",
    category: "electrical",
  },
  {
    scope: "Electrical: MCC, distribution panels, conduits, lighting, cable laying/termination. Instrumentation: control cables/panels, valves, SS pipes, heat tracing, fabrication of pipes and supports",
    project: "OLIFIN III",
    year: "Mar 2006",
    category: "electrical",
  },
  {
    scope: "Electrical: street lights, control panels, pushup transformers termination/testing",
    project: "SAB TANK",
    year: "Sep 2007",
    category: "electrical",
  },
  {
    scope: "Electrical: cable laying, 35KV termination (HV), testing, motors, transformers, MCC panel installation, hi-pot test. Instrumentation: online instruments, tubing, cabling, termination",
    project: "PKPE",
    year: "May–Nov 2008",
    category: "electrical",
  },
  {
    scope: "Electrical: cable laying, 35KV termination (HV), testing, motors, transformers, MCC panel installation, hi-pot test",
    project: "JUPc",
    year: "Feb 2009",
    category: "electrical",
  },
  {
    scope: "Electrical: cable laying, 35KV termination (HV), testing, transformers, control panel installation, hi-pot test, transformer testing and oil, ground testing",
    project: "Saudi Electrical Co",
    year: "Mar 2010",
    category: "electrical",
  },
  {
    scope: "Electrical: 35KV termination (HV) and hi-pot testing",
    project: "Gulf Farabi",
    year: "Nov 2011",
    category: "electrical",
  },
  {
    scope: "Electrical: 35KV termination and splicing (HV), hi-pot testing (shutdown job)",
    project: "HADEED",
    year: "Oct 2012",
    category: "electrical",
  },

  // ===================== MEP, CIVIL & FABRICATION =====================
  {
    scope: "Complete steel structural fabrication and erection, civil, mechanical, electrical",
    project: "Lion Steel Dammam",
    year: "2017",
    category: "mep",
    role: "Main Contractor",
  },
  {
    scope: "Complete steel structural fabrication and erection, civil, mechanical, electrical",
    project: "Jazeera Steel Factory Rebar Plant Dammam",
    year: "2017",
    category: "mep",
    role: "Main Contractor",
  },
  {
    scope: "Complete steel structural fabrication and erection, civil, mechanical, electrical",
    project: "SAB EST Dammam 2nd Industrial Area",
    year: "2017",
    category: "mep",
    role: "Main Contractor",
  },
  {
    scope: "Fabrication and erection, civil, mechanical, electrical",
    project: "Aramco Fish Hatchery Jubail",
    year: "2017",
    category: "mep",
    role: "Subcontractor",
  },
  {
    scope: "Gypsum partition, false ceiling, painting, and electrical work",
    project: "Khonaini International",
    year: "2017",
    category: "mep",
    role: "Subcontractor",
  },
  {
    scope: "Gypsum partition, false ceiling, painting, and civil work",
    project: "Energy And Power Company",
    year: "2018",
    category: "mep",
    role: "Subcontractor",
  },
  {
    scope: "Gypsum ceiling and partition and electrical",
    project: "Zamil Holding Company",
    year: "2018",
    category: "mep",
    role: "Subcontractor",
  },
  {
    scope: "Civil foundation work",
    project: "Al Deair Construction",
    year: "2019",
    category: "mep",
    role: "Subcontractor",
  },
  {
    scope: "Complete steel structural fabrication and erection, civil, mechanical, electrical",
    project: "SAB EST Dammam 2nd Industrial Area",
    year: "2019",
    category: "mep",
    role: "Main Contractor",
  },
  {
    scope: "Gypsum partition, false ceiling, painting, and civil work",
    project: "Saudi German Hospital",
    year: "2020",
    category: "mep",
    role: "Subcontractor",
  },
  {
    scope: "Complete elevation work, interior work, mechanical works, electrical works, plumbing works for 100 villas",
    project: "MAB Consult – 100 Villas",
    year: "2020",
    category: "mep",
    role: "Main Contractor",
  },
  {
    scope: "Basecourse works, compaction works, asphalting works, complete hangar fabrication, electrical, plumbing and firefighting works, and road marking",
    project: "Asateel Transport Company",
    year: "2021",
    category: "mep",
    role: "Main Contractor",
  },
  {
    scope: "Basecourse works, compaction works, asphalting works, complete hangar fabrication, electrical, plumbing and firefighting works, and road marking",
    project: "Eram Transport Company",
    year: "2021",
    category: "mep",
    role: "Main Contractor",
  },
  {
    scope: "Renovation works, interior decoration, civil, electrical, and plumbing works",
    project: "Oceana Restaurant",
    year: "2021",
    category: "mep",
    role: "Main Contractor",
  },
  {
    scope: "Civil demolition, excavation, backfilling, compaction works, approximately 120,000 cubic meters",
    project: "SWCC Shuqaiq",
    year: "Final Phase",
    category: "mep",
    role: "Subcontractor",
    status: "Final Phase",
  },
  {
    scope: "Civil demolition, excavation, backfilling, compaction works",
    project: "SWCC Shuaibah",
    year: "Ongoing",
    category: "mep",
    role: "Subcontractor",
    status: "Ongoing",
  },
  {
    scope: "Rerouting of firefighting, potable water line, electrical line, excavation and backfilling",
    project: "SWEC Shuaibah",
    year: "Ongoing",
    category: "mep",
    role: "Subcontractor",
    status: "Ongoing",
  },
];

/* ─────────────────────── STATS HELPERS ─────────────────────── */
function parseTonnage(w?: string): number {
  if (!w) return 0;
  const m = w.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

/* ─────────────────────── STAT COUNTER COMPONENT ─────────────────────── */
function StatCounter({
  target,
  label,
  suffix,
  icon,
  format,
  className = "",
}: {
  target: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
  format?: (n: number) => string;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const duration = 2000;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTs: number | null = null;
          const step = (ts: number) => {
            if (!startTs) startTs = ts;
            const pct = Math.min((ts - startTs) / duration, 1);
            const ease = 1 - Math.pow(1 - pct, 4);
            setCount(Math.floor(ease * target));
            if (pct < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className={`flex flex-col items-center py-7 sm:py-9 ${className}`}>
      <span className="hidden sm:block mb-2">{icon}</span>
      <span className="text-2xl sm:text-4xl font-bold text-gray-900 tabular-nums">
        {format ? format(count) : count}
        {suffix && <span className="text-primary text-lg sm:text-2xl ml-0.5">{suffix}</span>}
        {!suffix && <span className="text-primary">+</span>}
      </span>
      <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 font-semibold">
        {label}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROJECT CARD
   ═══════════════════════════════════════════════════════════════ */
function ProjectCard({ project }: { project: Project }) {
  const cat = project.category;
  const accent = CATEGORY_ACCENT[cat];
  const tagStyle = CATEGORY_TAG_STYLE[cat];
  const isOngoing = project.status === "Ongoing" || project.status === "Final Phase";

  return (
    <motion.div
      variants={cardVariant}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full"
    >
      {/* Accent stripe */}
      <div className={`h-1 bg-gradient-to-r ${accent}`} />

      {/* Decorative corner glow on hover */}
      <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

      <div className="p-5 sm:p-6 flex flex-col flex-grow relative z-10">
        {/* Top row: Category + Year */}
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${tagStyle}`}>
            {CATEGORIES.find((c) => c.id === cat)?.icon}
            {CATEGORY_LABEL[cat]}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
            <Calendar className="w-3 h-3" />
            {project.year}
          </span>
        </div>

        {/* Project name */}
        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {project.project}
        </h3>

        {/* Scope */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4 flex-grow">
          {project.scope}
        </p>

        {/* Bottom metadata */}
        <div className="mt-auto pt-4 border-t border-gray-50 flex flex-wrap items-center gap-2">
          {project.weight && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 rounded-lg text-xs font-semibold text-gray-700 border border-gray-100">
              <Weight className="w-3 h-3 text-gray-400" />
              {project.weight}
            </span>
          )}
          {project.role && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 rounded-lg text-xs font-semibold text-gray-700 border border-gray-100">
              <Award className="w-3 h-3 text-gray-400" />
              {project.role}
            </span>
          )}
          {isOngoing && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 rounded-lg text-xs font-bold text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {project.status}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  /* Filtered projects */
  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  /* Stats */
  const totalTonnage = useMemo(
    () => PROJECTS.reduce((s, p) => s + parseTonnage(p.weight), 0),
    []
  );
  const yearsExperience = new Date().getFullYear() - 2006;

  return (
    <div className="bg-white text-black">
      {/* ───────────────── HERO ───────────────── */}
      <div className="relative w-full h-[50vh] md:h-[55vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 3.15, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1, x: [-20, 20, -20] }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGE}
            alt="Projects"
            fill
            className="object-cover opacity-70"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative text-3xl md:text-4xl lg:text-6xl font-semibold tracking-wide text-white text-center px-4"
        >
          Our Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="relative mt-3 text-sm md:text-base text-white/85 font-medium text-center px-6 max-w-3xl"
        >
          Decades of expertise delivering industrial, construction, and MEP
          projects across Saudi Arabia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative mt-6 text-white text-sm md:text-base font-medium tracking-widest uppercase"
        >
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <span className="mx-3 text-white/50">&gt;</span>
          <span className="text-primary font-bold">Projects</span>
        </motion.div>
      </div>

      {/* ───────────────── STATS BAR ───────────────── */}
      <section className="relative -mt-12 z-20 mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-3 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          <StatCounter
            target={PROJECTS.length}
            label="Projects"
            icon={<BarChart3 className="w-5 h-5 text-primary" />}
            className="border-r border-gray-100"
          />
          <StatCounter
            target={totalTonnage}
            label="Total Tonnage"
            suffix="T"
            icon={<Weight className="w-5 h-5 text-primary" />}
            format={(n) => n.toLocaleString()}
            className="border-r border-gray-100"
          />
          <StatCounter
            target={yearsExperience}
            label="Years Experience"
            icon={<Clock className="w-5 h-5 text-primary" />}
          />
        </motion.div>
      </section>

      {/* ───────────────── BODY ───────────────── */}
      <main className="bg-gradient-to-b from-white via-gray-50/30 to-white">
        <section className="mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
          {/* Section heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">
              Project Experience
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Delivering Excellence{" "}
              <span className="text-primary">Across Industries</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Category tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-gray-50 border border-gray-100">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-white text-gray-900 shadow-md shadow-black/5"
                        : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                    }`}
                  >
                    {cat.icon}
                    <span className="hidden sm:inline">{cat.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="active-tab"
                        className="absolute inset-0 rounded-xl bg-white shadow-md shadow-black/5 -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {/* Count badge */}
                    <span
                      className={`ml-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-primary text-white"
                          : "bg-gray-200/70 text-gray-500"
                      }`}
                    >
                      {cat.id === "all"
                        ? PROJECTS.length
                        : PROJECTS.filter((p) => p.category === cat.id).length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={stagger}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, idx) => (
                <ProjectCard key={`${project.project}-${project.year}-${idx}`} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Result count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 text-sm text-gray-400"
          >
            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "all" && (
              <button
                onClick={() => setActiveCategory("all")}
                className="ml-2 text-primary font-semibold hover:underline"
              >
                View All →
              </button>
            )}
          </motion.p>
        </section>

        {/* ───────────────── CTA ───────────────── */}
        <section className="relative py-20 overflow-hidden">
          {/* BG */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black" />
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-white/60 mb-6">
                {CONTACT.address}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-white/80">
                  {CONTACT.website}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-white/80">
                  {CONTACT.email}
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(33,113,69,0.4)]"
                >
                  Email Us
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+966138394673"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  Call {CONTACT.phone1}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
