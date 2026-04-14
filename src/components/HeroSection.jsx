"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Brain, Rocket, Award } from "lucide-react";
import MagneticHelper from "./MagneticHelper";

const FloatingCard = ({ icon: Icon, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 1 }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className="p-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl flex items-center gap-3"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center text-white">
        <Icon size={20} />
      </div>
      <div className="flex flex-col">
        <div className="w-12 h-2 bg-gray-200 rounded-full mb-1" />
        <div className="w-20 h-2 bg-gray-100 rounded-full" />
      </div>
    </motion.div>
  </motion.div>
);

const EditorialVisual = () => (
  <div className="relative w-full h-[500px] flex items-center justify-center">
    {/* Main Central Orb */}
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, 90, 180, 270, 360] 
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="w-64 h-64 rounded-full bg-gradient-to-br from-brand-purple/20 via-brand-pink/20 to-brand-teal/20 blur-[60px]"
    />
    
    {/* Floating Components */}
    <FloatingCard icon={Brain} delay={0.2} className="top-10 left-10" />
    <FloatingCard icon={Rocket} delay={0.4} className="bottom-20 right-0" />
    <FloatingCard icon={Award} delay={0.6} className="top-1/2 right-10" />

    {/* Center Decorative SVG */}
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="w-full h-full relative flex items-center justify-center"
      >
        <div className="absolute w-[80%] h-[80%] border-2 border-dashed border-brand-purple/10 rounded-full" />
        <div className="absolute w-[60%] h-[60%] border border-brand-pink/10 rounded-full" />
      </motion.div>
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-mesh mesh-bg noise-overlay">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div className="flex flex-col justify-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group flex items-center gap-3 px-4 py-2 rounded-full glass-card w-fit hover:border-brand-purple/40 transition-colors"
          >
            <Sparkles size={16} className="text-brand-purple" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-dark/60">Gandhinagar's Premier Agency</span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-display font-black leading-[1.1] text-brand-dark"
            >
              We Are the <br />
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">Architects</span>
              </span> <br />
              <span className="font-serif italic font-normal text-brand-purple block mt-2">of Your Online Success</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-brand-gray/80 max-w-lg leading-relaxed font-medium"
            >
              Let's Craft Your Digital Success Story. We blend innovation, strategy, and creativity to propel your brand beyond the ordinary.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-8"
          >
            <MagneticHelper strength={0.3}>
              <Link href="/pricing" className="btn-gradient px-10 py-5">
                Explore Our Plans
              </Link>
            </MagneticHelper>
            
            <MagneticHelper strength={0.2}>
              <Link href="/contact" className="group flex items-center gap-3 font-display font-bold text-brand-dark hover:text-brand-purple transition-colors">
                <span>Start a Project</span>
                <div className="p-2 rounded-full border border-brand-dark group-hover:border-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
                  <Rocket size={18} />
                </div>
              </Link>
            </MagneticHelper>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:block hidden"
        >
          <EditorialVisual />
        </motion.div>
      </div>
    </section>
  );
}
