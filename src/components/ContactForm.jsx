"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import MagneticHelper from "./MagneticHelper";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "SEO",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "SEO Optimization",
    "PPC Advertising",
    "Social Media Marketing",
    "Email Marketing",
    "Content Marketing",
    "360° Branding"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    console.log("Form Submitted:", formData);
  };

  const InputField = ({ label, name, type = "text" }) => (
    <div className="relative group mb-10">
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required
        className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:outline-none focus:border-brand-purple transition-all peer font-medium text-brand-dark"
        placeholder=" "
      />
      <label className={`absolute left-0 top-4 text-brand-gray/60 transition-all pointer-events-none peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-purple font-medium ${formData[name] ? "-top-4 text-xs text-brand-purple" : "text-lg"}`}>
        {label}
      </label>
    </div>
  );

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
          <InputField label="Individual Name" name="name" />
          <InputField label="Brand/Business" name="businessName" />
          <InputField label="Digital Post (Email)" name="email" type="email" />
          <InputField label="Direct Line" name="phone" type="tel" />
        </div>

        <div className="relative mb-14">
          <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-brand-purple mb-6">
            Consultation Velocity
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <label 
                key={s} 
                className={`flex items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all text-xs font-bold uppercase tracking-wider ${
                  formData.service === s ? "border-brand-purple bg-brand-purple/5 text-brand-purple" : "border-gray-50 bg-white text-brand-gray/40 hover:border-gray-200"
                }`}
              >
                <input 
                  type="radio" 
                  name="service" 
                  value={s} 
                  checked={formData.service === s}
                  onChange={handleChange}
                  className="sr-only"
                />
                {s.split(' ')[0]}
              </label>
            ))}
          </div>
        </div>

        <div className="relative group mb-14">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:outline-none focus:border-brand-purple transition-all peer resize-none font-medium text-brand-dark"
            placeholder=" "
          />
          <label className={`absolute left-0 top-4 text-brand-gray/60 transition-all pointer-events-none peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-purple font-medium ${formData.message ? "-top-4 text-xs text-brand-purple" : "text-lg"}`}>
            Brief Your Vision
          </label>
        </div>

        <div className="pt-4">
          <MagneticHelper strength={0.3}>
            <button 
              type="submit" 
              className={`px-12 py-6 rounded-2xl font-display font-black text-xl transition-all shadow-2xl ${
                isSubmitted ? "bg-brand-teal text-white" : "btn-gradient shadow-glow-purple"
              }`}
            >
              {isSubmitted ? "Project Queued" : "Initialize Success"}
            </button>
          </MagneticHelper>
        </div>
      </form>
    </div>
  );
}
