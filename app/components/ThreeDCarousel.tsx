// app/components/ThreeDCarousel.tsx
"use client";

import React, { useRef, useEffect, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface ThreeDCarouselItem {
  id: number;
  title: string; // Project Name
  brand: string; // Short label (ex: "Desalination • Demolition")
  description: string; // Project Description
  tags: string[]; // Optional tags
  imageUrl: string;
  link: string;

  // ✅ Added (optional) for your project details layout
  budget?: string; // must be "** Million"
  completion?: string; // ex: "In Progress"
}

interface ThreeDCarouselProps {
  items: ThreeDCarouselItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
  cardHeight?: number;
  title?: string;
  subtitle?: string;
  tagline?: string;
  isMobileSwipe?: boolean;
}

/** ✅ Local hook (no path issues) */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();

    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, [breakpoint]);

  return isMobile;
}

export default function ThreeDCarousel({
  items,
  autoRotate = true,
  rotateInterval = 4000,
  cardHeight = 520,
  title = "Featured Projects",
  subtitle = "Projects",
  tagline = "Explore our work across industries with real-world impact.",
  isMobileSwipe = true,
}: ThreeDCarouselProps) {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  useEffect(() => {
    if (active > items.length - 1) setActive(0);
  }, [items.length, active]);

  // ✅ observer
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ✅ auto rotate
  useEffect(() => {
    if (!autoRotate) return;
    if (!isInView) return;
    if (isHovering) return;
    if (items.length <= 1) return;

    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, rotateInterval);

    return () => window.clearInterval(id);
  }, [autoRotate, isInView, isHovering, rotateInterval, items.length]);

  const next = () => setActive((prev) => (prev + 1) % items.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + items.length) % items.length);

  const onTouchStart = (e: TouchEvent) => {
    if (!isMobileSwipe) return;
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isMobileSwipe) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!isMobileSwipe) return;
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;
    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) next();
    else prev();
  };

  const getCardAnimationClass = (index: number) => {
    if (index === active) return "scale-100 opacity-100 z-20";
    if (index === (active + 1) % items.length)
      return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === (active - 1 + items.length) % items.length)
      return "translate-x-[-40%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0 pointer-events-none";
  };

  if (!items?.length) return null;

  return (
    <section className="w-full bg-transparent flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold text-primary">{subtitle}</p>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white">
            {title}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-black/60 dark:text-white/60">
            {tagline}
          </p>
        </div>

        <div
          className="relative overflow-hidden h-[560px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={isMobile ? onTouchStart : undefined}
          onTouchMove={isMobile ? onTouchMove : undefined}
          onTouchEnd={isMobile ? onTouchEnd : undefined}
          ref={carouselRef}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {items.map((item, index) => {
              const isInternal = item.link?.startsWith("/");
              const showLink = Boolean(item.link) && item.link !== "#";

              return (
                <div
                  key={item.id}
                  className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(
                    index,
                  )}`}
                >
                  {/* Card shell */}
                  <div
                    className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col transition-all duration-300 dark:bg-gray-900/80 dark:border-white/10 backdrop-blur-sm"
                    style={{ height: cardHeight }}
                  >
                    {/* Image Header */}
                    <div className="relative h-56 shrink-0 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                      
                      {/* Brand Badge */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white tracking-widest uppercase shadow-sm">
                          {item.brand || "PROJECT"}
                        </span>
                        {item.completion && (
                          <span className="flex items-center gap-1.5 text-[10px] font-bold text-primary bg-white/90 px-2.5 py-1 rounded-full shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            {item.completion}
                          </span>
                        )}
                      </div>

                      {/* Title overlay */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-bold leading-tight drop-shadow-md">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col grow bg-white dark:bg-transparent overflow-hidden">
                      <div className="space-y-4 mb-4 grow">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">Project Budget</p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.budget || "** Million"}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">Description</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Tags & Actions */}
                      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/10 flex flex-col gap-4">
                        <div className="flex flex-wrap gap-2">
                          {(item.tags || []).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded-md text-[11px] font-semibold tracking-wide border border-gray-100 dark:bg-white/5 dark:border-white/10 dark:text-white/70 uppercase"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {showLink ? (
                          <div>
                            {isInternal ? (
                              <Link
                                href={item.link}
                                className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90"
                              >
                                View Details
                              </Link>
                            ) : (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90"
                              >
                                View Details
                              </a>
                            )}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* arrows (desktop) */}
          {!isMobile && items.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all hover:scale-110"
                onClick={prev}
                aria-label="Previous"
                type="button"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all hover:scale-110"
                onClick={next}
                aria-label="Next"
                type="button"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === idx
                    ? "bg-gray-500 w-5"
                    : "bg-gray-200 hover:bg-gray-300 w-2"
                }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to item ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
