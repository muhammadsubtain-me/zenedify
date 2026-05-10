import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border-[1.5px] border-[#e2e8f0] bg-white px-4 py-2 text-sm font-sans text-[#0f172a] placeholder:text-[#94a3b8] transition-colors focus:border-[#2563eb] focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
