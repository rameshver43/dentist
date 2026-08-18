import React from 'react';

export default function Hero({ locationText, whatsappLink }) {
  return (
    <section className="relative bg-gradient-to-b from-sky-50 via-white to-slate-50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left lg:col-span-7">
          <div className="inline-flex items-center justify-center lg:justify-start bg-sky-100/70 border border-sky-200 text-sky-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            <span>⭐ Top-Rated Local Clinic in {locationText}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
            Get the Beautiful, Healthy <span className="bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">Smile</span> You Deserve
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Experience world-class, painless clinical treatments right here in Meerut. Your long-term structural dental safety and dynamic comfort are our highest priorities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl shadow-emerald-200/50 flex items-center justify-center space-x-3 transition-all hover:-translate-y-0.5">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.48 4.795 1.48 5.429 0 9.849-4.388 9.852-9.776.002-2.611-1.015-5.064-2.864-6.92C16.524 2.08 14.08 1.06 11.48 1.06 6.05 1.06 1.631 5.45 1.629 10.838c-.001 1.57.416 3.102 1.207 4.453l-.991 3.613 3.701-.97c1.308.714 2.693 1.092 4.101 1.093zm11.467-6.805c-.32-.16-1.89-.933-2.185-1.043-.294-.11-.508-.16-.723.16-.214.32-.83.1.043-1.018 1.15-.19.16-.318.043-.638-.117-.32-.266-.722-.843-.513-1.01-.215-.223-.11-.43-.16-.643-.053-.214-.11-.417-.053-.524.053-.107.107-.16.214-.266.106-.107.16-.214.267-.107.106.053.427.16.8.106.374-.053.64-.214.694-.32.054-.107.054-.214.027-.32-.027-.107-.267-.64-.366-.88-.097-.237-.197-.205-.267-.209-.07-.004-.15-.004-.23-.004-.08 0-.214.03-.326.152-.112.122-.427.417-.427.417s-.315-.356-.508-.553c-.193-.197-.427-.478-.508-.66-.082-.183-.01-.282.07-.363.074-.074.16-.183.242-.275.08-.092.11-.153.16-.255.053-.102.027-.193-.013-.275-.04-.082-.366-.88-.503-1.21-.133-.323-.266-.279-.366-.284-.096-.005-.208-.006-.32-.006-.112 0-.294.04-.447.203-.153.163-.585.57-.585 1.39 0 .82.595 1.614.677 1.724.08.11 1.173 1.79 2.84 2.51.396.172.705.274.946.35.398.127.76.108 1.047.065.32-.047 1.89-.773 2.155-1.483.267-.71.267-1.32.187-1.448-.078-.127-.293-.207-.613-.367z"/></svg>
              <span>Book Instant Consultation</span>
            </a>
            <a href="#services" className="border border-slate-300 hover:border-sky-600 bg-white text-slate-700 hover:text-sky-700 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl flex items-center justify-center transition-colors">
              Explore Treatments
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative w-full">
          <div className="absolute -top-4 -left-4 bg-sky-600 text-white text-[10px] sm:text-xs font-black px-3 sm:px-4 py-1.5 rounded-lg uppercase tracking-widest shadow-md z-10">
            Smile Gallery
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform hover:scale-[1.01] transition-transform">
            <img 
              src="/clinic.png"
              alt="Modern dental clinic setup" 
              className="w-full h-56 sm:h-64 object-cover rounded-2xl"
            />
            <div className="pt-4 px-2 space-y-3">
              <div className="flex items-center justify-center lg:justify-start space-x-1 text-amber-500 font-bold text-sm">
                <span>★★★★★</span> <span className="text-slate-700 font-extrabold ml-1">5.0 / 5.0 Rating</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                  alt="Patient review 1"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                  alt="Patient review 2"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80"
                  alt="Patient review 3"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                />
                <span className="ml-3 text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-full">+180</span>
              </div>

              <p className="text-center lg:text-left text-[10px] sm:text-xs font-medium text-slate-400 tracking-wide uppercase">Trusted by 180+ happy patients in Meerut</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
