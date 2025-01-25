import google from "../public/images/googleplay-1.webp";
import apple from "../public/images/appstore.webp";
import app from "../public/images/Frame-1000001257-1.webp";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Downloads() {
  return (
    <section>
      <div className="bg-[#fff] pt-16 flex flex-col justify-center">
        <div className=" max-w-sm md:max-w-5xl mx-auto space-y-4">
          {/* Header */} 
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className=" md:font-medium text-[24px] md:text-[40px] md:px-[10rem] text-black text-center pb-8">
              Download the app and access the support you need – anytime,
              anywhere
            </h3>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-base font-normal text-black text-center md:px-[10rem]">
              Get access to a mood tracker, guided journaling, courses,
              worksheets, progress reports – always free, always yours.
            </p>
          </motion.div>

          {/* Store Buttons */}
          <motion.div
            className="flex justify-center gap-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              className=" w-[93px] md:w-[166px] md:h-[48px] h-[34px"
              src={apple}
              alt="app-store"
            />
            <Image
              className="w-[93px] md:w-[166px] md:h-[48px] h-[34px]"
              src={google}
              alt="google-store"
            />
          </motion.div>

          {/* App Image */}
          <motion.div
            className="flex justify-center pt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              className=" w-[385px] h-[258px] md:w-[770px] md:h-[516px]"
              src={app}
              alt="app-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
