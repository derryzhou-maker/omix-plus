/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Zap, 
  ExternalLink,
  ChevronDown,
  X,
  Menu,
  Droplets,
  Thermometer,
  Layers,
  Settings,
  Scale,
  Maximize2,
  Minimize2,
  Mail,
  Instagram,
  Linkedin,
  MessageCircle
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img 
            src="/activo_logo.png" 
            alt="Activo Technology Logo" 
            className="h-10 object-contain w-auto"
            width={120}
            height={40}
            referrerPolicy="no-referrer"
          />
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#features" className={isScrolled ? "text-gray-600 hover:text-brand-orange" : "text-white/80 hover:text-white"}>Features</a>
            <a href="#video" className={isScrolled ? "text-gray-600 hover:text-brand-orange" : "text-white/80 hover:text-white"}>Demo</a>
            <a href="#comparison" className={isScrolled ? "text-gray-600 hover:text-brand-orange" : "text-white/80 hover:text-white"}>Comparison</a>
            <a href="#faq" className={isScrolled ? "text-gray-600 hover:text-brand-orange" : "text-white/80 hover:text-white"}>FAQ</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img 
            src="/difluid_logo.png" 
            alt="DiFluid Logo" 
            className={cn("h-6 object-contain hidden sm:block w-auto", isScrolled ? "brightness-0" : "invert")}
            width={80}
            height={24}
            referrerPolicy="no-referrer"
          />
          <a 
            href="https://wa.me/8613409160140" 
            className="btn-primary py-2 px-6 text-sm"
          >
            Chat with Expert
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-height-screen dark-section overflow-hidden pt-32 pb-20 px-6">
      <div className="hero-gradient absolute inset-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-brand-orange text-xs font-bold uppercase tracking-wider mb-6">
            Trusted by Specialty Roasters
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-balance">
            Master Every Roast with Scientific Precision
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            See roast consistency, moisture, and density — all in one device. 
            The professional standard for modern coffee roasting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/larry-chow" className="btn-primary flex items-center justify-center gap-2">
              Book a Free Live Demo <ArrowRight size={18} />
            </a>
            <a href="https://activo-tech.com/contact-us-for-an-exclusive-offer/" className="btn-secondary flex items-center justify-center gap-2">
              Get Your Custom Quote
            </a>
          </div>
          
          <p className="mt-8 text-sm text-gray-500 font-medium italic">
            "Bringing lab-level precision to every roaster." — SCA
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-brand-orange/20 blur-[100px] rounded-full pointer-events-none" />
          <img 
            src="/omix_device.png" 
            alt="Omix Plus Device Internal" 
            className="w-full max-w-2xl mx-auto drop-shadow-2xl relative z-10 h-auto"
            width={640}
            height={640}
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section id="video" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">See How It Works in Real Time</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Watch how coffee professionals analyze roast consistency and detect issues instantly with the Omix Plus.
        </p>
        
        <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl relative group bg-black">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/-NqwXnXbJJw" 
            title="Omix Plus Demo"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

const CoreValues = () => (
  <section id="features" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">Why Professionals Choose Omix Plus</h2>
        <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Lab-Grade Precision",
            desc: "Bringing lab-level precision to every roaster with high-resolution NIR sensors and AI analysis.",
            icon: ShieldCheck,
            label: "SCA Standards"
          },
          {
            title: "No More Guesswork",
            desc: "Consistency is no longer guesswork — it’s measurable. Precise moisture and density readings in seconds.",
            icon: Cpu,
            label: "Predictive Roasting"
          },
          {
            title: "Total Quality Control",
            desc: "Detect roast defects instantly and optimize every batch. Maintain your brand's unique flavor profile.",
            icon: Settings,
            label: "Yield Optimization"
          }
        ].map((val, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
              <val.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{val.desc}</p>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{val.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const UseCases = () => (
  <section className="py-24 px-6 bg-[#0a0a0a] text-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">Built for Every Stage of Coffee Production</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Roasters", desc: "Control roast consistency across every batch with real-time feedback.", icon: Zap },
          { title: "Green Coffee Buyers", desc: "Evaluate bean quality with objective moisture and density data.", icon: Droplets },
          { title: "Coffee Labs", desc: "Standardize analysis and research with professional-grade sensors.", icon: Layers },
          { title: "Coffee Brands", desc: "Maintain global flavor consistency across multiple roasting locations.", icon: ShieldCheck }
        ].map((use, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <use.icon className="text-brand-orange mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-3">{use.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{use.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ComparisonTable = () => {
  const features = [
    { name: "Roast Color Measurement", omix: "Yes (high precision)", traditional: "Yes" },
    { name: "Color Distribution (Histogram)", omix: "YES - Visual roast uniformity", traditional: "No" },
    { name: "Uneven Roast Detection", omix: "YES - AI / imaging-based", traditional: "No" },
    { name: "Near-Infrared Imaging (NIR)", omix: "Yes", traditional: "No" },
    { name: "Moisture Content", omix: "Yes", traditional: "Requires separate device" },
    { name: "Water Activity (Aw)", omix: "Yes", traditional: "Requires lab equipment" },
    { name: "Bean Density", omix: "Yes", traditional: "Manual / separate tool" },
    { name: "Portability", omix: "Compact, all-in-one", traditional: "Multiple bulky tools" },
    { name: "Ease of Use", omix: "App-based, visual insights", traditional: "Technical / fragmented" },
  ];

  return (
    <section id="comparison" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-balance">Omix Plus vs. Fragmented Traditional Tools</h2>
        <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-xl">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-6 text-sm font-extrabold text-black uppercase tracking-wider">Feature</th>
                <th className="p-6 text-sm font-extrabold text-black uppercase tracking-wider bg-gray-100/50">Omix Plus</th>
                <th className="p-6 text-sm font-extrabold text-black uppercase tracking-wider">Traditional Tools</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-t border-gray-50 hover:bg-gray-50/30 transition-colors">
                  <td className="p-6 font-medium text-gray-700">{f.name}</td>
                  <td className="p-6 bg-orange-50/20">
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <CheckCircle2 size={16} /> {f.omix}
                    </div>
                  </td>
                  <td className="p-6 text-gray-500 text-sm">
                    {f.traditional.includes("No") || f.traditional.includes("Requires") || f.traditional.includes("Multiple") || f.traditional.includes("Technical") ? (
                      <span className="text-red-500 flex items-center gap-2 font-medium"><X size={16} /> {f.traditional}</span>
                    ) : f.traditional}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const DataShowcase = () => (
  <section className="py-24 px-6 bg-gray-900 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-start gap-16">
      <div className="relative pt-12 md:sticky md:top-32">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-orange/20 blur-[80px] rounded-full" />
        <img 
          src="/app_interface.png" 
          alt="App Interface" 
          className="relative z-10 w-full max-w-md mx-auto drop-shadow-[0_20px_50px_rgba(242,125,38,0.3)] h-auto"
          width={448}
          height={500}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="pt-4">
        <h2 className="text-4xl font-bold mb-4">Lab-Level Coffee Analysis, Now on Your Desk</h2>
        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
          Omix Plus captures key coffee parameters in seconds—giving you a complete, data-driven understanding of every roast. 
          Analyze moisture, density, roast level, and water activity in one intuitive dashboard.
        </p>
        <div className="space-y-3 mb-12">
          {[
            "Instant sync with your mobile device",
            "History tracking for every roast batch",
            "AI-powered roast uniformity analysis",
            "Exportable reports for quality compliance"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                <CheckCircle2 size={14} />
              </div>
              <span className="text-gray-300 font-medium">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 group">
          <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl relative bg-black border border-white/10 group-hover:border-brand-orange/50 transition-colors duration-500">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/5n7StiWs03Q" 
              title="Everything You Need To Know About DiFluid Omix"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ROISection = () => (
  <section className="py-24 px-6 border-b border-gray-100">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Why It Pays for Itself</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Invest in quality, save on waste. Omix Plus is an asset that pays dividends through improved consistency and efficiency.
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-brand-green">
                <Scale size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Reduce Waste</h4>
                <p className="text-gray-500">"Save up to 15% of green beans by catching roast defects early."*</p>
                <p className="text-[10px] text-gray-400 mt-1 uppercase">*Based on internal testing/industry benchmarks</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Maximum Efficiency</h4>
                <p className="text-gray-500">"Cut analysis time from 10 minutes to just 60 seconds."</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-brand-orange">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Rock-Solid Consistency</h4>
                <p className="text-gray-500">Ensure the same flavor profile across 100+ batches.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6">
            <img 
              src="/difluid_logo.png" 
              alt="DiFluid Logo" 
              className="h-6 opacity-30 brightness-0 w-auto"
              width={80}
              height={24}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="text-2xl font-bold mb-8">Official Authorization</h3>
          <p className="text-gray-600 mb-8 italic">
            "Activo Technology Limited is the authorized distributor of Shenzhen Digitizing Fluid Technology Co., Ltd. (DiFluid), 
            ensuring you get genuine products with factory-backed support."
          </p>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
            <img 
              src="/auth_letter.png" 
              alt="DiFluid Official Authorization Letter" 
              className="w-full h-auto"
              width={460}
              height={600}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <ShieldCheck className="text-brand-green" /> Authenticity Guaranteed
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is this suitable for small roasters?",
      a: "Yes. Omix Plus is designed for both artisanal small roasters and large-scale commercial operations. Its intuitive interface makes it accessible for anyone looking for data-driven roasting."
    },
    {
      q: "Do I need technical training to use it?",
      a: "The system is highly intuitive. Most users are able to complete their first accurate analysis within minutes. We also provide comprehensive video guides and a free live demo."
    },
    {
      q: "How accurate is the measurement?",
      a: "Omix Plus provides lab-level measurement precision using advanced NIR (Near-Infrared) sensors, calibrated to industry standards set by coffee labs globally."
    },
    {
      q: "Can it replace traditional cupping?",
      a: "It doesn't replace the sensory experience of cupping, but it enhances it by providing objective data to support and validate your sensory evaluations."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between font-bold hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                <ChevronDown className={cn("transition-transform duration-300", openIndex === i ? "rotate-180" : "")} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="relative rounded-[3rem] overflow-hidden bg-[#050505] p-12 md:p-24 text-center">
        <div className="absolute inset-0 bg-brand-orange/10 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Elevate Your Roasting?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Book a 15-minute free live demo to see how Omix Plus fits into your professional workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://calendly.com/larry-chow" className="btn-primary px-12 py-4 text-lg">
              Book a Free Live Demo
            </a>
            <a href="https://activo-tech.com/contact-us-for-an-exclusive-offer/" className="btn-secondary px-12 py-4 text-lg">
              Get Your Custom Quote
            </a>
          </div>
          <div className="mt-16 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <img src="/activo_logo.png" alt="Activo" className="h-8 object-contain invert hue-rotate-180 w-auto" width={96} height={32} loading="lazy" referrerPolicy="no-referrer" />
          <img src="/difluid_logo.png" alt="DiFluid" className="h-8 object-contain invert w-auto" width={96} height={32} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="py-16 px-6 border-t border-gray-100 bg-gray-50/50">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="flex flex-col items-center md:items-start gap-6">
          <img 
            src="/activo_logo.png" 
            alt="Activo Logo" 
            className="h-10 opacity-70 grayscale w-auto"
            width={120}
            height={40}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <p className="text-gray-500 max-w-sm text-center md:text-left">
            Activo Technology is the authorized distributor of DiFluid, 
            providing lab-level precision tools for the specialty coffee industry.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/8613409160140" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-orange hover:border-brand-orange transition-all" title="WhatsApp"><MessageCircle size={18} /></a>
            <a href="https://www.instagram.com/larry570430/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-orange hover:border-brand-orange transition-all" title="Instagram"><Instagram size={18} /></a>
            <a href="https://www.linkedin.com/in/nicole-zhang-43120a112/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-orange hover:border-brand-orange transition-all" title="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Solutions</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-600">
              <a href="https://activo-tech.com" target="_blank" className="hover:text-brand-orange transition-colors">Official Website</a>
              <a href="https://activo-tech.com/contact-us-for-an-exclusive-offer/" className="hover:text-brand-orange transition-colors">Exclusive Offer</a>
              <a href="https://calendly.com/larry-chow" className="hover:text-brand-orange transition-colors">Book a Demo</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Support</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-600">
              <a href="https://activo-tech.com/contact-us-for-an-exclusive-offer/" className="hover:text-brand-orange transition-colors">Contact Us</a>
              <a href="https://activo-tech.com/wp-content/uploads/2025/11/Privacy-Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
              <a href="https://activo-tech.com/wp-content/uploads/2025/11/Terms-of-Service.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">© 2026 Activo Technology Limited. All Rights Reserved.</p>
        <p className="text-xs text-gray-400">DiFluid Omix Plus - Authorized Distribution Site</p>
      </div>
    </div>
  </footer>
);

const StickyCTA = () => (
  <div className="fixed bottom-8 right-8 z-[100] hidden sm:block">
    <motion.a 
      href="https://activo-tech.com/contact-us-for-an-exclusive-offer/"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 bg-brand-orange text-white py-4 px-8 rounded-full shadow-[0_10px_30px_rgba(242,125,38,0.4)] font-bold text-sm uppercase tracking-wider"
    >
      <ArrowRight size={16} /> Get Pricing
    </motion.a>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <CoreValues />
        <Trust />
        <UseCases />
        <ComparisonTable />
        <DataShowcase />
        <ROISection />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

// Relocating Trust section here for organization in the file
const Trust = () => (
  <section className="py-12 border-y border-gray-100 bg-gray-50/30 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em] mb-2">Authorized Distributor</span>
          <img src="/activo_logo.png" alt="Activo" className="h-8 object-contain w-auto" width={96} height={32} loading="lazy" referrerPolicy="no-referrer" />
        </div>
        <div className="hidden md:block h-8 w-px bg-gray-200" />
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em] mb-2">Manufacturer</span>
          <img src="/difluid_logo.png" alt="DiFluid" className="h-8 object-contain w-auto" width={96} height={32} loading="lazy" referrerPolicy="no-referrer" />
        </div>
        <div className="hidden md:block h-8 w-px bg-gray-200" />
        <p className="text-gray-500 font-medium italic text-center max-w-sm">
          "The new standard for precision in specialty coffee roasting."
        </p>
      </div>
    </div>
  </section>
);

