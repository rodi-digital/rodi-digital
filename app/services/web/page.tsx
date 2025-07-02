export default function WebPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Web Development</h1>
        <p className="text-xl text-gray-600 mb-12">Building Robust and Engaging Online Experiences</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">
            At Rodi Digital, we craft dynamic and high-performing web solutions tailored to your specific business
            needs. From sophisticated SaaS platforms to visually stunning marketing sites, we deliver web experiences
            that drive engagement and growth.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Web Development Expertise</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SaaS Platform Development</h3>
              <p className="text-gray-700">
                We specialize in building scalable and secure Software-as-a-Service (SaaS) platforms. Whether you need a
                complex multi-tenant application or a specialized business tool, we design and develop robust solutions
                that meet the demands of modern cloud-based services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Webflow Site Development</h3>
              <p className="text-gray-700">
                For businesses seeking beautiful, responsive, and easily manageable websites with basic functionality,
                we excel in building custom Webflow sites. We leverage Webflow's powerful design capabilities to create
                visually appealing and user-friendly online presences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Large-Scale CMS-Powered Websites</h3>
              <p className="text-gray-700">
                We have extensive experience in developing large company websites powered by Content Management Systems
                (CMS). This ensures that your team can easily manage and update content, providing flexibility and
                control over your digital assets while maintaining a consistent brand experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Web Applications</h3>
              <p className="text-gray-700">
                Beyond standard websites, we develop bespoke web applications designed to solve unique business
                challenges and streamline operations. Our custom solutions are built with performance, security, and
                scalability in mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Optimization & Security</h3>
              <p className="text-gray-700">
                We prioritize building web solutions that are not only functional and aesthetically pleasing but also
                optimized for speed, search engine visibility, and robust security, ensuring a reliable and high-quality
                user experience.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Web Development Process</h2>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Discovery & Planning</h4>
                  <p className="text-gray-700">
                    We start by understanding your business goals, target audience, and technical requirements to create
                    a comprehensive project roadmap.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Design & Architecture</h4>
                  <p className="text-gray-700">
                    We create user-centered designs and establish a scalable technical architecture that supports your
                    current needs and future growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Development & Integration</h4>
                  <p className="text-gray-700">
                    Our development process includes regular check-ins, live demos, and continuous integration of
                    feedback to ensure alignment with your vision.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Testing & Optimization</h4>
                  <p className="text-gray-700">
                    Comprehensive testing across devices and browsers, performance optimization, and security audits
                    before launch.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Launch & Support</h4>
                  <p className="text-gray-700">
                    Smooth deployment with ongoing support, monitoring, and maintenance to ensure optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Web Presence?</h3>
            <p className="text-lg">
              Partner with Rodi Digital to create a powerful online presence that aligns with your strategic goals and
              delivers measurable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
