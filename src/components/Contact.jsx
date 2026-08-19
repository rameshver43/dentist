import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-slate-100 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-12 md:gap-12 items-center">
        <div className="space-y-6 md:col-span-5">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Visit Our Setup
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Walk-ins are welcomed, but booking prior reservations via WhatsApp
            secures zero waiting queue layout line times.
          </p>

          <div className="space-y-5 text-sm">
            <div className="flex items-start space-x-4">
              <span className="text-2xl bg-slate-800 p-2 rounded-xl text-sky-400 shrink-0">
                📍
              </span>
              <div>
                <p className="font-extrabold text-white text-base">
                  Clinic Center Address:
                </p>
                <p className="text-slate-400 mt-0.5">
                  Opposite to primary school, near tanki, village and post,
                  Gagol, Meerut, Uttar Pradesh 245206
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl bg-slate-800 p-2 rounded-xl text-sky-400 shrink-0">
                📞
              </span>
              <div>
                <p className="font-extrabold text-white text-base">
                  Call for Appointment:
                </p>
                <p className="text-slate-400 mt-0.5">+91-7351355770</p>
                <p className="text-slate-400 mt-0.5">+91-7454864132</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl bg-slate-800 p-2 rounded-xl text-sky-400 shrink-0">
                ⏰
              </span>
              <div>
                <p className="font-extrabold text-white text-base">
                  Operational Clinical Timings:
                </p>
                <p className="text-slate-400 mt-0.5">
                  Monday-Sunday: 09:00 AM – 10:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl bg-slate-800 p-2 rounded-xl text-sky-400 shrink-0">
                ✉️
              </span>
              <div>
                <p className="font-extrabold text-white text-base">Email:</p>
                <a
                  href="mailto:a413774@gmail.com"
                  className="text-slate-400 mt-0.5 hover:text-sky-400 transition-colors"
                >
                  a413774@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 h-64 sm:h-72 md:h-80 w-full rounded-3xl overflow-hidden relative border border-slate-800 group shadow-2xl shadow-black/40">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.6265972395177!2d77.69686209999999!3d28.909442199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c63c37a191da1%3A0xe29e71f263eb10a7!2sANKUR%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1787045387523!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            title="Gagaul, Meerut Location Map"
            className="w-full h-full border-0 grayscale invert opacity-75 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
