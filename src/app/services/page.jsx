"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticHelper from "@/components/MagneticHelper";
import { 
  Search, 
  Target, 
  Share2, 
  Mail, 
  FileText, 
  Layers, 
  Lightbulb, 
  Rocket, 
  BarChart, 
  ArrowUpRight,
  Sparkles,
  Zap,
  TrendingUp,
  Cpu
} from "lucide-react";
import Link from "next/link";

const services = [
  { 
    title: "Search Intelligence", 
    icon: Search, 
    color: "purple", 
    desc: "Architecting your organic dominance with data-driven search engineering and authority building." 
  },
  { 
    title: "Precision Ads", 
    icon: Target, 
    color: "pink", 
    desc: "High-velocity paid campaigns that convert every click into measurable business capital." 
  },
  { 
    title: "Social Narratives", 
    icon: Share2, 
    color: "teal", 
    desc: "Crafting resonant digital stories that foster deep brand loyalty across global platforms." 
  },
  { 
    title: "Direct Conversion", 
    icon: Mail, 
    color: "yellow", 
    desc: "Nurturing relationships through automated, hyper-personalized communication architectures." 
  },
  { 
    title: "Creative Content", 
    icon: FileText, 
    color: "purple", 
    desc: "Building authority through value-driven storytelling and immersive cinematic media." 
  },
  { 
    title: "360° Branding", 
    icon: Layers, 
    color: "pink", 
    desc: "A holistic approach to brand DNA—from visual identity to strategic cultural positioning." 
  },
];

const EditorialServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative bento-card p-10 flex flex-col justify-between bg-white border-gray-100 hover:border-brand-purple/20 transition-all duration-700 h-full"
  >
    <div className="flex justify-between items-start">
      <div className={`p-5 rounded-2xl transition-all duration-500 group-hover:scale-110 shadow-lg ${
        service.color === "purple" ? "bg-brand-purple text-white shadow-brand-purple/20" :
        service.color === "pink" ? "bg-brand-pink text-white shadow-brand-pink/20" :
        service.color === "teal" ? "bg-brand-teal text-white shadow-brand-teal/20" :
        "bg-brand-yellow text-white shadow-brand-yellow/20"
      }`}>
        <service.icon size={28} />
      </div>
      <ArrowUpRight size={24} className="text-gray-200 group-hover:text-brand-purple transition-all translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
    </div>

    <div className="mt-12 space-y-4">
      <h3 className="text-3xl font-display font-black text-brand-dark leading-tight">
        {service.title}
      </h3>
      <p className="text-brand-gray/80 text-lg leading-relaxed font-medium">
        {service.desc}
      </p>
    </div>

    <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity">
      Learn Methodology <ArrowUpRight size={14} />
    </div>
  </motion.div>
);

const ProcessStep = ({ step, index }) => (
  <div className="relative flex flex-col items-center group">
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={`w-28 h-28 rounded-[35%] ${step.color} text-white flex items-center justify-center shadow-2xl relative z-10`}
    >
      <step.icon size={40} />
      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center text-sm font-black border border-gray-100 italic font-serif">
        0{index + 1}
      </div>
    </motion.div>
    <div className="mt-8 text-center">
      <h4 className="font-display font-black text-2xl text-brand-dark">{step.name}</h4>
      <p className="text-brand-gray/60 font-serif italic text-sm mt-1">{step.tagline}</p>
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <div className="flex flex-col mesh-bg noise-overlay bg-white">
      {/* 1. Cinematic Hero */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.nav 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-3 text-xs font-bold uppercase tracking-widest text-brand-gray/60 mb-10"
          >
            <Link href="/" className="hover:text-brand-purple transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-purple">Capabilities</span>
          </motion.nav>

          <AnimatedSection>
            <h1 className="text-6xl md:text-9xl font-display font-black mb-10 leading-[0.85] text-brand-dark">
              Precision <br />
              <span className="font-serif italic text-brand-teal font-normal">Architectures</span>
            </h1>
            <p className="text-brand-gray/80 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
              We leverage predictive algorithms and cinematic storytelling to build 
              immersive digital ecosystems that scale with your ambition.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Asymmetrical Services Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <EditorialServiceCard key={idx} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Methodology Section */}
      <section className="section-padding px-6 bg-bg-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-4 space-y-8">
              <h2 className="text-5xl md:text-7xl font-display font-black text-brand-dark leading-tight">
                Our <br />
                <span className="font-serif italic text-brand-purple font-normal">Symphony</span>
              </h2>
              <p className="text-brand-gray/60 text-xl font-medium leading-relaxed">
                Standard output is common. We deliver precision-engineered impact through a calculated 5-phase evolution.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "Discover", icon: Search, color: "purple", tagline: "Data Liquidation" },
                  { name: "Strategize", icon: Lightbulb, color: "pink", tagline: "Algorithm Sculpting" },
                  { name: "Execute", icon: Rocket, color: "teal", tagline: "Kinetic Launch" },
                  { name: "Optimize", icon: Cpu, color: "yellow", tagline: "Real-time Refinement" },
                  { name: "Scale", icon: TrendingUp, color: "purple", tagline: "Limitless Growth" }
                ].map((step, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <div className="glass-card p-10 flex flex-col items-center lg:items-start group hover:-translate-y-2 transition-transform duration-500 shadow-glow-purple">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                        step.color === 'purple' ? 'bg-brand-purple/10 text-brand-purple' :
                        step.color === 'pink' ? 'bg-brand-pink/10 text-brand-pink' :
                        step.color === 'teal' ? 'bg-brand-teal/10 text-brand-teal' :
                        'bg-brand-yellow/10 text-brand-yellow'
                      }`}>
                        <step.icon size={32} />
                      </div>
                      <h4 className="mt-6 text-2xl font-display font-black text-brand-dark">{step.name}</h4>
                      <p className="text-brand-gray/40 font-serif italic text-sm mt-1">{step.tagline}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. High-Impact CTA */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative bg-bg-soft rounded-[80px] p-12 md:p-32 text-center overflow-hidden border border-gray-100"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-pink/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />
            
            <div className="relative z-10 space-y-12">
              <h2 className="text-5xl md:text-8xl font-display font-black text-brand-dark leading-[0.9]">
                Architect Your <br />
                <span className="font-serif italic text-brand-purple font-normal">Digital Supremacy</span>
              </h2>
              <p className="text-brand-gray/80 text-xl font-medium max-w-xl mx-auto">
                Stop following the game. Let's redefine it together.
              </p>
              <div className="flex justify-center">
                <MagneticHelper strength={0.3}>
                  <Link href="/contact" className="btn-gradient px-16 py-7 text-2xl">
                    Secure Consultation
                  </Link>
                </MagneticHelper>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
