"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConstructionImage from "../../public/assets/Construction.jpg";
import {
  HardHat,
  Wrench,
  Building,
  Target,
  Award,
  Heart,
  Shield,
  CheckCircle,
  Users,
  Zap,
  Award as AwardIcon,
  Users as TeamIcon,
  Building2,
  Truck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PresidentMessage from "../components/PresidentMessage";

const AboutPage = () => {
  const [currentSpecialization, setCurrentSpecialization] = useState(0);
  const [selectedYear, setSelectedYear] = useState(2);
  const [projectsCount, setProjectsCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const statsRef = useRef(null);
  const animationStartedRef = useRef(false);

  // Track viewport width to avoid referencing `window` during SSR
  useEffect(() => {
    const updateIsDesktop = () => setIsDesktop(window.innerWidth >= 640);
    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    return () => window.removeEventListener("resize", updateIsDesktop);
  }, []);

  // Auto-rotate specializations every 3 seconds (moved below specializations)

  // Reset animation state when component unmounts
  useEffect(() => {
    return () => {
      animationStartedRef.current = false;
      setHasAnimated(false);
    };
  }, []);

  // Intersection Observer for counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Reset to 0 and start animation
            setProjectsCount(0);
            setTeamCount(0);
            animationStartedRef.current = true;

            // Start counting animation
            animateCounter(setProjectsCount, 500, 2000);
            animateCounter(setTeamCount, 250, 2000);

            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    const node = statsRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [hasAnimated]);

  const animateCounter = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    target: number,
    duration: number,
  ): (() => void) => {
    let startTime: number | null = null;
    let animationFrameId: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentValue = Math.floor(easeOutQuart * target);

      setter(currentValue);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setter(target); // Ensure we end exactly at target
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Return a cleanup function
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  };

  const specializations = [
    {
      title: "Demolition Works",
      description: "Safe and efficient demolition services.",
      icon: <Zap className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
      title: "Equipment Rentals",
      description: "Wide range of heavy equipment available for rent.",
      icon: <HardHat className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
      title: "Rig Move Support",
      description: "Professional rig relocation and setup services.",
      icon: <Wrench className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
      title: "Heavy Lifting",
      description: "Specialized heavy lifting and crane services.",
      icon: <Building className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
      title: "Transportation",
      description: "Reliable and efficient transportation solutions.",
      icon: <Truck className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
      title: "Manpower Rental",
      description:
        "Skilled workforce available for short and long-term projects.",
      icon: <Users className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
      title: "Construction",
      description: "Comprehensive construction services.",
      icon: <Building2 className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
      title: "RO Maintenance",
      description: "Reverse Osmosis system maintenance and support.",
      icon: <Wrench className="w-12 h-12 md:w-16 md:h-16" />,
    },
  ];

  // Auto-rotate specializations every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialization((prev) => (prev + 1) % specializations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [specializations.length]);

  // ✅ AL SYED – Legacy / Journey Timeline (service-based, started in 2007)
  const legacyTimeline = [
    {
      year: "2007",
      title: "Company Established",
      description:
        "Started operations in Saudi Arabia with a focus on construction and industrial support services, delivering dependable on-site execution and workforce support.",
      image: "/assets/Heavy.jpg",
    },
    {
      year: "2010",
      title: "Demolition Works",
      description:
        "Launched dedicated demolition operations covering controlled demolition, selective dismantling, site clearance, debris removal, and enabling works for new construction.",
      image: "/assets/Demolition.jpg",
    },
    {
      year: "2015",
      title: "MEP & Industrial Works Growth",
      description:
        "Expanded into Mechanical & Electrical works including cabling, panels, switchgear support, piping, pumps/valves installation, and industrial site execution.",
      image: "/assets/mechanical.jpg",
    },
    {
      year: "2017",
      title: "Manpower & Site Support Services",
      description:
        "Expanded into manpower supply and site support for construction and industrial projects—helping clients scale teams quickly and safely.",
      image: "/assets/land.jpg",
    },
    {
      year: "2019",
      title: "Heavy Lifting & Rig Move Support",
      description:
        "Scaled heavy lifting and rig move services with improved planning, rigging support, and safe execution for industrial equipment shifting and major lifts.",
      image: "/assets/HeavyLifting.jpg",
    },
  ];

  // Removed unused scrollToYear function and Direction type — use nextYear() and prevYear() which are implemented below for scrolling/navigation.

  // Auto-slide timer for legacy timeline (slideshow)
  const slideTimerRef = useRef<number | null>(null);

  const startAutoSlide = () => {
    if (slideTimerRef.current) {
      window.clearInterval(slideTimerRef.current);
    }
    slideTimerRef.current = window.setInterval(() => {
      setSelectedYear((prev) => (prev + 1) % legacyTimeline.length);
    }, 2000);
  };

  const resetAutoSlide = () => {
    startAutoSlide();
  };

  const goToYear = (index: number) => {
    setSelectedYear(index);
    resetAutoSlide();
  };

  const nextYear = () => {
    setSelectedYear((prev) => Math.min(prev + 1, legacyTimeline.length - 1));
    resetAutoSlide();
  };

  const prevYear = () => {
    setSelectedYear((prev) => Math.max(prev - 1, 0));
    resetAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (slideTimerRef.current) window.clearInterval(slideTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ------------------------------------------------ HERO ------------------------------------------------ */}
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[55vh] flex flex-col items-center justify-center overflow-hidden">
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
            src={ConstructionImage}
            alt="Hero"
            fill
            className="object-cover opacity-70"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative text-3xl sm:text-4xl md:text-6xl font-semibold tracking-wide text-white text-center px-4"
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative mt-6 text-white text-sm md:text-base font-medium tracking-widest uppercase text-center"
        >
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <span className="mx-3 text-white/50">&gt;</span>
          <span className="text-primary font-bold">About Us</span>
        </motion.div>
      </div>

      {/* Company Overview with Animated Numbers */}
      <section className="py-12 sm:py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-none overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=800&fit=crop"
                alt="Our Construction Company"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 sm:mb-6">
                  About <span className="font-bold text-primary">Us</span>
                </h2>
                <div className="w-20 h-0.5 bg-primary"></div>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
                Our operations cover the vast stretch of landmass from Red Sea
                in the west to Arabian Gulf in the East, with its head office
                being located in Dammam. With these infrastructures, Al Syed
                Company can serve all G.C.C. and Middle East countries.
              </p>

              <div
                ref={statsRef}
                className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-baseline mb-2">
                    <motion.span
                      key={projectsCount}
                      className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary"
                      initial={false}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 0.5,
                        times: [0, 0.5, 1],
                      }}
                    >
                      {projectsCount}
                    </motion.span>
                    <span className="text-2xl sm:text-3xl font-bold text-primary ml-2">
                      +
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider font-medium">
                    Projects Completed
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative"
                >
                  <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-baseline mb-2">
                    <motion.span
                      key={teamCount}
                      className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary"
                      initial={false}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 0.5,
                        times: [0, 0.5, 1],
                      }}
                    >
                      {teamCount}
                    </motion.span>
                    <span className="text-2xl sm:text-3xl font-bold text-primary ml-2">
                      +
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider font-medium">
                    Team Members
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specialization - Exactly like Screenshot */}
      <section
        className="py-12 sm:py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/AboutBg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gray-700/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4">
              Our <span className="font-normal">Specialization</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-light px-4">
              We specialize in delivering comprehensive construction solutions
              across multiple domains
            </p>
          </motion.div>

          {/* Animated Specialization Display */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {specializations.map(
                (spec, index) =>
                  currentSpecialization === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                    >
                      <motion.div
                        className="text-white mb-6 sm:mb-8"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {spec.icon}
                      </motion.div>
                      <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6">
                        {spec.title}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-md mx-auto font-light">
                        {spec.description}
                      </p>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
              {specializations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSpecialization(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentSpecialization === index
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Static Specialization Titles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 max-w-6xl mx-auto border-t border-white/20 pt-8 sm:pt-12 mt-8 sm:mt-12">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col items-center justify-center text-center py-6 sm:py-8 px-2 sm:px-4 ${
                  index < specializations.length - 1 &&
                  (index % 2 === 0 || isDesktop)
                    ? "sm:border-r border-white/20"
                    : ""
                } ${index < 4 && isDesktop ? "border-b border-white/20" : ""}`}
                onMouseEnter={() => setCurrentSpecialization(index)}
              >
                <div
                  className={`text-white mb-3 sm:mb-4 transition-all duration-300 ${
                    currentSpecialization === index
                      ? "opacity-100 scale-110"
                      : "opacity-60"
                  }`}
                >
                  {spec.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white">
                  {spec.title}
                </h3>

                {/* Vertical divider - hidden on mobile */}
                {index < specializations.length - 1 &&
                  (index % 2 === 0 || isDesktop) && (
                    <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-10 sm:h-16 bg-white/30"></div>
                  )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* President's Message Section */}
      <PresidentMessage />

      {/* Vision & Mission Section */}
      <section className="relative py-14 sm:py-18 md:py-24 px-4 md:px-8 bg-white overflow-hidden">
        {/* ✅ premium background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.06]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.6) 1px, transparent 0)`,
                backgroundSize: "22px 22px",
              }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500">
              Our Philosophy
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-light text-gray-900">
              Our{" "}
              <span className="font-bold text-primary">Guiding Principles</span>
            </h2>

            <div className="w-20 h-0.5 bg-primary mx-auto mt-4 sm:mt-6" />

            <p className="text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto font-light text-base sm:text-lg px-4">
              The foundation upon which we build trust, quality, and lasting
              relationships.
            </p>
          </motion.div>

          {/* ✅ Vision + Mission with equal heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-14 lg:mb-16 md:items-stretch">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group relative rounded-2xl border border-gray-200 bg-white shadow-[0_12px_40px_-20px_rgba(0,0,0,0.25)] overflow-hidden h-full"
            >
              {/* top accent */}
              <div className="h-1.5 bg-gradient-to-r from-primary to-primary/50" />
              <div className="p-6 sm:p-8 md:p-10 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-5 sm:mb-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-orange-200/60 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Direction
                    </p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      Our Vision
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed font-light text-sm sm:text-base">
                  To be the leading and most trusted industrial service provider
                  in Saudi Arabia, recognized for excellence, innovation, and a
                  strong commitment to supporting the Kingdom&apos;s
                  infrastructure and industrial growth.
                </p>

                {/* bottom meta */}
                <div className="mt-auto pt-6 sm:pt-8">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125" />
                    Long-term trust • Sustainable growth
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group relative rounded-2xl border border-gray-200 bg-white shadow-[0_12px_40px_-20px_rgba(0,0,0,0.25)] overflow-hidden h-full"
            >
              {/* top accent */}
              <div className="h-1.5 bg-gradient-to-r from-primary to-primary/50" />
              <div className="p-6 sm:p-8 md:p-10 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-5 sm:mb-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-orange-200/60 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Purpose
                    </p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      Our Mission
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed font-light text-sm sm:text-base">
                  To deliver safe, efficient, and high-quality solutions across
                  heavy equipment rental, rig move support, construction, and
                  manpower services, while building long-term, reliable
                  relationships with our clients.
                </p>

                {/* bottom meta */}
                <div className="mt-auto pt-6 sm:pt-8">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125" />
                    Safety-first • Efficiency • Quality
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ✅ Core Values — modern grid + cleaner bullets */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-gray-200 bg-white shadow-[0_16px_50px_-28px_rgba(0,0,0,0.35)] overflow-hidden"
            >
              {/* top accent */}
              <div className="h-1.5 bg-gradient-to-r from-primary to-primary/50" />

              {/* glow */}
              <div className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />

              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6 sm:mb-8">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-orange-200/60 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>

                    <div className="text-left">
                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        What we stand for
                      </p>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                        Core Values
                      </h3>
                    </div>
                  </div>

                  {/* small badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600 w-fit">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                    Consistent standards
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Experience",
                      desc: "Leveraging years of expertise to deliver reliable and efficient solutions.",
                    },
                    {
                      title: "Responsibility",
                      desc: "Taking accountability for every project and client engagement.",
                    },
                    {
                      title: "Safety",
                      desc: "Ensuring the well-being of personnel, clients, and operations at all times.",
                    },
                    {
                      title: "Flexibility",
                      desc: "Adapting to client needs and project requirements with agility and precision.",
                    },
                  ].map((v, i) => (
                    <motion.div
                      key={v.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.06 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-5 hover:bg-white transition-colors duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 shrink-0 p-1.5 rounded-full bg-white border border-gray-200 transition-transform duration-300 group-hover:scale-110">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">
                            {v.title}
                          </p>
                          <p className="text-gray-600 font-light text-sm leading-relaxed mt-1">
                            {v.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='3' fill='%23999'/%3E%3C/svg%3E")`,
              backgroundSize: "140px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
              Why <span className="font-bold">Choose Us</span>
            </h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto mt-4 sm:mt-6"></div>
            <p className="text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg font-light px-4">
              Delivering excellence with a commitment to quality, reliability,
              and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Safety",
                description:
                  "The number one priority behind all Al Syed's Sales and Rentals is that all our equipment is maintained to exceed manufacturer and industry standards, which include regular third-party inspection. Our safety record is one of the highest in the industry.",
                icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7" />,
                delay: 0,
              },
              {
                title: "Experience",
                description:
                  "All our professionals and operators are trained frequently by Approved Third Party Training Companies and licensed through their respective authorities and through the Saudi Arabian Oil Company (ARAMCO). Our Service experts can handle any project or job that is out there.",
                icon: <AwardIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
                delay: 0.1,
              },
              {
                title: "Responsibility",
                description:
                  "We maintain policy that exceeds the industry standard. We believe in taking responsibility of the clients' needs as ours and as well as offering additional support to meet specific project needs.",
                icon: <TeamIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
                delay: 0.2,
              },
              {
                title: "Flexibility",
                description:
                  "Our fleet is one of the most diverse, current, and agile in the entire Kingdom. We provide maintained, equipment and trained manpower for with the best price. We are available to meet our clients needs around the clock.",
                icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7" />,
                delay: 0.3,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="group relative h-full flex flex-col"
              >
                <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                  {/* Icon Wrapper */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[1rem] bg-[#0f172a] text-white flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0e774a] mb-3 sm:mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed font-light flex-grow text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="py-12 sm:py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
              <span className="font-bold">Legacy</span>
            </h2>
            <div className="w-20 h-0.5 bg-primary"></div>
            <p className="text-gray-600 mt-4 max-w-2xl text-base sm:text-lg font-light">
              Hover over the timeline and scroll to navigate through years
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch">
            {/* ---------------------------------------------- */}
            {/* LEFT SIDEBAR (NO SCROLLBAR) - Mobile Horizontal */}
            {/* ---------------------------------------------- */}
            <div className="lg:col-span-2">
              <div className="flex h-full">
                <div className="flex flex-col lg:flex-col gap-4 sm:gap-6 w-full h-full justify-center overflow-auto">
                  <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 space-x-4 lg:space-x-0 lg:space-y-4">
                    {legacyTimeline.map((item, index) => (
                      <motion.button
                        key={index}
                        onClick={() => goToYear(index)}
                        whileTap={{ scale: 0.95 }}
                        className={`relative text-left transition-all duration-300 px-4 py-3 rounded-lg flex-shrink-0 lg:w-full ${
                          selectedYear === index
                            ? "bg-primary/10 border-l-4 lg:border-l-4 border-primary text-primary"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <span
                          className={`text-xl sm:text-2xl font-bold ${
                            selectedYear === index
                              ? "text-primary"
                              : "text-gray-400"
                          }`}
                        >
                          {item.year}
                        </span>
                        <p className="text-xs sm:text-sm mt-1 line-clamp-2">
                          {item.title}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------- */}
            {/* RIGHT CONTENT — SCROLL TO CHANGE YEAR */}
            {/* ---------------------------------------------- */}
            <div className="lg:col-span-10">
              <div className="relative h-full">
                {/* SCROLL DETECTOR OVER IMAGE SECTION */}
                <div
                  className="absolute inset-0 z-10 cursor-ns-resize"
                  onWheel={(e) => {
                    e.preventDefault();
                    if (e.deltaY > 0) {
                      nextYear();
                    } else if (e.deltaY < 0) {
                      prevYear();
                    }
                  }}
                />

                {/* RIGHT CONTENT */}
                <div
                  id="timeline-content"
                  className="transition-all duration-300 h-full"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedYear}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6 sm:space-y-8 h-full flex flex-col"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 h-full items-stretch">
                        {/* IMAGE */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
                        >
                          <Image
                            src={legacyTimeline[selectedYear].image}
                            alt={legacyTimeline[selectedYear].title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                              <div className="px-3 py-1 sm:px-4 sm:py-2 bg-white/90 backdrop-blur-sm rounded-lg">
                                <span className="text-xl sm:text-2xl font-bold text-gray-900">
                                  {legacyTimeline[selectedYear].year}
                                </span>
                              </div>
                              <div className="text-white/90 text-xs sm:text-sm bg-black/40 px-2 sm:px-3 py-1 rounded-full">
                                Scroll on image to navigate
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* TEXT CONTENT */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="space-y-4 sm:space-y-6"
                        >
                          <div>
                            <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                              Milestone {selectedYear + 1}
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                              {legacyTimeline[selectedYear].title}
                            </h3>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                              {legacyTimeline[selectedYear].description}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-500/10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-500/20"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 px-4">
              Ready to Build Your <span className="font-bold">Vision?</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto font-light px-4">
              Partner with us to bring your construction projects to life with
              expertise, innovation, and commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-medium text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Request a Quote
              </motion.button> */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-medium text-base sm:text-lg rounded-full transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
