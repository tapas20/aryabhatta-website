"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface StatProps {
  value: number;
  label: string;
}

const Stat = ({ value, label }: StatProps) => {
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
  }, [hasAnimated, value]);

  return (
    <div ref={ref} className="text-center text-white">
      <motion.span className="text-4xl font-bold">
        {rounded}
      </motion.span>
      <span className="text-4xl font-bold">+</span>

      <p className="text-sm mt-1 opacity-90">{label}</p>
    </div>
  );
};

const ConstructionStats = () => {
  return (
    <div className="w-full bg-primary py-10">
      <div className="max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Stat value={20} label="Years of Experience" />
        <Stat value={500} label="Projects Completed" />
        <Stat value={100} label="Winning Global Award" />
        <Stat value={1000} label="Satisfied Client" />
      </div>
    </div>
  );
};

export default ConstructionStats;
