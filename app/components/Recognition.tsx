"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

const Stat = ({ value, suffix = "+", label, icon }: StatProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animate(count, value, {
            duration: 2,
            ease: "easeOut",
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, value, count]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-center justify-center mb-3">
        <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex items-baseline justify-center gap-0.5">
        <motion.span className="text-4xl md:text-5xl font-extrabold text-white">
          {rounded}
        </motion.span>
        <span className="text-3xl md:text-4xl font-bold text-white/70">{suffix}</span>
      </div>
      <p className="text-sm mt-2 text-white/70 font-medium">{label}</p>
    </div>
  );
};

export default function Recognition() {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-14 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <Stat value={10} label="Years of Excellence" icon={<Award className="w-6 h-6 text-white" />} />
        <Stat value={5000} label="Students Taught" icon={<Users className="w-6 h-6 text-white" />} />
        <Stat value={95} suffix="%" label="Distinction Rate" icon={<GraduationCap className="w-6 h-6 text-white" />} />
        <Stat value={50} label="Expert Faculty" icon={<BookOpen className="w-6 h-6 text-white" />} />
      </div>
    </section>
  );
}
