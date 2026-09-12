"use client";

import * as motion from "motion/react-client";
import { fadeInUp } from "@/lib/scroll-animations";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const COPY = {
  address: "Address",
  email: "Email",
  country: "The Netherlands",
  location: "Location",
  whatsappAlt:
    "Contact Rodi Digital via WhatsApp — AI development agency, 's-Hertogenbosch",
  mapTitle: "Rodi Digital office location, Stationsweg 19, 's-Hertogenbosch",
};

export function ContactContent() {
  const copy = COPY;
  const contactInfo = [
    {
      title: copy.address,
      icon: MapPin,
      content: (
        <div>
          <p>Stationsweg 19,</p>
          <p>5211 TV &apos;s-Hertogenbosch, {copy.country}</p>
        </div>
      ),
    },
    {
      title: copy.email,
      icon: Mail,
      content: (
        <a
          href="mailto:hello@rodi-digital.com"
          className="link-draw inline-block text-primary"
        >
          hello@rodi-digital.com
        </a>
      ),
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-24 md:py-32 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="lg:col-span-5 space-y-12"
        >
          {contactInfo.map((info, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-4">
                {info.icon && <info.icon className="w-4 h-4 text-primary" />}
                <h3 className="eyebrow">{info.title}</h3>
              </div>
              <div className="font-display text-2xl md:text-3xl text-foreground leading-relaxed">
                {info.content}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
          className="lg:col-span-7 flex items-center justify-center"
        >
          <div className="text-center space-y-8 w-full">
            <div className="relative h-32 w-32 mx-auto rounded-full border border-border flex items-center justify-center glow">
              <Image
                src="/images/WhatsappLogoGreen.svg"
                alt={copy.whatsappAlt}
                width={96}
                height={96}
                className="object-contain"
              />
            </div>

            <Link
              href="https://wa.me/+32499721771"
              className="inline-block hover:scale-105 transition-transform duration-200"
            >
              <Image
                src="/images/WhatsAppButtonGreenMedium.png"
                alt={copy.whatsappAlt}
                width={300}
                height={60}
                className="rounded-full"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0.4}
        className="mt-24"
      >
        <div className="eyebrow mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          § {copy.location} — 51.6901° N · 5.3028° E
        </div>
        <div className="border border-border overflow-hidden" style={{ height: "420px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.6834890734747!2d5.302844976892394!3d51.69016897186847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6ee6b5c36b5cd%3A0x3b5b8f4c8c1c4b4a!2sStationsweg%2019%2C%205211%20TV%20's-Hertogenbosch%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={copy.mapTitle}
          />
        </div>
      </motion.div>
    </div>
  );
}
