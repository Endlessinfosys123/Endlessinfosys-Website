"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, ArrowRight, ArrowUpRight, Globe } from "lucide-react";
import MagneticHelper from "@/components/MagneticHelper";
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

const BentoContactItem = ({ icon: Icon, title, value, href, color, index }) => (
  <motion.a
    href={href}
    target={href.startsWith('http') ? "_blank" : undefined}
    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bento-card p-8 flex flex-col justify-between h-full bg-white transition-all duration-500 hover:border-brand-purple/20 shadow-none border-gray-100"
  >
    <div className="flex justify-between items-start">
      <div className={`p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 ${
        color === "purple" ? "bg-brand-purple/10 text-brand-purple" :
        color === "pink" ? "bg-brand-pink/10 text-brand-pink" :
        color === "teal" ? "bg-brand-teal/10 text-brand-teal" :
        "bg-brand-yellow/10 text-brand-yellow"
      }`}>
        <Icon size={24} />
      </div>
      <ArrowUpRight size={24} className="text-gray-200 group-hover:text-brand-purple transition-colors" />
    </div>
    
    <div className="mt-8">
      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gray/40 mb-2">{title}</h4>
      <p className="text-xl font-display font-black text-brand-dark group-hover:text-brand-purple transition-colors break-words">
        {value}
      </p>
    </div>
  </motion.a>
);

export default function ContactPage() {
  return (
    <div className="flex flex-col mesh-bg noise-overlay bg-white">
      {/* 1. Kinetic Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-gray/60 mb-10"
          >
            <Link href="/" className="hover:text-brand-purple transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-purple">Secure Channel</span>
          </motion.nav>

          <AnimatedSection>
            <h1 className="text-6xl md:text-9xl font-display font-black mb-8 leading-[0.9] text-brand-dark">
              Let's <br />
              <span className="font-serif italic text-brand-purple font-normal">Connect</span>
            </h1>
            <p className="text-brand-gray/80 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Ready to architect your digital success? Our team of specialists is standing by to transform 
              your vision into a high-performance reality through our proprietary 'Secure Channel' strategic audit.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Form & Bento Info */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-16 rounded-[60px] border border-gray-100 bg-white"
            >
              <h2 className="text-3xl font-display font-black mb-10 text-brand-dark">Send a Message</h2>
              <ContactForm />
            </motion.div>
          </div>

          {/* Info Side (Bento) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 h-full">
            <BentoContactItem 
              icon={Phone} 
              title="Global Outreach" 
              value="+91 7383095625" 
              href="tel:+917383095625" 
              color="purple" 
              index={0}
            />
            <BentoContactItem 
              icon={Mail} 
              title="Official Communications" 
              value="info.endlessinfosys@gmail.com" 
              href="mailto:info.endlessinfosys@gmail.com" 
              color="pink" 
              index={1}
            />
            <BentoContactItem 
              icon={Instagram} 
              title="Digital Presence" 
              value="@endlessinfosys" 
              href="https://instagram.com/endlessinfosys" 
              color="teal" 
              index={2}
            />
            <div className="relative group bento-card p-1 shadow-2xl overflow-hidden min-h-[300px] h-full sm:col-span-2 lg:col-span-1">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117361.0261174987!2d72.585542!3d23.215635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b3e839e4465%3A0xe5a363d6b04396f4!2sGandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1713100000000" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-[29px] grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Reach Banner */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-brand-purple/5 via-brand-pink/5 to-brand-teal/5 blur-[120px] rounded-full animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-card border-brand-teal/20 text-brand-teal text-xs font-black uppercase tracking-widest cursor-default">
                <Globe size={16} className="animate-spin-slow" /> Kinetic connectivity
              </div>
              <h3 className="text-5xl md:text-8xl font-display font-black text-brand-dark leading-[0.85]">
                Serving Brands <br />
                <span className="font-serif italic text-brand-purple font-normal">Everywhere</span>
              </h3>
            </div>
            
            <div className="glass-card p-12 md:p-16 space-y-8 shadow-glow-teal border-brand-teal/10 relative group">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-teal/10 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700" />
              <p className="text-brand-gray/80 text-xl font-medium leading-relaxed">
                Our collaborative architecture allows us to work with visionaries worldwide. 
                Whether you're local in Gandhinagar or across the ocean, we architect 
                your path to the absolute top.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <MagneticHelper strength={0.3}>
                  <Link href="/about" className="group flex items-center gap-4 font-display font-black text-brand-dark hover:text-brand-purple transition-all text-sm uppercase tracking-widest">
                    <span>Learn Methodology</span>
                    <div className="w-12 h-12 rounded-full border-2 border-brand-dark/5 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple transition-all">
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </MagneticHelper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
