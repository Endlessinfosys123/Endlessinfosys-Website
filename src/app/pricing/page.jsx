"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticHelper from "@/components/MagneticHelper";
import { Check, Minus, ChevronDown, ChevronUp, Lightbulb, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Standard",
    price: "25k",
    tagline: "For Growing Brands",
    color: "pink",
    features: [
      "FB & IG Marketing",
      "Creative Graphic Designs",
      "Creative Ads Video",
      "Campaign Management",
      "Conversion Optimization",
      "Account Management"
    ]
  },
  {
    name: "Gold",
    price: "50k",
    tagline: "The Growth Catalyst",
    color: "purple",
    isPopular: true,
    features: [
      "Everything in Standard",
      "Brand Boosting Strategy",
      "SEO & Keyword Research",
      "Personalized Strategy",
      "Leads Generation",
      "Influencer Marketing",
      "IT Consultation",
      "Email Marketing"
    ]
  },
  {
    name: "Premium",
    price: "75k",
    tagline: "The Full Spectrum",
    color: "teal",
    features: [
      "Everything in Gold",
      "Geo Fencing Strategy",
      "360° Branding Consultation",
      "Search Engine Marketing",
      "WhatsApp Chatbot Setup",
      "Effective Lead Gen 2.0",
      "24/7 Priority Support",
      "IT Systems Audit"
    ]
  }
];

const faqs = [
  { q: "What is your primary focus?", a: "We focus on measurable growth. Whether it's visibility, engagement, or direct conversions, our strategies are built on data-driven ROI." },
  { q: "How long until we see tangible results?", a: "PPC starts yielding clicks immediately. SEO and brand-building usually see a significant upward curve within 3–4 months." },
  { q: "Can we switch between plans?", a: "Absolutely. Our plans are flexible. You can scale up during peak seasons or adjust during stability phases." },
  { q: "Do you offer custom enterprise solutions?", a: "Yes. For larger organizations with unique requirements, we craft bespoke 360° digital architectures." }
];

const BentoPricingCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`relative group bento-card p-10 flex flex-col justify-between h-full bg-white transition-all duration-500 hover:scale-[1.02] ${
      plan.isPopular ? "border-brand-purple/30 ring-4 ring-brand-purple/5" : ""
    }`}
  >
    {plan.isPopular && (
      <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-brand-purple text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
        <Star size={12} fill="white" /> Most Popular
      </div>
    )}

    <div>
      <div className="space-y-2 mb-8">
        <h3 className="text-3xl font-display font-black text-brand-dark">{plan.name}</h3>
        <p className="font-serif italic text-brand-gray/60 font-normal">{plan.tagline}</p>
      </div>

      <div className="flex items-baseline gap-1 mb-10">
        <span className="text-sm font-bold text-brand-gray/40">₹</span>
        <span className="text-6xl font-display font-black text-brand-dark">{plan.price}</span>
        <span className="text-sm font-bold text-brand-gray/40">/mo</span>
      </div>

      <ul className="space-y-4 mb-12">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-brand-gray font-medium text-sm">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
              plan.color === 'purple' ? 'bg-brand-purple/10 text-brand-purple' :
              plan.color === 'pink' ? 'bg-brand-pink/10 text-brand-pink' :
              'bg-brand-teal/10 text-brand-teal'
            }`}>
              <Check size={12} strokeWidth={3} />
            </div>
            {feature}
          </li>
        ))}
      </ul>
    </div>

    <MagneticHelper strength={0.2}>
      <Link href="/contact" className={`w-full block text-center py-5 rounded-2xl font-display font-black transition-all ${
        plan.isPopular ? "bg-brand-purple text-white shadow-xl shadow-brand-purple/20" : "bg-gray-50 text-brand-dark hover:bg-gray-100"
      }`}>
        Select This Architecture
      </Link>
    </MagneticHelper>
  </motion.div>
);

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 text-left group"
      >
        <span className="font-display font-bold text-xl text-brand-dark group-hover:text-brand-purple transition-colors">
          {faq.q}
        </span>
        <div className={`p-2 rounded-full border border-gray-100 transition-transform duration-500 ${isOpen ? "rotate-180 bg-brand-purple text-white border-brand-purple" : ""}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-8 text-brand-gray/80 text-lg leading-relaxed font-medium max-w-2xl">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function PricingPage() {
  return (
    <div className="flex flex-col mesh-bg noise-overlay bg-white">
      {/* 1. Cinematic Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-6xl md:text-9xl font-display font-black mb-8 leading-[0.9] text-brand-dark">
              Precision <br />
              <span className="font-serif italic text-brand-pink font-normal">Pricing</span>
            </h1>
            <p className="text-brand-gray/80 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
              Transparent investment for limitless growth. Choose the architecture that matches your ambition.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Bento Pricing Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {plans.map((plan, idx) => (
               <BentoPricingCard key={idx} plan={plan} index={idx} />
             ))}
          </div>
        </div>
      </section>

      {/* 3. Note Banner */}
      <section className="py-24 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-gradient-to-r from-brand-purple/10 via-brand-pink/10 to-brand-teal/10 backdrop-blur-3xl rounded-[60px] p-12 md:p-20 border border-white shadow-glow-purple flex flex-col md:flex-row items-center justify-between gap-12 group">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-20 h-20 rounded-3xl bg-white shadow-2xl flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform duration-500">
                <Lightbulb size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-display font-black text-brand-dark">Custom Architectures?</h3>
                <p className="text-brand-gray/60 font-medium text-lg">Tell us your budget and we'll craft a bespoke strategy for your dominance.</p>
              </div>
            </div>
            <MagneticHelper strength={0.3}>
              <Link href="/contact" className="btn-gradient">
                Let's Customize
              </Link>
            </MagneticHelper>
          </div>
        </div>
      </section>

      {/* 4. Comparison Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-8">
              <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">
                Plan <br />
                <span className="font-serif italic text-brand-purple font-normal">Anatomy</span>
              </h2>
              <p className="text-brand-gray/80 text-xl font-medium">
                A deep dive into the features that power your digital dominance.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-3 text-brand-dark font-bold mb-4">
                  <div className="w-6 h-6 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                    <Check size={14} />
                  </div>
                  <span>Result-Driven Implementation</span>
                </div>
                <div className="flex items-center gap-3 text-brand-dark font-bold">
                  <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink">
                    <Check size={14} />
                  </div>
                  <span>Adaptive Strategy Evolution</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 overflow-hidden">
               <div className="rounded-[40px] border border-gray-100 bg-white shadow-2xl shadow-gray-200/50 overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-gray-50/50">
                          <th className="py-8 px-8 font-display font-black text-brand-dark">Capability</th>
                          <th className="py-8 px-8 text-center font-display font-bold text-brand-pink">Standard</th>
                          <th className="py-8 px-8 text-center font-display font-bold text-brand-purple">Gold</th>
                          <th className="py-8 px-8 text-center font-display font-bold text-brand-teal">Premium</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 font-medium text-brand-gray">
                       {[
                         ["Ads Management", ["yes", "yes", "yes"]],
                         ["SEO Mastery", ["no", "yes", "yes"]],
                         ["Influencer Connect", ["no", "yes", "yes"]],
                         ["WhatsApp Chatbot", ["no", "no", "yes"]],
                         ["Geo Fencing", ["no", "no", "yes"]],
                         ["360° Consultation", ["no", "no", "yes"]]
                       ].map(([feature, access], idx) => (
                         <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                           <td className="py-6 px-8 text-brand-dark font-bold">{feature}</td>
                           {access.map((acc, aIdx) => (
                             <td key={aIdx} className="py-6 px-8 text-center">
                               {acc === "yes" ? <Check className="mx-auto text-brand-teal" size={20} /> : <Minus className="mx-auto text-gray-200" size={20} />}
                             </td>
                           ))}
                         </tr>
                       ))}
                    </tbody>
                 </table>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="section-padding bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="mb-20">
            <h2 className="text-4xl md:text-7xl font-display font-black text-center leading-[0.9]">
              Strategic <br />
              <span className="font-serif italic text-brand-purple font-normal">Clarification</span>
            </h2>
          </AnimatedSection>
          <div className="flex flex-col bg-white rounded-[40px] p-8 md:p-16 shadow-2xl shadow-gray-200/50 border border-gray-100">
             {faqs.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} />
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
