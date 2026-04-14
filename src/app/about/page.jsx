"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Eye, Target, Sparkles, ShieldCheck, Heart, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

const BrandChip = ({ label, color }) => (
  <div className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest ${
    color === "purple" ? "bg-brand-purple/10 text-brand-purple" :
    color === "pink" ? "bg-brand-pink/10 text-brand-pink" :
    "bg-brand-teal/10 text-brand-teal"
  }`}>
    {label}
  </div>
);

const ValueCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-bg-cream p-8 rounded-3xl border border-brand-yellow/10 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-yellow mb-6 shadow-sm group-hover:scale-110 transition-all">
      <Icon size={32} />
    </div>
    <h4 className="text-lg font-display font-black mb-2">{title}</h4>
    <p className="text-brand-gray text-xs leading-relaxed uppercase tracking-wider font-bold">{desc}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section className="pt-32 pb-20 bg-bg-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex gap-2 text-xs font-bold uppercase tracking-widest text-brand-gray mb-6">
            <Link href="/" className="hover:text-brand-purple">Home</Link>
            <span>/</span>
            <span className="text-brand-purple">About Us</span>
          </nav>
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-4">
              About <span className="text-brand-purple">EndlessInfosys</span>
            </h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full" />
          </AnimatedSection>
        </div>
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* 2. About Detail Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection direction="left">
             {/* Creative illustrated graphic placeholder */}
             <div className="relative w-full aspect-square bg-bg-lavender rounded-[40px] p-12 overflow-hidden shadow-inner">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-purple rounded-full mix-blend-multiply opacity-20 animate-blob" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-pink rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-teal rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000" />
                <div className="relative z-10 w-full h-full border-4 border-white/50 rounded-[30px] flex items-center justify-center">
                   <div className="text-6xl font-display font-black text-brand-purple/40">EI</div>
                </div>
             </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-black text-brand-dark">
              Your Trusted Digital Partner in the Marketing Landscape
            </h2>
            <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
              <p>
                Welcome to EndlessInfosys, your trusted partner in the digital marketing landscape. 
                We are a dynamic and innovative digital marketing company dedicated to helping 
                businesses thrive in the digital age.
              </p>
              <p>
                With a team of passionate professionals, we're here to make your online presence 
                stand out and drive real results. We blend cutting-edge technology with 
                human-centric strategies to craft stories that resonate.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <BrandChip label="Innovative" color="purple" />
              <BrandChip label="Passionate" color="pink" />
              <BrandChip label="Result-oriented" color="teal" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection direction="left" className="bg-bg-lavender p-10 md:p-16 rounded-[40px] border border-brand-purple/5 shadow-xl shadow-brand-purple/5">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-purple mb-8 shadow-sm">
              <Eye size={36} />
            </div>
            <h3 className="text-3xl font-display font-black mb-6">Our Vision</h3>
            <p className="text-brand-gray text-lg leading-relaxed">
              At EndlessInfosys, we envision a future where businesses thrive in the digital landscape, 
              propelled by innovation and guided by a profound understanding of their target audiences. 
              Our vision is to be the catalyst for this transformation, empowering organizations of all sizes.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" className="bg-bg-mint p-10 md:p-16 rounded-[40px] border border-brand-teal/5 shadow-xl shadow-brand-teal/5">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-teal mb-8 shadow-sm">
              <Target size={36} />
            </div>
            <h3 className="text-3xl font-display font-black mb-6">Our Mission</h3>
            <p className="text-brand-gray text-lg leading-relaxed">
              Our mission is simple: to empower businesses of all sizes with the digital strategies 
              they need to succeed. We believe that every brand, no matter how big or small, 
              has the potential to grow and excel in the ever-evolving digital world. 
              We aim to be the catalyst for your digital success.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. What Sets Us Apart */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <AnimatedSection direction="left">
              <h2 className="text-4xl md:text-5xl font-display font-black mb-8">What Sets Us <span className="text-brand-pink">Apart?</span></h2>
              <p className="text-brand-gray text-lg leading-relaxed mb-10">
                EndlessInfosys stands at the forefront of innovation, transforming digital marketing with mastery. 
                Our algorithms predict trends and craft resonant strategies, turning insights into impactful, 
                conversation-driving campaigns. We dont just follow the digital marketing game; we redefine it, 
                propelling brands beyond the ordinary.
              </p>
              <div className="flex flex-col gap-6">
                 {[
                   { label: "Trend Prediction", color: "purple", icon: TrendingUp },
                   { label: "Resonant Campaigns", color: "pink", icon: Heart },
                   { label: "Beyond Ordinary", color: "teal", icon: Sparkles }
                 ].map((chip) => (
                   <div key={chip.label} className="flex items-center gap-4 group">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all ${
                         chip.color === "purple" ? "bg-bg-lavender text-brand-purple" :
                         chip.color === "pink" ? "bg-[#FFF0F0] text-brand-pink" :
                         "bg-bg-mint text-brand-teal"
                      }`}>
                         <chip.icon size={24} />
                      </div>
                      <span className="text-lg font-display font-black text-brand-dark">{chip.label}</span>
                   </div>
                 ))}
              </div>
           </AnimatedSection>

           <AnimatedSection direction="right" className="relative h-[500px] flex items-center justify-center">
              <div className="absolute w-full h-full bg-mesh opacity-30 rounded-[60px]" />
              <div className="relative w-72 h-72 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-10 group">
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-pink/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                 <ShieldCheck size={120} className="text-brand-purple relative z-10" />
              </div>
              <div className="absolute top-10 left-10 w-24 h-24 bg-brand-yellow/10 rounded-full animate-bounce" />
           </AnimatedSection>
        </div>
      </section>

      {/* 5. Team Values Strip */}
      <section className="section-padding bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
           <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-display font-black">Our Team <span className="text-brand-yellow">Values</span></h2>
              <p className="text-brand-gray mt-4 max-w-xl mx-auto">The core principles that drive every project we touch.</p>
           </AnimatedSection>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard icon={ShieldCheck} title="Transparency" desc="Clear, honest communication in every step." />
              <ValueCard icon={Zap} title="Creativity" desc="Thinking outside the box is our standard." />
              <ValueCard icon={Target} title="Excellence" desc="We don't settle for anything less than perfect." />
              <ValueCard icon={TrendingUp} title="Growth" desc="Continuous improvement for us and our clients." />
           </div>
        </div>
      </section>
    </div>
  );
}
