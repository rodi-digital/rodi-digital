import { CaseStudyLayout } from "@/components/ui/case-study-layout";

const keyFeatures = [
  {
    title: "Turn-by-turn guidance",
    description:
      "Clear cues on the route so riders stop second-guessing and never miss their next turn.",
  },
  {
    title: "Route uploads from the web",
    description:
      "Simple GPX upload at rodi.app/upload to get any planned route into the app in seconds.",
  },
  {
    title: "Ride stats that matter",
    description:
      "Track distance, time, pace, and more so cyclists can review progress and plan the next ride with confidence.",
  },
  {
    title: "Lightweight, rider-first UI",
    description:
      "A focused interface that keeps the map and cues center stage, reducing on-bike friction.",
  },
  {
    title: "Content system for growth",
    description:
      "A Notion-powered blog workflow that lets you publish tips and updates without developer bottlenecks.",
  },
];

const impactFeatures = [
  {
    title: "Fewer wrong turns",
    description:
      "Reliable guidance reduces route anxiety and keeps riders on course for the entire trip.",
  },
  {
    title: "Faster route prep",
    description:
      "Uploading a planned route is quick and predictable, which shortens pre-ride setup and gets people rolling sooner.",
  },
  {
    title: "Higher engagement",
    description:
      "Clear stats and helpful content give riders a reason to return for the next ride and share routes with friends.",
  },
];

const rodiFAQs = [
  {
    question: "What is the Rodi cycling app?",
    answer: "The Rodi app is a rider-first cycling application developed as a free bike computer for cyclists. In simple terms, it's a mobile app that provides cyclists with route navigation and ride tracking without any of the usual hassles. Notably, the Rodi app is completely free to use and has no ads or subscriptions, so cyclists can enjoy full functionality without interruptions. The app guides riders along their planned route with turn-by-turn directions and at the same time records key stats from the ride (like distance, speed, time, etc.) in real time. The focus of the Rodi app is on delivering a lightweight, easy-to-read interface while you're on the bike, so you get the info you need (next turn, ride metrics) at a glance. Essentially, it turns your smartphone into a powerful but user-friendly bike computer that enhances your riding experience without the complexity that some cycling tech has."
  },
  {
    question: "What problem does the Rodi app solve for cyclists?",
    answer: "The Rodi app was built to solve a few common frustrations that cyclists face. One major problem is that existing route navigation tools can be clunky or distracting – for example, fumbling with GPX files, or using apps that are overloaded with features you don't need mid-ride. Rodi addresses this by providing a simple way to follow a planned route with clear turn-by-turn guidance, so you're not constantly second-guessing if you're on track. It streamlines the process of getting a route from the web to your phone; with Rodi, you can quickly upload a GPX route to the app and start riding without fuss. Another problem is the clutter of stats and screens that some bike computers have – Rodi focuses on just the key stats that matter (like distance, time, pace) and shows them in a clean, minimal interface, reducing on-bike distraction. By being lightweight and rider-focused, the app ensures cyclists get the essential information and guidance they need, without the heavy, battery-draining, or confusing experience that can come with other solutions. In summary, Rodi makes navigation and ride tracking effortless, so cyclists can enjoy the ride instead of struggling with tech."
  },
  {
    question: "What features does the Rodi bike app include?",
    answer: "The Rodi bike app includes a thoughtful set of features tailored for cyclists:\n\nTurn-by-Turn Guidance: As you ride, Rodi provides clear navigation cues for each turn or waypoint. This way, you can keep your eyes on the road and trust the app to alert you when a turn is coming, eliminating the anxiety of missing a turn during your route.\n\nEasy Route Uploads: Rodi makes it simple to get your planned routes into the app. There's a feature to upload GPX files via a web interface (at rodi.app/upload) – you drop your route file in, and it's instantly available on your phone. This removes the usual hassle of transferring routes and works with your favorite route planning tools.\n\nRide Stats Tracking: While you ride, the app tracks and displays important metrics like distance, duration, pace/speed, etc.. These stats are shown in a clean, easy-to-read format so you can glance down and quickly see your progress. After the ride, you can review these stats to analyze your performance.\n\nLightweight, Distraction-Free UI: The user interface is designed to be minimal and rider-first, meaning the map and the essential information are front and center. There are no cluttered menus or unnecessary alerts – just the info you need when you need it. This keeps the experience safe and enjoyable, as you're not fiddling with the app while biking.\n\nContent & Updates System: Uniquely, Rodi has a content component where the developers can share cycling tips and app updates via a blog powered by Notion. This means the app can provide helpful content (like cycling advice or news about new features) seamlessly, and the developers can update this content quickly without pushing a full app update.\n\nTogether, these features provide cyclists with a comprehensive tool for navigation and tracking that's easy to use and focused on the ride experience."
  },
  {
    question: "How does the Rodi app improve the cycling experience?",
    answer: "The Rodi app makes cycling more enjoyable and stress-free in several ways. Firstly, it greatly reduces navigation worries – with reliable turn-by-turn directions, riders can relax and enjoy the route knowing they won't make wrong turns or stray off course. This eliminates route anxiety and keeps riders confident that they're following the intended path, resulting in fewer stops or backtracks during rides. Secondly, it simplifies pre-ride preparation: uploading a route is quick and predictable, which means you spend less time fussing with files or settings and start your ride sooner. That's a tangible quality-of-life improvement for anyone who's used to dealing with clumsy GPS device interfaces. Thirdly, during the ride, Rodi's clear display of stats and minimal UI means you get the info you want (How far along am I? What's my pace?) at a glance, without being overwhelmed by data. This clarity keeps you informed and also gives you a reason to come back – seeing your stats and maybe improvements over time can be motivating. The app also encourages sharing and engagement; because it's easy to use, riders are more likely to share routes with friends or use the app on every ride, creating a habit. All in all, Rodi improves the cycling experience by acting like a friendly guide and tracker that enhances the ride rather than complicating it. Cyclists can focus on pedaling and scenery, while Rodi quietly handles the navigation and tracking in the background."
  },
  {
    question: "What technology stack was used for the Rodi cycling app?",
    answer: "The Rodi cycling app was built using a modern, cross-platform technology stack for efficiency and performance. The development team chose React Native with Expo for the mobile app, allowing them to deploy on both iOS and Android from a single codebase while still tapping into native device features (like GPS and maps). This ensures that whether you're on an iPhone or Android phone, the app runs smoothly and can accurately track location in real time. For navigation, the app leverages native mapping and location services for reliable on-bike guidance – this means it uses the phone's GPS and mapping frameworks (possibly with libraries like Mapbox or Google Maps) to give turn instructions. The Rodi app also has an interesting content pipeline: it integrates with Notion as a lightweight CMS (Content Management System) for publishing the in-app blog and tips. This integration allows the developers to update content (like cycling tips or announcements) quickly without updating the app's code. On the backend, there's likely a server component for handling the route upload feature (rodi.app/upload) and possibly storing user rides or analytics. Speaking of analytics, the app includes instrumentation to collect usage data and performance metrics, helping the team continuously improve navigation accuracy and user experience across various ride scenarios. In summary, the stack is React Native/Expo for the app, native APIs for GPS/mapping, a Notion integration for content, and standard backend services for file uploads and analytics – all chosen to create a fast, reliable app that can be updated and improved rapidly."
  }
];

export default function RodiCasePage() {
  return (
    <CaseStudyLayout
      title="Rodi"
      subtitle="A rider-first cycling app that guides your route and captures the ride."
      challenge="Cyclists want a simple way to follow a planned route and see the key stats that matter. Many tools feel heavy or distracting on the bike, and getting a GPX from web to phone can be clumsy. The challenge was to build a lightweight, reliable experience that makes navigation and ride tracking effortless."
      solution="We designed and built Rodi as a free, rider-first bike computer. The app shows your route and ride statistics in a clear layout and provides turn guidance to keep you on track. A web uploader makes it easy to add routes from your favorite planning tools straight into the app. A Notion-powered blog workflow supports ongoing tips and updates, so content stays fresh without slowing development."
      keyFeatures={keyFeatures}
      impact={impactFeatures}
      technologySection={{
        title: "Technology Stack",
        content:
          "Built with React Native and Expo for iOS and Android, using native location and mapping capabilities for reliable on-bike guidance. The content pipeline integrates with Notion for fast publishing. Analytics and in-app instrumentation support continuous improvement across navigation and ride flows.",
      }}
      ctaTitle="Want an app riders love to use?"
      ctaSubtitle="Let’s design and build a focused, reliable experience that ships fast and gets better with every release."
      projectLinks={[
        {
          text: "View app website",
          href: "https://rodi.app/",
        },
      ]}
      faqs={rodiFAQs}
    />
  );
}
