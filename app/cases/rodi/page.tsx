export default function RodiCasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
            Mobile Application / Cycling & Fitness
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Rodi</h1>
          <p className="text-xl text-gray-600">Bike Computer App</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenge</h2>
            <p className="text-gray-700">
              Cyclists often need a reliable and free bike computer app that can guide them on routes, track their
              performance, and integrate with popular cycling platforms without ads, subscriptions, or data sharing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Solution</h2>
            <p className="text-gray-700 mb-6">
              As the founder, Rodi Digital (Tijs Martens) designed, implemented, and strategized the development of
              Rodi, a free bike computer application. Rodi allows users to:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Plan and Discover Routes</h4>
                <p className="text-gray-700 text-sm">
                  Find routes online or create their own with platforms like Komoot or Strava and upload them to Rodi
                  for turn-by-turn guidance.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Navigate and Track</h4>
                <p className="text-gray-700 text-sm">
                  Utilize the phone's GPS sensor to display valuable insights during rides, including distance, average
                  speed, elevation, duration, and max speed.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Enjoy a Free Experience</h4>
                <p className="text-gray-700 text-sm">
                  Rodi stands out by offering a completely free service with no ads, no subscriptions, and no data
                  sharing, prioritizing user privacy and experience.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Share Adventures</h4>
                <p className="text-gray-700 text-sm">
                  Seamlessly upload ride data to Strava upon completion, allowing users to share their cycling
                  achievements with friends and the community.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            <p className="text-gray-700 mb-6">
              Rodi provides cyclists with a comprehensive, user-friendly, and privacy-focused bike computer solution.
              Its commitment to being free and ad-less has created a valuable tool for the cycling community, empowering
              users to explore new routes, track their progress, and share their passion without financial barriers or
              privacy concerns. The app simplifies route navigation and performance tracking, enhancing the overall
              cycling experience.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-900 mb-2">Community Impact</h4>
                <p className="text-gray-700 text-sm">
                  Created a valuable tool for the cycling community without financial barriers
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-900 mb-2">Privacy First</h4>
                <p className="text-gray-700 text-sm">
                  No ads, subscriptions, or data sharing - prioritizing user privacy
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-900 mb-2">Enhanced Experience</h4>
                <p className="text-gray-700 text-sm">
                  Simplified route navigation and performance tracking for better cycling
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Key Technologies Used</h2>
            <p className="mb-4">Built with modern mobile development frameworks and cycling platform integrations:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>React Native/Expo for cross-platform mobile development</li>
              <li>GPS tracking APIs for real-time location and performance data</li>
              <li>Strava API integration for seamless data sharing</li>
              <li>Route planning and navigation systems</li>
              <li>Local data storage for offline functionality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
