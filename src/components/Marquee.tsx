"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  "SEO", "PPC", "Social Media", "Email Marketing", "Content Marketing", 
  "360° Branding", "Digital Strategy", "Creative Design", "Ads Video", 
  "Lead Generation", "IT Consultation", "Influencer Marketing"
];

export default function Marquee() {
  return (
    <div className="py-12 bg-white overflow-hidden border-y border-gray-100 select-none">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 px-6"
        >
          {/* Double the array for seamless loop */}
          {[...services, ...services].map((service, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-3xl md:text-6xl font-display font-black text-brand-dark-blue/5 tracking-tighter uppercase italic">
                {service}
              </span>
              <div className="w-3 h-3 rounded-full bg-brand-purple" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
