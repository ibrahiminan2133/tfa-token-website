import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition-colors",
          variant === "outline"
            ? "border border-purple-500 text-purple-400 bg-transparent hover:bg-purple-950"
            : "bg-purple-600 text-white hover:bg-purple-700",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
