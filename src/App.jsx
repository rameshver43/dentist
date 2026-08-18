import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Faq from './components/Faq';
import Contact from './components/Contact';

function App() {
  const whatsappNumber = "+91 7351355770";
  const clinicName = "Dr. Ankur's Dental Clinic & Implant Centre";
  const locationText = "Meerut";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello ${clinicName}, I saw your website and want to book a dental consultation.`)}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-sky-100 selection:text-sky-800">
      
      {/* Dynamic Shell Header Layout */}
      <Header clinicName={clinicName} whatsappLink={whatsappLink} />

      {/* Main Conversion Engine Blocks */}
      <main>
        <Hero locationText={locationText} whatsappLink={whatsappLink} />
        
        <Services whatsappLink={whatsappLink} />
        
        {/* Core Profile Narrative Component */}
        <section id="about" className="bg-white py-12 sm:py-16 lg:py-20 border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-12 md:gap-12 items-center">
            <div className="md:col-span-5 relative group order-2 md:order-1">
              <div className="absolute inset-0 bg-sky-600 rounded-3xl transform rotate-3 scale-95 opacity-10 group-hover:rotate-6 transition-transform"></div>
              <img 
                src="/ankur.png"
                alt="Dr. Ankur" 
                className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-3xl shadow-xl relative z-10"
              />
            </div>
            <div className="md:col-span-7 space-y-5 text-center md:text-left order-1 md:order-2">
              <span className="bg-sky-50 border border-sky-200 text-sky-700 px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider">Clinic Principal</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Meet Dr. Ankur (BDS)</h2>
              <p className="text-sky-600 font-bold text-xs sm:text-sm tracking-wide -mt-2">Senior Consultant Dental Surgeon</p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
                With over 3.5+ years of active medical experience inside leading healthcare networks, Dr. Ankur ensures that every patient receives highly sanitized, painless, and professional family dental care right here in Meerut.
              </p>
            </div>
          </div>
        </section>

        <Faq />
        
        <Contact />
      </main>

      {/* Corporate Shell Footer */}
      <footer className="bg-slate-950 text-slate-500 text-center py-8 text-xs border-t border-slate-900/60">
        <p>© {new Date().getFullYear()} {clinicName}. All Rights Reserved.</p>
        <p className="mt-1 text-slate-600 font-medium">Proudly Engineered & Designed Locally in Meerut by Your Digital Partner.</p>
      </footer>

    </div>
  );
}

export default App;
