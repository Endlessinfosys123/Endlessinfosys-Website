"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
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
  Repeat, 
  ClipboardCheck 
} from "lucide-react";
import Link from "next/link";

const services = [
  { 
    id: "seo",
    title: "SEO Optimization", 
    icon: Search, 
    color: "purple", 
    desc: "We optimize your website to rank higher on search engines, driving organic traffic and increasing your online visibility through advanced on-page and off-page strategies." 
  },
  { 
    id: "ppc",
    title: "PPC Advertising", 
    icon: Target, 
    color: "pink", 
    desc: "Maximize your ROI with precision-targeted paid campaigns across Google and social platforms. We manage every rupee of your ad spend for maximum conversion." 
  },
  { 
    id: "smm",
    title: "Social Media Marketing", 
    icon: Share2, 
    color: "teal", 
    desc: "From content creation to community management — we craft your brand's social presence on Instagram, Facebook, and LinkedIn to build loyal audiences." 
  },
  { 
    id: "email",
    title: "Email Marketing", 
    icon: Mail, 
    color: "yellow", 
    desc: "Personalized, high-converting email campaigns that nurture leads and drive repeat business. From automation to analytics, we handle it all." 
  },
  { 
    id: "content",
    title: "Content Marketing", 
    icon: FileText, 
    color: "purple", 
    desc: "Compelling blogs, videos, and creative content that establishes your brand authority and keeps your audience engaged and returning." 
  },
  { 
    id: "branding",
    title: "360° Branding", 
    icon: Layers, 
    color: "pink", 
    desc: "A holistic approach to brand identity — from logo and visual design to brand voice and strategy — ensuring your brand is unforgettable." 
  },
];

const processSteps = [
  { name: "Discover", icon: Search, color: "bg-brand-purple" },
  { name: "Strategize", icon: Lightbulb, color: "bg-brand-pink" },
  { name: "Execute", icon: Rocket, color: "bg-brand-teal" },
  { name: "Optimize", icon: BarChart, color: "bg-brand-yellow" },
  { name: "Report", icon: ClipboardCheck, color: "bg-brand-purple" },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section className="pt-32 pb-20 bg-bg-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-4">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-brand-gray text-xl md:text-2xl max-w-2xl mx-auto font-body">
              From visibility to virality — we do it all. Expert marketing solutions tailored for your success.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-pink/5 blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal/5 blur-[100px] translate-y-1/2 translate-x-1/2" />
      </section>

      {/* 2. Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <ServiceCard 
                key={service.id} 
                {...service} 
                delay={idx * 0.1} 
                description={service.desc}
                isDetailed={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Service Process Timeline */}
      <section className="section-padding bg-bg-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black">Our Service <span className="text-brand-purple">Process</span></h2>
            <p className="text-brand-gray mt-4">How we take your brand from idea to impact.</p>
          </AnimatedSection>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Dashed Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] border-t-2 border-dashed border-gray-200 hidden md:block -translate-y-1/2 z-0" />
            
            {processSteps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.2} className="relative z-10 flex flex-col items-center group">
                <div className={`w-20 h-20 rounded-full ${step.color} text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <step.icon size={32} />
                </div>
                <h4 className="mt-6 font-display font-black text-xl text-brand-dark">{step.name}</h4>
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-brand-purple transition-all" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <AnimatedSection className="bg-bg-lavender rounded-[40px] p-12 md:p-20 text-center flex flex-col items-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-black text-brand-dark max-w-2xl leading-tight">
                 Not sure which service fits your business? Let's talk.
              </h2>
              <p className="text-brand-gray text-lg max-w-xl">
                 Our experts are ready to analyze your situation and recommend the best strategy for growth.
              </p>
              <Link href="/contact" className="btn-gradient px-12 py-5 text-xl">
                 Book Free Consultation
              </Link>
           </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
