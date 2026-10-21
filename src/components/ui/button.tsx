import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'brutal';
  size?: 'default' | 'sm' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-neutral-100 text-neutral-900 hover:bg-white font-medium px-5 py-3 rounded-none": variant === 'default',
            "border border-neutral-700 bg-transparent text-neutral-200 hover:border-neutral-400 hover:bg-neutral-900 px-5 py-3 rounded-none": variant === 'outline',
            "hover:bg-neutral-900 text-neutral-400 hover:text-white px-4 py-2 rounded-none": variant === 'ghost',
            "border-2 border-white bg-neutral-950 text-white hover:bg-white hover:text-black px-6 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all rounded-none": variant === 'brutal',
          },
          {
            "h-10 px-4 text-xs": size === 'sm',
            "h-12 px-6 text-xs": size === 'default',
            "h-14 px-8 text-sm": size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
