"use client";

import * as motion from "motion/react-client";
import { fadeInUp } from "@/lib/scroll-animations";
import { Button } from "./button";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export function ContactContent() {
  const contactInfo = [
    {
      title: "ADDRESS",
      icon: MapPin,
      content: (
        <div>
          <p>Stationsweg 19,</p>
          <p>5211 TV 's-Hertogenbosch, The Netherlands</p>
        </div>
      ),
    },
    {
      title: "EMAIL",
      icon: Mail,
      content: (
        <a
          href="mailto:hello@rodi-digital.com"
          className="text-primary hover:underline"
        >
          hello@rodi-digital.com
        </a>
      ),
    },
    {
      title: "PHONENUMBER",
      icon: Phone,
      content: (
        <a href="tel:+32499721771" className="text-primary hover:underline">
          +32 499 72 17 71
        </a>
      ),
    },
    // {
    //   title: "OFFICE HOURS",
    //   icon: null,
    //   content: <p>Monday – Friday</p>,
    // },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side - Contact Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-12"
        >
          {contactInfo.map((info, index) => (
            <div key={index}>
              <div className="flex items-center space-x-2 mb-3">
                {info.icon && <info.icon className="w-4 h-4 text-primary" />}
                <h3 className="text-sm font-medium text-primary uppercase tracking-wide">
                  {info.title}
                </h3>
              </div>
              <div className="text-gray-700 text-lg leading-relaxed">
                {info.content}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Side - WhatsApp CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
          className="flex items-center justify-center"
        >
          <div className="text-center space-y-8">
            <div className="w-32 h-32 mx-auto bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-16 h-16 text-white" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-light text-gray-900">
                Message us on WhatsApp
              </h2>
            </div>

            <Button
              href="https://wa.me/+32499721771"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start WhatsApp Chat</span>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0.4}
        className="mt-24"
      >
        <div
          className="bg-gray-100 rounded-2xl overflow-hidden"
          style={{ height: "400px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.6834890734747!2d5.302844976892394!3d51.69016897186847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6ee6b5c36b5cd%3A0x3b5b8f4c8c1c4b4a!2sStationsweg%2019%2C%205211%20TV%20's-Hertogenbosch%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rodi Digital Office Location"
          />
        </div>
      </motion.div>
    </div>
  );
}
