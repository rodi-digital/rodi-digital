import { CaseStudyLayout } from "@/components/ui/case-study-layout";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "PEACHealth — Personalized Health Information Mobile App",
  description:
    "PEACHealth empowers individuals with personalized, expert-backed health information through a free mobile application, fostering informed decision-making and improved patient engagement.",
  route: "casePeach",
  keywords: [
    "health information app",
    "personalized health app",
    "patient engagement app",
    "mobile health app",
    "expert-backed health information",
  ],
});

const keyFeatures = [
  {
    title: "Personalized Education",
    description:
      "Educational articles personalized to the user's specific condition and needs. The platform has a system that specialists can use to create a personalize plan of information for each patient",
  },
  {
    title: "Symptom Tracking",
    description:
      "Track and share symptoms with friends, family, and healthcare professionals. The algorithm learns from the user's input to provide more relevant information over time",
  },
  {
    title: "Appointment Logging",
    description:
      "Log appointments for a clear overview of care plans and medical history",
  },
  {
    title: "Subscription Model",
    description:
      "Introduced a subscription system to unlock premium content and features, supporting long-term growth and sustainability",
  },
  {
    title: "Community features",
    description:
      "Access to a supportive community of individuals facing similar health challenges, fostering connection and shared experiences",
  },
];

const impactFeatures = [
  {
    title: "Empowered Decision Making",
    description:
      "Empowers users to understand their options and actively participate in their care journey",
  },
  {
    title: "Improved Patient Engagement",
    description:
      "Fosters enhanced communication between patients and healthcare providers through shared insights and progress tracking.",
  },
  {
    title: "Clinical Trials",
    description:
      "Facilitates participation in clinical trials and measures their real-world impact, helping patients access innovative treatments while generating valuable insights for healthcare providers and researchers.",
  },
];

const peachFAQs = [
  {
    question: "What is the PEACHealth app?",
    answer: "PEACHealth is a mobile health application designed to help people find trustworthy, personalized health information. It's a free app that consolidates guidance from medical experts and reliable sources, delivering expert-backed content tailored to each user's specific health concerns. The app was created to solve the challenge many patients face: in a world full of health information (and misinformation), PEACHealth cuts through the noise and provides a single source of credible, up-to-date advice. In short, it empowers individuals – especially those dealing with illness or health questions – with information they can trust, right on their phone."
  },
  {
    question: "How does PEACHealth help its users?",
    answer: "PEACHealth helps users by giving them the knowledge and tools to make informed decisions about their health. Firstly, it delivers personalized education – articles and resources are tailored to the user's specific condition or questions, so they see information that's relevant to them rather than generic advice. This means a cancer patient, for example, would get content related to their condition and concerns. Secondly, the app includes a symptom tracking feature that allows users to log how they're feeling or any symptoms over time. This can be shared with friends, family, or healthcare providers, and the app's algorithm learns from this input to provide more relevant information as time goes on. Additionally, PEACHealth lets users log medical appointments and treatments, giving them a clear overview of their care plan and medical history in one place. By having this record, users can stay organized and ensure they follow through on care recommendations. The combined effect of these features is that users are more empowered in their healthcare journey – they understand their options better and can actively participate in discussions with their doctors. Many users feel less anxious and more in control because the app bridges the gap between them and the vast world of medical information in an easily digestible, personalized way."
  },
  {
    question: "What are the key features of the PEACHealth platform?",
    answer: "PEACHealth offers several key features to its users, each designed to foster engagement and provide value:\n\nPersonalized Education Plans: The app curates educational articles and resources specific to each user's condition or health profile. Specialists can even create personalized information plans for patients, so users get content that's directly relevant to their situation.\n\nSymptom Tracking: Users can regularly input their symptoms or well-being status. Over time, the app learns from these entries and adjusts the information it provides, making suggestions more relevant as it gathers more data about the user. This also allows users to visualize their symptom trends and share this log with healthcare providers for better consultations.\n\nAppointment Logging: PEACHealth includes a feature to log medical appointments, medications, or treatments. This helps users keep a timeline of their healthcare interactions and reminders, ensuring they never lose track of their care plans or follow-up tasks.\n\nCommunity Support: A community feature connects users with others who have similar health challenges. This creates a support network within the app where users can share experiences, advice, and encouragement, helping to foster a sense of not being alone in their journey.\n\nSubscription for Premium Content: While the app is free to use, it also introduced a subscription model for premium content and features. Subscribers can access advanced resources or specialized tools, which not only adds more value for power users but also provides a sustainable foundation for the app's growth.\n\nAll these features work together to make PEACHealth a comprehensive health companion. From learning about your condition, to tracking your progress, to connecting with others, the platform is built to support users in living healthier, more informed lives."
  },
  {
    question: "What impact did the PEACHealth project have?",
    answer: "PEACHealth has made a meaningful impact on its users and stakeholders by improving how people engage with health information. One major impact is empowered decision-making: users of PEACHealth feel more confident and informed when making health decisions because they have access to expert-backed information tailored to them. This empowerment means patients can have more productive conversations with their doctors and are more active participants in their own care (they're asking better questions, understanding treatment options, etc.). Another impact is improved patient engagement – by tracking symptoms and appointments and being part of a community, patients are more engaged in following their care plans and tend to stay on top of their health routines. Healthcare providers have noted that patients using PEACHealth come to appointments better prepared and with clearer information to share. Additionally, PEACHealth has facilitated connections to clinical trials and advanced treatments. Because the app can inform users about clinical trial opportunities and measure real-world outcomes, it's helping some patients access cutting-edge therapies they might not have known about, while also generating valuable insights for healthcare providers and researchers. Overall, the project's impact is a healthier, better informed user base and a model for how digital tools can enhance patient education and engagement on a broad scale."
  },
  {
    question: "What technologies were used to build PEACHealth?",
    answer: "The PEACHealth app was built using modern cross-platform mobile development technologies. Specifically, it was developed with React Native (and Expo), which means the same code runs on both iOS and Android devices. This choice ensures a consistent experience for all users and speeds up development and updates. The backend system behind PEACHealth is robust, handling tasks like content delivery (serving up all those articles and resources quickly), personalization (matching content to user profiles), and subscription management for the premium features. Using cloud services and scalable databases, the app can handle growth in user numbers and content volume without performance issues. Additionally, since the app integrates expert content, the development likely involved setting up a content management system that medical experts could contribute to. Security and privacy were also paramount given the sensitive nature of health data – so the tech stack includes secure databases and encryption to protect user information. In summary, PEACHealth's technology stack includes React Native/Expo for the frontend mobile app, a strong backend infrastructure (with APIs and databases) for all the personalized and real-time features, and integration with third-party services (like Apple App Store and Google Play for distribution, analytics tools for usage tracking, etc.) to ensure the app runs smoothly and securely across all platforms."
  }
];

export default function PeachCasePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", route: "home" },
          { name: "Case Studies", route: "cases" },
          { name: "PEACHealth", route: "casePeach" },
        ])}
      />
      <CaseStudyLayout
      title="PEACHealth"
      subtitle="Living longer and better through personalized, expert-backed health information."
      challenge="In an overwhelming landscape of health information, individuals concerned about or living with illness often face significant challenges in finding trustworthy, up-to-date, and personalized guidance. This lack of reliable resources can lead to anxiety, confusion, and hinder their ability to actively participate in crucial health decisions. The challenge was to develop a platform that cuts through this noise, empowering users with credible information and fostering proactive engagement in their care."
      solution="PEACHealth is a free mobile application that delivers personalized, expert-backed, and authoritative information for people concerned about or living with illness. By consolidating guidance from world-renowned medical experts and trusted sources, the platform makes reliable health information accessible and relevant to individual needs. Recent work focused on extending the platform with a subscription model, creating a sustainable foundation for growth while offering users access to premium content and features."
      keyFeatures={keyFeatures}
      impact={impactFeatures}
      technologySection={{
        title: "Technology Stack",
        content:
          "Built with modern mobile development frameworks (e.g., React Native, Expo) and robust backend systems for seamless content delivery, personalization, and subscription management.",
      }}
      relatedService={{
        statement:
          "This is an example of how Rodi Digital builds cross-platform mobile apps for organisations that need to reach people on iOS and Android at once.",
        linkLabel: "Mobile Development",
        href: "/services/mobile",
      }}
      ctaTitle="Ready to Build Your Health Platform?"
      ctaSubtitle="Let's create a digital health platform that empowers users with personalized, expert-backed information."
      projectLinks={[
        {
          text: "View on Apple App Store",
          href: "https://apps.apple.com/pl/app/peachealth/id1640682684",
        },
        {
          text: "View on Google Play Store",
          href: "https://play.google.com/store/apps/details?gl=US&hl=en_GB&id=com.mycancercompanion.app",
        },
      ]}
      faqs={peachFAQs}
    />
    </>
  );
}
