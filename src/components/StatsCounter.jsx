"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring, useMotionValueEvent } from "framer-motion";

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
    purple: "text-brand-purple",
    pink: "text-brand-pink",
    teal: "text-brand-teal",
    yellow: "text-brand-yellow"
  };

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6">
      <div className={`text-4xl md:text-5xl font-display font-black mb-2 ${colors[color]}`}>
        <motion.span>{displayValue}</motion.span>
        {suffix}
      </div>
      <p className="text-brand-gray font-bold text-sm uppercase tracking-widest text-center">
        {label}
      </p>
    </div>
  );
}
