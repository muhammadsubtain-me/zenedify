import * as React from "react";
import { cn } from "../../lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-xl border-[1.5px] border-[#e2e8f0] bg-white px-4 py-3 text-sm font-sans text-[#0f172a] placeholder:text-[#94a3b8] transition-colors focus:border-[#2563eb] focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-vertical",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
