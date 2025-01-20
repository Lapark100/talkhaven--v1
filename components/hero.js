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
      <div className="max-w-7xl mx-auto container">
        <div className="w-full h-auto mt-28 flex justify-between pb-20">
          {/* Left Side */}
          <div className="w-1/2 px-5 flex flex-col justify-center">
            {/* Title */}
            <motion.h2
              className=" text-lg md:text-[52px] leading-normal font-medium pr-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              Your Thoughts, Our Safe Haven
            </motion.h2>
            
            {/* Description */}
            <motion.p
              className="text-lg leading-normal mt-3 pr-6"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.0 }}
            >
              To create a safe, anonymous, and judgment-free space where individuals can find comfort, express their emotions, and receive empathetic support.
            </motion.p>

            {/* Button */}
            <motion.div
              className="mt-10"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2 }}
            >
              <Link href="/" className="bg-[#ffcc00] py-5 px-9 text-black rounded-xl">
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="w-1/2 px-5 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5 }}
            >
              <Image src={heroimg} className="w-full h-[440px]" alt="hero image" quality={50} />
            </motion.div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="w-full py-2 flex flex-col items-center justify-center">
          <div className="w-full h-[0.2px] bg-gray-600"></div>

          <motion.div
            className="flex py-8 gap-28 justify-center items-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0 }}
          >
            {/* Partner Info */}
            <div className="flex space-x-3 text-gray-400">
              <Users className="w-6 h-6" />
              <p className="text-lg">800,000+ active clients</p>
            </div>

            <div className="flex space-x-3 text-gray-400">
              <BookText className="w-6 h-6" />
              <p className="text-lg">Multiple regulatory licenses</p>
            </div>

            <div className="flex space-x-3 text-gray-400">
              <Headset className="w-6 h-6" />
              <p className="text-lg">24/7 customer support</p>
            </div>

            <div className="flex space-x-3 text-gray-400">
              <ShieldCheck className="w-6 h-6" />
              <p className="text-lg">PCI DSS certified</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
