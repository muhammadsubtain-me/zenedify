export default function TestimonialCard({ name, role, text, initials }) {
  return (
    <div className="testimonial-card">
      <div className="flex gap-1.5 text-[#f59e0b] text-[18px] mb-4">
        {'★★★★★'}
      </div>
      <p className="text-[14.5px] text-[#475569] leading-[1.8] mb-5 italic">&quot{text}&quot</p>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2563eb] to-[#60a5fa] flex items-center justify-center text-white font-bold text-[16px]">
          {initials}
        </div>
        <div>
          <div className="font-bold text-[15px] text-[#0f172a]">{name}</div>
          <div className="text-[13px] text-[#94a3b8]">{role}</div>
        </div>
      </div>
    </div>
  );
}
