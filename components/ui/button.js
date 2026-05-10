import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-sans",
  {
    variants: {
      variant: {
        default: "bg-[#2563eb] text-white hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30",
        outline: "border-2 border-[#2563eb] text-[#2563eb] bg-transparent hover:bg-[#2563eb] hover:text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-[#2563eb] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-7 py-2",
        sm: "h-9 px-4",
        lg: "h-13 px-8 text-base py-3.5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
