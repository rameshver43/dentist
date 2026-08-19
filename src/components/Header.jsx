import React from 'react';

export default function Header({ clinicName, whatsappLink }) {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/dr.ankurtilwadi',
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@oralcarewithdrankur',
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M21.6 7.2a2.94 2.94 0 0 0-2.08-2.08C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.52.42A2.94 2.94 0 0 0 2.4 7.2 30.4 30.4 0 0 0 2 12a30.4 30.4 0 0 0 .4 4.8 2.94 2.94 0 0 0 2.08 2.08c1.62.42 7.52.42 7.52.42s5.9 0 7.52-.42A2.94 2.94 0 0 0 21.6 16.8 30.4 30.4 0 0 0 22 12a30.4 30.4 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/ankur.badshah.16',
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M13.5 22v-8h2.67l.4-3.1h-3.07V7.2c0-.9.25-1.5 1.56-1.5H16.7V2.86c-.28-.04-1.24-.14-2.36-.14-2.34 0-3.94 1.43-3.94 4.05V10.9H8v3.1h2.4v8h3.1Z"/>
        </svg>
      )
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-sky-800 to-sky-700 text-white text-xs md:text-sm py-2.5 px-4 shadow-sm">
        <div className="max-w-6xl mx-auto relative flex items-center justify-center min-h-[32px]">
          <div className="flex items-center justify-center gap-2 text-center">
            <span className="inline-block animate-pulse w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>📍 Serving Meerut with Advanced ISO-Certified Sterilized Dental Care</span>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 md:gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
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
