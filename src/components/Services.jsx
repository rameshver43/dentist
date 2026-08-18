import React, { useState } from 'react';

export default function Services({ whatsappLink }) {
  const [selectedService, setSelectedService] = useState(2);

  const services = [
    { 
      title: "Root Canal Treatment (RCT)", 
      desc: "Painless, modern single-sitting root canal procedures using computer-controlled rotary technology.", 
      icon: "🦷",
      price: "₹2,499 onwards",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
      features: ["Pain-free procedure", "Digital diagnosis", "Long-lasting relief"]
    },
    { 
      title: "Advanced Dental Implants", 
      desc: "Permanent, lifetime-warranty tooth replacements to completely restore your natural chewing and smile structure.", 
      icon: "🔩",
      price: "₹15,000 onwards",
      image: "https://theimplantcentre.in/wp-content/uploads/2023/11/implant-crowns.jpeg",
      features: ["Titanium implants", "Natural look", "Strong bite support"]
    },
    { 
      title: "Teeth Whitening & Scaling", 
      desc: "Advanced laser scaling and polishing to remove tough stains, plaque, and calculus safely.", 
      icon: "✨",
      price: "₹1000 onwards",
      image: "./scaling.jpg",
      features: ["Stain removal", "Gum-safe cleaning", "Brighter smile in one visit"]
    },
    { 
      title: "Invisible Aligners / Braces", 
      desc: "Get beautifully aligned teeth using high-grade transparent clear aligners without ugly metallic wires.", 
      icon: "😬",
      price: "Custom Pricing",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
      features: ["Clear aligners", "Discreet treatment", "Comfortable fit"]
    },
  ];

  const activeService = services[selectedService] || services[0];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto px-4">
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16 space-y-3">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Our Advanced Treatments</h2>
        <div className="h-1 w-16 bg-sky-600 mx-auto rounded-full"></div>
        <p className="text-slate-500 text-sm md:text-base">We combine modern premium diagnostics with painless methodologies to heal your smile seamlessly.</p>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 items-start">
        <div className="lg:col-span-4 space-y-3 order-2 lg:order-1">
          {services.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedService(idx)}
              className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all flex items-center space-x-3 sm:space-x-4 ${selectedService === idx ? 'bg-sky-600 border-sky-600 text-white shadow-xl shadow-sky-100' : 'bg-white border-slate-100 hover:border-slate-300 text-slate-700'}`}
            >
              <span className="text-2xl bg-white/10 p-2 rounded-lg">{s.icon}</span>
              <div className="min-w-0">
                <h4 className="font-bold text-sm md:text-base truncate">{s.title}</h4>
                <p className={`text-xs ${selectedService === idx ? 'text-sky-100' : 'text-slate-400'}`}>{s.price}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-4 sm:p-6 shadow-xl grid gap-5 md:grid-cols-2 md:gap-6 items-center order-1 lg:order-2">
          <img 
            src={activeService.image} 
            alt={activeService.title} 
            className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-inner"
          />
          <div className="space-y-4">
            <span className="text-3xl bg-sky-50 w-12 h-12 flex items-center justify-center rounded-xl">{activeService.icon}</span>
            <h3 className="text-xl font-extrabold text-slate-900">{activeService.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{activeService.desc}</p>

            <ul className="space-y-2 text-sm text-slate-600">
              {activeService.features.map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                <span>Inquire for this treatment</span> <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
