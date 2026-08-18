import React, { useState } from 'react';

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "Is Root Canal Treatment painful at your clinic?", a: "Not at all. We use advanced localized digital anesthesia and computerized rotary systems that make the entire procedure completely painless and swift." },
    { q: "Do you accept digital payments and health insurance?", a: "Yes, we accept all local UPI options (GPay, PhonePe, Paytm), Credit/Debit cards, and offer easy EMI billing layouts for major dental procedures." },
    { q: "How can I book an urgent appointment?", a: "Simply tap our direct 'Book via WhatsApp' button. Our front desk coordinator will instantly assign you the next available priority slot." }
  ];

  return (
    <section id="faqs" className="py-20 max-w-4xl mx-auto px-4">
      <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
        <p className="text-slate-500 text-sm">Clear, basic transparent breakdowns regarding regular dental maintenance plans.</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all">
            <button 
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-sky-600 text-sm md:text-base focus:outline-none"
            >
              <span>{faq.q}</span>
              <span className="text-xl text-sky-600 ml-4">{activeFaq === idx ? '−' : '+'}</span>
            </button>
            {activeFaq === idx && (
              <div className="p-5 pt-0 text-xs md:text-sm text-slate-500 border-t border-slate-50 bg-slate-50/50 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
