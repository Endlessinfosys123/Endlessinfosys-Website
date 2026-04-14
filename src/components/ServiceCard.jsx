"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  color = "purple",
  delay = 0,
  isDetailed = false
}) {
  const colorStyles = {
    purple: {
      bg: "bg-[#F3F0FF]",
      icon: "text-[#6C47FF]",
      accent: "bg-[#6C47FF]",
      shadow: "hover:shadow-[#6C47FF]/10"
    },
    pink: {
      bg: "bg-[#FFF0F0]",
      icon: "text-[#FF4D6D]",
      accent: "bg-[#FF4D6D]",
      shadow: "hover:shadow-[#FF4D6D]/10"
    },
    teal: {
      bg: "bg-[#F0FFF8]",
      icon: "text-[#00C9A7]",
      accent: "bg-[#00C9A7]",
      shadow: "hover:shadow-[#00C9A7]/10"
    },
    yellow: {
      bg: "bg-[#FFFDE7]",
      icon: "text-[#FFB830]",
      accent: "bg-[#FFB830]",
      shadow: "hover:shadow-[#FFB830]/10"
    }
  };

  const style = colorStyles[color] || colorStyles.purple;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className={`p-8 rounded-2xl ${style.bg} border border-transparent hover:border-white transition-all duration-300 ${style.shadow}`}
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white shadow-sm ${style.icon}`}>
        <Icon size={32} />
      </div>
      
      <h3 className="text-xl font-display font-bold mb-3 text-brand-dark">
        {title}
      </h3>
      
      <p className={`text-brand-gray text-sm leading-relaxed mb-6 ${isDetailed ? "line-clamp-none" : "line-clamp-2"}`}>
        {description}
      </p>

      {isDetailed && (
        <button className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest ${style.icon} group`}>
          Learn More
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </motion.div>
  );
}
