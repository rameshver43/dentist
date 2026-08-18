import React from 'react';

export default function Header({ clinicName, whatsappLink }) {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-800 to-sky-700 text-white text-xs md:text-sm py-2.5 px-4 text-center font-medium shadow-sm flex items-center justify-center space-x-2">
        <span className="inline-block animate-pulse w-2 h-2 rounded-full bg-emerald-400"></span>
        <span>📍 Serving Meerut with Advanced ISO-Certified Sterilized Dental Care</span>
      </div>

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-md">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 md:py-0 md:h-20 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between md:justify-start gap-3">
            <div className="flex items-center space-x-3 min-w-0">
              <img src="/logo.png" alt="Clinic Logo" className="h-15 w-15 rounded-xl object-cover" />
              <div className="min-w-0">
                <span className="font-extrabold text-base sm:text-xl tracking-tight bg-gradient-to-r from-sky-700 to-sky-900 bg-clip-text text-transparent block truncate">{clinicName}</span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide block uppercase">Premium Family Dentistry</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6 lg:space-x-8 font-semibold text-xs lg:text-sm text-slate-600">
            <a href="#services" className="hover:text-sky-600 transition-colors">Treatments</a>
            <a href="#about" className="hover:text-sky-600 transition-colors">Meet the Doctor</a>
            <a href="#faqs" className="hover:text-sky-600 transition-colors">Patient FAQs</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Find Us</a>
          </nav>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center shadow-lg shadow-emerald-100 transition-all hover:scale-[1.01] active:scale-95">
            <span>Book Appointment</span>
          </a>
        </div>
      </header>
    </>
  );
}
