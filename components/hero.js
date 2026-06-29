'use client'

import Link from "next/link";
import Image from "next/image";
import heroimg from "../public/images/Frame-1000001257-1.webp";
import { BookText, Headset, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";


export default function Hero() {
  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <section>
      <div className="max-w-sm md:max-w-7xl mx-auto container">
        <div className="w-full md:flex h-auto mt-32 md:mt-20 md:justify-between pb-20">
          {/* Left Side */}
          <div className="md:w-1/2 px-5  flex flex-col justify-center">
            {/* Title */}
            <motion.h2
              className="text-3xl md:text-[52px] text-center md:text-left leading-normal md:font-medium md:pr-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              You Don’t Have to Carry It Alone
            </motion.h2>

            {/* Description */}
            <motion.p
              className="md:text-lg text-center md:text-left leading-normal mt-3 pr-6 pb-8"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.0 }}
            >
              TalkHaven is an anonymous emotional support platform where people can safely vent, share,
              cry, speak freely, and feel heard through support groups and private chat sessions.
            </motion.p>

            {/* Button (Hidden on Small Screens) */}
            <motion.div
              className="mt-10 md:max-w-[230px] hidden md:block"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2 }}
            >
              <Link
                href="/about"
                className="bg-[#ffcc00] py-4 px-8 text-black text-center font-medium rounded-xl shadow-md hover:bg-[#ffb700] transition-all duration-300"
              >
                Join a Support Session
              </Link>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 px-5 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5 }}
            >
              <Image src={heroimg} className="w-full h-[220px] md:h-[440px]" alt="hero image" quality={50} />
            </motion.div>
          </div>
        </div>     
      </div>
    </section>
  );
}
