"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "SEO",
    message: ""
  });

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
    console.log("Form Submitted:", formData);
    // Add submission logic here (e.g., Supabase, EmailJS, etc.)
  };

  const InputField = ({ label, name, type = "text" }) => (
    <div className="relative group mb-8">
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required
        className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brand-purple transition-all peer"
        placeholder=" "
      />
      <label className={`absolute left-0 top-3 text-brand-gray transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-purple ${formData[name] ? "-top-4 text-xs text-brand-purple" : "text-base"}`}>
        {label}
      </label>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
        <InputField label="Name" name="name" />
        <InputField label="Business Name" name="businessName" />
        <InputField label="Email Address" name="email" type="email" />
        <InputField label="Phone Number" name="phone" type="tel" />
      </div>

      <div className="relative mb-12">
        <label className="block text-xs font-bold uppercase tracking-widest text-brand-purple mb-4">
          Service Interested In
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-bg-soft border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-purple/20 outline-none appearance-none font-semibold text-brand-dark"
        >
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="relative group mb-12">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brand-purple transition-all peer resize-none"
          placeholder=" "
        />
        <label className={`absolute left-0 top-3 text-brand-gray transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-purple ${formData.message ? "-top-4 text-xs text-brand-purple" : "text-base"}`}>
          Your Message
        </label>
      </div>

      <button type="submit" className="btn-gradient w-full py-5 text-xl">
        Send Message
      </button>
    </form>
  );
}
