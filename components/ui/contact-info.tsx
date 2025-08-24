"use client";

import * as motion from "motion/react-client";
import { fadeInUp } from "@/lib/scroll-animations";
import { Mail, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@rodi-digital.com",
      description: "We typically respond within 24 hours",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "'s-Hertogenbosch, Netherlands",
      description: "Stationsweg 19, 5211 TV",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon - Fri, 9:00 - 17:00 CET",
      description: "We're in the Central European timezone",
    },
  ];

  const services = [
    "AI-Powered Applications",
    "Mobile App Development",
    "Web Development",
    "Digital Strategy Consulting",
    "Analytics Implementation",
    "User Experience Design",
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      custom={0.2}
      className="space-y-12"
    >
      <div>
        <h2 className="text-3xl font-light text-gray-900 mb-6">Get In Touch</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          We're here to help bring your digital ideas to life. Whether you're looking to build 
          an AI-powered application, develop a mobile app, or create a web platform that drives 
          growth, we'd love to discuss your project.
        </p>
      </div>

      <div className="space-y-8">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <detail.icon className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">{detail.label}</h3>
              <p className="text-gray-700 font-medium">{detail.value}</p>
              <p className="text-gray-500 text-sm mt-1">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-8">
        <h3 className="font-semibold text-gray-900 mb-4">What We Do</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
              <span className="text-gray-600 text-sm">{service}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
        <h3 className="font-semibold text-gray-900 mb-3">Ready to Start?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We believe the best digital products come from close collaboration. 
          Let's schedule a call to discuss your project goals, timeline, and how 
          we can work together to create something amazing.
        </p>
      </div>
    </motion.div>
  );
}