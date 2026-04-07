"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import type { StaticImageData } from "next/image";
import Construction1 from "../../public/assets/Construction.jpg";
import Construction2 from "../../public/assets/Exprience.jpg";
import Construction4 from "../../public/assets/Manpower.jpg";
import Industry from "../../public/assets/industry.jpg";
import Crane from "../../public/assets/Crane.jpg";
import Group from "../../public/assets/group.jpg";
import Group2 from "../../public/assets/group-2.jpg";

export const DragCards = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative w-full bg-white py- text-black select-none">
      <h2 className="text-center text-5xl font-semibold mb-10 text-gray-800 uppercase">
        our<span className="text-primary">  gallery</span>
      </h2>
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        AL<span className="text-primary"> Syed</span>
      </h2>

  
      <div ref={wrapperRef} className="absolute inset-0 z-10">
        <Cards containerRef={wrapperRef} />
      </div>
    </section>
    </div>
  );
};


const Cards = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => {
  return (
    <>
      <Card
        containerRef={containerRef}
        src={Construction1}
        alt="Construction"
        rotate="6deg"
        top="18%"
        left="20%"
      />

      <Card
        containerRef={containerRef}
        src={Construction2}
        alt="Experience"
        rotate="12deg"
        top="55%"
        left="65%"
      />

      <Card
        containerRef={containerRef}
        src={Industry}
        alt="Heavy Lifting"
        rotate="-8deg"
        top="25%"
        left="45%"
      />

      <Card
        containerRef={containerRef}
        src={Construction4}
        alt="Manpower"
        rotate="10deg"
        top="60%"
        left="38%"
      />

      <Card
        containerRef={containerRef}
        src={Crane}
        alt="Rigmove"
        rotate="6deg"
        top="15%"
        left="75%"
      />

      <Card
        containerRef={containerRef}
        src={Group}
        alt="Transportation"
        rotate="-8deg"
        top="45%"
        left="10%"
      />

      <Card
        containerRef={containerRef}
        src={Group2}
        alt="Construction"
        rotate="16deg"
        top="5%"
        left="2%"
      />

      
    </>
  );
};


interface CardProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  src: StaticImageData | string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
}

const Card = ({ containerRef, src, alt, top, left, rotate }: CardProps) => {
  const [zIndex, setZIndex] = useState(1);

  const bringToFront = () => {
    const items = document.querySelectorAll(".drag-elements");

    let highest = 1;
    items.forEach((el) => {
      const z = Number(window.getComputedStyle(el).zIndex);
      if (z > highest) highest = z;
    });

    setZIndex(highest + 1);
  };

  return (
    
    <motion.img
      onPointerDown={bringToFront} 
      drag
      dragConstraints={containerRef}
      dragElastic={0.5}
      src={typeof src === "string" ? src : src.src}
      alt={alt}
      style={{ top, left, rotate, zIndex }}
      className={twMerge(
        "drag-elements absolute  shadow-xl",
        "object-cover",
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4 md:w-[260px] md:h-[260px]" 
          )}
    />
  );
};
