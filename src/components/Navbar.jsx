"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Plans", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const Logo = () => (
  <div className="flex items-center gap-2 group">
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="group-hover:rotate-180 transition-transform duration-700"
    >
      <path d="M50 50L50 10C50 10 90 10 90 50L50 50Z" fill="#6C47FF" />
      <path d="M50 50L90 50C90 50 90 90 50 90L50 50Z" fill="#FF4D6D" />
      <path d="M50 50L50 90C50 90 10 90 10 50L50 50Z" fill="#00C9A7" />
      <path d="M50 50L10 50C10 50 10 10 50 10L50 50Z" fill="#FFB830" />
      <circle cx="50" cy="50" r="8" fill="white" />
    </svg>
    <div className="flex flex-col">
      <span className="font-display font-bold text-xl leading-none text-brand-dark">EndlessInfosys</span>
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-purple">by QUANTIFYRE</span>
    </div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-semibold text-sm transition-colors hover:text-brand-purple ${
                  isActive ? "text-brand-purple" : "text-brand-dark"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-purple"
                  />
                )}
              </Link>
            );
          })}
          
          <Link href="/contact" className="btn-gradient text-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold ${
                  pathname === link.href ? "text-brand-purple" : "text-brand-dark"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="btn-gradient text-center py-4"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
