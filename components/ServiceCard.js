export default function ServiceCard({ icon, title, desc, color, iconColor }) {
  return (
    <div className="card-hover bg-white rounded-2xl p-7 border border-[#e2e8f0] cursor-pointer">
      <div className="service-icon" style={{ background: color, color: iconColor }}>
        {icon}
      </div>
      <h3 className="font-bold text-[16px] text-[#0f172a] mb-2">{title}</h3>
      <p className="text-[14px] text-[#64748b] leading-[1.7]">{desc}</p>
    </div>
  );
}
