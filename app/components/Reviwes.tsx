"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const testimonials = [
  {
    name: "Priya Mohanty",
    role: "Class 12 CBSE — 96.4%",
    text: "BrightMind Academy transformed my approach to studies. The faculty made Physics and Chemistry so easy to understand. I scored 96.4% in boards and got into my dream college!",
    rating: 5,
  },
  {
    name: "Arjun Das",
    role: "Class 10 CBSE — 95.2%",
    text: "The regular tests and doubt clearing sessions helped me score 95.2% in my board exams. The teachers here truly care about each student's progress.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Class 12 CHSE Science — 92%",
    text: "I joined BrightMind in Class 11 and it was the best decision. The study material and practice papers were excellent. Scored 92% in CHSE boards!",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    role: "Parent of Class 9 Student",
    text: "My son's performance improved dramatically after joining BrightMind. The regular parent-teacher meetings keep us informed about his progress. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ananya Mishra",
    role: "Class 12 CBSE Commerce — 94.8%",
    text: "The Accounts and Economics teachers are amazing! They made every concept crystal clear. The mock exams prepared me perfectly for the actual boards.",
    rating: 5,
  },
  {
    name: "Vikram Nayak",
    role: "JEE Main Qualified",
    text: "BrightMind's integrated JEE coaching along with board preparation helped me crack JEE Main while scoring 93% in boards. The problem-solving approach is top-notch.",
    rating: 5,
  },
  {
    name: "Deepa Rout",
    role: "Parent of Class 12 Student",
    text: "Both my children studied at BrightMind. The faculty's dedication and the structured learning approach consistently deliver excellent results. Worth every penny!",
    rating: 5,
  },
  {
    name: "Siddharth Behera",
    role: "Class 12 CHSE — 91.5%",
    text: "The weekly tests were tough but they prepared me so well for the board exams. The doubt clearing sessions after class were incredibly helpful.",
    rating: 5,
  },
  {
    name: "Kavya Tripathy",
    role: "NEET Qualified",
    text: "The Biology faculty at BrightMind is exceptional. Their NEET-integrated approach helped me qualify for NEET while also scoring 95% in my CBSE boards.",
    rating: 5,
  },
  {
    name: "Rajan Mohanty",
    role: "Parent of Class 8 Student",
    text: "My daughter used to struggle with Maths. After just 3 months at BrightMind, she's now topping her class. The personalized attention makes all the difference.",
    rating: 5,
  },
];

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
    <div className="relative w-full bg-slate-50 py-20 text-slate-900 select-none overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-100/50 rounded-full blur-3xl" />
      </div>

      <div className="text-center mb-12 px-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="h-[2px] w-10 bg-primary rounded-full"></span>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Testimonials
          </p>
          <span className="h-[2px] w-10 bg-primary rounded-full"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          What Our Students &amp; Parents Say
        </h2>
      </div>

      {/* ROW 1 */}
      <div
        ref={row1Ref}
        className="flex gap-6 px-10 py-2 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {longList.map((t, i) => (
          <motion.div
            key={`r1-${i}`}
            className="min-w-[380px] max-w-[380px] bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">{t.text}</p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                <p className="text-primary text-xs font-medium">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ROW 2 */}
      <div
        ref={row2Ref}
        className="flex gap-6 px-10 py-2 mt-5 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {longList.map((t, i) => (
          <motion.div
            key={`r2-${i}`}
            className="min-w-[380px] max-w-[380px] bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">{t.text}</p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                <p className="text-primary text-xs font-medium">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
