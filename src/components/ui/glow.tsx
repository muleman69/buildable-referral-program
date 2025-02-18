import * as React from "react"
import { cn } from "../../lib/utils"

export interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const Glow = React.forwardRef<HTMLDivElement, GlowProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div className="pointer-events-none absolute -inset-px blur-xl transition-all group-hover:blur-2xl">
          {children}
        </div>
        <div className="relative">{children}</div>
      </div>
    )
  }
)
Glow.displayName = "Glow"

export { Glow } 