"use client";

import { Search, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-teal-50/80 via-background to-background">
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-border shadow-sm">
          <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
            <Star className="w-3 h-3 text-accent fill-accent" />
          </span>
          <span className="text-foreground/70 text-sm font-medium">
            Learn From the Top Experts
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center leading-[1.1] text-foreground">
          Learn Anywhere, Anytime
          <br />
          <span className="text-primary">Empower Your Future</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-center text-muted-foreground font-medium text-base sm:text-lg max-w-xl leading-relaxed">
          Join thousands of learners gaining new skills, advancing careers and
          shaping a better tomorrow — one lesson at a time.
        </p>

        {/* Search Bar */}
        <div className="mt-8 w-full max-w-lg">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search your Course..."
              className="w-full pl-12 pr-6 py-4 rounded-full bg-card border border-border shadow-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Center image placeholder */}
        <div className="mt-10 w-full max-w-md h-[300px] sm:h-[380px] lg:h-[420px] flex items-end justify-center">
          {/* Image will go here */}
        </div>

        {/* Floating Cards */}
        {/* Rating Card */}
        <div className="absolute bottom-[12%] left-[5%] sm:left-[8%] lg:left-[12%] bg-card rounded-2xl shadow-xl border border-border p-5 max-w-[200px]">
          <p className="text-3xl font-extrabold text-foreground">4.8</p>
          <div className="flex items-center gap-0.5 mt-1">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-4 h-4 text-accent fill-accent" />
            ))}
            <Star className="w-4 h-4 text-accent fill-accent/40" />
          </div>
          <p className="text-xs text-muted-foreground font-medium mt-2 leading-snug">
            By students worldwide for
            <br />
            quality learning and support.
          </p>
        </div>

        {/* Learners Card */}
        <div className="absolute bottom-[15%] right-[5%] sm:right-[8%] lg:right-[12%] bg-card rounded-2xl shadow-xl border border-border p-5 max-w-[240px]">
          {/* Avatar group */}
          <div className="flex -space-x-2 mb-3">
            {["bg-primary", "bg-accent", "bg-teal-500", "bg-emerald-600"].map(
              (color, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full ${color} border-2 border-card flex items-center justify-center text-white text-xs font-bold`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ),
            )}
          </div>
          <p className="text-3xl font-extrabold text-foreground">60k+</p>
          <p className="text-xs text-muted-foreground font-medium mt-1 leading-snug">
            Learners growing with expert
            <br />
            guidance from trusted mentors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
