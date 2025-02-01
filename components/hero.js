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
              Your Thoughts, Our Safe Haven
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
              To create a safe, anonymous, and judgment-free space where individuals can find comfort, express their emotions, and receive empathetic support.
            </motion.p>

            {/* Button (Hidden on Small Screens) */}
            <motion.div
              className="mt-10 md:max-w-[150px] hidden md:block"
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
                Get Started
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

        {/* Partner Section */}
        <div className="w-full hidden py-2 md:flex flex-col items-center justify-center">
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
