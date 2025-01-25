"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import faq from "../const/faqContent";
import Downloads from "./download";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active accordion index

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the clicked index
  };

  return (
    <section>
      <div className="bg-[#fff] pt-8 flex flex-col justify-center">
        <motion.div
          className=" max-w-sm md:max-w-6xl mx-auto space-y-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Accordion container */}
          <h3 className="font-medium text-[1.5rem] md:text-[2.19rem] text-black text-center pb-8">
            Frequently asked questions
          </h3>
          {faq.map((faqcontent, index) => (
            <motion.div
              className=" md:w-[999px] bg-gray-100 hover:bg-[#fff8dc] rounded-xl transition-all duration-300 mb-4"
              key={faqcontent.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Accordion Header */}
              <div
                className=" h-[54px] md:h-[74px] flex justify-between px-8 items-center font-semibold cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h6 className=" text-sm md:text-base font-semibold text-[#4a4a4a] hover:text-black">
                  {faqcontent.name}
                </h6>
                {activeIndex === index ? (
                  <ChevronUp className="w6 h-6 md:w-8 md:h-8 text-[#5a738e] hover:text-[#ffcc00] transition-all duration-300" />
                ) : (
                  <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-[#5a738e] hover:text-[#ffcc00] transition-all duration-300" />
                )}
              </div>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="px-8 py-4">
                  <p className=" text-sm md:text-base  text-[#4a4a4a]">
                    {faqcontent.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <Downloads />
        </motion.div>
      </div>
    </section>
  );
}
