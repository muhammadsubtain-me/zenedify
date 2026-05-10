export default function SectionHeader({ subtitle, title, desc, center = true }) {
  return (
    <div className={`${center ? 'text-center' : 'text-left'} mb-12`}>
      {subtitle && (
        <span className="text-[#2563eb] font-bold text-[13px] uppercase tracking-[1.5px]">
          {subtitle}
        </span>
      )}
      <h2 className="section-title mt-2 mb-4">{title}</h2>
      {desc && (
        <p className={`text-[#64748b] text-[16px] leading-[1.8] max-w-[580px] ${center ? 'mx-auto' : ''}`}>
          {desc}
        </p>
      )}
    </div>
  );
}
