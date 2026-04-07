"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Sparkles } from "lucide-react";

// ✅ Top cards
const topCards = [
  {
    id: "01",
    title: "Demolition Works",
    iconUrl: "/assets/Demolition Work.jpg",
    highlight: false,
  },
  {
    id: "02",
    title: "Rig Move Support Services",
    iconUrl: "/assets/Rig.jpg",
    highlight: false,
  },
];

// ✅ Bottom cards
const bottomCards = [
  { id: "03", title: "Heavy Lifting", iconUrl: "/assets/HeavyLif.jpg" },
  { id: "04", title: "Transportation", iconUrl: "/assets/Trans.jpg" },
  { id: "05", title: "Manpower Rental", iconUrl: "/assets/Manpower.jpg" },
  {
    id: "06",
    title: "Construction Division",
    iconUrl: "/assets/ConstructionDiv.jpg",
  },
  { id: "07", title: "Heavy Equipment Rentals", iconUrl: "/assets/HeavyEqp.jpg" },
  { id: "08", title: "RO Plant Maintenance", iconUrl: "/assets/RoPlant.png" },
  {
    id: "09",
    title: "Re-routing Sector",
    iconUrl: "/assets/rerouting-hero.jpg",
  },
  {
    id: "10",
    title: "Rental Equipment Sector",
    iconUrl: "/assets/rental-hero.jpg",
  },
  { id: "11", title: "Logistic Sector", iconUrl: "/assets/Logistics.jpg" },
  { id: "12", title: "Technical Solutions", iconUrl: "/assets/industry.jpg" },
  { id: "13", title: "Plant Maintenance", iconUrl: "/assets/oil-refinery-twilight-with-reflection.jpg" },
  { id: "14", title: "Rigging & Lifting", iconUrl: "/assets/Crane.jpg" },
];

function CardBackground({ src }: { src: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={[
          "object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          "scale-100 group-hover:scale-110",
        ].join(" ")}
        aria-hidden
        priority={false}
      />

      {/* Modern gradient overlay */}
      <div
        className={[
          "absolute inset-0 transition-all duration-700",
          "bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-900/20",
          "group-hover:from-slate-950/90 group-hover:via-slate-900/50 group-hover:to-transparent",
        ].join(" ")}
      />

      {/* Subtle color wash on hover (uses primary color if available, or a fallback) */}
      <div
        className={[
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
          "bg-gradient-to-b from-transparent via-transparent to-primary/30",
        ].join(" ")}
      />
    </div>
  );
}

function ServiceCard({
  id,
  title,
  iconUrl,
  onClick,
  featured,
  tall,
}: {
  id: string;
  title: string;
  iconUrl: string;
  onClick: () => void;
  featured?: boolean;
  tall?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={[
        "group relative isolate overflow-hidden cursor-pointer flex flex-col justify-between",
        tall
          ? "h-[220px] sm:h-[260px] md:h-[290px]"
          : "h-[200px] sm:h-[220px] md:h-[250px]",
        "rounded-2xl sm:rounded-[24px] p-6 sm:p-8",
        "border border-white/10",
        "shadow-lg transition-all duration-500 ease-out",
        "hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-white/30",
        "bg-slate-900", // Fallback text contrast bg before image loads
      ].join(" ")}
    >
      <CardBackground src={iconUrl} />

      {/* Large outline number in the background */}
      <div
        className={[
          "pointer-events-none absolute -bottom-6 right-0 z-0 select-none",
          "text-[100px] sm:text-[140px] font-black leading-none",
          "opacity-10 transition-all duration-700 ease-out",
          "group-hover:-translate-y-4 group-hover:scale-110 group-hover:opacity-20 group-hover:text-primary",
        ].join(" ")}
        style={{
          WebkitTextStroke: "2px currentColor",
          color: "transparent",
        }}
      >
        {id}
      </div>

      <div className="relative z-10 flex w-full justify-between items-start">
        {/* ID Bubble */}
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-medium text-sm transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          {id}
        </div>

        {featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 backdrop-blur-md px-3 sm:px-4 py-1.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/20 transition-transform duration-500 group-hover:scale-105">
            <Sparkles className="h-3.5 w-3.5" />
            Featured
          </span>
        )}
      </div>

      {/* Content Footer */}
      <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0 relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white/95 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
            Explore service
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const router = useRouter();

  const handleCardClick = (title: string, id: string) => {
    if (title === "Construction Division") {
      router.push("/construction");
      return;
    }
    if (title === "Technical Solutions") {
      router.push("/technical-solutions");
      return;
    }
    if (title === "Plant Maintenance") {
      router.push("/plant-maintenance");
      return;
    }
    if (title === "Rigging & Lifting") {
      router.push("/rigging-and-lifting");
      return;
    }
    router.push(`/expertise#${id}`);
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-slate-50 overflow-hidden">
      {/* Premium subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-slate-50 to-white" />
      <div className="pointer-events-none absolute top-1/4 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===================== ROW 1 ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center text-center md:text-left h-full py-6 md:py-0">
            <div className="inline-flex items-center gap-3 mx-auto md:mx-0 mb-5">
              <span className="h-[2px] w-10 bg-primary rounded-full"></span>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                AL SYED COMPANY
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Explore Our <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-primary to-slate-700">
                Expertise
              </span>
            </h2>

            <p className="text-slate-600 mt-6 max-w-md mx-auto md:mx-0 text-base sm:text-lg leading-relaxed font-medium">
              AL SYED COMPANY provides reliable Demolition Works, Heavy
              Equipment Rentals, Rig Move Support, Heavy Lifting, Transportation
              and Manpower Services. With strong experience serving ARAMCO
              contractors and major industrial projects, we deliver safe,
              efficient and timely operational support across the Kingdom.
            </p>
          </div>

          {/* RIGHT: 2 CARDS */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {topCards.map((item, idx) => (
              <ServiceCard
                key={item.id}
                id={item.id}
                title={item.title}
                iconUrl={item.iconUrl}
                tall
                featured={idx === 0} // ✅ Make first top card featured
                onClick={() => handleCardClick(item.title, item.id)}
              />
            ))}
          </div>
        </div>

        {/* ===================== ROW 2 ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {bottomCards.map((item) => (
            <ServiceCard
              key={item.id}
              id={item.id}
              title={item.title}
              iconUrl={item.iconUrl}
              onClick={() => handleCardClick(item.title, item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
