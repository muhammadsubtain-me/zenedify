'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import { Card, CardContent } from '../../components/ui/card';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#1e3a5f] py-16 sm:py-[72px] px-4 sm:px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-blue-400 font-bold text-[13px] uppercase tracking-[1.5px]">Get In Touch</span>
          <h1 className="font-extrabold text-white text-[2rem] sm:text-[3rem] mt-4 mb-5 leading-tight">Contact Us</h1>
          <p className="text-slate-300 text-base sm:text-[17px] leading-[1.8]">We&apos;re here to help. Reach out to our team anytime.</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
          {/* Info */}
          <div>
            <h2 className="font-extrabold text-slate-900 text-[1.6rem] sm:text-[1.8rem] mb-7">Get in Touch</h2>
            {[
              { icon: '📍', title: 'UK Office', info: 'Acelocale Ltd., 124 City Road, London, England, EC1V 2NX' },
              { icon: '📍', title: 'Pakistan Office', info: '602 A, Meher Apartments, H-13 Islamabad' },
              { icon: '📧', title: 'Email', info: 'support@zenedify.com' },
              { icon: '💬', title: 'WhatsApp', info: 'Available 24/7 for instant support' },
            ].map(item => (
              <div key={item.title} className="flex gap-4 mb-7 items-start">
                <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center text-xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[15px] text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-[1.6]">{item.info}</p>
                </div>
              </div>
            ))}
            <div>
              <h3 className="font-bold text-[15px] text-slate-900 mb-4">Follow Us</h3>
              <div className="flex gap-3 flex-wrap">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map(s => (
                  <a key={s} href="#" className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-[11px] no-underline hover:bg-blue-600 hover:text-white transition-colors">
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="shadow-md">
            <CardContent className="p-6 sm:p-10">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-[56px] mb-4">✅</div>
                  <h3 className="font-extrabold text-slate-900 text-[1.5rem] sm:text-[1.6rem] mb-3">Message Sent!</h3>
                  <p className="text-slate-500">Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-extrabold text-slate-900 text-[1.3rem] sm:text-[1.5rem] mb-7">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                      { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                      { key: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
                    ].map(f => (
                      <div key={f.key} className="space-y-1.5">
                        <Label htmlFor={f.key}>{f.label}</Label>
                        <Input
                          id={f.key}
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          required
                        />
                      </div>
                    ))}
                    <div className="space-y-1.5">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your assignment..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        required
                        rows={5}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full text-base">
                      Send Message →
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
