export default function TraiCasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full mb-4">
            AI / Sports & Fitness / Triathlon Training
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Trai</h1>
          <p className="text-xl text-gray-600">AI-Powered Triathlon Training Plan Generator</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenge</h2>
            <p className="text-gray-700">
              Triathletes often struggle to create personalized and effective training plans that adapt to their
              individual needs, availability, preferences, and goals. The challenge was to develop an intelligent system
              that could automate the generation of such highly customized training schemas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Solution</h2>
            <p className="text-gray-700 mb-6">
              Rodi Digital developed Trai, an AI-powered triathlon schema generator. This innovative application
              leverages artificial intelligence to create personalized 2-week training plans for triathletes.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Process</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Connecting with Strava</h4>
                  <p className="text-gray-700">
                    Analyzing the athlete's profile to understand their current fitness level and training history.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Questionnaire Completion</h4>
                  <p className="text-gray-700">
                    Gathering detailed information on the athlete's availability, preferences, and specific goals
                    through a comprehensive questionnaire.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">AI-Powered Generation</h4>
                  <p className="text-gray-700">
                    Utilizing AI to generate a highly personalized 2-week training plan based on the collected data.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Schema Delivery</h4>
                  <p className="text-gray-700">
                    Delivering the personalized PDF training schema via email to the user.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            <p className="text-gray-700 mb-6">
              Trai empowers triathletes to optimize their training by providing them with dynamic, personalized plans
              that evolve with their progress and needs. This eliminates the guesswork and time commitment associated
              with manual plan creation, allowing athletes to focus on their training with confidence.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-900 mb-2">Personalized Training</h4>
                <p className="text-gray-700 text-sm">
                  Each plan is uniquely tailored based on individual fitness data and preferences
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-900 mb-2">Time Efficiency</h4>
                <p className="text-gray-700 text-sm">Eliminates hours of manual planning and research for athletes</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-900 mb-2">Improved Performance</h4>
                <p className="text-gray-700 text-sm">
                  AI-driven approach leads to more effective and enjoyable training experiences
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-900 mb-2">Data-Driven Insights</h4>
                <p className="text-gray-700 text-sm">
                  Leverages real training data from Strava for accurate fitness assessment
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Key Technologies Used</h2>
            <p className="mb-4">
              Built with cutting-edge AI and web technologies for intelligent training plan generation:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>AI/Machine Learning for personalized schema generation</li>
              <li>Strava API integration for fitness data analysis</li>
              <li>Web development for user interface and questionnaire system</li>
              <li>Backend systems for data processing and AI model execution</li>
              <li>PDF generation and email delivery systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
