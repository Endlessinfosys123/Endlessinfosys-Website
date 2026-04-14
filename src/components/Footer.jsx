"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Share2, MapPin } from "lucide-react";

const Logo = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <div className="relative h-12 w-48 flex items-center">
        {!imgError ? (
          <Image 
            src="/images/logo-horizontal.png" 
            alt="EndlessInfosys Logo" 
            fill
            className="object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-brand-purple to-brand-teal text-white">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 50L50 10C50 10 90 10 90 50L50 50Z" fill="white" />
                <path d="M50 50L90 50C90 50 90 90 50 90L50 50Z" fill="white" fillOpacity="0.8" />
                <path d="M50 50L50 90C50 90 10 90 10 50L50 50Z" fill="white" fillOpacity="0.5" />
                <path d="M50 50L10 50C10 50 10 10 50 10L50 50Z" fill="white" fillOpacity="0.3" />
              </svg>
            </div>
            <span className="font-display font-black text-2xl text-brand-dark">EndlessInfosys</span>
          </div>
        )}
      </div>
    </div>
  );
};

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Pricing Plans", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ],
  services: [
    { name: "Search Intelligence", href: "/services/seo" },
    { name: "Precision Ads", href: "/services/ppc" },
    { name: "Social Narratives", href: "/services/social-media" },
    { name: "Email Marketing", href: "/services/email-marketing" },
    { name: "Creative Content", href: "/services/content-marketing" },
    { name: "360° Branding", href: "/services/branding" },
  ],
  contact: [
    { icon: Phone, text: "+91 7383095625", href: "tel:+917383095625" },
    { icon: Mail, text: "info.endlessinfosys@gmail.com", href: "mailto:info.endlessinfosys@gmail.com" },
    { icon: Share2, text: "@endlessinfosys", href: "https://instagram.com/endlessinfosys" },
    { icon: MapPin, text: "Gandhinagar, Gujarat, India", href: "#" },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-white pt-1 px-6">
      {/* Gradient Top Border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-purple via-brand-pink to-brand-teal mb-20" />
      
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-brand-gray text-sm leading-relaxed font-medium">
              We are the architects of your online success. At EndlessInfosys, we blend predictive analytics with 
              cinematic storytelling to build immersive digital ecosystems that help brands dominate their industry 
              in the high-velocity digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display font-bold text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-brand-gray text-sm hover:text-brand-purple transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display font-bold text-lg">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-brand-gray text-sm hover:text-brand-purple transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display font-bold text-lg">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.contact.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-brand-purple/5 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
                    <item.icon size={18} />
                  </div>
                  <a href={item.href} className="text-brand-gray text-sm hover:text-brand-purple transition-colors">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-brand-gray uppercase tracking-widest">
          <p>© 2024 ENDLESSINFOSYS BY QUANTIFYRE LLP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-purple transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
