"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Zap, PlayCircle, Globe } from "lucide-react";
import MagneticHelper from "./MagneticHelper";

const AnimatedChar = ({ char, delay }) => (
  <motion.span
    initial={{ y: "150%", rotate: 20 }}
    animate={{ y: 0, rotate: 0 }}
    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
    className="inline-block"
  >
    {char === " " ? "\u00A0" : char}
  </motion.span>
);

const KineticTitle = ({ text, delayOffset = 0 }) => {
  return (
    <div className="overflow-hidden flex flex-wrap">
      {text.split("").map((char, i) => (
        <AnimatedChar key={i} char={char} delay={delayOffset + i * 0.03} />
      ))}
    </div>
  );
};

const GlassSculpture = ({ delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`absolute shadow-glow-purple ${className}`}
  >
    <motion.div
      animate={{ 
        y: [0, -30, 0],
        rotate: [0, 5, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
      className="p-8 rounded-[40px] bg-white/30 backdrop-blur-3xl border border-white/50 shadow-2xl relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-teal/5 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-16 h-16 rounded-2xl bg-white/80 shadow-inner flex items-center justify-center text-brand-purple mb-6">
        <Sparkles size={28} />
      </div>
      <div className="space-y-3">
        <div className="w-32 h-3 bg-brand-purple/10 rounded-full" />
        <div className="w-24 h-3 bg-brand-pink/10 rounded-full" />
      </div>
    </motion.div>
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden mesh-bg noise-overlay">
      {/* Background Kinetic Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-purple/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-brand-teal/5 blur-[120px] rounded-full" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-12 xl:col-span-8 flex flex-col space-y-12">
          {/* Subheader Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 px-6 py-2 rounded-full glass-card w-fit group cursor-default"
          >
            <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-dark/40 group-hover:text-brand-purple transition-colors">
              Pioneering Digital Architectures
            </span>
          </motion.div>

          {/* Main Kinetic Typography */}
          <div className="space-y-6">
            <h1 className="text-7xl md:text-[150px] font-display font-black leading-[0.8] tracking-tighter text-brand-dark flex flex-col">
              <KineticTitle text="CRAFTING" delayOffset={0.1} />
              <div className="flex flex-wrap items-baseline gap-6">
                <KineticTitle text="DIGITAL" delayOffset={0.3} />
                <span className="font-serif italic text-brand-purple text-shimmer selection:text-white">Excellence</span>
              </div>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-brand-gray/60 max-w-2xl leading-relaxed font-medium pt-8"
            >
              We are the creative powerhouse for brands that demand more than the ordinary. 
              Engineering high-impact success through <span className="text-brand-dark font-bold underline decoration-brand-pink/30 decoration-4">Predictive Analytics</span>, 
              cinematic storytelling, and conversion-optimized architectures that scale with your ambition across the global digital landscape.
            </motion.p>
          </div>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center gap-10 pt-4"
          >
            <MagneticHelper strength={0.4}>
              <Link href="/pricing" className="btn-gradient shadow-glow-purple">
                Start Your Evolution
              </Link>
            </MagneticHelper>
            
            <div className="flex items-center gap-12 text-brand-dark/40">
              <Link href="/services" className="group flex items-center gap-4 hover:text-brand-purple transition-all">
                <div className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:border-brand-purple group-hover:scale-110 transition-all">
                  <Zap size={20} className="group-hover:fill-brand-purple transition-all" />
                </div>
                <span className="font-display font-black text-sm uppercase tracking-widest">Capabilities</span>
              </Link>

              <div className="hidden sm:flex items-center gap-4">
                <Globe size={20} className="animate-spin-slow" />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Reach <br /> 24/7 Intel</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Abstract Sculpture Column */}
        <div className="lg:col-span-12 xl:col-span-4 relative h-[600px] xl:block hidden">
          <GlassSculpture className="top-0 right-0 z-10" delay={0.2} />
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 5, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute -bottom-10 left-0 w-80 h-80 rounded-[60px] bg-gradient-to-br from-brand-pink/10 to-brand-teal/10 blur-[40px] -z-10"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-[250px] font-display font-black text-brand-purple/5 select-none pointer-events-none">
                01
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
