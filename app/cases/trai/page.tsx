import { CaseStudyLayout } from "@/components/ui/case-study-layout";

const keyFeatures = [
  {
    title: "Personalized Training Plans",
    description:
      "AI-generated, highly customized training plans based on individual needs, availability, and goals.",
  },
  {
    title: "Strava Integration",
    description:
      "Connects with Strava to analyze fitness data and tailor training recommendations.",
  },
  {
    title: "Adaptive Scheduling",
    description:
      "Plans adapt dynamically as the athlete's data and preferences change.",
  },
];

const impactFeatures = [
  {
    title: "Enhanced Time Efficiency",
    description:
      "Trai eliminates countless hours of manual planning and research, allowing athletes to focus entirely on their training.",
  },
  {
    title: "Optimized Performance",
    description:
      "Our AI-driven approach leads to more effective, enjoyable, and ultimately, higher-performing training experiences.",
  },
  {
    title: "Actionable Data-Driven Insights",
    description:
      "Trai leverages real training data for precise fitness assessment and continuous progress tracking, ensuring plans are always optimized.",
  },
];

const traiFAQs = [
  {
    question: "What is Trai?",
    answer: "Trai is an AI-powered triathlon training platform – essentially a virtual coach that generates personalized training plans for triathletes. It takes the form of a plan generator that delivers workout schemas tailored to an individual's needs and adapts as those needs change. Instead of a one-size-fits-all training schedule, Trai creates a custom plan for each athlete, factoring in their experience level, goals, availability, and even their performance data. In short, Trai's like having a smart coaching assistant: it automatically designs and adjusts your swim/bike/run training regimen so you can focus on training effectively without the guesswork."
  },
  {
    question: "Who is the Trai platform designed for?",
    answer: "Trai is designed for triathletes, ranging from amateurs to seasoned competitors, who want a training plan that's customized to them personally. Many triathletes struggle with creating or following generic training plans that don't account for their unique life schedule or fitness progress. Trai is ideal for those athletes because it adapts to individual needs – if you're a busy professional training for a triathlon, Trai can adjust your plan around your weekly availability; if you're a high-level athlete, Trai can tailor to your performance data to push you appropriately. Essentially, it's for anyone who finds it challenging to manually create an effective, flexible triathlon training plan and would benefit from an intelligent system doing the heavy lifting."
  },
  {
    question: "How does Trai work to create training plans?",
    answer: "Trai works by leveraging artificial intelligence to automate and personalize the planning process. When you use Trai, you input key information about yourself (like your current fitness level, training availability, goals, etc.), and the platform uses AI algorithms to generate a personalized training plan tailored to those inputs. One of Trai's standout capabilities is its integration with Strava (a popular fitness tracking platform). Trai connects to your Strava data to analyze your past workouts and performance metrics – for example, it can see your running pace trends, cycling power, or swimming volume. Using that data, Trai ensures the training it prescribes is in line with your current fitness and progresses you appropriately. Another core aspect is adaptive scheduling: as you log workouts and as your circumstances change (say you miss a workout or improve faster in one discipline), Trai adjusts your plan dynamically. This means the plan is not static – it evolves. If the AI detects that you're struggling in swim but excelling in bike, it might tweak upcoming sessions to focus where needed. All of this happens behind the scenes using AI models trained on endurance training principles and data. In summary, Trai gathers your info and data, crunches the numbers using AI to design a regimen, and continuously monitors and updates that plan as you train, ensuring it stays effective and personalized."
  },
  {
    question: "What features does the Trai platform offer?",
    answer: "Trai offers a suite of features centered around delivering a smart training experience:\n\nAI-Generated Training Plans: The core feature is automatically generated triathlon training plans that are uniquely tailored to you. These plans consider your goals (e.g., finishing a triathlon vs. podium placement), your available days for training, and your current fitness. Every workout – swim, bike, run, and rest – is scheduled by the AI with the right intensity and volume for you.\n\nStrava Integration: Trai connects with Strava to pull in your workout data. By analyzing this data (past runs, rides, swims), Trai can adjust your training based on actual performance. For example, if your Strava shows a faster running pace than before, Trai might increase the difficulty of upcoming run workouts to match your new level. This integration makes the training plans data-driven and grounded in reality.\n\nAdaptive Scheduling: Life happens – you might miss a workout or feel fatigued. Trai's adaptive scheduling means the plan will recalculate and adjust whenever things change. If you skip a long ride due to a busy weekend, Trai can rearrange future workouts to compensate or maintain progression. If you improve quickly, it will dial up the challenge; if you're struggling, it can dial it down or insert extra recovery. The plan is not set in stone; it's flexible and evolves as you do.\n\nUser Input and Preferences: The platform likely allows you to input preferences (for instance, if you prefer cycling on weekends or can only swim on certain days, Trai will account for that). This ensures the plan is not only optimal in theory but also practical for your schedule.\n\nProgress Tracking and Insights: As you train, Trai provides insights into your progress – maybe showing improvements in your pace or endurance over time. It leverages the data it collects to give you feedback, which keeps you informed and motivated. This could include charts or simple metrics indicating fitness gains, much like a coach would note your improvements.\n\nTogether, these features provide a comprehensive training assistant that not only tells you what to do each day but also listens to the results and your life realities, and then intelligently adjusts to keep you on track for your triathlon goals."
  },
  {
    question: "How does Trai benefit athletes?",
    answer: "Trai offers multiple benefits to triathletes looking to optimize their training:\n\nEnhanced Time Efficiency: One huge benefit is saving time on planning. Athletes no longer need to spend hours researching or writing out training schedules – Trai does the planning instantly and intelligently. This frees up time and mental energy for the athlete to actually train (or balance other life commitments) rather than playing coach.\n\nOptimized Performance: Because Trai's plans are data-driven and adaptive, athletes often find that their training is more effective. The AI tailors intensity and volume to be challenging but not overwhelming, leading to more enjoyable and higher-quality workouts. Over the course of training, this optimized approach can result in better performance improvements compared to a generic plan – essentially, you're training smarter, not just harder.\n\nAdaptability Reduces Overload: Trai's dynamic adjustments help prevent both under-training and over-training. If the data shows you're fatigued or not improving in a certain area, Trai can tweak the plan to add rest or change workouts, which can help avoid burnout or injury. Conversely, it can ramp things up if you're handling everything easily, ensuring you continue to make gains. This adaptability means the training is always in the right zone for your current state, which is a huge benefit for long-term progress.\n\nData-Driven Insights: Athletes using Trai gain better insight into their own training through the app's feedback. Trai leverages real training data to give you a clear picture of where you stand – for example, it might highlight that your cycling has improved by a certain percent, or that you're consistently strong in swims but need more focus on runs. These actionable insights help athletes understand their strengths and weaknesses, which is something usually only a seasoned coach could provide.\n\nConfidence and Convenience: Having an AI coach like Trai can boost an athlete's confidence because they know there's logic and data behind their plan. It removes a lot of the uncertainty (\"Am I doing too much or too little?\") and the plan adapts if circumstances change, so athletes are less likely to feel guilt or stress about missed sessions – the plan will recalibrate. It's like having a personal coach who's always paying attention, which is convenient and reassuring.\n\nOverall, Trai benefits athletes by making their training more efficient, more effective, and more personalized, which often leads to better performance on race day and a more enjoyable training journey on the way there."
  }
];

export default function TraiCasePage() {
  return (
    <CaseStudyLayout
      title="Trai"
      subtitle="AI-powered triathlon training plan generator that delivers personalized, adaptive training schemas."
      challenge="Triathletes often struggle to create personalized and effective training plans that truly adapt to their individual needs, availability, preferences, and evolving goals. The challenge was to develop an intelligent system capable of automating the generation of highly customized and dynamic training schemas."
      solution="Trai leverages AI to generate personalized, adaptive training plans for triathletes, taking into account their unique requirements and performance data."
      keyFeatures={keyFeatures}
      impact={impactFeatures}
      ctaTitle="Ready to Build Your AI Platform?"
      ctaSubtitle="Let's create an intelligent, AI-powered platform that adapts and evolves with your users' needs."
      faqs={traiFAQs}
    />
  );
}
