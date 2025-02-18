import * as React from "react"
import { cn } from "../../lib/utils"

export interface MockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-xl border bg-background p-2 shadow-2xl",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-1.5 border-b pb-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
        </div>
        <div className="pt-4">{children}</div>
      </div>
    )
  }
)
Mockup.displayName = "Mockup"

export { Mockup } 