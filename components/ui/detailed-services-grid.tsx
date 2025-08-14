"use client";

import { defaultViewport, fadeInUp } from "@/lib/scroll-animations";
import { motion } from "framer-motion";

interface ServiceDetail {
  title: string;
  description: string;
  items: string[];
}

interface DetailedServicesGridProps {
  title: string;
  subtitle: string;
  services: ServiceDetail[];
}

export function DetailedServicesGrid({
  title,
  subtitle,
  services,
}: DetailedServicesGridProps) {
  return (
    <motion.section
      className="py-24 border-t border-gray-100"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-light text-black mb-6">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={service.title} className="group">
              <div className="relative border-t border-gray-200 pb-6 mb-6 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
                <div className="flex flex-col lg:flex-row gap-12 items-start pt-6">
                  <div className="lg:w-1/3">
                    <span className="text-sm text-gray-400 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-light text-black mb-4 mt-4">
                      {service.title}
                    </h3>
                  </div>

                  <div className="lg:w-2/3 space-y-6 mt-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-4">
                      {service.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-start gap-4"
                          variants={fadeInUp}
                          initial="hidden"
                          whileInView="visible"
                          viewport={defaultViewport}
                        >
                          <span className="text-sm text-gray-400 font-mono mt-1 flex-shrink-0">
                            •
                          </span>
                          <span className="text-gray-700 leading-relaxed">
                            <strong className="text-black font-medium">
                              {item.split(" - ")[0]}
                            </strong>
                            {item.includes(" - ") && (
                              <>
                                <span className="text-gray-600">
                                  {" "}
                                  - {item.split(" - ")[1]}
                                </span>
                              </>
                            )}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
