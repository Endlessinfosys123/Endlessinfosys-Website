"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingCard({ 
  plan, 
  price, 
  features, 
  ctaText = "Get Started", 
  isPopular = false,
  color = "purple",
  delay = 0 
}) {
  const colorStyles = {
    purple: "from-[#6C47FF] to-[#8A70FF]",
    pink: "from-[#FF4D6D] to-[#FF758F]",
    teal: "from-[#00C9A7] to-[#36D7B7]"
  };

  const gradient = colorStyles[color] || colorStyles.purple;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: isPopular ? -12 : -8 }}
      className={`relative p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col ${
        isPopular ? "scale-105 z-10 border-brand-purple/20 shadow-brand-purple/10" : "scale-100"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-1.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink text-white text-[10px] font-black uppercase tracking-wider shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-display font-bold text-brand-dark mb-2">{plan}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-display font-black text-brand-dark">₹{price}</span>
          <span className="text-brand-gray text-sm">/month</span>
        </div>
      </div>

      <ul className="flex-grow space-y-4 mb-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`mt-1 p-0.5 rounded-full bg-brand-teal/10 text-brand-teal`}>
              <Check size={14} />
            </div>
            <span className="text-brand-gray text-sm leading-tight">{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        className={`w-full py-4 rounded-xl text-white font-bold text-sm shadow-lg transition-all active:scale-95 bg-gradient-to-r ${gradient}`}
      >
        {ctaText}
      </button>
    </motion.div>
  );
}
