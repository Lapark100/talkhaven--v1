"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section>
      <div className="bg-white pt-15 md:pt-20 pb-16 flex flex-col justify-center items-center">
        <motion.div
          className="max-w-sm md:max-w-7xl p-16 mx-auto container rounded-xl overflow-hidden h-[480px] w-full space-y-5 md:space-y-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/Component-1-1.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl md:text-5xl text-white pr-[50px] leading-normal">
              Ready to make a change?
            </h3>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-white">
              Calmerry is here to support you when you need it. Join us to get
              personalized mental health care that understands you.
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            className="flex justify-center md:justify-start mt-10 pt-7"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/"
              className="bg-[#ffcc00] py-3 px-5 md:py-5 md:px-9 text-black rounded-xl"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
