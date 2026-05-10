export default function ServiceCard({ icon, title, desc, color, iconColor }) {
  return (
    <div className="card-hover" style={{ background: 'white', borderRadius: 16, padding: 28, border: '1px solid #e2e8f0', cursor: 'pointer' }}>
      <div className="service-icon" style={{ background: color, color: iconColor }}>
        {icon}
      </div>
      <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0f172a', marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}
