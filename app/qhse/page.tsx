"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import oilrefinery from "../../public/assets/oil-refinery-twilight-with-reflection.jpg";
import Protection from "../../public/assets/protection-5080948.jpg";
import Medical from "../../public/assets/doctor-9964866.jpg";
import Cyclone from "../../public/assets/environmental-protection-326923.jpg";
import Link from "next/link";

// Component that uses useSearchParams
function QHSEContent() {
  const searchParams = useSearchParams();
  const [showMore, setShowMore] = useState(false);

  const qualityPoint = [
    "Delivering optimal quality standards to the customer",
    "Striving to exceed customer's expectations",
    "Recognizing defined quality objectives",
    "Pursuing continuous improvements",
  ];

  const longText = `Al Syed Company is committed to ensuring a safe, healthy, and secure working environment for all employees and partners. We minimize risks by maintaining equipment that is fit for purpose and implementing a strong preventive maintenance program. Our QHSE framework focuses on continuous improvement, preventing workplace injuries, illnesses, and environmental pollution.`;

  useEffect(() => {
    const sectionId = searchParams.get("section");
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          element.classList.add("highlight-section");
          setTimeout(() => {
            element.classList.remove("highlight-section");
          }, 2000);
        }
      }, 300);
    }
  }, [searchParams]);

  return (
    <div className="bg-white text-black">
      {/* HERO SECTION */}
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 3.15, opacity: 0 }}
          animate={{
            scale: 1.5,
            opacity: 1,
            x: [-20, 20, -20], // floating movement
          }}
          transition={{
            duration: 1.4, // fade + scale duration
            ease: "easeOut",
            x: {
              duration: 12, // floating movement duration
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute inset-0"
        >
          <Image
            src={oilrefinery}
            alt="Hero"
            fill
            className="object-cover opacity-70"
            priority
            sizes="100vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center px-4"
        >
          Quality, Health, Safety & Environment Commitment
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative mt-6 text-white text-sm md:text-base font-medium tracking-widest uppercase text-center"
        >
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <span className="mx-3 text-white/50">&gt;</span>
          <span className="text-primary font-bold">QHSE</span>
        </motion.div>
      </div>

      {/* MAIN SECTION */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 xs:px-6 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {/* LEFT TEXT WITH SHOW MORE / LESS */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-6">
              Quality, Health, Safety & Environment
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg whitespace-pre-line">
              {showMore ? longText : longText.substring(0, 200) + "..."}
            </p>

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-3 sm:mt-4 text-teal-600 font-semibold hover:underline text-sm sm:text-base"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>

          {/* RIGHT SHAPED IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center mt-6 sm:mt-8 lg:mt-0">
            <div
              className="relative w-full max-w-[500px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] overflow-hidden shadow-2xl rounded-3xl sm:rounded-[40px] border-4 border-teal-500/40"
              style={{
                clipPath: "polygon(12% 0, 100% 0, 100% 88%, 0 100%, 0 12%)",
              }}
            >
              <div className="w-full h-full transition-all duration-300 hover:scale-105">
                <Image
                  src={Medical}
                  alt="Medical Facility"
                  fill
                  className="object-cover block"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f7fa]">
        {/* ROW 1: Quality Assurance - Dark Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#333] text-white p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-center relative order-1">
            <div
              className="absolute inset-y-0 right-0 w-20 bg-[#333] hidden lg:block"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
            ></div>

            <div className="relative z-10">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
                Quality Assurance
              </h1>

              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 opacity-90 text-justify">
                Al Syed Company ensures the highest quality standards across all
                operations. We focus on delivering consistent results, exceeding
                customer expectations, and pursuing continuous improvement.
                Through a robust quality management system and clearly defined
                objectives, we guarantee reliable services and optimal
                performance in every project we undertake.
              </p>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto overflow-hidden order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-[#333] to-transparent w-20 sm:w-24 md:w-32 z-10 hidden lg:block"></div>
            <Image
              src={oilrefinery}
              alt="Oil Refinery Logistics"
              fill
              className="w-full h-full object-cover hover:scale-105 transition duration-500 ease-in-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* ROW 2: Health & Safety - Image Left, White Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto overflow-hidden order-2 lg:order-1">
            <div
              className="absolute inset-0"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 60px))",
              }}
            >
              <Image
                src={Medical}
                alt="Medical Cargo Workers"
                fill
                className="w-full h-full object-cover hover:scale-105 transition duration-500 ease-in-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
          </div>

          <div className="bg-white text-gray-900 p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-center relative order-1 lg:order-2">
            <div className="absolute top-0 left-0 w-1 h-16 sm:h-20 md:h-24 bg-[#FFB800]"></div>

            <p className="text-xs sm:text-sm font-semibold text-[#20B2AA] tracking-wider mb-3 sm:mb-4 uppercase">
              Health & Safety
            </p>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
              Health & Safety First
            </h2>

            <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 md:mb-10 text-gray-700 max-w-xl text-justify">
              Al Syed Company is dedicated to achieving the highest standards of
              health, safety, and quality. Compliant with ISO 9001:2015, we
              proactively prevent workplace injuries, maintain equipment
              reliability, and continuously improve our QHSE practices. Through
              training, monitoring, and innovation, we strive to exceed customer
              expectations and ensure a safe, efficient, and responsible work
              environment.
            </p>
          </div>
        </div>

        {/* ROW 3: Project Cargo - Dark Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#2c2c2c] text-white p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-center relative order-1">
            <div
              className="absolute inset-y-0 right-0 w-20 bg-[#2c2c2c] hidden lg:block"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
            ></div>

            <div className="relative z-10">
              <p className="text-xs sm:text-sm font-semibold text-green-400 tracking-wider mb-3 sm:mb-4 uppercase">
                Environmental Safety
              </p>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
                Environmental Protection
              </h1>

              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 opacity-90 text-justify">
                Al Syed Company is committed to sustainable development and
                environmentally responsible operations. We comply with all laws,
                minimize pollution, reduce waste, and optimize energy use.
                Through staff training, modern technologies, and continuous
                monitoring, we strive to protect ecosystems, conserve resources,
                and continually improve our environmental performance.
              </p>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto overflow-hidden order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2c2c2c] to-transparent w-20 sm:w-24 md:w-32 z-10 hidden lg:block"></div>
            <Image
              src={Cyclone}
              alt="Heavy Cargo Transport"
              fill
              className="w-full h-full object-cover hover:scale-105 transition duration-500 ease-in-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* ROW 4: Technology & Innovation - Image Left, White Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto overflow-hidden order-2 lg:order-1">
            <div
              className="absolute inset-0"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 60px))",
              }}
            >
              <Image
                src={Protection}
                alt="Logistics Technology"
                fill
                className="w-full h-full object-cover hover:scale-105 transition duration-500 ease-in-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-[#f5f7fa] to-transparent z-10"></div>
          </div>

          <div className="bg-white text-gray-900 p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-center relative order-1 lg:order-2">
            <div className="absolute top-0 left-0 w-1 h-16 sm:h-20 md:h-24 bg-[#FFB800]"></div>

            <p className="text-xs sm:text-sm font-semibold text-[#4169E1] tracking-wider mb-3 sm:mb-4 uppercase">
              Stewardship
            </p>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
              Compliance & Responsibility
            </h2>

            <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 md:mb-10 text-gray-700 max-w-xl text-justify">
              Al Syed Company is committed to ethical and accountable business
              practices. We strictly follow all regulatory requirements,
              maintain transparent operations, and ensure compliance across all
              departments. Our focus on governance, responsibility, and
              continual improvement ensures trust, reliability, and long-term
              success for our employees, customers, and partners.
            </p>
          </div>
        </div>

        {/* QUALITY POINTS SECTION */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 md:p-9 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {qualityPoint.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.6,
                duration: 1.4,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 0,
              }}
              className="bg-primary/10 border-l-4 border-b-3 border-primary p-3 sm:p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <p className="text-teal-900 font-semibold text-sm sm:text-base md:text-lg">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHT CSS */}
      <style jsx global>{`
        .highlight-section {
          animation: highlight 2s ease;
        }
        @keyframes highlight {
          0% {
            box-shadow: 0 0 0 0 rgba(250, 144, 0, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(250, 144, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(250, 144, 0, 0);
          }
        }

        /* Custom breakpoint for extra small devices */
        @media (max-width: 375px) {
          .text-2xl {
            font-size: 1.5rem;
          }
          .text-3xl {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}

// Main component with Suspense boundary
export default function QHSEPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
            <p className="mt-4 text-gray-600">Loading QHSE information...</p>
          </div>
        </div>
      }
    >
      <QHSEContent />
    </Suspense>
  );
}
