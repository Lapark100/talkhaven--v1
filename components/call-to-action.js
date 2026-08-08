
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="relative flex min-h-[420px] items-center overflow-hidden rounded-3xl bg-black sm:min-h-[480px] lg:min-h-[520px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url('/images/Component-1-1.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative z-10 w-full p-7 sm:p-10 lg:p-16">
            {/* Small label */}
            <motion.p
              className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/60"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              TalkHaven
            </motion.p>

            {/* Heading */}
            <motion.h2
              className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to make a{" "}
              <span className="text-[#ffcc00]">change?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              You don't have to navigate everything alone. Start a private
              conversation and find the support you need, when you need it.
            </motion.p>

            {/* Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/price"
                className="inline-flex items-center rounded-full bg-[#ffcc00] px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-white"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Bottom text */}
           
          </div>
        </motion.div>
      </div>
    </section>
  );
}

