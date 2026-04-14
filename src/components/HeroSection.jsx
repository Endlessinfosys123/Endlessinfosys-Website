"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const FloatingShape = ({ className, delay = 0, duration = 6 }) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className={`absolute blur-xl opacity-20 ${className}`}
  />
);

const GeometricLogo = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Floating Elements */}
    <motion.div
      animate={{ 
        y: [-10, 10, -10],
        rotate: [0, 360]
      }}
      transition={{ 
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
      }}
      className="relative z-10"
    >
      <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 50L50 10C50 10 90 10 90 50L50 50Z" fill="#6C47FF" />
        <path d="M50 50L90 50C90 50 90 90 50 90L50 50Z" fill="#FF4D6D" />
        <path d="M50 50L50 90C50 90 10 90 10 50L50 50Z" fill="#00C9A7" />
        <path d="M50 50L10 50C10 50 10 10 50 10L50 50Z" fill="#FFB830" />
        <circle cx="50" cy="50" r="8" fill="white" />
      </svg>
    </motion.div>

    {/* Abstract Shapes Around */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple rounded-full blur-[80px] opacity-10 animate-blob" />
    <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-pink rounded-full blur-[100px] opacity-10 animate-blob animation-delay-2000" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-brand-purple/5 rounded-full" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-brand-pink/5 rounded-full" />
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-mesh">
      {/* Background Particles Placeholder (Static CSS for performance) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-grid" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/5 border border-brand-purple/10 w-fit"
          >
            <Sparkles size={16} className="text-brand-purple" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-purple">Gandhinagar's Premier Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-black leading-tight text-brand-dark"
          >
            We Are the <span className="text-gradient">Architects</span> of Your Online Success
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-brand-gray max-w-lg leading-relaxed"
          >
            Let's Craft Your Digital Success Story. We blend innovation, strategy, and creativity to propel your brand beyond the ordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link href="/pricing" className="btn-gradient w-full sm:w-auto text-center">
              Explore Our Plans
            </Link>
            <Link href="/contact" className="btn-outline-teal w-full sm:w-auto text-center">
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center"
        >
          <GeometricLogo />
        </motion.div>
      </div>
    </section>
  );
}
