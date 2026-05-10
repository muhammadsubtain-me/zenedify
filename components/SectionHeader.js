export default function SectionHeader({ subtitle, title, desc, center = true }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 48 }}>
      {subtitle && (
        <span style={{ color: '#2563eb', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
          {subtitle}
        </span>
      )}
      <h2 className="section-title" style={{ marginTop: 8, marginBottom: 16 }}>{title}</h2>
      {desc && (
        <p style={{ color: '#64748b', fontSize: 16, maxWidth: 580, margin: center ? '0 auto' : 0, lineHeight: 1.8 }}>
          {desc}
        </p>
      )}
    </div>
  );
}
