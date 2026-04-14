"use client";

import { motion } from "framer-motion";
import { Search, Globe, Mail, PenTool, Layout, ArrowRight } from "lucide-react";
import MagneticHelper from "./MagneticHelper";
import Link from "next/link";

const Instagram = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const services = [
  {
    title: "SEO Optimization",
    slug: "seo",
    description: "Architecting your visibility with data-driven search engineering.",
    icon: Search,
    color: "from-blue-500 to-cyan-400",
    size: "col-span-2 row-span-2",
  },
  {
    title: "PPC Advertising",
    slug: "ppc",
    description: "High-precision targeting that converts clicks into capital.",
    icon: Rocket,
    color: "from-brand-purple to-brand-pink",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Social Media",
    slug: "social-media",
    description: "Crafting narratives that resonate and foster brand loyalty.",
    icon: Instagram,
    color: "from-pink-500 to-rose-400",
    size: "col-span-1 row-span-2",
  },
  {
    title: "360° Branding",
    slug: "branding",
    description: "Building immersive digital architectures that scale.",
    icon: Layout,
    color: "from-brand-teal to-brand-purple",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    description: "Value-driven storytelling that empowers your audience.",
    icon: PenTool,
    color: "from-brand-yellow to-orange-400",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Email Marketing",
    slug: "email-marketing",
    description: "Direct-to-consumer strategies that maximize ROI.",
    icon: Mail,
    color: "from-brand-purple to-indigo-400",
    size: "col-span-2 row-span-1",
  },
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon || Search;

  return (
    <Link href={`/services/${service.slug}`} className={`${service.size}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`h-full group bento-card p-10 flex flex-col justify-between hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer relative overflow-hidden shadow-glow-purple`}
      >
      <div className="flex justify-between items-start relative z-10">
        <motion.div 
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: index * 0.2
          }}
          className={`p-5 rounded-3xl bg-gradient-to-br ${service.color} text-white shadow-2xl relative z-10`}
        >
          <Icon size={32} />
        </motion.div>
        <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
          <ArrowRight size={20} className="text-brand-purple" />
        </div>
      </div>
      
      <div className="space-y-4 mt-8 relative z-10">
        <h3 className="text-2xl font-display font-black text-brand-dark leading-tight group-hover:text-brand-purple transition-colors">{service.title}</h3>
        <p className="text-brand-gray/60 font-medium leading-relaxed">{service.description}</p>
      </div>

      {/* Subtle Background Glow */}
      <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 blur-[60px] transition-opacity duration-700`} />
    </motion.div>
    </Link>
  );
};

export default function BentoServices() {
  return (
    <section className="section-padding px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-black leading-tight text-brand-dark">
              Our <span className="font-serif italic text-brand-purple">Dynamic</span> <br /> Solutions Portfolio
            </h2>
            <p className="text-brand-gray text-lg">
              We leverage cutting-edge technology and human-centric design to deliver measurable growth across every digital touchpoint.
            </p>
          </div>
          <div className="pb-2">
            <MagneticHelper strength={0.3}>
              <button className="btn-gradient">View All Services</button>
            </MagneticHelper>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Fallback Icon
function Rocket(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
      <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
    </svg>
  );
}
