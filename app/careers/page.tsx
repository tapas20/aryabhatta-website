"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  Search,
  ArrowUpDown,
  MapPin,
  Building2,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

/* ---------------- Google Apps Script Web App URL ----------------
   Paste your deployed Web App /exec URL here (NOT /dev)
   Example: https://script.google.com/macros/s/AKfycbxxxxxx/exec
------------------------------------------------------------------ */
const GOOGLE_SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbxTPZMuGE3IA9L6nVmE1aZPmC09JtgA1bRhEqw3LCEU8HgdhgcSRiRQKGQtJMEsRYLI/exec";

/* ---------------- Animations ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ---------------- Brand Assets ---------------- */
/** change these if you have different paths */
const BRAND = {
  logo: "/assets/alsyed-logo.png",
};

const HERO = {
  hero: "/assets/Careers.jpg",
};

type JobStatus = "Open" | "Closed";
type WorkMode = "On-site" | "Hybrid" | "Remote";
type EmploymentType = "Full-time" | "Part-time" | "Contract";

type Job = {
  id: string;
  title: string;
  department: string;
  reqId: string;
  location: string;
  status: JobStatus;
  mode: WorkMode;
  type: EmploymentType;
  experience: string;
  postedAt: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
};

const JOBS: Job[] = [
  {
    id: "hr-ops-mgr",
    title: "Human Resources Operations Manager",
    department: "Human Resources",
    reqId: "0001",
    location: "Saudi Arabia",
    status: "Open",
    mode: "On-site",
    type: "Full-time",
    experience: "5–8 years",
    postedAt: "Posted 3 days ago",
    about:
      "Lead end-to-end HR operations across onboarding, payroll coordination, compliance, and employee lifecycle processes—driving speed, accuracy, and a best-in-class employee experience.",
    responsibilities: [
      "Own HR operations workflows (onboarding, offboarding, HRIS hygiene, documentation).",
      "Partner with Finance on payroll inputs, audits, and monthly reconciliations.",
      "Ensure policy & compliance adherence (regional labor law basics, internal governance).",
      "Build dashboards and SOPs; improve turnaround times and reduce errors.",
    ],
    requirements: [
      "Strong HR operations experience with HRIS exposure.",
      "Excellent process design + stakeholder management.",
      "Comfort with spreadsheets, reporting, and documentation.",
    ],
  },
  {
    id: "payroll-systems-lead",
    title: "Payroll Senior Systems Leader",
    department: "Payroll",
    reqId: "0002",
    location: "Saudi Arabia",
    status: "Open",
    mode: "Hybrid",
    type: "Full-time",
    experience: "6–10 years",
    postedAt: "Posted 1 week ago",
    about:
      "Own payroll systems strategy and execution—partnering with HR/Finance to deliver stable, compliant, and scalable payroll operations.",
    responsibilities: [
      "Administer payroll systems and ensure smooth monthly cycles.",
      "Drive enhancements, automation, and change management.",
      "Own controls, audits, and documentation for payroll processes.",
    ],
    requirements: [
      "Hands-on payroll systems leadership experience.",
      "Strong control mindset; comfortable with audits and compliance.",
    ],
  },
  {
    id: "payroll-admin",
    title: "Payroll Administrator",
    department: "Payroll",
    reqId: "0003",
    location: "Saudi Arabia",
    status: "Open",
    mode: "On-site",
    type: "Full-time",
    experience: "2–4 years",
    postedAt: "Posted 10 days ago",
    about:
      "Support payroll processing, employee queries, and monthly validations with a high attention to detail and a service-first mindset.",
    responsibilities: [
      "Collect and validate payroll inputs (attendance, OT, allowances).",
      "Coordinate payroll issue resolution and employee support.",
      "Maintain payroll records and support audits.",
    ],
    requirements: [
      "Payroll operations experience with strong Excel skills.",
      "High accuracy and confidentiality mindset.",
    ],
  },
  {
    id: "rec-onboarding-systems",
    title: "Recruiting & Onboarding Senior Systems Leader",
    department: "Recruiting",
    reqId: "0004",
    location: "Saudi Arabia",
    status: "Open",
    mode: "Hybrid",
    type: "Full-time",
    experience: "6–10 years",
    postedAt: "Posted 2 weeks ago",
    about:
      "Own recruiting + onboarding systems and workflows to improve funnel velocity, candidate experience, and hiring manager efficiency.",
    responsibilities: [
      "Manage ATS configuration, integrations, and workflows.",
      "Optimize onboarding journey and reduce time-to-productivity.",
      "Build reporting for funnel metrics and quality signals.",
    ],
    requirements: [
      "ATS/HRIS systems ownership experience (admin + optimization).",
      "Strong process engineering and stakeholder alignment skills.",
    ],
  },
  {
    id: "recruitment-admin",
    title: "Recruitment Administrator",
    department: "Recruiting",
    reqId: "0005",
    location: "Saudi Arabia",
    status: "Open",
    mode: "On-site",
    type: "Full-time",
    experience: "1–3 years",
    postedAt: "Posted 3 weeks ago",
    about:
      "Support recruiters with scheduling, coordination, documentation, and candidate communications to keep hiring fast and consistent.",
    responsibilities: [
      "Coordinate interviews, scheduling, and candidate communications.",
      "Maintain requisition and candidate records.",
      "Support offer documentation and onboarding handoff.",
    ],
    requirements: [
      "Strong coordination and communication skills.",
      "Comfort working with ATS tools and spreadsheets.",
    ],
  },
  {
    id: "hris-systems-lead",
    title: "Human Resources Information Senior Systems Leader",
    department: "HRIS",
    reqId: "0006",
    location: "Saudi Arabia",
    status: "Open",
    mode: "Hybrid",
    type: "Full-time",
    experience: "6–10 years",
    postedAt: "Posted 1 month ago",
    about:
      "Lead HRIS roadmap, data governance, and integrations—making people data reliable, secure, and actionable for the business.",
    responsibilities: [
      "Own HRIS administration, data model, roles & permissions.",
      "Drive integrations and automation across HR stack.",
      "Build reporting standards and data governance practices.",
    ],
    requirements: [
      "Proven HRIS ownership experience and analytics mindset.",
      "Strong understanding of access control and data hygiene.",
    ],
  },
  {
    id: "hr-systems-admin",
    title: "HR Systems Administrator",
    department: "HRIS",
    reqId: "0007",
    location: "Saudi Arabia",
    status: "Open",
    mode: "On-site",
    type: "Full-time",
    experience: "2–5 years",
    postedAt: "Posted 6 weeks ago",
    about:
      "Support HR systems day-to-day administration, tickets, configurations, and process documentation to keep systems stable and user-friendly.",
    responsibilities: [
      "Resolve system tickets, user access, and configuration requests.",
      "Maintain HR data quality and operational reporting.",
      "Assist with releases, testing, and documentation updates.",
    ],
    requirements: [
      "Experience with HR systems administration or similar tools.",
      "Strong troubleshooting and documentation skills.",
    ],
  },
  {
    id: "branch-support-admin",
    title: "Branch Support Administrator",
    department: "Operations",
    reqId: "0008",
    location: "Saudi Arabia",
    status: "Open",
    mode: "On-site",
    type: "Full-time",
    experience: "1–4 years",
    postedAt: "Posted 2 months ago",
    about:
      "Support branch operations through coordination, documentation, and cross-team communication—keeping daily operations smooth and reliable.",
    responsibilities: [
      "Coordinate administrative tasks and documentation for branch support.",
      "Track requests and follow-ups with internal stakeholders.",
      "Maintain operational records and periodic reporting.",
    ],
    requirements: [
      "Strong coordination skills and attention to detail.",
      "Comfort working with teams and handling multiple priorities.",
    ],
  },

  /* ✅ NEW JOBS ADDED */
  {
    id: "sales-head",
    title: "Sales Head",
    department: "Sales",
    reqId: "0009",
    location: "Saudi Arabia",
    status: "Open",
    mode: "Hybrid",
    type: "Full-time",
    experience: "8–12 years",
    postedAt: "Posted 4 days ago",
    about:
      "Own revenue growth strategy and execution—building a high-performing sales team, strong pipelines, and predictable quarterly outcomes.",
    responsibilities: [
      "Drive business development and revenue targets across assigned markets.",
      "Build and mentor sales team; define KPIs, playbooks, and cadence.",
      "Own forecasting, pipeline management, and deal reviews.",
      "Partner with marketing and operations to improve conversion and retention.",
    ],
    requirements: [
      "Proven leadership experience in B2B/B2C sales with strong track record.",
      "Excellent negotiation, stakeholder management, and forecasting skills.",
      "Ability to build processes and scale teams quickly.",
    ],
  },
  {
    id: "document-controller",
    title: "Document Controller",
    department: "Project Controls",
    reqId: "0010",
    location: "Saudi Arabia",
    status: "Open",
    mode: "On-site",
    type: "Full-time",
    experience: "3–6 years",
    postedAt: "Posted 1 week ago",
    about:
      "Manage project documentation lifecycle—ensuring quality, version control, and compliance across engineering, site, and client communication.",
    responsibilities: [
      "Maintain document registers, transmittals, and revision control.",
      "Ensure timely distribution of project documents to stakeholders.",
      "Coordinate document approvals, archiving, and audit readiness.",
      "Support project teams with templates and documentation standards.",
    ],
    requirements: [
      "Strong experience in document control for construction/engineering projects.",
      "Proficiency in MS Office; familiarity with DMS tools is a plus.",
      "High attention to detail and strong coordination skills.",
    ],
  },
  {
    id: "hr-generalist",
    title: "HR Generalist",
    department: "Human Resources",
    reqId: "0011",
    location: "Saudi Arabia",
    status: "Open",
    mode: "On-site",
    type: "Full-time",
    experience: "3–6 years",
    postedAt: "Posted 2 weeks ago",
    about:
      "Support core HR functions including onboarding, employee relations, HR operations support, and policy execution to ensure a smooth employee experience.",
    responsibilities: [
      "Manage onboarding/offboarding documentation and coordination.",
      "Handle employee queries, policy support, and basic HR compliance.",
      "Support recruitment coordination and HR reporting.",
      "Maintain employee records and HRIS data accuracy.",
    ],
    requirements: [
      "Hands-on HR generalist experience across employee lifecycle processes.",
      "Good communication skills and confidentiality mindset.",
      "Comfort with HR documentation and reporting.",
    ],
  },
  {
    id: "site-engineer",
    title: "Site Engineer",
    department: "Engineering",
    reqId: "0012",
    location: "Saudi Arabia",
    status: "Open",
    mode: "On-site",
    type: "Full-time",
    experience: "3–7 years",
    postedAt: "Posted 5 days ago",
    about:
      "Oversee site execution and daily coordination to ensure work is delivered safely, on time, and as per drawings and specifications.",
    responsibilities: [
      "Supervise on-site activities and coordinate contractors and vendors.",
      "Ensure work complies with drawings, quality standards, and safety rules.",
      "Prepare daily progress reports and coordinate inspections.",
      "Support material planning and site measurements.",
    ],
    requirements: [
      "Experience in site execution (construction/MEP/civil as applicable).",
      "Ability to read drawings, manage site teams, and report progress.",
      "Strong coordination and problem-solving skills.",
    ],
  },
  {
    id: "planning-engineer",
    title: "Planning Engineer",
    department: "Project Controls",
    reqId: "0013",
    location: "Saudi Arabia",
    status: "Open",
    mode: "Hybrid",
    type: "Full-time",
    experience: "4–8 years",
    postedAt: "Posted 1 week ago",
    about:
      "Own project planning and scheduling—tracking progress, analyzing delays, and supporting delivery teams with accurate forecasts and reports.",
    responsibilities: [
      "Develop and maintain project schedules and baseline plans.",
      "Track progress, analyze variances, and produce weekly/monthly reports.",
      "Support recovery plans, resource planning, and coordination with site teams.",
      "Maintain planning documentation and support client reporting needs.",
    ],
    requirements: [
      "Strong planning experience in construction/engineering projects.",
      "Proficiency with scheduling tools (Primavera P6 / MS Project) is a plus.",
      "Strong analytical skills and reporting discipline.",
    ],
  },
  {
    id: "mechanical-technician",
    title: "Mechanical Technician",
    department: "Engineering",
    reqId: "0014",
    location: "Saudi Arabia",
    status: "Open",
    mode: "On-site",
    type: "Full-time",
    experience: "2-5 years",
    postedAt: "Posted 5 days ago",
    about:
      "Maintain and repair mechanical systems and equipment to keep operations safe, reliable, and efficient.",
    responsibilities: [
      "Perform preventive maintenance, inspections, and minor repairs on mechanical equipment.",
      "Diagnose faults and coordinate corrective actions with supervisors and vendors.",
      "Maintain maintenance logs, checklists, and parts usage records.",
      "Follow safety procedures, permits, and site standards.",
    ],
    requirements: [
      "Hands-on mechanical maintenance or technician experience.",
      "Ability to read manuals and basic drawings; comfortable with tools.",
      "Safety-first mindset and strong teamwork.",
    ],
  },
  {
    id: "electrician",
    title: "Electrician",
    department: "Engineering",
    reqId: "0015",
    location: "Saudi Arabia",
    status: "Open",
    mode: "On-site",
    type: "Full-time",
    experience: "2-5 years",
    postedAt: "Posted 1 week ago",
    about:
      "Install, troubleshoot, and maintain electrical systems to keep facilities safe and operational.",
    responsibilities: [
      "Perform electrical installations, wiring, and testing as per standards.",
      "Troubleshoot power, lighting, and control circuits to resolve faults.",
      "Ensure compliance with safety procedures and lockout/tagout requirements.",
      "Maintain work reports, service records, and test results.",
    ],
    requirements: [
      "Electrical maintenance or industrial electrician experience.",
      "Knowledge of electrical codes and safe work practices.",
      "Ability to read schematics and use testing instruments.",
    ],
  },
  {
    id: "pipe-fitter",
    title: "Pipe Fitter",
    department: "Engineering",
    reqId: "0016",
    location: "Saudi Arabia",
    status: "Open",
    mode: "On-site",
    type: "Full-time",
    experience: "2-5 years",
    postedAt: "Posted 4 days ago",
    about:
      "Fabricate, install, and repair piping systems for construction and maintenance projects.",
    responsibilities: [
      "Read isometric drawings and assemble piping per specifications.",
      "Cut, fit, and install pipes, valves, and fittings.",
      "Perform pressure testing and leak checks.",
      "Maintain tools and follow site safety rules.",
    ],
    requirements: [
      "Pipe fitting experience in construction or industrial projects.",
      "Ability to interpret drawings and measurements accurately.",
      "Physically fit and safety-conscious.",
    ],
  },
];

type SortKey = "title" | "department" | "reqId" | "location" | "status";
type SortDir = "asc" | "desc";

function clean(s: unknown) {
  return String(s ?? "").trim();
}
function includesCI(hay: string, needle: string) {
  return clean(hay).toLowerCase().includes(clean(needle).toLowerCase());
}

/* ---------------- Apply Modal Types ---------------- */

type ApplyStep = 1 | 2 | 3 | 4;

type ApplyForm = {
  // step 1
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  dob: string;

  // step 2
  degree: string;
  institution: string;
  graduationYear: string;

  // step 3
  employmentJobTitle: string;
  companyName: string;
  employmentPeriod: string;

  // step 4
  resumeDriveLink: string;
  coverDriveLink: string;
  comments: string;
};

const EMPTY_FORM: ApplyForm = {
  firstName: "",
  middleName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  dob: "",
  degree: "",
  institution: "",
  graduationYear: "",
  employmentJobTitle: "",
  companyName: "",
  employmentPeriod: "",
  resumeDriveLink: "",
  coverDriveLink: "",
  comments: "",
};

function Stepper({ step }: { step: ApplyStep }) {
  const steps = [
    { n: 1, label: ["Personal", "Information"] },
    { n: 2, label: ["Education &", "Qualifications"] },
    { n: 3, label: ["Employment", "History", "(Additional)"] },
    { n: 4, label: ["Drive Links", "& Comments"] },
  ] as const;

  return (
    <div className="mt-4">
      <div className="flex items-start gap-3">
        {steps.map((s, idx) => {
          const isDone = step > (s.n as ApplyStep);
          const isActive = step === (s.n as ApplyStep);
          const isOn = isDone || isActive;

          return (
            <React.Fragment key={s.n}>
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold",
                    isOn
                      ? "bg-primary text-primary-foreground"
                      : "border border-primary/60 text-foreground",
                  )}
                >
                  {s.n}
                </div>
                <div className="mt-2 text-center text-[10px] leading-tight text-muted-foreground">
                  {s.label.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>

              {idx < steps.length - 1 ? (
                <div className="mt-3 h-[2px] flex-1 rounded-full bg-muted-foreground/30" />
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

function FieldLabel({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) {
  return (
    <p className="text-xs font-medium text-primary">
      {label} {required ? <span className="text-destructive">*</span> : null}
    </p>
  );
}

export default function Page() {
  const [query, setQuery] = React.useState("");
  const [dept, setDept] = React.useState<string>("ALL");
  const [loc, setLoc] = React.useState<string>("ALL");
  const [entries, setEntries] = React.useState<number>(10);

  const [sortKey, setSortKey] = React.useState<SortKey>("title");
  const [sortDir, setSortDir] = React.useState<SortDir>("asc");
  const [page, setPage] = React.useState(1);

  // hero ready state
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => setReady(true), []);

  const departments = React.useMemo(() => {
    const set = new Set(JOBS.map((j) => j.department));
    return ["ALL", ...Array.from(set).sort()];
  }, []);

  const locations = React.useMemo(() => {
    const set = new Set(JOBS.map((j) => j.location));
    return ["ALL", ...Array.from(set).sort()];
  }, []);

  const filtered = React.useMemo(() => {
    const q = query.trim();
    return JOBS.filter((j) => {
      const matchesQuery =
        !q ||
        includesCI(j.title, q) ||
        includesCI(j.department, q) ||
        includesCI(j.location, q) ||
        includesCI(j.reqId, q) ||
        includesCI(j.status, q) ||
        includesCI(j.mode, q) ||
        includesCI(j.type, q);

      const matchesDept = dept === "ALL" || j.department === dept;
      const matchesLoc = loc === "ALL" || j.location === loc;

      return matchesQuery && matchesDept && matchesLoc;
    });
  }, [query, dept, loc]);

  const sorted = React.useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      const av = clean(a[sortKey]);
      const bv = clean(b[sortKey]);

      if (sortKey === "reqId") {
        const an = Number(av);
        const bn = Number(bv);
        const d = (isNaN(an) ? 0 : an) - (isNaN(bn) ? 0 : bn);
        return sortDir === "asc" ? d : -d;
      }

      const d = av.localeCompare(bv, undefined, { sensitivity: "base" });
      return sortDir === "asc" ? d : -d;
    });
    return arr;
  }, [filtered, sortKey, sortDir]);

  React.useEffect(() => {
    setPage(1);
  }, [query, dept, loc, entries]);

  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / entries));
  const safePage = Math.min(Math.max(page, 1), totalPages);

  const startIdx = (safePage - 1) * entries;
  const endIdx = Math.min(startIdx + entries, total);
  const paged = sorted.slice(startIdx, endIdx);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
      return;
    }
    setSortKey(key);
    setSortDir("asc");
  }

  const openCount = React.useMemo(
    () => JOBS.filter((j) => j.status === "Open").length,
    [],
  );

  /* ---------------- Apply Modal State ---------------- */

  const [applyJob, setApplyJob] = React.useState<Job | null>(null);
  const [step, setStep] = React.useState<ApplyStep>(1);
  const [form, setForm] = React.useState<ApplyForm>(EMPTY_FORM);
  const [sending, setSending] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  function openApply(job: Job) {
    setApplyJob(job);
    setStep(1);
    setForm(EMPTY_FORM);
    setSubmitted(false);
  }

  function closeApply() {
    setApplyJob(null);
    setSending(false);
    setSubmitted(false);
  }

  function reqMissing(msg: string) {
    toast.error(msg);
  }

  function nextStep() {
    if (step === 1) {
      if (!form.firstName.trim()) return reqMissing("First Name is required");
      if (!form.lastName.trim()) return reqMissing("Last Name is required");
      if (!form.phone.trim()) return reqMissing("Phone Number is required");
      if (!form.email.trim()) return reqMissing("Email Address is required");
      if (!form.address.trim()) return reqMissing("Address is required");
      if (!form.dob.trim()) return reqMissing("Date of Birth is required");
    }
    if (step === 2) {
      if (!form.degree.trim()) return reqMissing("Degree is required");
      if (!form.institution.trim())
        return reqMissing("Institution Name is required");
    }
    setStep((s) => Math.min(4, s + 1) as ApplyStep);
  }

  function prevStep() {
    setStep((s) => Math.max(1, s - 1) as ApplyStep);
  }

  async function submitApplication() {
    if (!applyJob) return;

    if (
      !GOOGLE_SHEET_ENDPOINT ||
      GOOGLE_SHEET_ENDPOINT.includes("PASTE_YOUR")
    ) {
      toast.error(
        "Please paste your Apps Script /exec URL in GOOGLE_SHEET_ENDPOINT",
      );
      return;
    }

    setSending(true);

    try {
      // IMPORTANT:
      // Use URLSearchParams + mode:'no-cors' to avoid CORS issues with Apps Script.
      // You won't be able to read the response, but the row will be inserted in the sheet.
      const payload = new URLSearchParams();

      // job meta (matches Apps Script headers)
      payload.append("jobId", applyJob.id);
      payload.append("jobTitle", applyJob.title);
      payload.append("jobReqId", applyJob.reqId);
      payload.append("jobDepartment", applyJob.department);
      payload.append("jobLocation", applyJob.location);
      payload.append("jobMode", applyJob.mode);
      payload.append("jobType", applyJob.type);
      payload.append("jobPostedAt", applyJob.postedAt);

      // form fields
      Object.entries(form).forEach(([k, v]) => payload.append(k, v ?? ""));

      // helpful meta
      payload.append(
        "source",
        typeof window !== "undefined" ? window.location.href : "",
      );

      await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: "POST",
        body: payload,
        mode: "no-cors",
      });

      // Send email to company email via internal API
      const emailRes = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle: applyJob.title,
          jobReqId: applyJob.reqId,
          ...form
        }),
      });

      if (!emailRes.ok) {
        console.error("Failed to send application email");
      }

      toast.success("Application submitted successfully!");
      setSubmitted(true);
    } catch (e: any) {
      // With no-cors, fetch usually doesn't throw unless network fails.
      toast.error(e?.message || "Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <div className="relative flex h-[55vh] w-full flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 3.15, opacity: 0 }}
          animate={{
            scale: 1.5,
            opacity: 1,
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={HERO.hero}
            alt="Careers"
            fill
            className="object-cover opacity-70"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          className="relative px-4 text-center text-3xl font-semibold text-white md:text-4xl lg:text-6xl"
        >
          Career Opportunities
        </motion.h1>

        <motion.div
           variants={fadeUp}
           initial="hidden"
           animate={ready ? "show" : "hidden"}
           className="relative mt-6 text-white text-sm md:text-base font-medium tracking-widest uppercase"
        >
           <Link href="/" className="hover:text-primary transition">
             Home
           </Link>
           <span className="mx-3 text-white/50">&gt;</span>
           <span className="text-primary font-bold">Careers</span>
        </motion.div>
      </div>

      {/* HEADER */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <Badge className="bg-primary text-primary-foreground">
                Careers
              </Badge>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Career Opportunities
              </h1>

              <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
                Join our team and build meaningful work with a culture focused
                on ownership, learning, and impact.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border bg-background px-4 py-2">
                  <BriefcaseBusiness className="h-4 w-4 text-primary" />
                  <span className="text-sm">
                    <span className="font-semibold">{openCount}</span> Open
                    roles
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border bg-background px-4 py-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">
                    Hiring across{" "}
                    <span className="font-semibold">
                      {locations.length - 1}
                    </span>{" "}
                    location(s)
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border bg-background px-4 py-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Fast, transparent process</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <Card className="border-black/10 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">Find a role</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search by title, dept, location..."
                      className="pl-9"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-muted-foreground">
                        Department
                      </p>
                      <Select value={dept} onValueChange={setDept}>
                        <SelectTrigger>
                          <SelectValue placeholder="All departments" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((d) => (
                            <SelectItem key={d} value={d}>
                              {d === "ALL" ? "All" : d}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-medium text-muted-foreground">
                        Location
                      </p>
                      <Select value={loc} onValueChange={setLoc}>
                        <SelectTrigger>
                          <SelectValue placeholder="All locations" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((l) => (
                            <SelectItem key={l} value={l}>
                              {l === "ALL" ? "All" : l}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Showing{" "}
                      <span className="font-medium text-foreground">
                        {total}
                      </span>{" "}
                      role(s)
                    </span>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setQuery("");
                        setDept("ALL");
                        setLoc("ALL");
                      }}
                    >
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10">
        <Card className="border-black/10">
          <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-lg">Open Positions</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Apply in minutes. We’ll reach out if your profile is a match.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Entries per page</span>
                <Select
                  value={String(entries)}
                  onValueChange={(v) => setEntries(Number(v))}
                >
                  <SelectTrigger className="h-9 w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[5, 10, 25, 50].map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="relative w-full sm:w-[280px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search…"
                  className="h-9 pl-9"
                />
              </div>
            </div>
          </CardHeader>

          <CardContent>
            {/* Desktop table */}
            <div className="hidden md:block">
              <div className="overflow-hidden rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/40">
                      <TableHead>
                        <button
                          className="inline-flex items-center gap-2 font-semibold"
                          onClick={() => toggleSort("title")}
                        >
                          Job Title <ArrowUpDown className="h-4 w-4" />
                        </button>
                      </TableHead>
                      <TableHead className="w-[180px]">
                        <button
                          className="inline-flex items-center gap-2 font-semibold"
                          onClick={() => toggleSort("department")}
                        >
                          Department <ArrowUpDown className="h-4 w-4" />
                        </button>
                      </TableHead>
                      <TableHead className="w-[130px]">
                        <button
                          className="inline-flex items-center gap-2 font-semibold"
                          onClick={() => toggleSort("reqId")}
                        >
                          Job Req ID <ArrowUpDown className="h-4 w-4" />
                        </button>
                      </TableHead>
                      <TableHead className="w-[180px]">
                        <button
                          className="inline-flex items-center gap-2 font-semibold"
                          onClick={() => toggleSort("location")}
                        >
                          Location <ArrowUpDown className="h-4 w-4" />
                        </button>
                      </TableHead>
                      <TableHead className="w-[120px]">
                        <button
                          className="inline-flex items-center gap-2 font-semibold"
                          onClick={() => toggleSort("status")}
                        >
                          Status <ArrowUpDown className="h-4 w-4" />
                        </button>
                      </TableHead>
                      <TableHead className="w-[150px] text-right">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {paged.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="py-10 text-center">
                          <p className="text-sm text-muted-foreground">
                            No roles match your filters.
                          </p>
                        </TableCell>
                      </TableRow>
                    ) : (
                      paged.map((j) => (
                        <TableRow key={j.id} className="hover:bg-muted/30">
                          <TableCell>
                            <div className="font-medium">{j.title}</div>
                            <div className="mt-1 flex flex-wrap items-center gap-2">
                              <Badge variant="secondary">{j.mode}</Badge>
                              <Badge variant="secondary">{j.type}</Badge>
                              <span className="text-xs text-muted-foreground">
                                {j.postedAt}
                              </span>
                            </div>
                          </TableCell>

                          <TableCell>{j.department}</TableCell>
                          <TableCell>{j.reqId}</TableCell>
                          <TableCell>{j.location}</TableCell>

                          <TableCell>
                            <Badge
                              className={cn(
                                "border",
                                j.status === "Open"
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground",
                              )}
                            >
                              {j.status}
                            </Badge>
                          </TableCell>

                          <TableCell className="text-right">
                            <Button
                              size="sm"
                              className="rounded-full px-6"
                              onClick={() => openApply(j)}
                            >
                              Apply
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Mobile cards */}
            <div className="grid gap-3 md:hidden">
              {paged.length === 0 ? (
                <div className="rounded-lg border p-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    No roles match your filters.
                  </p>
                </div>
              ) : (
                paged.map((j) => (
                  <Card key={j.id} className="border-black/10">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="text-left">
                          <p className="text-base font-semibold leading-snug">
                            {j.title}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {j.department} • Req {j.reqId}
                          </p>
                        </div>

                        <Badge
                          className={cn(
                            "border",
                            j.status === "Open"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground",
                          )}
                        >
                          {j.status}
                        </Badge>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="secondary">{j.location}</Badge>
                        <Badge variant="secondary">{j.mode}</Badge>
                        <Badge variant="secondary">{j.type}</Badge>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {j.postedAt}
                        </span>
                        <Button
                          size="sm"
                          className="rounded-full px-6"
                          onClick={() => openApply(j)}
                        >
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Pagination footer */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-medium text-foreground">
                  {total === 0 ? 0 : startIdx + 1}
                </span>{" "}
                to <span className="font-medium text-foreground">{endIdx}</span>{" "}
                of <span className="font-medium text-foreground">{total}</span>{" "}
                entries
              </p>

              <div className="flex items-center justify-between gap-2 sm:justify-end">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setPage(1)}
                    disabled={safePage <= 1}
                    aria-label="First page"
                  >
                    <ChevronsLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={safePage <= 1}
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="rounded-md border px-3 py-2 text-sm">
                    <span className="font-medium">{safePage}</span>
                    <span className="text-muted-foreground">
                      {" "}
                      / {totalPages}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={safePage >= totalPages}
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setPage(totalPages)}
                    disabled={safePage >= totalPages}
                    aria-label="Last page"
                  >
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ================= Apply Dialog ================= */}
      <Dialog open={!!applyJob} onOpenChange={(v) => !v && closeApply()}>
        <DialogContent className="max-h-[90svh] max-w-3xl overflow-y-auto rounded-3xl p-0 sm:max-h-none sm:overflow-visible">
          {applyJob ? (
            <div className="rounded-3xl bg-white p-6 text-slate-900 sm:p-8">
              <DialogHeader>
                <DialogTitle className="sr-only">Job Application</DialogTitle>
              </DialogHeader>

              {/* header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border">
                    <Image
                      src={BRAND.logo}
                      alt="Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    {applyJob.department}
                  </div>
                </div>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-primary">
                Job Application Form
              </h2>

              {submitted ? null : <Stepper step={step} />}

              {/* Job meta */}
              <div className="mt-6 rounded-xl border bg-slate-50 p-3 text-sm">
                <div className="font-semibold">{applyJob.title}</div>
                <div className="text-muted-foreground">
                  Req {applyJob.reqId} • {applyJob.location} • {applyJob.mode} •{" "}
                  {applyJob.type}
                </div>
              </div>

              {/* body */}
              <div className="mt-6 space-y-4">
                {submitted ? (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
                    <div className="text-base font-semibold">
                      Application submitted successfully
                    </div>
                    <p className="mt-1 text-emerald-900/80">
                      Thanks for applying. Our team will review your profile
                      and reach out if there is a match.
                    </p>
                  </div>
                ) : (
                  <>
                    {step === 1 ? (
                      <>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-1">
                        <FieldLabel label="First Name" required />
                        <Input
                          value={form.firstName}
                          onChange={(e) =>
                            setForm((p) => ({
                              ...p,
                              firstName: e.target.value,
                            }))
                          }
                          placeholder="required"
                        />
                      </div>

                      <div className="space-y-1">
                        <FieldLabel label="Middle Name" />
                        <Input
                          value={form.middleName}
                          onChange={(e) =>
                            setForm((p) => ({
                              ...p,
                              middleName: e.target.value,
                            }))
                          }
                          placeholder=""
                        />
                      </div>

                      <div className="space-y-1">
                        <FieldLabel label="Last Name" required />
                        <Input
                          value={form.lastName}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, lastName: e.target.value }))
                          }
                          placeholder="required"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1">
                        <FieldLabel label="Phone Number" required />
                        <Input
                          value={form.phone}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, phone: e.target.value }))
                          }
                          placeholder="+966000000000"
                        />
                      </div>

                      <div className="space-y-1">
                        <FieldLabel label="Email Address" required />
                        <Input
                          value={form.email}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, email: e.target.value }))
                          }
                          placeholder="required"
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1">
                        <FieldLabel label="Address" required />
                        <Input
                          value={form.address}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, address: e.target.value }))
                          }
                          placeholder="required"
                        />
                      </div>

                      <div className="space-y-1">
                        <FieldLabel label="Date of Birth" required />
                        <Input
                          value={form.dob}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, dob: e.target.value }))
                          }
                          placeholder="required"
                          type="date"
                        />
                      </div>
                    </div>
                  </>
                    ) : null}

                    {step === 2 ? (
                      <>
                    <div className="space-y-1">
                      <FieldLabel label="Degree" required />
                      <Input
                        value={form.degree}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, degree: e.target.value }))
                        }
                        placeholder="required"
                      />
                    </div>

                    <div className="space-y-1">
                      <FieldLabel label="Institution Name" required />
                      <Input
                        value={form.institution}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            institution: e.target.value,
                          }))
                        }
                        placeholder="required"
                      />
                    </div>

                    <div className="space-y-1">
                      <FieldLabel label="Graduation Year" />
                      <Input
                        value={form.graduationYear}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            graduationYear: e.target.value,
                          }))
                        }
                        placeholder=""
                      />
                    </div>
                  </>
                    ) : null}

                    {step === 3 ? (
                      <>
                    <div className="space-y-1">
                      <FieldLabel label="Job Title" />
                      <Input
                        value={form.employmentJobTitle}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            employmentJobTitle: e.target.value,
                          }))
                        }
                        placeholder=""
                      />
                    </div>

                    <div className="space-y-1">
                      <FieldLabel label="Company Name" />
                      <Input
                        value={form.companyName}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            companyName: e.target.value,
                          }))
                        }
                        placeholder=""
                      />
                    </div>

                    <div className="space-y-1">
                      <FieldLabel label="Employment Period" />
                      <Input
                        value={form.employmentPeriod}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            employmentPeriod: e.target.value,
                          }))
                        }
                        placeholder=""
                      />
                    </div>
                  </>
                    ) : null}

                    {step === 4 ? (
                      <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1">
                        <FieldLabel label="Resume Drive Link" />
                        <Input
                          value={form.resumeDriveLink}
                          onChange={(e) =>
                            setForm((p) => ({
                              ...p,
                              resumeDriveLink: e.target.value,
                            }))
                          }
                          placeholder="https://drive.google.com/..."
                        />
                        <p className="text-xs text-muted-foreground">
                          Upload resume to Google Drive and set access to
                          “Anyone with the link can view”.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <FieldLabel label="Cover Letter Drive Link" />
                        <Input
                          value={form.coverDriveLink}
                          onChange={(e) =>
                            setForm((p) => ({
                              ...p,
                              coverDriveLink: e.target.value,
                            }))
                          }
                          placeholder="https://drive.google.com/..."
                        />
                        <p className="text-xs text-muted-foreground">
                          Optional. Paste a shareable Drive link (view access).
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <FieldLabel label="Comments" />
                      <Textarea
                        value={form.comments}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, comments: e.target.value }))
                        }
                        className="min-h-[120px]"
                        placeholder=""
                      />
                    </div>
                  </>
                    ) : null}
                  </>
                )}
              </div>

              {/* footer buttons */}
              <DialogFooter className="mt-6 flex w-full flex-row items-center justify-start gap-3 sm:justify-start">
                {submitted ? (
                  <Button
                    type="button"
                    onClick={closeApply}
                    className="rounded-full px-8"
                  >
                    Close
                  </Button>
                ) : (
                  <>
                    {step > 1 ? (
                      <Button
                        type="button"
                        onClick={prevStep}
                        className="rounded-full px-8"
                        disabled={sending}
                      >
                        Previous
                      </Button>
                    ) : null}

                    {step < 4 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="rounded-full px-10"
                        disabled={sending}
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={submitApplication}
                        className="rounded-full px-10"
                        disabled={sending}
                      >
                        {sending ? "Sending..." : "Send"}
                      </Button>
                    )}
                  </>
                )}
              </DialogFooter>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
