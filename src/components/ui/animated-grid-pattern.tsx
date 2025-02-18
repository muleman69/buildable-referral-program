import { cn } from "../../lib/utils"

export interface AnimatedGridPatternProps {
  className?: string
  numSquares?: number
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
}

export function AnimatedGridPattern({
  className,
  numSquares = 30,
  maxOpacity = 0.1,
  duration = 3,
  repeatDelay = 1
}: AnimatedGridPatternProps) {
  return (
    <div className={cn("relative flex h-[500px] w-[500px] items-center justify-center", className)}>
      <div
        className={cn(
          "mask-image:radial-gradient(circle at center, black, transparent) relative flex items-center justify-center overflow-hidden rounded-lg bg-white p-20 md:shadow-xl"
        )}
      >
        <div className="relative h-full w-full">
          {[...Array(numSquares)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-x-0 inset-y-0 border border-gray-200 dark:border-gray-800"
              style={{
                animation: `appear ${duration}s ease-in-out ${(i * duration) / numSquares}s infinite`,
                animationDelay: `${repeatDelay}s`,
                opacity: 0,
                transform: `scale(${i / numSquares})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 