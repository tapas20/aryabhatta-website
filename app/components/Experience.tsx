"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Construction1 from "../../public/assets/Construction.jpg";
import Construction2 from "../../public/assets/Exprience.jpg";
import Construction3 from "../../public/assets/HeavyLifting.jpg";
import Construction4 from "../../public/assets/Manpower.jpg";
import Construction5 from "../../public/assets/Rigmove.jpg";

const images = [
  { id: 1, src: Construction1 },
  { id: 2, src: Construction2 },
  { id: 3, src: Construction3 },
  { id: 4, src: Construction4 },
  { id: 5, src: Construction5 },
];

const Experience: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto scroll
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const prev = () =>
    setCurrentImageIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () =>
    setCurrentImageIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <section className="w-full bg-white">
      {/* 🔒 Desktop layout locked from md+ */}
      <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] min-h-[600px]">
        {/* LEFT PANEL */}
        <div className="bg-gray-900 text-white p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            We&apos;ve Been
            <br />
            Building For Over
            <br />
            11 Years
          </h2>

          <div className="w-14 h-1 bg-[#a9a9a9] mb-6" />

          <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-md">
            We provide innovative solutions for all your construction needs with
            expertise spanning over a decade. Our experienced team delivers
            quality workmanship on every project, from residential builds to
            large-scale commercial developments.
          </p>

          <Link
            href="/about"
            className="border-2 border-[#a9a9a9] text-[#a9a9a9] px-6 py-3 rounded-md w-fit font-semibold hover:bg-primary hover:text-white transition"
          >
            ABOUT US
          </Link>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col">
          {/* CAROUSEL */}
          <div
            className="relative h-[420px] lg:h-[480px] overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={images[currentImageIndex].src}
              alt="Construction"
              fill
              priority
              className="object-cover"
              sizes="(max-width:768px) 100vw, 70vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Counter */}
            <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {currentImageIndex + 1} / {images.length}
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={prev}
                className="bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronLeft className="w-5 h-5 text-gray-900" />
              </button>

              <div className="flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentImageIndex
                        ? "w-8 bg-[#a9a9a9]"
                        : "w-2 bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronRight className="w-5 h-5 text-gray-900" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="absolute top-4 left-4 flex gap-2">
              {images
                .slice(currentImageIndex + 1, currentImageIndex + 4)
                .map((img, idx) => (
                  <div
                    key={img.id}
                    onClick={() =>
                      setCurrentImageIndex(currentImageIndex + idx + 1)
                    }
                    className="w-12 h-12 relative rounded-lg overflow-hidden border-2 border-white/60 cursor-pointer"
                  >
                    <Image src={img.src} alt="" fill className="object-cover" />
                  </div>
                ))}
            </div>
          </div>

          {/* CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="bg-primary p-8">
              <h3 className="text-white font-bold text-2xl mb-2">
                Call For a Quote
              </h3>
              <a
                href="tel:0567220786"
                className="text-[#a9a9a9] text-3xl font-bold hover:text-white transition"
              >
                0567220786
              </a>
            </div>

            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:text-gray-900 transition"
              >
                REQUEST ESTIMATE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
