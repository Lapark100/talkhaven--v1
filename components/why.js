"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import whyImage from "../public/images/xxl_exness_why_exness_4827c10344.jpg";
import { CircleCheck } from "lucide-react";
import consts from "../const/const";

export default function WhyUs() {
  return (
    <section>
      <div className="bg-[#fff]">
        <div className="max-w-sm md:max-w-7xl mx-auto container pb-16">
          <motion.div
            className="w-full h-auto justify-center items-center gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="text-left text-black flex flex-col justify-center items-center font-medium space-y-3 pb-8">
              <h3 className="font-medium text-[2.19rem]">Your Story, Your Space</h3>
              <p className="text-base font-normal text-center ">
                TalkHaven is your trusted companion, offering a safe, one-on-one space where your story matters.
              </p>
            </div>

            {/* Image Section */}
            <motion.div
              className="flex justify-center items-center rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={whyImage}
                alt="why-image"
                className="w-full md:w-[80rem] h-[234.58px] md:h-[459.58px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Cards Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {consts.map((con, index) => (
                <motion.div
                  className="w-full bg-[#FFF4B3] shadow-md rounded-xl p-4 text-black flex flex-col justify-between"
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Icon Section */}
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full font-normal">
                    <CircleCheck className="w-5 h-5 text-black font-normal" />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg  mt-2 font-normal">{con.name}</h3>
                    <p className="text-sm text-black mt-2 font-extralight flex-grow">{con.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
