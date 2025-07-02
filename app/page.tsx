import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 leading-tight mb-8">
            Apps, AI & Websites <span className="text-purple-600">built with you.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Your digital partner specializing in AI-enabled applications, mobile development, and web solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/approach"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors group"
            >
              Our Approach
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              View Cases
            </Link>
          </div>
        </div>
      </div>

      {/* Quick overview section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI-Enabled</h3>
              <p className="text-gray-600">
                Harness the power of Large Language Models to unlock new possibilities and intelligent automation.
              </p>
            </div>
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mobile First</h3>
              <p className="text-gray-600">
                Cross-platform mobile apps built with React Native and Expo for fast, data-driven development.
              </p>
            </div>
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Web Solutions</h3>
              <p className="text-gray-600">
                From SaaS platforms to marketing sites, we build robust web experiences that drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
