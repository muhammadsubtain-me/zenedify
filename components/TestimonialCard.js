export default function TestimonialCard({ name, role, text, initials }) {
  return (
    <div className="testimonial-card">
      <div style={{ display: 'flex', gap: 6, color: '#f59e0b', fontSize: 18, marginBottom: 16 }}>
        {'★★★★★'}
      </div>
      <p style={{ fontSize: 14.5, color: '#475569', lineHeight: 1.8, marginBottom: 20, fontStyle: 'italic' }}>&quot{text}&quot</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#2563eb,#60a5fa)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 16 }}>
          {initials}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, color: '#0f172a' }}>{name}</div>
          <div style={{ fontSize: 13, color: '#94a3b8' }}>{role}</div>
        </div>
      </div>
    </div>
  );
}
