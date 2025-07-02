import type React from "react"
interface ContentCardProps {
  title: string
  description: string
  children?: React.ReactNode
  className?: string
}

export function ContentCard({ title, description, children, className = "" }: ContentCardProps) {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
      <p className="text-gray-700 mb-6">{description}</p>
      {children}
    </div>
  )
}
