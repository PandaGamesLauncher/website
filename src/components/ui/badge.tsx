import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'mono';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 font-mono text-[10px] uppercase tracking-widest rounded-none",
        {
          "bg-white text-black font-semibold": variant === 'default',
          "border border-neutral-700 text-neutral-300 bg-transparent": variant === 'outline',
          "bg-neutral-900 text-neutral-400 border border-neutral-800": variant === 'mono',
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
