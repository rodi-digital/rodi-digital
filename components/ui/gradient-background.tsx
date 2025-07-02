import type React from "react"
interface GradientBackgroundProps {
  variant: "purple" | "blue" | "green" | "pink" | "orange"
  children: React.ReactNode
  className?: string
}

const gradients = {
  purple: "bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50",
  blue: "bg-gradient-to-br from-blue-50 to-indigo-100",
  green: "bg-gradient-to-br from-green-50 to-blue-100",
  pink: "bg-gradient-to-br from-pink-50 to-rose-100",
  orange: "bg-gradient-to-br from-orange-50 to-red-100",
}

export function GradientBackground({ variant, children, className = "" }: GradientBackgroundProps) {
  return <div className={`min-h-screen ${gradients[variant]} pt-20 ${className}`}>{children}</div>
}
