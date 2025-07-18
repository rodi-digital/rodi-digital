import { H1, H2, H3 } from "@/components/ui/heading";

export default function WebPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <H1>Web Development</H1>
        <p className="text-xl mb-12">
          Crafting fast, responsive, and visually stunning web solutions
          precisely tailored to your unique business needs.
        </p>
        <div className="prose prose-lg max-w-none">
          <p>
            At Rodi Digital, we craft dynamic and high-performing web solutions
            tailored to your specific business needs. From sophisticated SaaS
            platforms to visually stunning marketing sites, we deliver web
            experiences that drive engagement and growth.
          </p>
          <H2>Our Web Development Expertise</H2>
          <div className="space-y-8 mb-12">
            <div className="p-6 rounded-lg">
              <H3>SaaS Platform Development</H3>
              <p>
                We specialize in building scalable and secure
                Software-as-a-Service (SaaS) platforms. Whether you need a
                complex multi-tenant application or a specialized business tool,
                we design and develop robust solutions that meet the demands of
                modern cloud-based services.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <H3>Webflow Site Development</H3>
              <p>
                For businesses seeking beautiful, responsive, and easily
                manageable websites with basic functionality, we excel in
                building custom Webflow sites. We leverage Webflow's powerful
                design capabilities to create visually appealing and
                user-friendly online presences.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <H3>Large-Scale CMS-Powered Websites</H3>
              <p>
                We have extensive experience in developing large company
                websites powered by Content Management Systems (CMS). This
                ensures that your team can easily manage and update content,
                providing flexibility and control over your digital assets while
                maintaining a consistent brand experience.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <H3>Custom Web Applications</H3>
              <p>
                Beyond standard websites, we develop bespoke web applications
                designed to solve unique business challenges and streamline
                operations. Our custom solutions are built with performance,
                security, and scalability in mind.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <H3>Performance Optimization & Security</H3>
              <p>
                We prioritize building web solutions that are not only
                functional and aesthetically pleasing but also optimized for
                speed, search engine visibility, and robust security, ensuring a
                reliable and high-quality user experience.
              </p>
            </div>
          </div>
          <H2>Our Web Development Process</H2>
          <div className="p-8 rounded-lg mb-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Discovery & Planning</h4>
                  <p>
                    We start by understanding your business goals, target
                    audience, and technical requirements to create a
                    comprehensive project roadmap.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Design & Architecture</h4>
                  <p>
                    We create user-centered designs and establish a scalable
                    technical architecture that supports your current needs and
                    future growth.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Development & Integration</h4>
                  <p>
                    Our development process includes regular check-ins, live
                    demos, and continuous integration of feedback to ensure
                    alignment with your vision.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  4
                </div>
                <div>
                  <h4 className="font-semibold">Testing & Optimization</h4>
                  <p>
                    Comprehensive testing across devices and browsers,
                    performance optimization, and security audits before launch.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  5
                </div>
                <div>
                  <h4 className="font-semibold">Launch & Support</h4>
                  <p>
                    Smooth deployment with ongoing support, monitoring, and
                    maintenance to ensure optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Your Web Presence?
            </h3>
            <p className="text-lg">
              Partner with Rodi Digital to create a powerful online presence
              that aligns with your strategic goals and delivers measurable
              results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
