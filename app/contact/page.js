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
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Get In Touch</span>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'white', margin: '16px 0 20px' }}>Contact Us</h1>
          <p style={{ color: '#cbd5e1', fontSize: 17, lineHeight: 1.8 }}>We&apos;re here to help. Reach out to our team anytime.</p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div className="contact-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: 28 }}>Get in Touch</h2>
            {[
              { icon: '📍', title: 'UK Office', info: 'Acelocale Ltd., 124 City Road, London, England, EC1V 2NX' },
              { icon: '📍', title: 'Pakistan Office', info: '602 A, Meher Apartments, H-13 Islamabad' },
              { icon: '📧', title: 'Email', info: 'support@zenedify.com' },
              { icon: '💬', title: 'WhatsApp', info: 'Available 24/7 for instant support' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, marginBottom: 28, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, background: '#dbeafe', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: '#0f172a', marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6 }}>{item.info}</p>
                </div>
              </div>
            ))}
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 15, color: '#0f172a', marginBottom: 16 }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: 12 }}>
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map(s => (
                  <a key={s} href="#" style={{ width: 40, height: 40, background: '#dbeafe', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontWeight: 700, fontSize: 11, textDecoration: 'none' }}>{s[0]}</a>
                ))}
              </div>
            </div>
          </div>

          <Card className="shadow-md">
            <CardContent className="p-10">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: '#64748b' }}>Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: 28 }}>Send a Message</h3>
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
