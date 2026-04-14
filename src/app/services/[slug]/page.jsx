"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticHelper from "@/components/MagneticHelper";
import { 
  Search, 
  Target, 
  Share2, 
  Mail, 
  FileText, 
  Layers, 
  ArrowLeft,
  CheckCircle2,
  Zap,
  TrendingUp,
  Cpu,
  MousePointer2,
  BarChart4,
  Layout,
  Globe
} from "lucide-react";
import Link from "next/link";

const serviceData = {
  "seo": {
    title: "Search Intelligence",
    subtitle: "Dominating the Digital Landscape through Organic Authority",
    icon: Search,
    color: "purple",
    overview: "In an era where attention is the ultimate currency, being discovered at the exact moment of intent is everything. Our Search Intelligence service isn't just about keywords—it's about architecting an organic ecosystem that positions your brand as the undeniable authority in your industry.",
    challenge: "The digital space is saturated. Search algorithms evolve weekly, and standard SEO tactics are no longer enough to bypass the noise. Brands lack the technical hygiene and strategic content depth required to stay ahead of the competition.",
    solution: "We leverage predictive analytics and deep technical audits to build a resilient SEO foundation. By blending technical precision with semantic content strategies, we ensure your brand doesn't just rank—it dominates the search landscape.",
    process: [
      { name: "Deep Audit", desc: "Exposing technical friction and indexing barriers within your current digital infrastructure." },
      { name: "Keyword Architecture", desc: "Mapping semantic search patterns to user intent at every stage of the funnel." },
      { name: "Content engineering", desc: "Creating high-authority, long-form narratives that satisfy both humans and crawlers." },
      { name: "Authority Building", desc: "Strategic digital PR and backlink acquisition from high-relevance industry pillars." },
      { name: "Performance Intelligence", desc: "Real-time monitoring and adaptive optimizations to maintain ranking velocity." }
    ],
    tech: ["Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "SurferSEO"],
    metrics: ["Organic Acquisition Rate", "Keyword Dominance Share", "Domain Authority Growth", "Technical Hygiene Score"]
  },
  "ppc": {
    title: "Precision Ads",
    subtitle: "High-Velocity Paid Architectures for Scalable ROI",
    icon: Target,
    color: "pink",
    overview: "Standard advertising is an expense; precision-engineered advertising is a predictable capital engine. Our PPC service focuses on high-velocity campaigns that convert every micro-moment of intent into measurable business growth.",
    challenge: "Ad spend waste is at an all-time high. Misaligned targeting and poor conversion paths lead to high CPA and stagnant growth, leaving brands trailing behind more efficient competitors.",
    solution: "We utilize multi-platform bidding algorithms and high-converting creative sculptures to ensure your budget is deployed with surgical accuracy. We optimize for profit, not just clicks.",
    process: [
      { name: "Platform Intelligence", desc: "Selecting the optimal mix of Google, Meta, and LinkedIn based on audience saturation." },
      { name: "Predictive Bidding", desc: "Utilizing AI-driven bidding strategies to capture high-value signals at lower costs." },
      { name: "Creative Sculpting", desc: "Designing high-impact visuals and direct-response copy that compels action." },
      { name: "Funnel Alchemy", desc: "Optimizing landing page architectures for maximum friction-less conversion." },
      { name: "Attribution Modeling", desc: "Tracking the true path to conversion across every touchpoint and device." }
    ],
    tech: ["Google Ads Manager", "Meta Business Suite", "LinkedIn Campaign Manager", "Hotjar", "Optimizely"],
    metrics: ["ROAS (Return on Ad Spend)", "Conversion Velocity", "Cost Per Acquisition (CPA)", "Impression Share Dominance"]
  },
  "social-media": {
    title: "Social Narratives",
    subtitle: "Building Cultural Resonance and Community Soul",
    icon: Share2,
    color: "teal",
    overview: "Social media is no longer a broadcast channel—it's a community ecosystem. We craft resonant digital stories that foster deep brand loyalty and turn passive followers into active brand advocates.",
    challenge: "Traditional social posting feels robotic and disconnected. Brands struggle to capture attention in the scroll-heavy landscape, leading to low engagement and zero community growth.",
    solution: "We implement 'Kinetic Storytelling'—a blend of cinematic creative direction and high-frequency engagement strategies that make your brand a central part of the cultural conversation.",
    process: [
      { name: "Audit & Persona", desc: "Defining your brand's unique social DNA and mapping it to audience demographics." },
      { name: "Kinetic Content", desc: "Creating vertical-video first content that stops the scroll and starts the conversation." },
      { name: "Community Management", desc: "Humanizing your brand through real-time engagement and reactive storytelling." },
      { name: "Influencer Synergy", desc: "Partnering with cultural icons that align with your brand's core values." },
      { name: "Social Intel", desc: "Analyzing sentiment and engagement metrics to refine the narrative cadence." }
    ],
    tech: ["Sprout Social", "Canva Pro", "Adobe Premiere", "CapCut", "Later"],
    metrics: ["Engagement Velocity", "Community Sentiment Score", "Viral Reach Expansion", "Social-to-Direct Traffic"]
  },
  "email-marketing": {
    title: "Direct Conversion",
    subtitle: "Lifecycle Automation and Hyper-Personalized Communication",
    icon: Mail,
    color: "yellow",
    overview: "The inbox is the most personal digital space. Our Direct Conversion service leverages high-end automation and psychological copywriting to nurture leads into loyal, lifelong customers.",
    challenge: "Generic email blasts lead to high unsubscribe rates and low open rates. Brands lack the technical infrastructure to deliver the right message to the right person at the right time.",
    solution: "We architect hyper-segmented lifecycle flows that react to user behavior in real-time, ensuring every email feels like a 1-to-1 conversation rather than a broadcast.",
    process: [
      { name: "List Sanitation", desc: "Optimizing your deliverability by cleaning lists and hardening technical protocols." },
      { name: "Segmentation Logic", desc: "Categorizing users based on behavior, purchase history, and engagement levels." },
      { name: "Automation Flows", desc: "Building complex welcome, abandonment, and win-back sequences that run 24/7." },
      { name: "Psychological Copy", desc: "Drafting subject lines and copy that bypass the 'Promotion' folder and incite action." },
      { name: "A/B Scaling", desc: "Continuous testing of variables to relentlessly improve click-through and open rates." }
    ],
    tech: ["Klaviyo", "Mailchimp", "SendGrid", "Litmus", "Omnisend"],
    metrics: ["Revenue Per Recipient", "Open Rate Dominance", "Automation Contribution", "List Retention Rate"]
  },
  "content-marketing": {
    title: "Creative Content",
    subtitle: "Authority Building through Strategic Storytelling",
    icon: FileText,
    color: "purple",
    overview: "Content is the bridge between a stranger and a customer. We build that bridge through value-driven storytelling and immersive cinematic media that establishes your brand as a thought leader.",
    challenge: "Thin, uninspired content fails to capture interest or build trust. Brands often produce content for the sake of production, resulting in zero measurable business impact.",
    solution: "We develop a 'Content Pillar' strategy—creating high-value assets that can be atomized across every digital channel, ensuring maximum reach and consistent authority.",
    process: [
      { name: "Pillar Ideation", desc: "Identifying the core themes that align your brand expertise with user needs." },
      { name: "Cinematic Production", desc: "Crafting high-end video, long-form articles, and whitepapers that command respect." },
      { name: "Atomization", desc: "Breaking down large assets into 50+ micro-content pieces for diverse platforms." },
      { name: "Distribution Strategy", desc: "Deploying content via paid and organic channels to ensure maximum visibility." },
      { name: "Conversion Mapping", desc: "Ensuring every piece of content leads the user closer to the final conversion intent." }
    ],
    tech: ["Adobe Creative Cloud", "Copy.ai", "Grammarly Business", "WordPress CMS", "BuzzSumo"],
    metrics: ["Time on Page Growth", "Resource Download Rate", "Assisted Conversion Value", "Brand Authority Index"]
  },
  "branding": {
    title: "360° Branding",
    subtitle: "Identity Alchemy and Visual DNA Construction",
    icon: Layers,
    color: "pink",
    overview: "A brand is not a logo; it's a promise. Our Branding service focuses on Identity Alchemy—the process of distilling your brand's core soul into a visual and strategic DNA that is unforgettable.",
    challenge: "Weak, inconsistent branding leads to market confusion and low perceived value. Brands fail to differentiate themselves in a crowded landscape, becoming just another commodity.",
    solution: "We architect a comprehensive Brand Identity System—including visual language, brand voice, and strategic positioning—that establishes immediate premium authority.",
    process: [
      { name: "Soul Discovery", desc: "Unearthing the core purpose and values that make your brand irreplaceable." },
      { name: "Visual Alchemy", desc: "Designing a high-end visual system (Logo, Color, Type) that screams excellence." },
      { name: "Voice & Tone", desc: "Articulating a verbal identity that resonates with your target demographic's soul." },
      { name: "Cultural Positioning", desc: "Defining where your brand sits in the competitive landscape and how it wins." },
      { name: "Brand Guidelines", desc: "Hardening your identity with strict rules to ensure 100% consistency everywhere." }
    ],
    tech: ["Figma", "Adobe Illustrator", "Typefoundries", "Moodboard Tooling", "Procreate"],
    metrics: ["Brand Recognition Lift", "Perceived Value Index", "Brand Consistency Score", "Customer Loyalty Rate"]
  }
};

export default function IndividualServicePage() {
  const params = useParams();
  const slug = params.slug;
  const data = serviceData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-display font-black">Service Not Found</h1>
          <Link href="/services" className="btn-gradient inline-block">Return to Portfolio</Link>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="flex flex-col mesh-bg noise-overlay bg-white">
      {/* 1. Dynamic Hero */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.nav 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-3 text-xs font-black uppercase tracking-widest text-brand-gray/60 mb-10"
          >
            <Link href="/" className="hover:text-brand-purple transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-purple transition-colors">Capabilities</Link>
            <span>/</span>
            <span className="text-brand-purple">{data.title}</span>
          </motion.nav>

          <AnimatedSection>
            <div className={`p-6 rounded-3xl w-20 h-20 flex items-center justify-center text-white shadow-2xl mb-12 ${
              data.color === 'purple' ? 'bg-brand-purple shadow-brand-purple/20' :
              data.color === 'pink' ? 'bg-brand-pink shadow-brand-pink/20' :
              data.color === 'teal' ? 'bg-brand-teal shadow-brand-teal/20' :
              'bg-brand-yellow shadow-brand-yellow/20'
            }`}>
              <Icon size={40} />
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-black mb-8 leading-[0.85] text-brand-dark">
              {data.title.split(' ')[0]} <br />
              <span className="font-serif italic text-brand-purple font-normal">{data.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-brand-dark text-3xl md:text-5xl font-display font-black max-w-4xl leading-tight">
              {data.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Overview & Objective */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-12">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="glass-card p-12 md:p-20 relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/5 blur-[120px] rounded-full" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                   <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-purple">Capability Overview</h4>
                      <p className="text-2xl text-brand-gray font-medium leading-relaxed">
                        {data.overview}
                      </p>
                   </div>
                   <div className="space-y-12">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-pink">The Challenge</label>
                        <p className="text-xl text-brand-gray/80 font-medium leading-relaxed italic border-l-4 border-brand-review/10 pl-8">{data.challenge}</p>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-teal">The Solution</label>
                        <p className="text-xl text-brand-dark font-black leading-relaxed">{data.solution}</p>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Methodology Deep-Dive */}
      <section className="section-padding px-6 bg-bg-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
             <div className="space-y-6">
                <h2 className="text-5xl md:text-8xl font-display font-black leading-none">
                   Our <span className="font-serif italic text-brand-purple font-normal">Symphony</span>
                </h2>
                <p className="text-xl text-brand-gray/60 max-w-xl font-medium">Standard execution is common. We deliver precision impact melalui discrete 5-phase evolution.</p>
             </div>
             <div className="hidden lg:block text-[200px] font-display font-black text-brand-purple/5 leading-none select-none">ARCHITECTURE</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
             {data.process.map((step, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                   <div className="glass-card p-10 h-full flex flex-col justify-between group hover:-translate-y-4 transition-transform duration-700">
                      <div>
                        <div className="text-5xl font-display font-black text-brand-purple/10 italic mb-8 group-hover:text-brand-purple/40 transition-colors">0{idx + 1}</div>
                        <h4 className="text-2xl font-display font-black text-brand-dark mb-4">{step.name}</h4>
                        <p className="text-brand-gray font-medium leading-relaxed">{step.desc}</p>
                      </div>
                      <div className="mt-8">
                         <Zap size={24} className="text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                   </div>
                </AnimatedSection>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Tech Stack & Outcomes */}
      <section className="section-padding px-6">
        <div className="max-w-7xl mx-auto space-y-32">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-5 space-y-8">
                 <h3 className="text-5xl font-display font-black text-brand-dark">The Intelligence <br /> <span className="text-brand-pink">Stack</span></h3>
                 <p className="text-xl text-brand-gray font-medium leading-relaxed">
                    We utilize elite technology and proprietary methodologies to hardened your brand's digital presence and ensure 100% scalable growth.
                 </p>
                 <div className="flex flex-wrap gap-4 pt-4">
                    {data.tech.map((t) => (
                       <div key={t} className="px-6 py-3 rounded-full bg-brand-purple/5 text-brand-purple font-black text-xs uppercase tracking-widest border border-brand-purple/10">
                          {t}
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="lg:col-span-7">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {data.metrics.map((m, idx) => (
                       <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-10 rounded-[40px] border border-gray-100 bg-white shadow-2xl flex items-center gap-6 group hover:border-brand-teal/20"
                       >
                          <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all">
                             <CheckCircle2 size={24} />
                          </div>
                          <span className="text-xl font-display font-black text-brand-dark uppercase tracking-tighter leading-tight">{m}</span>
                       </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative bg-brand-dark rounded-[80px] p-12 md:p-32 text-center overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-20 bg-mesh" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
            
            <div className="relative z-10 space-y-12">
              <h2 className="text-5xl md:text-8xl font-display font-black text-white leading-[0.9]">
                Architect Your <br />
                <span className="font-serif italic text-brand-teal font-normal">Success Story</span>
              </h2>
              <p className="text-white/60 text-xl font-medium max-w-xl mx-auto">
                Don't settle for standard results. Let's build a {data.title} strategy that actually scales.
              </p>
              <div className="flex justify-center">
                <MagneticHelper strength={0.3}>
                  <Link href="/contact" className="px-16 py-8 rounded-2xl bg-white text-brand-dark font-display font-black text-2xl hover:bg-brand-teal hover:text-white transition-all shadow-2xl">
                    Secure Consultation
                  </Link>
                </MagneticHelper>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
