"use client";

import Image from "next/image";
import { Search, Star, BookOpen, GraduationCap, Phone, Info, Trophy, Award, Users } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SearchItem {
  label: string;
  href: string;
  category: string;
  icon: React.ReactNode;
}

const searchItems: SearchItem[] = [
  { label: "Classes 6-8 (Middle School)", href: "/courses/classes-6-8-middle-school", category: "Course", icon: <BookOpen className="w-4 h-4" /> },
  { label: "Classes 9-10 (Secondary)", href: "/courses/classes-9-10-secondary", category: "Course", icon: <BookOpen className="w-4 h-4" /> },
  { label: "Class 11-12 Science (CBSE)", href: "/courses/class-11-12-science-cbse", category: "Course", icon: <GraduationCap className="w-4 h-4" /> },
  { label: "Class 11-12 Commerce (CBSE)", href: "/courses/class-11-12-commerce-cbse", category: "Course", icon: <GraduationCap className="w-4 h-4" /> },
  { label: "Class 11-12 Science (CHSE)", href: "/courses/class-11-12-science-chse", category: "Course", icon: <GraduationCap className="w-4 h-4" /> },
  { label: "Class 11-12 Arts (CHSE)", href: "/courses/class-11-12-arts-chse", category: "Course", icon: <GraduationCap className="w-4 h-4" /> },
  { label: "JEE & NEET Foundation", href: "/courses/jee-neet-foundation", category: "Course", icon: <GraduationCap className="w-4 h-4" /> },
  { label: "Doubt Clearing Sessions", href: "/courses/doubt-clearing-sessions", category: "Course", icon: <BookOpen className="w-4 h-4" /> },
  { label: "All Courses", href: "/courses", category: "Page", icon: <BookOpen className="w-4 h-4" /> },
  { label: "About Us", href: "/about", category: "Page", icon: <Info className="w-4 h-4" /> },
  { label: "Results", href: "/results", category: "Page", icon: <Trophy className="w-4 h-4" /> },
  { label: "Contact Us", href: "/contact", category: "Page", icon: <Phone className="w-4 h-4" /> },
];

const Hero = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? searchItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    : searchItems.slice(0, 5); // show popular suggestions when empty

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      router.push(filtered[activeIndex].href);
      setIsOpen(false);
      setQuery("");
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleSelect = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-teal-50/80 via-background to-background">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0D7377 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Warm accent glow */}
      <div className="absolute top-[20%] right-[15%] w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[10%] w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-6 sm:mb-8 border border-border shadow-sm">
          <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
            <Star className="w-3 h-3 text-accent fill-accent" />
          </span>
          <span className="text-foreground/70 text-xs sm:text-sm font-medium">
            Learn From the Top Experts
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center leading-[1.1] text-foreground">
          Learn Anywhere, Anytime
          <br />
          <span className="text-primary">Empower Your Future</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-center text-muted-foreground font-medium text-sm sm:text-lg max-w-xl leading-relaxed px-2">
          Join thousands of learners gaining new skills, advancing careers and
          shaping a better tomorrow — one lesson at a time.
        </p>

        {/* Search Bar */}
        <div className="mt-6 sm:mt-8 w-full max-w-lg relative z-20" ref={wrapperRef}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
                setActiveIndex(-1);
              }}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              placeholder="Search your Course..."
              className="w-full pl-12 pr-6 py-4 rounded-full bg-card border border-border shadow-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>

          {isOpen && filtered.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
              <div className="px-4 py-2 border-b border-border">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {query.trim() ? "Results" : "Popular Searches"}
                </p>
              </div>
              <ul className="py-1 max-h-72 overflow-y-auto">
                {filtered.map((item, index) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleSelect(item.href)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                        activeIndex === index
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      <span className={`shrink-0 ${activeIndex === index ? "text-primary" : "text-muted-foreground"}`}>
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium truncate flex-1">
                        {item.label}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded-full shrink-0">
                        {item.category}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              {query.trim() && filtered.length === 0 && (
                <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                  No results found for &ldquo;{query}&rdquo;
                </div>
              )}
            </div>
          )}

          {isOpen && query.trim() && filtered.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
              <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                No results found for &ldquo;{query}&rdquo;
              </div>
            </div>
          )}
        </div>

        {/* Hero Image with Floating Cards */}
        <div className="mt-8 sm:mt-12 relative w-full max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative w-full max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto aspect-[3/4] sm:aspect-[16/9] max-h-[350px] sm:max-h-[480px]">
            <Image
              src="/assets/Hero.png"
              alt="Aryabhatta Educations - Professional Coaching Center"
              fill
              className="object-contain object-bottom"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>

          {/* Expert Faculty Card - Top Left */}
          <div className="absolute top-0 left-0 bg-card rounded-lg sm:rounded-2xl shadow-lg border border-border p-2 sm:p-4">
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-1.5 sm:mb-2">
              <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
            </div>
            <p className="text-base sm:text-2xl font-extrabold text-foreground">50+</p>
            <p className="text-[9px] sm:text-xs text-muted-foreground font-medium mt-0.5 sm:mt-1 leading-snug">
              Expert faculty
            </p>
          </div>

          {/* Awards Card - Top Right */}
          <div className="absolute top-0 right-0 bg-card rounded-lg sm:rounded-2xl shadow-lg border border-border p-2 sm:p-4">
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-1.5 sm:mb-2">
              <Award className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent" />
            </div>
            <p className="text-base sm:text-2xl font-extrabold text-foreground">95%</p>
            <p className="text-[9px] sm:text-xs text-muted-foreground font-medium mt-0.5 sm:mt-1 leading-snug">
              Distinction rate
            </p>
          </div>

          {/* Rating Card - Bottom Left */}
          <div className="absolute bottom-[5%] sm:bottom-[8%] left-0 lg:left-[3%] bg-card rounded-xl sm:rounded-2xl shadow-lg border border-border p-3 sm:p-5">
            <p className="text-xl sm:text-3xl font-extrabold text-foreground">4.8</p>
            <div className="flex items-center gap-0.5 mt-0.5 sm:mt-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-accent fill-accent" />
              ))}
              <Star className="w-3 sm:w-4 h-3 sm:h-4 text-accent fill-accent/40" />
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground font-medium mt-1 sm:mt-2 leading-snug">
              By students worldwide for
              <br />
              quality learning and support.
            </p>
          </div>

          {/* Learners Card - Bottom Right */}
          <div className="absolute bottom-[8%] sm:bottom-[12%] right-0 lg:right-[3%] bg-card rounded-xl sm:rounded-2xl shadow-lg border border-border p-3 sm:p-5">
            <div className="flex -space-x-1.5 sm:-space-x-2 mb-2 sm:mb-3">
              {["bg-primary", "bg-accent", "bg-teal-500", "bg-emerald-600"].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 sm:w-9 sm:h-9 rounded-full ${color} border-2 border-card flex items-center justify-center text-white text-[8px] sm:text-xs font-bold`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ),
              )}
            </div>
            <p className="text-xl sm:text-3xl font-extrabold text-foreground">60k+</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground font-medium mt-0.5 sm:mt-1 leading-snug">
              Learners growing with expert
              <br />
              guidance from trusted mentors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
