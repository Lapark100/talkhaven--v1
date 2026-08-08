"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

import whyImage from "../public/images/xxl_exness_why_exness_4827c10344.jpg";
import consts from "../const/const";

export default function WhyUs() {
  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            Why TalkHaven
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Your story.
            <br />
            <span className="text-neutral-400">Your space.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
            TalkHaven is your trusted companion, offering a safe,
            one-on-one space where your story matters.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative mt-12 overflow-hidden rounded-[28px] sm:mt-16 lg:rounded-[36px]"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src={whyImage}
            alt="TalkHaven support space"
            width={1600}
            height={900}
            className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[520px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>

        {/* Benefits */}
        <div className="mt-10 grid grid-cols-1 border-y border-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {consts.map((con, index) => (
            <motion.div
              key={con.name || index}
              className={`
                group px-1 py-8
                sm:px-7
                lg:px-8
                ${index !== 0 ? "border-t border-neutral-200 sm:border-t-0" : ""}
                ${index % 2 !== 0 ? "sm:border-l sm:border-neutral-200" : ""}
                ${index >= 2 ? "lg:border-l lg:border-neutral-200" : ""}
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              {/* Icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffcc00] transition-transform duration-300 group-hover:scale-110">
                <CircleCheck
                  className="h-[18px] w-[18px] text-neutral-950"
                  strokeWidth={2}
                />
              </div>

              {/* Text */}
              <div className="mt-5">
                <h3 className="text-base font-semibold tracking-tight text-neutral-950">
                  {con.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  {con.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}