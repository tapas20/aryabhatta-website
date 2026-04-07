"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ✅ Updated Testimonials (more Saudi + some Indian managers) — demo/sample placeholders
export const testimonials = [
  // 🇸🇦 Saudi (majority)
  {
    name: "Faisal Al-Harbi",
    role: "Project Manager",
    text: "Al Syed handled a complex demolition scope with strict safety controls and clean execution. Site clearance and debris removal were organized, and the handover area was ready for the next phase without delays.",
  },
  {
    name: "Abdulrahman Al-Qahtani",
    role: "Facilities Manager",
    text: "Their demolition division delivered controlled dismantling in an active industrial environment. Compliance, barricading, and coordination were excellent, and the site was prepared for future construction as promised.",
  },
  {
    name: "Mohammed Al-Faraj",
    role: "Construction Manager",
    text: "We used Al Syed for demolition and enabling works. They mobilized quickly, minimized disruption, and maintained a disciplined safety approach throughout the job.",
  },
  {
    name: "Khalid Al-Shehri",
    role: "Operations Lead, Petro & Utilities Projects",
    text: "Selective dismantling was executed precisely with good planning and clear daily reporting. Debris removal and site cleanup were completed on schedule, which helped us start the rebuild immediately.",
  },
  {
    name: "Saeed Al-Dosari",
    role: "HSE Manager",
    text: "Safety standards were consistently followed across demolition activities. Their team maintained strong site controls, safe equipment handling, and disciplined work permits.",
  },
  {
    name: "Yousef Al-Mutairi",
    role: "Project Controls Manager",
    text: "Budget and timeline control were strong. The demolition scope, clearance, and handover documentation were all handled professionally with no surprises.",
  },
  {
    name: "Ahmed Al-Zahrani",
    role: "Mechanical Projects Supervisor",
    text: "We engaged them for demolition support and mechanical enabling works. The coordination between crews and equipment was smooth and the work quality stayed consistent.",
  },
  {
    name: "Nasser Al-Shammari",
    role: "Site Manager, Eastern Province Works",
    text: "From mobilization to final cleanup, the demolition team performed with speed and professionalism. The site was left ready for construction works as planned.",
  },

  // 🇮🇳 Indian managers
  {
    name: "Rakesh Sharma",
    role: "Project Manager, IndoGulf Contracting",
    text: "Al Syed’s demolition crew executed safe removal and full site clearance with great coordination. Their equipment availability and manpower support made planning easy for our team.",
  },
  {
    name: "Sandeep Nair",
    role: "Operations Manager",
    text: "Demolition + debris removal was handled efficiently, and the team kept the workfront clean and organized. Their safety practices were consistent across shifts.",
  },
  {
    name: "Amit Verma",
    role: "Planning Engineer, Infrastructure Projects",
    text: "What stood out was reliable scheduling and fast turnaround on demolition and enabling works. The site was prepared for the next contractor without rework.",
  },
  {
    name: "Prakash Iyer",
    role: "Facility Manager, Manufacturing & Utilities",
    text: "They supported our plant area modifications with controlled dismantling and cleanup. Clear communication, good supervision, and on-time delivery.",
  },
];


// Duplicate for infinite scroll effect
const longList = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function TestimonialCarousel() {
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  const moveForward = (
    ref: React.RefObject<HTMLDivElement | null>,
    speed: number
  ) => {
    if (!ref.current) return;
    ref.current.scrollLeft += speed;

    if (
      ref.current.scrollLeft >=
      ref.current.scrollWidth - ref.current.clientWidth - 5
    ) {
      ref.current.scrollLeft = 0;
    }
  };

  const moveBackward = (
    ref: React.RefObject<HTMLDivElement | null>,
    speed: number
  ) => {
    if (!ref.current) return;
    ref.current.scrollLeft -= speed;

    if (ref.current.scrollLeft <= 0) {
      ref.current.scrollLeft =
        ref.current.scrollWidth - ref.current.clientWidth - 5;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        moveForward(row1Ref, 1.4);
        moveBackward(row2Ref, 1.4);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div className="relative w-full bg-white py-14 text-black select-none">
      <h2 className="text-center text-4xl font-semibold mb-10 text-gray-800">
        TRUSTED BY INDUSTRY LEADERS
      </h2>

      {/* ROW 1 — Left → Right */}
      <div
        ref={row1Ref}
        className="flex gap-6 px-10 py-2 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {longList.map((t, i) => (
          <motion.div
            key={`r1-${i}`}
            className="min-w-[380px] max-w-[380px] bg-primary/10 rounded-xl p-6 border border-gray-300 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-primary text-sm">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>

      {/* ROW 2 — Right → Left */}
      <div
        ref={row2Ref}
        className="flex gap-6 px-10 py-2 mt-4 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {longList.map((t, i) => (
          <motion.div
            key={`r2-${i}`}
            className="min-w-[380px] max-w-[380px] bg-primary/10 rounded-xl p-6 border border-gray-300 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-primary text-sm">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
