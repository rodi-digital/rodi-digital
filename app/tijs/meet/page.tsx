"use client"

import { useEffect } from "react"

export default function MeetPage() {
  useEffect(() => {
    window.location.href = "https://cal.com/tijs-martens/dynamic"
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to calendar...</p>
    </div>
  )
}