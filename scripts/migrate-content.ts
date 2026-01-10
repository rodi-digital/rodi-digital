import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const contentDir = join(process.cwd(), 'src/content');

// Helper to convert text to markdown document format
function textToMarkdown(text: string): string {
  // Simple conversion - just escape special YAML chars and wrap in markdown
  return text.replace(/\n\n/g, '\n\n').trim();
}

// Helper to create slug from title
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Create directories
const dirs = [
  'case-studies',
  'faqs',
  'service-features',
  'service-cards',
  'approach-principles',
  'technology-cards',
  'process-steps',
];

dirs.forEach(dir => {
  mkdirSync(join(contentDir, dir), { recursive: true });
});

// 1. CASE STUDIES
const caseStudies = [
  {
    slug: 'iprhq',
    title: 'IPRHQ',
    subtitle: 'Master your IP rights in one unified platform.',
    description: 'The first integrated platform unifying IP clearance, search, watch, enforcement, portfolio management, and monitoring into one unified system with AI-powered risk scoring.',
    challenge: 'IP teams juggle 5-7 disconnected tools and data sources for clearance, search, watch, enforcement, portfolio management, domains, and online monitoring. This fragmentation slows decisions, increases costs, creates blind spots, and risks. Manual data transfers between systems and multiple searches needed to obtain holistic results make IP management inefficient and error-prone.',
    solution: 'IPRHQ is the first integrated platform where IP data, actions, and insights work together. All key functionalities are integrated into one single platform, with data shared across all features functioning as the single source of truth. The platform includes AI-driven risk scoring for watch and monitoring results, seamless Microsoft Word integration for document development, and an integrated Chrome Side App for immediate actions against online infringements.',
    keyFeatures: [
      { title: 'Unified IP Platform', description: 'All IP functionalities integrated into one platform: clearance, search, watch, enforcement, portfolio management, domains, and online monitoring.' },
      { title: 'AI-Powered Risk Scoring', description: 'AI-driven analytics engine ranks threats to IP rights by relevance, enabling teams to focus on critical issues and initiate enforcement actions quickly.' },
      { title: 'Microsoft Word Integration', description: 'Seamlessly integrated Add-In enables document development directly in Microsoft Word using IP-related data, templates, and curated content.' },
      { title: 'Chrome Side App', description: 'Integrated Chrome extension allows immediate actions against online infringements on platforms without leaving the browser.' },
      { title: 'Single Source of Truth', description: 'Data is shared across all functionalities, powering every step and functioning as the unified source for all IP-related information.' },
      { title: 'Managed Service Options', description: 'Outsource functionalities like portfolio analysis, monitoring evaluation, contract development, and enforcement actions through Pitch.law.' },
    ],
    impact: [
      { title: 'Faster Decision-Making', description: 'Eliminates manual data transfers between systems, enabling faster clearance and enforcement decisions from weeks to hours.' },
      { title: 'Reduced Operational Costs', description: 'Simple pricing model replaces multiple SaaS subscriptions and transaction fees, resulting in lower overall operational costs.' },
      { title: 'Enhanced Collaboration', description: 'Unified platform enables seamless collaboration across IP teams, with shared data and insights accessible to all stakeholders.' },
      { title: 'Reduced Blind Spots', description: 'Integrated monitoring and watch capabilities provide comprehensive visibility across all IP rights, reducing risks from missed threats.' },
    ],
    technologySection: {
      enabled: true,
      title: 'Technology Stack',
      content: 'Built as a comprehensive web platform with AI-powered analytics engine, Microsoft Word Add-In integration, Chrome extension capabilities, and secure data infrastructure supporting real-time IP clearance, monitoring, and enforcement workflows.',
    },
    ctaTitle: "Ready to Transform Your IP Management?",
    ctaSubtitle: "Let's build an integrated IP platform that unifies your workflows and accelerates decision-making.",
    projectLinks: [
      { text: 'Visit IPRHQ', href: 'https://iprhq.com/', variant: 'outline' },
    ],
    published: true,
    order: 0,
  },
  {
    slug: 'diffgraph',
    title: 'DiffGraph',
    subtitle: 'Stop reviewing lines. Start reviewing architecture.',
    description: 'Visualize architectural changes in every pull request with interactive dependency graphs, catching breaking changes before they ship and optimizing code review workflows.',
    challenge: 'In the age of AI-assisted development, line-by-line reviews are a diminishing return. The real risk is not a misplaced semicolon, but fundamental architectural flaws that compound with every commit. These flaws are exponentially harder and more expensive to fix after the fact. Teams review every line of code, but who reviews the architecture?',
    solution: 'DiffGraph automatically visualizes the architectural impact of every pull request using clear, interactive Mermaid graphs. It shows the full dependency map of changed files and modules instantly, and integrates directly into the workflow by posting visualizations in pull request comments. This shifts the focus from what changed to how it changed the system, enabling teams to catch breaking changes before they ship.',
    keyFeatures: [
      { title: 'Architectural Visualization', description: 'Automatically visualizes the architectural impact of every pull request using clear, interactive Mermaid graphs showing the full dependency map of changed files and modules.' },
      { title: 'PR Integration', description: 'Posts architectural visualizations directly in pull request comments, providing contextual feedback without context switching or manual diagram creation.' },
      { title: 'Dependency Mapping', description: 'Shows the complete dependency map of changed files and modules, helping teams understand how changes affect the overall system architecture.' },
      { title: 'Risk Mitigation', description: 'Helps CTOs and tech leads catch costly architectural regressions before they merge, ensuring changes align with long-term system design.' },
      { title: 'Review Optimization', description: 'Enables senior engineers to focus on high-impact architectural decisions rather than syntax, optimizing review time and effectiveness.' },
    ],
    impact: [
      { title: 'Early Detection', description: 'Catch breaking changes and architectural flaws before they ship, preventing exponentially expensive fixes after deployment.' },
      { title: 'Improved Code Quality', description: 'Shift focus from line-by-line reviews to architectural impact, ensuring every change aligns with system design standards.' },
      { title: 'Time Savings', description: 'Optimize review time by focusing senior engineers on architectural decisions rather than syntax and minor code issues.' },
      { title: 'Better Collaboration', description: 'Provide clear, visual context for architectural changes directly in pull requests, improving team understanding and communication.' },
    ],
    technologySection: {
      enabled: true,
      title: 'Technology Stack',
      content: 'Built as a GitHub/GitLab integration that analyzes code changes, generates dependency graphs using Mermaid, and posts interactive visualizations directly in pull request comments. The platform uses static analysis to map architectural dependencies and changes.',
    },
    ctaTitle: 'Ready to Elevate Your Code Review Process?',
    ctaSubtitle: "Let's build a tool that helps your team catch architectural issues before they become costly problems.",
    projectLinks: [
      { text: 'Visit DiffGraph', href: 'https://diffgraph-landing.vercel.app/', variant: 'outline' },
    ],
    published: true,
    order: 1,
  },
  {
    slug: 'wally',
    title: 'Wally',
    subtitle: 'AI assistant for accounting firms that brings information and software together.',
    description: 'AI assistant for accounting firms that integrates with Outlook, provides tax expertise, performs calculations, and analyzes documents to streamline accounting workflows.',
    challenge: 'Accounting firms waste significant time searching for information and performing repetitive tasks. Employees juggle multiple disconnected systems and data sources, leading to inefficiency, errors, and frustration. The challenge was to create an AI assistant that understands accounting workflows and integrates seamlessly with existing tools like Outlook, making AI accessible to every team member without technical complexity.',
    solution: "Wally is an AI assistant specifically designed for accounting firms. It integrates with Microsoft Outlook to search emails and extract information instantly, provides specialized expertise in Belgian tax law (VAT, corporate tax, personal income tax), performs fiscal calculations and data analysis, analyzes documents to extract key information, and drafts emails. Wally is built to be accessible to every team member, from file managers to partners, bringing information and software together so accountants can focus on work that matters.",
    keyFeatures: [
      { title: 'Outlook Integration', description: 'Searches Outlook inbox and extracts information and history in seconds, eliminating manual searching through emails.' },
      { title: 'Tax Expertise', description: 'Specialized knowledge in Belgian VAT, corporate tax, and personal income tax, providing answers backed by official sources.' },
      { title: 'Fiscal Calculations', description: 'Performs complex tax calculations and data analysis, from intricate computations to dataset processing and visualization.' },
      { title: 'Document Analysis', description: 'Upload invoices, contracts, or tax documents and extract relevant information, interpreting and summarizing key details.' },
      { title: 'Email Composition', description: 'Drafts emails on demand, helping accountants communicate more efficiently with clients and colleagues.' },
      { title: 'Accessible AI', description: 'Designed for every team member, from file managers to partners, making AI accessible without technical barriers.' },
    ],
    impact: [
      { title: 'Time Savings', description: 'Reduces time lost on searching and repetitive work, allowing accountants to focus on high-value tasks that matter.' },
      { title: 'Improved Efficiency', description: 'Streamlines workflows by consolidating information and software, enabling faster access to insights and data.' },
      { title: 'Better Accuracy', description: 'Provides expert-backed answers with official sources, reducing errors and ensuring compliance with tax regulations.' },
      { title: 'Reduced Complexity', description: 'Brings peace and overview to accounting offices without complex technology, making AI usable without hassle.' },
    ],
    technologySection: {
      enabled: true,
      title: 'Technology Stack',
      content: 'Built with AI/LLM technology integrated with Microsoft Outlook and Office 365, featuring secure document processing, tax calculation engines, and natural language interfaces designed for accounting professionals.',
    },
    ctaTitle: 'Ready to Transform Your Accounting Workflow?',
    ctaSubtitle: "Let's build an AI assistant that integrates seamlessly with your existing tools and makes complex tasks simple.",
    projectLinks: [
      { text: 'Visit Wally', href: 'https://wally.be/', variant: 'outline' },
    ],
    published: true,
    order: 2,
  },
  {
    slug: 'peach',
    title: 'PEACHealth',
    subtitle: 'Living longer and better through personalized, expert-backed health information.',
    description: 'Empowering individuals with personalized, expert-backed health information through a free mobile application, fostering informed decision-making and improved patient engagement.',
    challenge: "In an overwhelming landscape of health information, individuals concerned about or living with illness often face significant challenges in finding trustworthy, up-to-date, and personalized guidance. This lack of reliable resources can lead to anxiety, confusion, and hinder their ability to actively participate in crucial health decisions. The challenge was to develop a platform that cuts through this noise, empowering users with credible information and fostering proactive engagement in their care.",
    solution: "PEACHealth is a free mobile application that delivers personalized, expert-backed, and authoritative information for people concerned about or living with illness. By consolidating guidance from world-renowned medical experts and trusted sources, the platform makes reliable health information accessible and relevant to individual needs. Recent work focused on extending the platform with a subscription model, creating a sustainable foundation for growth while offering users access to premium content and features.",
    keyFeatures: [
      { title: 'Personalized Education', description: "Educational articles personalized to the user's specific condition and needs. The platform has a system that specialists can use to create a personalize plan of information for each patient" },
      { title: 'Symptom Tracking', description: "Track and share symptoms with friends, family, and healthcare professionals. The algorithm learns from the user's input to provide more relevant information over time" },
      { title: 'Appointment Logging', description: 'Log appointments for a clear overview of care plans and medical history' },
      { title: 'Subscription Model', description: 'Introduced a subscription system to unlock premium content and features, supporting long-term growth and sustainability' },
      { title: 'Community features', description: 'Access to a supportive community of individuals facing similar health challenges, fostering connection and shared experiences' },
    ],
    impact: [
      { title: 'Empowered Decision Making', description: 'Empowers users to understand their options and actively participate in their care journey' },
      { title: 'Improved Patient Engagement', description: 'Fosters enhanced communication between patients and healthcare providers through shared insights and progress tracking.' },
      { title: 'Clinical Trials', description: 'Facilitates participation in clinical trials and measures their real-world impact, helping patients access innovative treatments while generating valuable insights for healthcare providers and researchers.' },
    ],
    technologySection: {
      enabled: true,
      title: 'Technology Stack',
      content: 'Built with modern mobile development frameworks (e.g., React Native, Expo) and robust backend systems for seamless content delivery, personalization, and subscription management.',
    },
    ctaTitle: 'Ready to Build Your Health Platform?',
    ctaSubtitle: "Let's create a digital health platform that empowers users with personalized, expert-backed information.",
    projectLinks: [
      { text: 'View on Apple App Store', href: 'https://apps.apple.com/pl/app/peachealth/id1640682684', variant: 'outline' },
      { text: 'View on Google Play Store', href: 'https://play.google.com/store/apps/details?gl=US&hl=en_GB&id=com.mycancercompanion.app', variant: 'outline' },
    ],
    published: true,
    order: 3,
  },
  {
    slug: 'rodi',
    title: 'Rodi',
    subtitle: 'A rider-first cycling app that guides your route and captures the ride.',
    description: "A free, privacy-focused bike computer app offering seamless route guidance, comprehensive performance tracking, and Strava integration, all without ads or subscriptions.",
    challenge: "Cyclists want a simple way to follow a planned route and see the key stats that matter. Many tools feel heavy or distracting on the bike, and getting a GPX from web to phone can be clumsy. The challenge was to build a lightweight, reliable experience that makes navigation and ride tracking effortless.",
    solution: "We designed and built Rodi as a free, rider-first bike computer. The app shows your route and ride statistics in a clear layout and provides turn guidance to keep you on track. A web uploader makes it easy to add routes from your favorite planning tools straight into the app. A Notion-powered blog workflow supports ongoing tips and updates, so content stays fresh without slowing development.",
    keyFeatures: [
      { title: 'Turn-by-turn guidance', description: 'Clear cues on the route so riders stop second-guessing and never miss their next turn.' },
      { title: 'Route uploads from the web', description: 'Simple GPX upload at rodi.app/upload to get any planned route into the app in seconds.' },
      { title: 'Ride stats that matter', description: 'Track distance, time, pace, and more so cyclists can review progress and plan the next ride with confidence.' },
      { title: 'Lightweight, rider-first UI', description: 'A focused interface that keeps the map and cues center stage, reducing on-bike friction.' },
      { title: 'Content system for growth', description: 'A Notion-powered blog workflow that lets you publish tips and updates without developer bottlenecks.' },
    ],
    impact: [
      { title: 'Fewer wrong turns', description: 'Reliable guidance reduces route anxiety and keeps riders on course for the entire trip.' },
      { title: 'Faster route prep', description: 'Uploading a planned route is quick and predictable, which shortens pre-ride setup and gets people rolling sooner.' },
      { title: 'Higher engagement', description: 'Clear stats and helpful content give riders a reason to return for the next ride and share routes with friends.' },
    ],
    technologySection: {
      enabled: true,
      title: 'Technology Stack',
      content: 'Built with React Native and Expo for iOS and Android, using native location and mapping capabilities for reliable on-bike guidance. The content pipeline integrates with Notion for fast publishing. Analytics and in-app instrumentation support continuous improvement across navigation and ride flows.',
    },
    ctaTitle: 'Want an app riders love to use?',
    ctaSubtitle: "Let's design and build a focused, reliable experience that ships fast and gets better with every release.",
    projectLinks: [
      { text: 'View app website', href: 'https://rodi.app/', variant: 'outline' },
    ],
    published: true,
    order: 4,
  },
  {
    slug: 'trai',
    title: 'Trai',
    subtitle: 'AI-powered triathlon training plan generator that delivers personalized, adaptive training schemas.',
    description: 'An AI-powered triathlon training plan generator that delivers personalized, adaptive training schemas, optimizing performance and simplifying planning for athletes.',
    challenge: 'Triathletes often struggle to create personalized and effective training plans that truly adapt to their individual needs, availability, preferences, and evolving goals. The challenge was to develop an intelligent system capable of automating the generation of highly customized and dynamic training schemas.',
    solution: 'Trai leverages AI to generate personalized, adaptive training plans for triathletes, taking into account their unique requirements and performance data.',
    keyFeatures: [
      { title: 'Personalized Training Plans', description: 'AI-generated, highly customized training plans based on individual needs, availability, and goals.' },
      { title: 'Strava Integration', description: 'Connects with Strava to analyze fitness data and tailor training recommendations.' },
      { title: 'Adaptive Scheduling', description: "Plans adapt dynamically as the athlete's data and preferences change." },
    ],
    impact: [
      { title: 'Enhanced Time Efficiency', description: 'Trai eliminates countless hours of manual planning and research, allowing athletes to focus entirely on their training.' },
      { title: 'Optimized Performance', description: 'Our AI-driven approach leads to more effective, enjoyable, and ultimately, higher-performing training experiences.' },
      { title: 'Actionable Data-Driven Insights', description: 'Trai leverages real training data for precise fitness assessment and continuous progress tracking, ensuring plans are always optimized.' },
    ],
    technologySection: {
      enabled: false,
    },
    ctaTitle: 'Ready to Build Your AI Platform?',
    ctaSubtitle: "Let's create an intelligent, AI-powered platform that adapts and evolves with your users' needs.",
    projectLinks: [],
    published: true,
    order: 5,
  },
];

caseStudies.forEach(caseStudy => {
  const yaml = `---
title: ${caseStudy.title}
subtitle: ${caseStudy.subtitle.replace(/'/g, "''")}
description: ${caseStudy.description.replace(/'/g, "''")}
challenge: |
${caseStudy.challenge.split('\n').map(line => `  ${line}`).join('\n')}
solution: |
${caseStudy.solution.split('\n').map(line => `  ${line}`).join('\n')}
keyFeatures:
${caseStudy.keyFeatures.map(f => `  - title: ${f.title}
    description: ${f.description.replace(/'/g, "''")}`).join('\n')}
impact:
${caseStudy.impact.map(f => `  - title: ${f.title}
    description: ${f.description.replace(/'/g, "''")}`).join('\n')}
technologySection:
  enabled: ${caseStudy.technologySection.enabled}
${caseStudy.technologySection.enabled ? `  title: ${caseStudy.technologySection.title}
  content: |
${caseStudy.technologySection.content.split('\n').map(line => `    ${line}`).join('\n')}` : ''}
ctaTitle: ${caseStudy.ctaTitle.replace(/'/g, "''")}
ctaSubtitle: ${caseStudy.ctaSubtitle.replace(/'/g, "''")}
projectLinks:
${caseStudy.projectLinks.map(link => `  - text: ${link.text}
    href: ${link.href}
    variant: ${link.variant}`).join('\n')}
published: ${caseStudy.published}
order: ${caseStudy.order}
`;
  writeFileSync(join(contentDir, 'case-studies', `${caseStudy.slug}.md`), yaml);
  console.log(`✓ Created case study: ${caseStudy.slug}`);
});

// 2. FAQS - Extract from all pages
let faqOrder = 0;
const faqs = [
  // Home FAQs
  { question: 'What services does Rodi Digital offer?', answer: "Rodi Digital is an AI, mobile, and web development agency that builds cross-platform mobile apps, intelligent AI chatbots, and high-conversion websites for clients. In essence, they specialize in developing AI-powered applications, mobile apps, and modern websites that help businesses grow online. These services cover the full spectrum of digital product development – from smart conversational systems to user-friendly apps and conversion-focused web platforms.", section: 'home', order: faqOrder++ },
  { question: "What is unique about Rodi Digital's approach to development?", answer: "Rodi Digital's approach is data-driven and collaborative. They believe exceptional digital products are created through a synergy of close client collaboration and deep analytics insights. In practice, this means they don't just build a product for you – they build it with you, involving you in decisions and backing every choice with real data and user feedback. This approach ensures the final product truly aligns with your vision and delivers measurable results.", section: 'home', order: faqOrder++ },
  { question: 'Who does Rodi Digital work with?', answer: "Rodi Digital works with organizations of all sizes, from nimble startups to large enterprises. They are based in the Netherlands but serve startups and established companies across Europe and worldwide. Their experience spans various industries and project scales, so they can adapt to the needs of both a new venture and a global business with equal ease.", section: 'home', order: faqOrder++ },
  { question: 'How can Rodi Digital help my business grow?', answer: "Rodi Digital acts as a partner in your digital transformation by creating digital products that drive real business growth. They use data and analytics to make sure each app or website they build contributes to your bottom line. By focusing on user experience and evidence-based improvements, Rodi Digital delivers solutions that not only meet your needs but often exceed expectations and drive measurable business growth. In short, they build scalable digital tools that help increase customer engagement, improve efficiency, and unlock new opportunities for your business.", section: 'home', order: faqOrder++ },
  { question: "How do I start a project with Rodi Digital?", answer: 'You can start by reaching out through their website\'s contact options. Simply click the "Let\'s Talk" or "Start Your Project" button on the site to get in touch. You can also contact Rodi Digital directly via email at hello@rodi-digital.com to discuss your ideas. The team welcomes inquiries – if you have a digital project in mind or want to explore how AI, mobile, or web solutions can transform your business, they\'re here to help bring your vision to life.', section: 'home', order: faqOrder++ },
  { question: "Where is Rodi Digital located?", answer: "Rodi Digital is headquartered in 's-Hertogenbosch, The Netherlands. Their office address is Stationsweg 19, 5211 TV 's-Hertogenbosch, and while they operate from the Netherlands, they collaborate with clients internationally. In fact, Rodi Digital proudly serves companies across Europe and worldwide, not just locally, so you can easily work with them even if you're not in the Netherlands.", section: 'home', order: faqOrder++ },
  
  // Services FAQs
  { question: 'What types of development projects can Rodi Digital handle?', answer: "Rodi Digital handles a wide range of digital development projects. They specialize in building AI-powered applications, developing cross-platform mobile apps, and designing modern websites. In practice, this means they can create intelligent AI-driven software, intuitive smartphone applications for iOS and Android, and high-performing web platforms – all tailored to drive innovation and deliver business value.", section: 'services', order: faqOrder++ },
  { question: "How do Rodi Digital's services benefit a business?", answer: "Every service Rodi Digital provides is aimed at delivering tangible benefits to your business. Their solutions are designed to drive innovation, enhance user experience, and produce measurable results. For example, an AI application from Rodi Digital might automate tedious processes (saving your team time), a mobile app might improve customer engagement and loyalty, and a revamped website could increase conversion rates. By focusing on outcomes like user satisfaction and growth metrics, Rodi Digital ensures their work contributes positively to your bottom line.", section: 'services', order: faqOrder++ },
  { question: 'Does Rodi Digital build AI-powered solutions like chatbots and automation?', answer: "Yes. AI-powered solutions are one of Rodi Digital's core offerings. They develop intelligent conversational agents (AI chatbots) that actually understand users and help customers effectively. They also create smart automation systems to handle repetitive tasks, AI-driven search tools to instantly find information in documents, and customer support intelligence platforms that can resolve common issues or assist support teams. In short, if your business can benefit from artificial intelligence – whether through a chatbot, automation workflow, personalized recommendations, or data insights – Rodi Digital has the expertise to build that solution.", section: 'services', order: faqOrder++ },
  { question: 'Can Rodi Digital develop mobile apps for both iOS and Android?', answer: "Absolutely. Rodi Digital specializes in cross-platform mobile development, meaning they build your app with a single codebase that runs natively on both iOS and Android devices. This approach ensures you reach your full audience on App Store and Google Play without having to develop and maintain two separate codebases. It also means a faster development cycle and consistent features across platforms, all without compromising on performance or user experience.", section: 'services', order: faqOrder++ },
  { question: 'What types of websites can Rodi Digital create?', answer: "Rodi Digital can create a variety of websites and web applications depending on your needs. This includes scalable SaaS platforms for subscription-based businesses, high-impact landing pages that grab attention and convert visitors into customers, and e-commerce websites optimized for smooth checkout experiences to reduce cart abandonment. They also build sites with easy content management systems, so you can update your content without technical help. Whether you need a simple marketing site, a robust online store, or a custom web application for a unique business process, Rodi Digital's web development team has you covered.", section: 'services', order: faqOrder++ },

  // Mobile FAQs
  { question: 'Why choose cross-platform mobile app development?', answer: "Cross-platform development allows you to reach both iOS and Android users with a single codebase. Rodi Digital uses this approach so that you don't need to build two separate apps for the Apple and Google app stores. The benefit is a faster development process and consistent features for all users. With one codebase for iOS and Android, you can launch to the entire mobile market at once, reduce maintenance efforts, and ensure a uniform experience across devices. It's an efficient way to maximize your app's audience and impact without doubling the cost.", section: 'mobile', order: faqOrder++ },
  { question: 'How can Rodi Digital launch my app quickly and within budget?', answer: "Rodi Digital accelerates time-to-market by focusing on a Minimum Viable Product (MVP) strategy. They will help you ship a focused first version of your app that contains the core features needed to test your concept. This means no wasted months on nice-to-have features before getting user feedback. By launching quickly and gathering real user data, they ensure you invest further only in features that prove valuable to your users. Their agile development process, short development cycles, and clear scope definition all contribute to delivering an initial app fast, without blowing the budget. In summary, Rodi Digital's \"launch, learn, and iterate\" approach helps you get a usable app in users' hands sooner and grow it smartly from there.", section: 'mobile', order: faqOrder++ },
  { question: 'How does Rodi Digital ensure my mobile app meets user needs?', answer: "Rodi Digital takes a data-driven approach to mobile development. They build analytics into the app from day one, which means from the moment your app launches (and even during beta testing), they are tracking how real users interact with it. This instrumentation can include tracking of key flows, feature usage, retention rates, and more, using tools like Firebase or Mixpanel. By having this data, Rodi Digital can see what users love and what might be causing friction. Every update or new feature is then guided by these real user insights rather than guesswork. This ensures the app evolves in a direction that genuinely meets user needs and preferences. In practice, you'll know what features to double down on and which ones might need redesign – resulting in a product that closely aligns with what your audience wants.", section: 'mobile', order: faqOrder++ },
  { question: 'What technologies does Rodi Digital use for mobile development?', answer: "Rodi Digital uses modern, proven technologies to build mobile apps efficiently. A primary framework they leverage is React Native (with Expo), which allows for near-native performance on both iOS and Android while using one codebase. This means your app runs smoothly on both platforms and can receive updates over-the-air quickly. Additionally, they incorporate analytics tools from the start – for example, integrating Firebase Analytics, Mixpanel, or a custom analytics setup to monitor user engagement and performance metrics. With React Native and Expo, you get the benefit of rapid development and deployment, and with built-in analytics, you get continuous insights into how your app is performing and where it can improve.", section: 'mobile', order: faqOrder++ },
  { question: 'Can Rodi Digital help scale my mobile app as it grows?', answer: "Yes, absolutely. Whether you're starting with a small MVP or already have a mature product, Rodi Digital plans for growth from the beginning. Their agile, data-driven process means they can iterate quickly as your user base expands. In fact, they explicitly state they can help validate a new concept or scale a mature product, launching fast and then improving the app with data-informed updates. As your app gains more users, Rodi Digital will use analytics to identify performance bottlenecks or opportunities for new features and optimize accordingly. Their cross-platform approach and clean code practices also make it easier to add functionality or handle increased load. In short, Rodi Digital is equipped to support your app's evolution at every stage – from initial launch to scaling up with many users.", section: 'mobile', order: faqOrder++ },

  // AI FAQs
  { question: 'What are AI-powered applications?', answer: "AI-powered applications are software solutions enhanced with artificial intelligence to perform tasks that normally require human intelligence. These apps can learn from data, make smart decisions, and automate complex tasks. For example, an AI application might handle repetitive work, answer customer questions via a chatbot, or sift through large documents to find answers instantly – all of which frees up your team to focus on more important work. In short, AI-powered applications use technologies like machine learning and natural language processing to make software more intelligent and helpful.", section: 'ai', order: faqOrder++ },
  { question: 'How can AI-powered applications benefit my business?', answer: "AI-powered applications can have a transformative impact on your business. They automate tedious and time-consuming tasks, allowing your employees to be more productive. They also improve customer experiences – for instance, an AI chatbot can provide quick, 24/7 support, and an AI-based search tool can help users find information in seconds. Additionally, these applications can analyze large amounts of data to uncover patterns and actionable insights (trends, customer behavior, opportunities) that you might miss otherwise. Overall, by deploying AI solutions, businesses can save time, reduce errors, personalize services at scale, and make more informed decisions driven by data.", section: 'ai', order: faqOrder++ },
  { question: 'What AI solutions does Rodi Digital specialize in?', answer: "Rodi Digital specializes in several key AI solution areas. One major area is conversational agents, meaning they build chatbots and virtual assistants that actually understand user queries and provide helpful responses (far more useful than the typical bot). They also focus on smart automation of workflows – using AI to handle repetitive tasks like ticket processing or document analysis without human intervention. Another specialty is AI-powered search, which enables users to search through documents or data using natural language and get precise answers instantly. Additionally, Rodi Digital develops customer support intelligence tools that can automatically resolve simple support requests and assist human agents with better context. They even implement personalization at scale, using AI to tailor content or recommendations to each individual user automatically. In essence, if it's an AI-driven solution – from chatbots and automation to intelligent search and personalization – Rodi Digital has the expertise to build it.", section: 'ai', order: faqOrder++ },
  { question: 'How does Rodi Digital integrate AI into existing systems?', answer: "Rodi Digital can embed advanced AI models directly into your existing systems to make the integration seamless. For example, they offer custom LLM (Large Language Model) integration, which means if your business could benefit from GPT-like language understanding, they will integrate that AI into your app or platform in a way that feels native to your users. They also use natural language processing (NLP) to help your software understand and analyze text – this can enable features like text summarization, sentiment analysis, or intelligent document search within your system. The goal is that the AI features feel like a natural part of your workflow rather than a bolted-on extra. Rodi Digital designs these integrations so that your team and customers enjoy a smoother experience enhanced by AI, without needing to jump between separate tools or suffer clunky workarounds.", section: 'ai', order: faqOrder++ },
  { question: 'How do AI-powered applications improve customer support?', answer: "AI-powered applications can dramatically improve customer support by making it more responsive and efficient. For instance, AI chatbots can handle common inquiries instantly, giving customers quick answers at any hour. Rodi Digital also implements customer support intelligence systems that automatically resolve simple support cases and equip your human support agents with better context for complex issues. This means customers get solutions faster, and support staff can focus on the tougher problems with all the relevant information at hand. The end result is faster issue resolution, higher customer satisfaction, and a support team that isn't overwhelmed by repetitive questions.", section: 'ai', order: faqOrder++ },

  // Web FAQs
  { question: 'What web development services does Rodi Digital provide?', answer: "Rodi Digital provides end-to-end web development, focusing on websites that are fast, flexible, and growth-oriented. They can build scalable SaaS platforms for subscription-based businesses, ensuring your web app grows smoothly as you add users. They also create high-impact landing pages designed to grab attention and convert visitors instead of letting them bounce. If you need an online store, Rodi Digital develops e-commerce websites with smooth shopping experiences and optimized checkout flows to reduce cart abandonment and boost sales. Content management is another strength – they deliver websites that your team can easily update without waiting on a developer, so you can keep content fresh and stay agile in your marketing. And for clients with unique needs, Rodi Digital builds custom web applications to solve specific business problems and streamline operations (going beyond what any off-the-shelf solution could do). In summary, whether it's a marketing site, online store, SaaS product, or custom web app, Rodi Digital has the expertise to develop it.", section: 'web', order: faqOrder++ },
  { question: 'How does Rodi Digital ensure a website actually drives growth?', answer: "Rodi Digital focuses on more than just making a site look good – they ensure it performs well and converts users into customers. They emphasize factors like site speed, user experience, and conversion-oriented design. For example, they craft landing pages with strong calls-to-action and engaging content to grab visitor attention and encourage sign-ups or inquiries. They also optimize e-commerce pages for a seamless purchase process, which boosts sales. On the technical side, Rodi Digital prioritizes performance and SEO-friendly structure – that means fast load times, clean code, mobile responsiveness, and proper search engine optimization so your site ranks well and is easily found. Security is included too, ensuring users trust your site. By combining all these elements, Rodi Digital delivers websites that not only function smoothly but actively help grow your business (more leads, more sales, or whatever your goal may be).", section: 'web', order: faqOrder++ },
  { question: 'Will I be able to update my website easily after Rodi Digital builds it?', answer: "Yes. A big part of Rodi Digital's web philosophy is easy content management for clients. They build websites so that your team can update text, images, blog posts, etc., without needing a developer for every change. This often involves implementing a user-friendly content management system (CMS) or admin interface tailored to your site. The benefit is that you remain in control of your site's content – you can quickly publish news, edit product info, or launch a new landing page on your own schedule. Staying agile with your content keeps your website fresh and relevant, and Rodi Digital ensures you have the tools and training (if needed) to do this easily.", section: 'web', order: faqOrder++ },
  { question: 'Does Rodi Digital develop custom web applications?', answer: "Absolutely. If your needs go beyond a standard marketing website, Rodi Digital can build custom web applications to meet those needs. This could be anything from a specialized online tool for your business operations to a unique customer portal – essentially, web software tailored to your specifications. Rodi Digital's team has experience creating custom solutions that address unique business problems and streamline processes. They will work with you from the discovery phase to define the requirements and then design a web application that fits perfectly. The result is a bespoke web platform that does exactly what you need, which off-the-shelf products often can't achieve.", section: 'web', order: faqOrder++ },
  { question: "What is Rodi Digital's process for web development projects?", answer: "Rodi Digital follows a clear, four-phase web development process to ensure projects stay on track and clients are always in the loop. It begins with Discovery and Planning, where they learn about your goals, target audience, and requirements to map out the right strategy. Next comes Design and Architecture - they create user-focused designs (UI/UX) and a solid technical plan to support both today's needs and future growth. The third phase is Development and Integration, during which they iteratively build the site and integrate any necessary systems or third-party services. Importantly, Rodi Digital conducts regular check-ins and live demos throughout development so you can see progress and provide feedback in real time. The final phase is Launch and Support: they handle a smooth deployment of your website and stand by for ongoing support and maintenance. This means after launch, they're available to fix issues, make improvements, or add features as needed. Throughout all these steps, transparency and communication are key – you'll know what's happening at every stage of your web project.", section: 'web', order: faqOrder++ },

  // Cases FAQs
  { question: 'What kinds of projects has Rodi Digital worked on?', answer: "Rodi Digital's portfolio spans several industries and types of digital products. For example, they've developed a healthcare mobile app that delivers personalized medical information (the PEACHealth app), a sports/cycling app that serves as a bike computer for route guidance and tracking (the Rodi bike app), and an AI-driven fitness platform for triathlon training (the TRAI training plan generator). These case studies show their versatility: one project in health tech, one in sport/fitness tech, and others leveraging AI. In each case, Rodi Digital took on the client's vision – whether it was improving patient education, enhancing athletic training, or creating a new digital service – and built a product to fulfill that vision.", section: 'cases', order: faqOrder++ },
  { question: "What do Rodi Digital's case studies demonstrate?", answer: "The case studies demonstrate how Rodi Digital turns client visions into successful digital products. Each case study walks through the challenge the client was facing, the solution Rodi Digital crafted, and the results or impact of that solution. Through these stories, you see Rodi Digital's capabilities in action: their strategic thinking, technical skills, and focus on measurable outcomes. For instance, you'll find details on how they tackled the overwhelming landscape of health information in PEACHealth and empowered patients with trustworthy guidance. You'll also see how they built a cyclist-focused app that solved navigation and tracking issues riders face, and how an AI fitness coach was created to adapt to athletes' needs. Overall, the case studies highlight Rodi Digital's ability to solve complex problems with creative, user-centered technology – and to deliver projects that make a real difference for the client and end-users.", section: 'cases', order: faqOrder++ },
  { question: 'How has Rodi Digital helped clients through these projects?', answer: "In each project, Rodi Digital addressed a specific pain point for their client and delivered a solution that had a meaningful impact. For example, in the PEACHealth project, they helped a healthcare initiative provide patients with personalized, credible health information, cutting through the noise of the internet so individuals could make informed decisions about their health. In the Rodi cycling app project (an internal project of theirs), they solved the problem of cyclists needing a simple way to follow routes and track stats by creating a free, easy-to-use bike computer app that doesn't distract riders. And with the TRAI platform, they gave triathletes an AI-powered coach that generates custom training plans, saving athletes time and optimizing their performance training. In all these cases, Rodi Digital's involvement meant the client (or target users) got a product that significantly improved their situation – be it more empowered patients, happier cyclists, or better-prepared athletes. These outcomes show Rodi Digital's commitment to not just delivering software, but solving real-world problems for its clients.", section: 'cases', order: faqOrder++ },
  { question: "Where can I find details about Rodi Digital's case studies?", answer: 'Detailed case studies are available on Rodi Digital\'s website under the "Case Studies" or "Portfolio" section. Each major project has its own page – for instance, PEACHealth, Rodi, and TRAI each have a dedicated case study page. On those pages, you\'ll find an in-depth breakdown including the project challenge (the problem to be solved), our solution (how Rodi Digital approached and built the product), the key features of the solution, and the results & impact achieved. These case study pages are a great resource to understand what was done and the value it delivered. Just navigate to the Cases section of the site and select the case you\'re interested in to read the full story.', section: 'cases', order: faqOrder++ },
  { question: "What do these case studies say about Rodi Digital's capabilities?", answer: "The diversity and success of the case studies speak volumes about Rodi Digital's capabilities. They show that Rodi Digital can handle cutting-edge AI integration, like building an AI that generates triathlon training plans, as well as solid mobile and web development, like creating a robust cross-platform app for cyclists or a content-rich health information app. The case studies highlight Rodi Digital's strengths in understanding user needs and crafting engaging user experiences – for example, the improved patient engagement in PEACHealth where users felt more empowered in health decisions. They also show Rodi's focus on data and results, such as the cycling app leading to higher user engagement (riders coming back for more rides and sharing routes). In essence, the case studies confirm that Rodi Digital is capable of delivering complex, innovative projects that deliver real, measurable benefits. Whether it's leveraging AI for personalization, building seamless mobile user interfaces, or designing scalable platforms, Rodi Digital has demonstrated expertise across the board.", section: 'cases', order: faqOrder++ },

  // Approach FAQs
  { question: "What is Rodi Digital's approach to development?", answer: "Rodi Digital's approach is all about combining data-driven insights with close collaboration. They believe that the best digital products come from working in true partnership with clients and grounding decisions in real data. In practice, this means Rodi Digital involves you (the client) at every step and uses analytics and user feedback to guide the project. They often say \"we don't just build for you; we build with you,\" which captures their philosophy. By building with the client, they ensure the final product aligns with the client's vision and that every feature added is backed by evidence or clear rationale. This approach reduces miscommunication, keeps the project focused on your goals, and typically results in a more successful outcome.", section: 'approach', order: faqOrder++ },
  { question: 'Why does Rodi Digital emphasize analytics in their process?', answer: "Rodi Digital emphasizes analytics because they see data as a crucial guide for making the right decisions. Many products fail because they're built on assumptions – Rodi Digital avoids that by embedding analytics at the core of development. They feel data shouldn't just live in dusty reports; it should spark conversations and shape features. By tracking user behavior and key metrics continuously, they turn guesses into data-backed insights. This approach means, for example, instead of arguing opinions on a feature, they'll look at what users are actually doing and make informed improvements. Ultimately, having analytics in place leads to a product that grows and improves based on real evidence, ensuring better ROI and a product that truly fits user needs.", section: 'approach', order: faqOrder++ },
  { question: "How does Rodi Digital collaborate with clients during a project?", answer: "Rodi Digital collaborates closely with clients throughout a project. They emphasize frequent communication, regular check-ins, and live demos so clients can see progress and provide feedback at every stage. This collaborative approach means clients are involved in decisions, can ask questions, and give input throughout development. By building together, Rodi Digital ensures the final product aligns with the client's vision and goals.", section: 'approach', order: faqOrder++ },

  // Analytics FAQs
  { question: "Why make analytics part of a product's development?", answer: "Making analytics part of development is crucial to eliminate guesswork after launch. Many companies launch a product and then realize they have no idea how users are actually using it. Rodi Digital prevents this by integrating analytics tracking from the very beginning. By doing so, you always know what's really happening inside your app or website – which features are used, where users drop off, etc. This means every decision, both during development and post-launch, can be informed by real user behavior. In short, embedding analytics ensures you're not flying blind; you can measure what works and quickly identify what doesn't, leading to a smarter product and better ROI.", section: 'analytics', order: faqOrder++ },
  { question: 'How does Rodi Digital implement analytics during development?', answer: "Rodi Digital follows a proactive plan to weave analytics into the development process without slowing it down. First, they start tracking insights from day one – as soon as there's a testable feature, they instrument it to gather relevant data. This could include user actions, performance metrics, or conversion events, depending on the product. Second, they practice built-in measurement: every new feature comes with its own analytics checkpoints (with clear naming and purpose) so nothing important goes unmeasured. By the time you launch, every key user flow is already being monitored, giving you confidence that you'll understand user behavior from the get-go. After launch, Rodi Digital doesn't stop - they stay data-driven, continuously watching trends and usage patterns. They share simple, focused reports that highlight what users are doing and any emerging opportunities or issues. This implementation plan means you get immediate feedback on your product and can iterate quickly based on evidence, all without a lengthy analytics setup phase delaying the project.", section: 'analytics', order: faqOrder++ },
  { question: 'What benefits do continuous analytics provide to a project?', answer: "Continuous analytics provide numerous benefits throughout a project's life cycle. One key benefit is continuous value creation – even after the initial build, analytics help identify where your product can keep improving, thereby delivering ongoing value to your business. Another benefit is data-backed recommendations: instead of guessing which new feature or change will help, you can rely on the numbers. Rodi Digital will only suggest improvements when data shows they will make a real difference. This means your investment is directed to things that have proven impact, enhancing the credibility and ROI of the project. Continuous analytics also empower every member of the team (designers, developers, product managers) with insights to do better work, ensuring everyone is aligned on what users need. Over time, this data-driven vigilance leads to a product that stays competitive, as you're regularly tuning the experience based on actual user feedback loops. In essence, continuous analytics turn your product development into a living, learning process rather than a one-and-done effort.", section: 'analytics', order: faqOrder++ },
  { question: 'How do analytics help all stakeholders in a project?', answer: "Rodi Digital makes sure analytics insights are shared with all stakeholders, not just a technical team or management. This means designers can see which UI elements users engage with, developers can identify performance pain points, and product teams can watch feature adoption in real time. By empowering every stakeholder with data, better decisions are made at all levels. For example, a designer might use analytics to simplify a page if data shows users are confused, or a marketing team might adjust strategies based on which features users love most. Analytics essentially become a common language for the team – everyone from the CEO to the developers can use concrete numbers to discuss what's happening. This shared visibility fosters transparency and a unified direction, as all team members are working off the same evidence of what users want and how the product is performing. The result is a more efficient team and a more user-aligned product.", section: 'analytics', order: faqOrder++ },
  { question: 'Will adding analytics slow down my project?', answer: "No, Rodi Digital's approach is to implement analytics in a lightweight and iterative way that won't bog down development. They understand that getting analytics right is important, but it shouldn't become a bottleneck. Their mantra is it's better to start with something trackable quickly and refine it over time. In practice, they'll add essential tracking early (even if it's basic) and then improve the depth/quality of analytics as the project evolves. This way, you begin gathering insights without delay. Rodi Digital's team uses efficient tools and predefined best practices for analytics, so the overhead is minimal. By the time your product is live, you'll have solid analytics without having extended your timeline to build a perfect analytics system from scratch first. The focus is on balancing insight with agility: you get the data you need, when you need it, without sacrificing development speed.", section: 'analytics', order: faqOrder++ },

  // Collaboration FAQs
  { question: 'How does Rodi Digital collaborate with clients?', answer: "Rodi Digital's collaborative approach means they don't just build for you – they build with you. They embed themselves into your team, involve you in decisions, and maintain frequent communication through regular updates and live demos. This ensures you're always in the loop and can provide feedback at every stage of development.", section: 'collaboration', order: faqOrder++ },
  { question: 'What makes Rodi Digital\'s collaboration different?', answer: "Rodi Digital emphasizes close partnership, frequent updates, continuous synchronization, and an open feedback loop. They work side-by-side with your team, holding regular sync sessions and encouraging honest feedback so they can adapt and refine quickly. This collaborative rhythm keeps everyone aligned and confident throughout the project.", section: 'collaboration', order: faqOrder++ },

  // Contact FAQs
  { question: 'How can I contact Rodi Digital?', answer: "You can easily get in touch with Rodi Digital through a few methods. The simplest way is to send them an email at hello@rodi-digital.com. Additionally, on their website there's a \"Let's Talk\" or contact form button – clicking that will either open a contact form or your email client to start a conversation. Rodi Digital is very responsive to inquiries; they encourage prospective clients to reach out with any project ideas or questions. Whether you choose email, or the website form, just provide a brief overview of what you're looking to achieve, and their team will be happy to discuss how they can help.", section: 'contact', order: faqOrder++ },
  { question: 'Where is Rodi Digital located?', answer: "Rodi Digital is located in the city of 's-Hertogenbosch in The Netherlands. Their full address is Stationsweg 19, 5211 TV 's-Hertogenbosch, which is in the southern part of the Netherlands. Even though that's their physical location, remember that they work with clients all over. So if you're not nearby, that's perfectly okay – they collaborate with companies across Europe and worldwide. The team is accustomed to communicating remotely via email, video calls, and other online collaboration tools. If you are nearby or visiting, you could potentially arrange an in-person meeting at their office, but it's not necessary for starting a project.", section: 'contact', order: faqOrder++ },
  { question: 'Do I need to be in the Netherlands to work with Rodi Digital?', answer: "Not at all. Rodi Digital works with clients internationally. While they are based in the Netherlands, they have successfully delivered projects for startups and enterprises across Europe and even globally. The nature of digital work means most collaboration can happen remotely – through video conferences, project management tools, and continuous online communication. Rodi Digital's collaborative approach is well-suited for remote work; they keep clients in the loop regardless of distance. So whether you're in London, New York, or anywhere in between, you can engage Rodi Digital for a project. They'll ensure that distance is not a barrier by adapting to time zones and using clear communication practices to make the partnership smooth.", section: 'contact', order: faqOrder++ },
  { question: 'Does Rodi Digital work with startups as well as larger companies?', answer: "Yes, Rodi Digital is open to working with both startups and established companies. In fact, they have experience with the full spectrum – from helping startups build their very first digital product to collaborating with enterprises on sophisticated development projects. Their approach scales to the client's size: for startups, they can act as a nimble, strategic tech partner who guides you through the development process and helps you go to market fast; for larger organizations, they can integrate with existing teams and focus on specific digital transformation or innovation initiatives. The key commonality is that Rodi Digital focuses on delivering measurable value, whether the client is a two-person startup or a multinational firm. They understand the different needs and constraints of each; for example, a startup might need MVP development on a tight budget, whereas an enterprise might require stakeholder alignment and rigorous scalability considerations. Rodi Digital's portfolio (as seen in their case studies) indeed includes a mix of both, indicating they're adept at adjusting their style and process to suit the client's context. So regardless of your company's size, you can feel confident approaching Rodi Digital about your project.", section: 'contact', order: faqOrder++ },
];

faqs.forEach(faq => {
  const filename = slugify(faq.question);
  const yaml = `---
question: ${faq.question.replace(/'/g, "''")}
answer: |
${faq.answer.split('\n').map(line => `  ${line}`).join('\n')}
section: ${faq.section}
order: ${faq.order}
published: true
`;
  writeFileSync(join(contentDir, 'faqs', `${filename}.md`), yaml);
  console.log(`✓ Created FAQ: ${filename}`);
});

// 3. SERVICE CARDS
const serviceCards = [
  {
    slug: 'ai-powered-applications',
    title: 'AI-Powered Applications',
    description: 'Let AI handle the busywork while you focus on growth. We build intelligent systems that deliver real value to your team and customers.',
    href: '/services/ai-enabled-applications',
    items: [
      'Content generation - Instant, brand-aligned copy, blogs, visuals, ads — polished at scale.',
      'Conversational agents - Chatbots and voice assistants that feel more human than ever.',
      'Process automation - Eliminate repetitive tasks and let your team do what matters.',
      'Intelligent search & Insights - Search across documents, get answers instantly.',
      'Personalization Engine - Tailored content & experiences for each customer, powered by your data.',
    ],
    context: 'home-services',
    order: 0,
    published: true,
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Development',
    description: 'Turn your app idea into reality faster than you thought possible. Launch, learn, and grow without wasting budget.',
    href: '/services/mobile',
    items: [
      'iOS and Android - Build once, launch on iOS + Android, without trade-offs.',
      'Rapid prototyping & launch - Validate your app idea without wasting months or budget.',
      'Engaging user experience - Keep users active with smooth flows, smart notifications, and intuitive design.',
    ],
    context: 'home-services',
    order: 1,
    published: true,
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Your website shouldn\'t just look good—it should drive growth. We design and build sites that convert clicks into customers.',
    href: '/services/web',
    items: [
      'SaaS platforms - Scalable foundations for subscription businesses.',
      'E-commerce - Smooth checkouts that reduce cart abandonment.',
      'Easy content management - Stay in control without developer bottlenecks. Update content in seconds.',
      'Company websites - Professional, fast, and built to grow with your business.',
    ],
    context: 'home-services',
    order: 2,
    published: true,
  },
];

serviceCards.forEach(card => {
  const yaml = `---
slug: ${card.slug}
title: ${card.title.replace(/'/g, "''")}
description: ${card.description.replace(/'/g, "''")}
href: ${card.href}
items:
${card.items.map(item => `  - ${item.replace(/'/g, "''")}`).join('\n')}
context: ${card.context}
order: ${card.order}
published: ${card.published}
`;
  writeFileSync(join(contentDir, 'service-cards', `${card.slug}.md`), yaml);
  console.log(`✓ Created service card: ${card.slug}`);
});

// 4. SERVICE FEATURES
let featureOrder = 0;
const serviceFeatures = [
  // AI Features
  { title: 'Custom LLM integration', description: 'We embed the latest language models directly into your systems so they feel seamless. This removes clunky workarounds and gives your team and customers a smoother experience.', service: 'ai', category: 'expertise', order: featureOrder++, published: true },
  { title: 'Natural language processing', description: 'We help your applications understand text, summarize information, and detect sentiment. That means quicker decisions and less manual effort spent sifting through content.', service: 'ai', category: 'expertise', order: featureOrder++, published: true },
  { title: 'AI-powered automation workflows', description: 'From handling tickets to analyzing documents, we automate repetitive tasks with intelligence built in. Your team saves time and can focus on high-value work.', service: 'ai', category: 'expertise', order: featureOrder++, published: true },
  { title: 'AI-powered search', description: 'No more endless digging through documents. Our AI search understands context and delivers the right answers instantly.', service: 'ai', category: 'expertise', order: featureOrder++, published: true },
  { title: 'Customer support intelligence', description: 'We streamline support by handling simple cases automatically and giving agents better context for complex ones. This speeds up resolutions and keeps customers happy.', service: 'ai', category: 'expertise', order: featureOrder++, published: true },
  { title: 'Conversational agents', description: 'Finally, chatbots that actually understand and help your customers.', service: 'ai', category: 'application', order: featureOrder++, published: true },
  { title: 'Smart automations', description: 'Free your team from repetitive manual processes so they can focus on higher-value work.', service: 'ai', category: 'application', order: featureOrder++, published: true },
  { title: 'Personalization at scale', description: 'Adapt content and recommendations to each individual user automatically.', service: 'ai', category: 'application', order: featureOrder++, published: true },
  { title: 'Actionable insights', description: 'Spot patterns, trends, and growth opportunities hidden in your data.', service: 'ai', category: 'application', order: featureOrder++, published: true },
  
  // Mobile Features
  { title: 'Cross-platform coverage', description: 'One codebase for iOS and Android. Reach your full audience faster and keep maintenance simple.', service: 'mobile', category: 'strength', order: featureOrder++, published: true },
  { title: 'MVP that learns', description: 'Ship a focused first version, measure what users do, and invest only in features that prove their value.', service: 'mobile', category: 'strength', order: featureOrder++, published: true },
  { title: 'Push notifications done right', description: 'Send timely, relevant messages that bring users back without annoying them. Drive retention with intent, not volume.', service: 'mobile', category: 'strength', order: featureOrder++, published: true },
  { title: 'Data-driven iteration', description: 'Tracking is built in from the start. Every update is guided by real behavior, not guesswork.', service: 'mobile', category: 'strength', order: featureOrder++, published: true },
  { title: 'Agile solo delivery', description: 'Work directly with the builder. Clear communication, fast turnarounds, and a product that fits your needs.', service: 'mobile', category: 'strength', order: featureOrder++, published: true },
  { title: 'Fast time to market', description: 'Short cycles, clean scope, and a clear plan. Launch sooner, learn sooner, grow sooner.', service: 'mobile', category: 'strength', order: featureOrder++, published: true },
  { title: 'React Native and Expo', description: 'Native performance with a single codebase, quick builds, and smooth updates over the air.', service: 'mobile', category: 'technology', order: featureOrder++, published: true },
  { title: 'Analytics integration', description: 'Instrumentation from day one with Firebase, Mixpanel, or a custom setup. Track key flows, retention, and engagement so you know what to improve next.', service: 'mobile', category: 'technology', order: featureOrder++, published: true },
  
  // Web Features
  { title: 'SaaS platforms', description: 'Scalable foundations that grow with your subscription business and keep performance steady as you add users.', service: 'web', category: 'expertise', order: featureOrder++, published: true },
  { title: 'High-impact landing pages', description: 'Pages designed to grab attention and convert visitors instead of letting them bounce away.', service: 'web', category: 'expertise', order: featureOrder++, published: true },
  { title: 'E-commerce optimized', description: 'Smooth shopping experiences with checkout flows that reduce cart abandonment and boost sales.', service: 'web', category: 'expertise', order: featureOrder++, published: true },
  { title: 'Easy content management', description: 'Websites your team can update without waiting on a developer. Stay agile and keep your content fresh.', service: 'web', category: 'expertise', order: featureOrder++, published: true },
  { title: 'Custom web applications', description: 'When you need more than a standard site, we build tools that solve unique business problems and streamline operations.', service: 'web', category: 'expertise', order: featureOrder++, published: true },
  { title: 'Performance and security', description: 'Fast load times, SEO-friendly structure, and strong protection so your site is both visible and reliable.', service: 'web', category: 'expertise', order: featureOrder++, published: true },
  { title: 'Discovery and planning', description: 'We start by learning about your goals, audience, and requirements to map out the right approach.', service: 'web', category: 'process', order: featureOrder++, published: true },
  { title: 'Design and architecture', description: 'User-focused design paired with a technical foundation that supports today\'s needs and tomorrow\'s growth.', service: 'web', category: 'process', order: featureOrder++, published: true },
  { title: 'Development and integration', description: 'Iterative builds with check-ins and demos so you can see progress and give feedback along the way.', service: 'web', category: 'process', order: featureOrder++, published: true },
  { title: 'Launch and support', description: 'Smooth deployment followed by ongoing support and maintenance so your site keeps performing.', service: 'web', category: 'process', order: featureOrder++, published: true },
];

serviceFeatures.forEach(feature => {
  const filename = slugify(feature.title);
  const yaml = `---
title: ${feature.title.replace(/'/g, "''")}
description: |
${feature.description.split('\n').map(line => `  ${line}`).join('\n')}
service: ${feature.service}
category: ${feature.category}
order: ${feature.order}
published: ${feature.published}
`;
  writeFileSync(join(contentDir, 'service-features', `${filename}.md`), yaml);
  console.log(`✓ Created service feature: ${filename}`);
});

// 5. APPROACH PRINCIPLES
const approachPrinciples = [
  {
    slug: 'analytics',
    title: 'Analytics at the Core',
    description: 'We believe analytics should go beyond dashboards – it should spark conversations. We embed analytics at every step of product development, turning assumptions into data-backed insights and features into tangible outcomes.',
    href: '/approach/analytics',
    order: 0,
    published: true,
  },
  {
    slug: 'collaboration',
    title: 'Collaboration',
    description: 'We don\'t just build for you; we build with you. Our collaborative approach ensures a seamless partnership throughout your digital product development journey.',
    href: '/approach/collaboration',
    order: 1,
    published: true,
  },
];

approachPrinciples.forEach(principle => {
  const yaml = `---
title: ${principle.title.replace(/'/g, "''")}
description: ${principle.description.replace(/'/g, "''")}
href: ${principle.href}
order: ${principle.order}
published: ${principle.published}
`;
  writeFileSync(join(contentDir, 'approach-principles', `${principle.slug}.md`), yaml);
  console.log(`✓ Created approach principle: ${principle.slug}`);
});

// 6. TECHNOLOGY CARDS
let techOrder = 0;
const technologyCards = [
  { title: 'React Native and Expo', description: 'Native performance with a single codebase, quick builds, and smooth updates over the air.', service: 'mobile', order: techOrder++, published: true },
  { title: 'Analytics integration', description: 'Instrumentation from day one with Firebase, Mixpanel, or a custom setup. Track key flows, retention, and engagement so you know what to improve next.', service: 'mobile', order: techOrder++, published: true },
];

technologyCards.forEach(card => {
  const filename = slugify(card.title);
  const yaml = `---
title: ${card.title.replace(/'/g, "''")}
description: |
${card.description.split('\n').map(line => `  ${line}`).join('\n')}
service: ${card.service}
order: ${card.order}
published: ${card.published}
`;
  writeFileSync(join(contentDir, 'technology-cards', `${filename}.md`), yaml);
  console.log(`✓ Created technology card: ${filename}`);
});

// 7. PROCESS STEPS
let processOrder = 0;
const processSteps = [
  { title: 'Discovery and planning', description: 'We start by learning about your goals, audience, and requirements to map out the right approach.', service: 'web', order: processOrder++, published: true },
  { title: 'Design and architecture', description: 'User-focused design paired with a technical foundation that supports today\'s needs and tomorrow\'s growth.', service: 'web', order: processOrder++, published: true },
  { title: 'Development and integration', description: 'Iterative builds with check-ins and demos so you can see progress and give feedback along the way.', service: 'web', order: processOrder++, published: true },
  { title: 'Launch and support', description: 'Smooth deployment followed by ongoing support and maintenance so your site keeps performing.', service: 'web', order: processOrder++, published: true },
  { title: 'Start with insights', description: 'From day one we track what matters, so you are never left guessing about user behavior.', service: 'general', order: processOrder++, published: true },
  { title: 'Built-in measurement', description: 'Every feature includes meaningful tracking with clear names and purpose. No more messy data that is hard to use.', service: 'general', order: processOrder++, published: true },
  { title: 'Launch with confidence', description: 'By the time you go live, every key flow is monitored. You see instantly how people are using your product.', service: 'general', order: processOrder++, published: true },
  { title: 'Stay data-driven', description: 'After launch we keep an eye on trends and share simple reports that guide smarter decisions and steady growth.', service: 'general', order: processOrder++, published: true },
];

processSteps.forEach(step => {
  const filename = slugify(step.title);
  const yaml = `---
title: ${step.title.replace(/'/g, "''")}
description: |
${step.description.split('\n').map(line => `  ${line}`).join('\n')}
service: ${step.service}
order: ${step.order}
published: ${step.published}
`;
  writeFileSync(join(contentDir, 'process-steps', `${filename}.md`), yaml);
  console.log(`✓ Created process step: ${filename}`);
});

// 8. SINGLETONS
// Site Settings
const siteSettings = `---
siteName: Rodi Digital
siteDescription: AI, Mobile & Web Development Agency in the Netherlands specializing in AI chatbots, cross-platform mobile apps, and high-conversion websites
siteUrl: https://rodi-digital.com
companyName: Rodi Digital
companyDescription: |
  Leading AI, mobile & web development agency in the Netherlands. 
  We build cross-platform mobile apps, AI chatbots, and high-conversion 
  websites for startups and enterprises across Europe and worldwide.
vatNumber: NL867887370B01
gtmId: G-TJNMYDCFDT
analyticsEnabled: true
`;
writeFileSync(join(contentDir, 'site-settings.md'), siteSettings);
console.log('✓ Created site-settings singleton');

// Navigation
const navigation = `---
logoAlt: Rodi Digital - AI, Mobile & Web Development Agency Netherlands
mainNavigation:
  - name: Approach
    href: /approach
    children:
      - name: Analytics
        href: /approach/analytics
      - name: Collaboration
        href: /approach/collaboration
  - name: Services
    href: /services
    children:
      - name: AI-Powered Applications
        href: /services/ai-enabled-applications
      - name: Mobile
        href: /services/mobile
      - name: Web
        href: /services/web
  - name: Cases
    href: /cases
    children:
      - name: IPRHQ
        href: /cases/iprhq
      - name: DiffGraph
        href: /cases/diffgraph
      - name: Wally
        href: /cases/wally
      - name: PEACHealth
        href: /cases/peach
      - name: Rodi
        href: /cases/rodi
      - name: Trai
        href: /cases/trai
ctaButton:
  text: Let's Chat
  href: /contact
`;
writeFileSync(join(contentDir, 'navigation.md'), navigation);
console.log('✓ Created navigation singleton');

// Footer
const footer = `---
sections:
  - title: Development Services
    links:
      - label: All Development Services
        href: /services
      - label: AI Chatbot Development
        href: /services/ai-enabled-applications
      - label: Mobile App Development
        href: /services/mobile
      - label: Web Development Netherlands
        href: /services/web
  - title: Our Approach
    links:
      - label: Development Process
        href: /approach
      - label: Data Analytics
        href: /approach/analytics
      - label: Client Collaboration
        href: /approach/collaboration
  - title: Portfolio
    links:
      - label: All Case Studies
        href: /cases
      - label: Healthcare Mobile App
        href: /cases/peach
      - label: Sports App Development
        href: /cases/rodi
      - label: AI Fitness Platform
        href: /cases/trai
  - title: Company
    links:
      - label: Contact Agency
        href: /contact
      - label: AI Resources
        href: /llms.txt
companyAddress:
  street: Stationsweg 19
  postalCode: "5211 TV"
  city: "'s-Hertogenbosch"
  country: The Netherlands
copyright: "© 2024 Rodi Digital. Built with you."
ctaButton:
  text: Let's Talk
  href: /contact
`;
writeFileSync(join(contentDir, 'footer.md'), footer);
console.log('✓ Created footer singleton');

// Contact Info
const contactInfo = `---
email: hello@rodi-digital.com
address:
  street: Stationsweg 19
  postalCode: "5211 TV"
  city: "'s-Hertogenbosch"
  country: The Netherlands
officeHours: Mon - Fri, 9:00 - 17:00 CET
calComUrl: 
`;
writeFileSync(join(contentDir, 'contact-info.md'), contactInfo);
console.log('✓ Created contact-info singleton');

console.log('\n✅ Migration complete! All content files generated.');
console.log(`📁 Content directory: ${contentDir}`);
