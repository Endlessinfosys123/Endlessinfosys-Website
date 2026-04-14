"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PricingCard from "@/components/PricingCard";
import { Check, Minus, ChevronDown, ChevronUp, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Standard",
    price: "25,000",
    color: "pink",
    features: [
      "Facebook & Instagram Marketing",
      "Creative Graphic Designs",
      "Creative Ads Video",
      "Ads Campaign Management",
      "Conversion Rate Optimization",
      "Social Media Account Management"
    ]
  },
  {
    name: "Gold",
    price: "50,000",
    color: "purple",
    isPopular: true,
    features: [
      "Everything in Standard Plan, plus:",
      "Brand Boosting Strategy",
      "Search Engine Optimization (SEO)",
      "Personalized Marketing Strategy",
      "Leads Generation",
      "Influencer Marketing",
      "IT Consultation",
      "Email Marketing"
    ]
  },
  {
    name: "Premium",
    price: "75,000",
    color: "teal",
    features: [
      "Everything in Gold Plan, plus:",
      "Geo Fencing",
      "Special Focus on Brand Building",
      "360° Branding Consultation",
      "Search Engine Marketing (SEM)",
      "WhatsApp Chatbot Setup",
      "Effective Lead Generation",
      "IT Consultation"
    ]
  }
];

const faqs = [
  { q: "What is digital marketing?", a: "Digital marketing encompasses all marketing efforts that use the internet or electronic devices." },
  { q: "How long does it take to see results?", a: "While some channels like PPC yield immediate traffic, SEO and branding typically take 3-6 months for significant impact." },
  { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time to suit your business needs." },
  { q: "Which plan is best for a startup?", a: "The Gold Plan is typically recommended for startups looking for a balanced mix of visibility and growth." },
  { q: "Do you offer custom plans?", a: "Absolutely! We can customize any plan based on your specific budget and goals." }
];

const ComparisonRow = ({ feature, availability }) => (
  <tr className="border-b border-gray-100 hover:bg-bg-soft transition-colors">
    <td className="py-6 px-4 text-brand-gray font-semibold text-sm">{feature}</td>
    {availability.map((available, idx) => (
      <td key={idx} className="py-6 px-4 text-center">
        {available ? (
          <Check className="mx-auto text-brand-teal" size={20} />
        ) : (
          <Minus className="mx-auto text-gray-200" size={20} />
        )}
      </td>
    ))}
  </tr>
);

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl mb-4 overflow-hidden bg-white shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-display font-bold text-brand-dark">{faq.q}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-brand-gray text-sm leading-relaxed border-t border-gray-50 bg-bg-soft/50">
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
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section className="pt-32 pb-20 bg-bg-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-4">
              Our <span className="text-brand-pink">Service Packages</span>
            </h1>
            <p className="text-brand-gray text-xl md:text-2xl max-w-2xl mx-auto font-body">
              Transparent pricing. Scalable plans. Real results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
             {plans.map((plan, idx) => (
               <PricingCard key={idx} {...plan} delay={idx * 0.1} />
             ))}
          </div>
        </div>
      </section>

      {/* 3. Note Banner */}
      <section className="bg-bg-cream py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-brand-dark text-center">
             <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                <Lightbulb size={24} />
             </div>
             <p className="font-display font-black text-lg">
                Have a specific marketing budget? <span className="text-brand-purple">Tell us</span> and we'll customize a plan just for you.
             </p>
          </div>
        </div>
      </section>

      {/* 4. Comparison Table */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-display font-black">Plan Comparison</h2>
          </AnimatedSection>
          
          <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-bg-soft">
                     <th className="py-6 px-4 font-display font-black text-brand-dark">Feature</th>
                     <th className="py-6 px-4 text-center font-display font-black text-brand-pink">Standard</th>
                     <th className="py-6 px-4 text-center font-display font-black text-brand-purple">Gold</th>
                     <th className="py-6 px-4 text-center font-display font-black text-brand-teal">Premium</th>
                  </tr>
               </thead>
               <tbody>
                  <ComparisonRow feature="FB & IG Marketing" availability={[true, true, true]} />
                  <ComparisonRow feature="Graphic Designs" availability={[true, true, true]} />
                  <ComparisonRow feature="Ads Campaign Mgmt" availability={[true, true, true]} />
                  <ComparisonRow feature="SEO Services" availability={[false, true, true]} />
                  <ComparisonRow feature="Influencer Marketing" availability={[false, true, true]} />
                  <ComparisonRow feature="Email Marketing" availability={[false, true, true]} />
                  <ComparisonRow feature="Geo Fencing" availability={[false, false, true]} />
                  <ComparisonRow feature="SEM (Search Ads)" availability={[false, false, true]} />
                  <ComparisonRow feature="360° Branding" availability={[false, false, true]} />
                  <ComparisonRow feature="WhatsApp Chatbot" availability={[false, false, true]} />
               </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="section-padding bg-bg-soft">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-display font-black">Frequently Asked <span className="text-brand-purple">Questions</span></h2>
          </AnimatedSection>
          <div className="flex flex-col">
             {faqs.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} />
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
