"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, Share2, MapPin, ArrowRight } from "lucide-react";

const ContactInfoItem = ({ icon: Icon, title, value, href, color }) => (
  <div className="flex items-start gap-4 p-6 rounded-3xl bg-white shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-500">
    <div className={`p-4 rounded-2xl ${
      color === "purple" ? "bg-bg-lavender text-brand-purple" :
      color === "pink" ? "bg-[#FFF0F0] text-brand-pink" :
      color === "teal" ? "bg-bg-mint text-brand-teal" :
      "bg-bg-cream text-brand-yellow"
    } group-hover:scale-110 transition-transform`}>
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-sm font-bold uppercase tracking-widest text-brand-gray mb-1">{title}</h4>
      <a href={href} className="text-lg font-display font-black text-brand-dark hover:text-brand-purple transition-colors">
        {value}
      </a>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section className="pt-32 pb-20 bg-bg-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-4">
              Let's <span className="text-brand-purple">Connect</span>
            </h1>
            <p className="text-brand-gray text-xl md:text-2xl max-w-2xl mx-auto font-body">
              We're just a message away from transforming your digital presence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Form & Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection direction="left">
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection direction="right" className="space-y-8">
            <div className="bg-bg-lavender p-10 md:p-14 rounded-[40px] border border-brand-purple/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />
               <div className="relative z-10">
                  <h3 className="text-3xl font-display font-black mb-10 text-brand-dark">Contact Information</h3>
                  <div className="space-y-6">
                    <ContactInfoItem 
                      icon={Phone} 
                      title="Phone" 
                      value="+91 6356195625" 
                      href="tel:+916356195625" 
                      color="purple" 
                    />
                    <ContactInfoItem 
                      icon={Mail} 
                      title="Email" 
                      value="info.endlessinfosys@gmail.com" 
                      href="mailto:info.endlessinfosys@gmail.com" 
                      color="pink" 
                    />
                    <ContactInfoItem 
                      icon={Share2} 
                      title="Instagram" 
                      value="@endlessinfosys" 
                      href="https://instagram.com/endlessinfosys" 
                      color="teal" 
                    />
                    <ContactInfoItem 
                      icon={MapPin} 
                      title="Location" 
                      value="Gandhinagar, Gujarat" 
                      href="#" 
                      color="yellow" 
                    />
                  </div>
               </div>
            </div>

            {/* Google Map Mockup (Using a real iframe if possible) */}
            <div className="rounded-[40px] overflow-hidden shadow-2xl h-[350px] border-4 border-white shadow-gray-200/50">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117361.0261174987!2d72.585542!3d23.215635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b3e839e4465%3A0xe5a363d6b04396f4!2sGandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1713100000000" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Social CTA Strip */}
      <section className="py-12 bg-bg-mint border-y border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <AnimatedSection className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-4 text-brand-teal font-display font-black text-xl md:text-2xl">
                 <Share2 size={32} />
                 Follow us on Instagram @endlessinfosys
              </div>
              <p className="text-brand-gray text-sm md:text-base">For daily digital marketing tips and tricks!</p>
              <a 
                href="https://instagram.com/endlessinfosys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline-teal px-8 py-3 text-sm"
              >
                Follow Now
              </a>
           </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
