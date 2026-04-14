"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Eye, Target, Sparkles, ShieldCheck, Heart, Zap, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import MagneticHelper from "@/components/MagneticHelper";

const EditorialQuote = ({ quote, author, delay = 0.2 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 1 }}
    className="relative p-12 md:p-20 bg-brand-purple/5 rounded-[60px] overflow-hidden border border-brand-purple/10"
  >
    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
    <blockquote className="relative z-10">
      <p className="text-3xl md:text-5xl font-serif italic text-brand-purple leading-tight font-normal">
        "{quote}"
      </p>
      {author && (
        <cite className="block mt-8 text-brand-dark font-display font-black uppercase tracking-widest not-italic">
          — {author}
        </cite>
      )}
    </blockquote>
  </motion.div>
);

const BrandChip = ({ label, color }) => (
  <MagneticHelper strength={0.3}>
    <div className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest shadow-sm border ${
      color === "purple" ? "bg-white text-brand-purple border-brand-purple/20" :
      color === "pink" ? "bg-white text-brand-pink border-brand-pink/20" :
      "bg-white text-brand-teal border-brand-teal/20"
    }`}>
      {label}
    </div>
  </MagneticHelper>
);

export default function AboutPage() {
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
            <span className="text-brand-purple">Our Story</span>
          </motion.nav>
          
          <AnimatedSection>
            <h1 className="text-6xl md:text-9xl font-display font-black mb-8 leading-[0.9] text-brand-dark">
              Architecting <br />
              <span className="font-serif italic text-brand-purple font-normal">Digital Futures</span>
            </h1>
            <p className="text-brand-gray text-xl md:text-2xl max-w-2xl leading-relaxed font-medium">
              We don't just follow the digital marketing game; we redefine it. 
              Propelling brands beyond the ordinary into the extraordinary.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Asymmetrical Content Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Story Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple to-brand-pink rounded-[60px] rotate-2 scale-[1.02] opacity-10 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative aspect-[16/10] bg-white rounded-[60px] p-1 shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-bg-soft rounded-[59px] flex items-center justify-center p-20">
                   <div className="relative text-8xl md:text-[150px] font-display font-black text-brand-purple/10 selection:bg-brand-purple/10">
                      EST. 2020
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-4 left-0 h-4 bg-brand-pink/20 rounded-full"
                      />
                   </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-black text-brand-dark leading-tight">
                Where Strategy <br />
                <span className="font-serif italic text-brand-teal font-normal">Meets Soul</span>
              </h2>
              <div className="space-y-6 text-brand-gray/80 text-xl leading-relaxed font-medium">
                <p>
                  Welcome to EndlessInfosys. We are a dynamic collective of digital architects dedicated to 
                  helping businesses thrive in the high-velocity digital age.
                </p>
                <p>
                  With a team of passionate professionals, we're here to make your online presence 
                  stand out and drive real results.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <BrandChip label="Innovative" color="purple" />
                <BrandChip label="Passionate" color="pink" />
                <BrandChip label="Limitless" color="teal" />
              </div>
            </div>
          </div>

          {/* Quote Block */}
          <EditorialQuote 
            quote="Our mission is to empower businesses with the digital strategies they need to succeed in an ever-evolving world." 
            author="The Endless Team"
          />

          {/* Vision & Mission Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-12 md:p-16 rounded-[60px] bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="w-20 h-20 rounded-3xl bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <Eye size={40} />
                </div>
                <h3 className="text-4xl font-display font-black text-brand-dark">Our Vision</h3>
                <p className="text-brand-gray/80 text-xl leading-relaxed font-medium">
                  We envision a future where businesses thrive in the digital landscape, 
                  propelled by innovation and guided by a profound understanding of their audiences.
                </p>
              </div>
              <div className="mt-12 flex justify-end">
                <ArrowUpRight size={48} className="text-brand-purple/20" />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-12 md:p-16 rounded-[60px] glass-card flex flex-col justify-between group shadow-glow-teal"
            >
              <div className="space-y-8">
                <div className="w-20 h-20 rounded-3xl bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                  <Target size={40} />
                </div>
                <h3 className="text-4xl font-display font-black text-brand-dark">Our Mission</h3>
                <p className="text-brand-gray/80 text-xl leading-relaxed font-medium">
                  To empower brands with the digital precision they need to excel. 
                  We aim to be the catalyst for your digital success story, scaling with your ambition.
                </p>
              </div>
              <div className="mt-12 flex justify-end">
                <ArrowUpRight size={48} className="text-brand-teal/20 group-hover:text-brand-teal transition-colors" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Bento Strip */}
      <section className="section-padding px-6 bg-brand-purple/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-black">
              Our Core <span className="font-serif italic text-brand-pink font-normal">Principles</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Transparency", icon: ShieldCheck, color: "purple" },
              { title: "Creativity", icon: Zap, color: "pink" },
              { title: "Excellence", icon: Target, color: "teal" },
              { title: "Growth", icon: TrendingUp, color: "yellow" }
            ].map((value, idx) => (
              <MagneticHelper key={idx} strength={0.15}>
                <div className="bento-card p-10 h-full flex flex-col gap-6 text-center lg:text-left">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 shadow-lg ${
                    value.color === "purple" ? "bg-brand-purple text-white" :
                    value.color === "pink" ? "bg-brand-pink text-white" :
                    value.color === "teal" ? "bg-brand-teal text-white" :
                    "bg-brand-yellow text-white"
                  }`}>
                    <value.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-display font-black text-brand-dark">{value.title}</h4>
                  <div className="h-1 w-12 bg-gray-100 rounded-full lg:mx-0 mx-auto" />
                </div>
              </MagneticHelper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection className="space-y-12">
            <h3 className="text-4xl md:text-6xl font-display font-black text-brand-dark">
              Ready to <span className="text-brand-purple">Transform</span> Together?
            </h3>
            <div className="flex justify-center">
              <MagneticHelper strength={0.3}>
                <Link href="/contact" className="btn-gradient px-16 py-6 text-xl">
                  Start the Journey
                </Link>
              </MagneticHelper>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
