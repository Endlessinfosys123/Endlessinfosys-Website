"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring, useMotionValueEvent } from "framer-motion";
import MagneticHelper from "./MagneticHelper";

export default function StatsCounter({ value, suffix = "", label, color = "purple" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplayValue(Math.floor(latest));
  });

  const colors = {
    purple: "text-brand-purple group-hover:drop-shadow-[0_0_15px_rgba(108,71,255,0.3)]",
    pink: "text-brand-pink group-hover:drop-shadow-[0_0_15px_rgba(255,77,109,0.3)]",
    teal: "text-brand-teal group-hover:drop-shadow-[0_0_15px_rgba(0,201,167,0.3)]",
    yellow: "text-brand-yellow group-hover:drop-shadow-[0_0_15px_rgba(255,184,48,0.3)]"
  };

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 group">
      <MagneticHelper strength={0.2}>
        <div className="flex flex-col items-center">
          <div className={`text-5xl md:text-7xl font-display font-black mb-2 transition-all duration-300 ${colors[color]}`}>
            <motion.span>{displayValue}</motion.span>
            <span className="text-3xl md:text-4xl ml-1">{suffix}</span>
          </div>
          <p className="text-brand-gray/60 font-serif italic text-lg text-center lowercase">
            {label}
          </p>
        </div>
      </MagneticHelper>
    </div>
  );
}
