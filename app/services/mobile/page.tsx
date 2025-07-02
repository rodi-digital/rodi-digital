export default function MobilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Mobile Development</h1>
        <p className="text-xl text-gray-600 mb-12">Fast, Data-Driven, and Cost-Effective Solutions</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">
            At Rodi Digital, we specialize in building high-performing mobile applications that are not only fast to
            market but also designed for continuous iteration and growth. We leverage cutting-edge cross-platform
            technologies to deliver robust and engaging mobile experiences.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mobile Development Strengths</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Platform Expertise</h3>
              <p className="text-gray-700">
                We build versatile mobile applications using Expo and React Native, allowing us to develop for both iOS
                and Android simultaneously. This approach significantly reduces development time and costs, ensuring a
                faster time to market for your app idea.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data-Driven Iteration</h3>
              <p className="text-gray-700">
                Our apps are built with analytics and tracking deeply integrated from the outset. This ensures that
                every user interaction and performance metric is captured, providing valuable data for informed
                decision-making and continuous improvement. We believe in iterating based on real user behavior to
                optimize your app for success.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Agile and Efficient Development</h3>
              <p className="text-gray-700">
                As a lean, one-person operation, Rodi Digital offers unparalleled agility and cost-effectiveness
                compared to larger agencies. This means direct communication, faster turnaround times, and a more
                personalized approach to your project, all while maintaining high standards of quality and performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Focus on Fast Time to Market</h3>
              <p className="text-gray-700">
                We understand the importance of validating your app idea quickly. Our streamlined development process
                and cross-platform capabilities enable us to launch your mobile app efficiently, allowing you to gather
                user feedback and iterate rapidly.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">Why Choose Cross-Platform?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Cost Efficiency</h4>
                <p>One codebase for both iOS and Android reduces development costs by up to 50%</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Faster Development</h4>
                <p>Simultaneous deployment to both platforms accelerates time to market</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Consistent Experience</h4>
                <p>Unified design and functionality across all devices and platforms</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Easy Maintenance</h4>
                <p>Single codebase means updates and bug fixes are applied universally</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">React Native & Expo</h3>
              <p className="text-gray-700">
                Our primary stack for cross-platform mobile development, offering native performance with JavaScript
                flexibility and rapid development capabilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Integration</h3>
              <p className="text-gray-700">
                Built-in analytics tracking from day one, using tools like Firebase Analytics, Mixpanel, or custom
                solutions to capture user behavior and app performance.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <p className="text-lg text-gray-800">
              Whether you're looking to validate a new concept or build a full-scale mobile application, Rodi Digital
              provides the expertise and efficiency to bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
