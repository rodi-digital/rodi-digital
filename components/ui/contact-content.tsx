"use client";

import * as motion from "motion/react-client";
import { fadeInUp } from "@/lib/scroll-animations";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { copy } from "@/lib/copy";

export function ContactContent() {
  const contactInfo = [
    {
      title: copy.contactPage.contactInfo[0].title,
      icon: MapPin,
      content: (
        <div>
          <p>{copy.contact.address.street},</p>
          <p>{copy.contact.address.postalCode} {copy.contact.address.city}, {copy.contact.address.country}</p>
        </div>
      ),
    },
    {
      title: copy.contactPage.contactInfo[1].title,
      icon: Mail,
      content: (
        <a
          href={`mailto:${copy.contact.email}`}
          className="text-primary hover:underline"
        >
          {copy.contact.email}
        </a>
      ),
    },
    {
      title: copy.contactPage.contactInfo[2].title,
      icon: Phone,
      content: (
        <a href={`tel:${copy.contact.whatsapp}`} className="text-primary hover:underline">
          {copy.contact.phone}
        </a>
      ),
    },
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
            <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center">
              <Image
                src="/images/WhatsappLogoGreen.svg"
                alt={copy.contactPage.whatsappAlt}
                width={128}
                height={128}
              />
            </div>

            <Link
              href={`https://wa.me/${copy.contact.whatsapp}`}
              className="inline-block hover:scale-105 transition-transform duration-200"
            >
              <Image
                src="/images/WhatsAppButtonGreenMedium.png"
                alt={copy.contactPage.whatsappButtonAlt}
                width={300}
                height={60}
                className="rounded-full"
              />
            </Link>
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
            title={copy.contactPage.mapTitle}
          />
        </div>
      </motion.div>
    </div>
  );
}
