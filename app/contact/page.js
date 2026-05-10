'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] py-[72px] px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[#60a5fa] font-bold text-[13px] uppercase tracking-[1.5px]">Get In Touch</span>
          <h1 className="font-[Poppins,sans-serif] text-[3rem] font-extrabold text-white mt-4 mb-5">Contact Us</h1>
          <p className="text-[#cbd5e1] text-[17px] leading-[1.8]">We&aposre here to help. Reach out to our team anytime.</p>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-[#f8fafc]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-[1fr_1.4fr] gap-[60px]">
          <div>
            <h2 className="font-[Poppins,sans-serif] text-[1.8rem] font-extrabold text-[#0f172a] mb-7">Get in Touch</h2>
            {[
              { icon: '📍', title: 'UK Office', info: 'Acelocale Ltd., 124 City Road, London, England, EC1V 2NX' },
              { icon: '📍', title: 'Pakistan Office', info: '602 A, Meher Apartments, H-13 Islamabad' },
              { icon: '📧', title: 'Email', info: 'support@zenedify.com' },
              { icon: '💬', title: 'WhatsApp', info: 'Available 24/7 for instant support' },
            ].map(item => (
              <div key={item.title} className="flex gap-4 mb-7 items-start">
                <div className="w-11 h-11 bg-[#dbeafe] rounded-xl flex items-center justify-center text-[20px] flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[15px] text-[#0f172a] mb-1">{item.title}</h3>
                  <p className="text-[#64748b] text-[14px] leading-[1.6]">{item.info}</p>
                </div>
              </div>
            ))}
            <div>
              <h3 className="font-bold text-[15px] text-[#0f172a] mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map(s => (
                  <a key={s} href="#" className="w-10 h-10 bg-[#dbeafe] rounded-[10px] flex items-center justify-center text-[#2563eb] font-bold text-[11px] no-underline">{s[0]}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-10 shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-[#e2e8f0]">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-[56px] mb-4">✅</div>
                <h3 className="font-[Poppins,sans-serif] text-[1.6rem] font-extrabold text-[#0f172a] mb-3">Message Sent!</h3>
                <p className="text-[#64748b]">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-[Poppins,sans-serif] text-[1.5rem] font-extrabold text-[#0f172a] mb-7">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  {[
                    { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                    { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                    { key: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
                  ].map(f => (
                    <div key={f.key} className="mb-5">
                      <label className="block font-semibold text-[14px] text-[#374151] mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        required
                        className="w-full py-3 px-4 rounded-[10px] border-[1.5px] border-[#e2e8f0] text-[14px] font-[Poppins,sans-serif] outline-none transition-colors duration-200 box-border focus:border-[#2563eb]"
                      />
                    </div>
                  ))}
                  <div className="mb-6">
                    <label className="block font-semibold text-[14px] text-[#374151] mb-1.5">Message</label>
                    <textarea
                      placeholder="Tell us more about your assignment..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full py-3 px-4 rounded-[10px] border-[1.5px] border-[#e2e8f0] text-[14px] font-[Poppins,sans-serif] outline-none resize-y box-border focus:border-[#2563eb]"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-center text-[16px]">Send Message →</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
