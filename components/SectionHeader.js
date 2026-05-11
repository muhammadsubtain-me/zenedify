export default function SectionHeader({ subtitle, title, desc, center = true }) {
  return (
    <div className={`${center ? 'text-center' : 'text-left'} mb-12`}>
      {subtitle && (
        <span className="text-blue-600 font-bold text-[13px] uppercase tracking-[1.5px]">
          {subtitle}
        </span>
      )}
      <h2 className="font-extrabold text-slate-900 text-[1.9rem] sm:text-[2.2rem] leading-tight mt-2 mb-4">
        {title}
      </h2>
      {desc && (
        <p className={`text-slate-500 text-base leading-[1.8] max-w-[580px] ${center ? 'mx-auto' : ''}`}>
          {desc}
        </p>
      )}
    </div>
  );
}
