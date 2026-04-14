"use client";

import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import PricingCard from "@/components/PricingCard";
import { 
  Search, 
  Target, 
  Share2, 
  Mail, 
  FileText, 
  Layers, 
  Zap, 
  BarChart3, 
  Globe, 
  TrendingUp 
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients", color: "purple" },
  { value: 6, suffix: "", label: "Core Services", color: "pink" },
  { value: 3, suffix: "", label: "Flexible Plans", color: "teal" },
  { value: 100, suffix: "%", label: "Result-Driven", color: "yellow" },
];

const services = [
  { id: 1, title: "SEO", icon: Search, color: "purple", desc: "Optimize your website to rank higher and drive organic traffic." },
  { id: 2, title: "PPC Advertising", icon: Target, color: "pink", desc: "Maximize ROI with precision-targeted paid campaigns." },
  { id: 3, title: "Social Media Marketing", icon: Share2, color: "teal", desc: "Build loyal audiences on Instagram, FB, and LinkedIn." },
  { id: 4, title: "Email Marketing", icon: Mail, color: "yellow", desc: "High-converting campaigns that nurture leads and drive sales." },
  { id: 5, title: "Content Marketing", icon: FileText, color: "purple", desc: "Compelling blogs and videos that establish authority." },
  { id: 6, title: "360° Branding", icon: Layers, color: "pink", desc: "Holistic approach to brand identity and strategy." },
];

const features = [
  { title: "Innovation-Driven", icon: Zap, color: "purple", desc: "We use the latest tech and trends to keep you ahead." },
  { title: "Data-Backed Strategy", icon: BarChart3, color: "pink", desc: "Every move we make is backed by real performance data." },
  { title: "Results Focused", icon: TrendingUp, color: "teal", desc: "We don't just deliver reports; we deliver real results." },
  { title: "Full-Service Agency", icon: Globe, color: "yellow", desc: "From visibility to sales, we handle the entire funnel." },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Stats Bar */}
      <section className="bg-bg-mint py-12 border-y border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatsCounter key={idx} {...stat} />
          ))}
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              What We Do <span className="text-brand-purple">Best</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-purple to-brand-pink mx-auto rounded-full" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard 
                key={service.id} 
                {...service} 
                delay={idx * 0.1} 
                description={service.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Teaser */}
      <section className="section-padding bg-bg-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection direction="left">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight text-brand-dark">
              Your Trusted <br />
              <span className="text-brand-pink">Digital Partner</span>
            </h2>
            <p className="text-brand-gray text-lg mb-8 leading-relaxed">
              Welcome to EndlessInfosys, your trusted partner in the digital marketing landscape. 
              We are a dynamic and innovative digital marketing company dedicated to helping 
              businesses thrive in the digital age. 
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 font-bold text-brand-purple group">
              Learn More About Us
              <div className="w-8 h-[2px] bg-brand-purple group-hover:w-12 transition-all" />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right" className="relative group">
            {/* Geometric Art Composition */}
            <div className="relative w-full aspect-square bg-white rounded-3xl shadow-xl p-8 overflow-hidden">
               <div className="absolute top-10 left-10 w-40 h-40 bg-brand-purple/10 rounded-full animate-blob" />
               <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-teal/10 rounded-2xl rotate-12 animate-float" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-brand-pink/20 rounded-full" />
               <div className="relative flex items-center justify-center h-full">
                 <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-2xl">
                    <rect x="10" y="10" width="80" height="80" rx="20" fill="#6C47FF" className="animate-pulse" />
                    <circle cx="50" cy="50" r="20" fill="white" />
                 </svg>
               </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-sm ${
                  feature.color === "purple" ? "bg-bg-lavender text-brand-purple" :
                  feature.color === "pink" ? "bg-[#FFF0F0] text-brand-pink" :
                  feature.color === "teal" ? "bg-bg-mint text-brand-teal" :
                  "bg-bg-cream text-brand-yellow"
                }`}>
                  <feature.icon size={36} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{feature.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing Teaser */}
      <section className="section-padding bg-bg-lavender">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Plans Built for <span className="text-brand-pink">Every Business</span>
            </h2>
            <p className="text-brand-gray max-w-xl mx-auto mb-8">
              Choose the perfect plan to kickstart your digital success story. 
              Transparent pricing, no hidden fees.
            </p>
            <Link href="/pricing" className="btn-gradient">
              View All Plans
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <PricingCard 
               plan="Standard" 
               price="25,000" 
               color="pink"
               features={["FB & IG Marketing", "Graphic Designs", "Ads Video", "Campaign Mgmt"]} 
            />
            <PricingCard 
               plan="Gold" 
               price="50,000" 
               isPopular={true} 
               color="purple"
               features={["Everything in Standard", "SEO Services", "Leads Generation", "Influencer Marketing"]} 
            />
            <PricingCard 
               plan="Premium" 
               price="75,000" 
               color="teal"
               features={["Everything in Gold", "Geo Fencing", "360° Consultation", "SEM (Search Ads)"]} 
            />
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="relative overflow-hidden rounded-[40px] shadow-2xl bg-gradient-to-br from-[#6C47FF] via-[#FF4D6D] to-[#00C9A7]">
             <div className="absolute inset-0 opacity-20 bg-mesh" />
             <div className="relative py-24 px-8 md:px-20 flex flex-col items-center text-center space-y-8">
                <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                  Ready to Grow Your Business?
                </h2>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl font-body">
                  Join hundreds of successful brands that trust EndlessInfosys to manage their digital presence.
                </p>
                <Link href="/contact" className="px-12 py-5 rounded-full bg-white text-brand-dark font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl">
                  Get Started Today
                </Link>
             </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
