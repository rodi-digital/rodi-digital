import { H1, H2, H3 } from "@/components/ui/heading";

export default function MobilePage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <H1>Mobile Development</H1>
        <p className="text-xl mb-12">
          Deliver fast, data-driven, and cost-effective mobile solutions with
          our expertise in React Native and Expo for seamless cross-platform
          development.
        </p>
        <div className="prose prose-lg max-w-none">
          <p>
            At Rodi Digital, we specialize in building high-performing mobile
            applications that are not only fast to market but also designed for
            continuous iteration and growth. We leverage cutting-edge
            cross-platform technologies to deliver robust and engaging mobile
            experiences.
          </p>
          <H2>Our Mobile Development Strengths</H2>
          <div className="space-y-8 mb-12">
            <div className="p-6 rounded-lg">
              <H3>Cross-Platform Expertise</H3>
              <p>
                We build versatile mobile applications using Expo and React
                Native, allowing us to develop for both iOS and Android
                simultaneously. This approach significantly reduces development
                time and costs, ensuring a faster time to market for your app
                idea.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <H3>Data-Driven Iteration</H3>
              <p>
                Our apps are built with analytics and tracking deeply integrated
                from the outset. This ensures that every user interaction and
                performance metric is captured, providing valuable data for
                informed decision-making and continuous improvement. We believe
                in iterating based on real user behavior to optimize your app
                for success.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <H3>Agile and Efficient Development</H3>
              <p>
                As a lean, one-person operation, Rodi Digital offers
                unparalleled agility and cost-effectiveness compared to larger
                agencies. This means direct communication, faster turnaround
                times, and a more personalized approach to your project, all
                while maintaining high standards of quality and performance.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <H3>Focus on Fast Time to Market</H3>
              <p>
                We understand the importance of validating your app idea
                quickly. Our streamlined development process and cross-platform
                capabilities enable us to launch your mobile app efficiently,
                allowing you to gather user feedback and iterate rapidly.
              </p>
            </div>
          </div>
          <H2>Technologies We Use</H2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <H3>React Native & Expo</H3>
              <p className="text-gray-700">
                Our primary stack for cross-platform mobile development,
                offering native performance with JavaScript flexibility and
                rapid development capabilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <H3>Analytics Integration</H3>
              <p className="text-gray-700">
                Built-in analytics tracking from day one, using tools like
                Firebase Analytics, Mixpanel, or custom solutions to capture
                user behavior and app performance.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <p className="text-lg text-gray-800">
              Whether you're looking to validate a new concept or build a
              full-scale mobile application, Rodi Digital provides the expertise
              and efficiency to bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
