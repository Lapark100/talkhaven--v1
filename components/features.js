import { ChevronRight } from "lucide-react";
import Link from "next/link";
import mental from "../const/mental";
import { motion } from "framer-motion";

export default function Features() {
  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#fff] py-16 flex justify-center items-center">
      <div className="w-full text-black max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <motion.div
          className="flex flex-col justify-center items-center text-center space-y-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-medium text-[2.19rem] text-[#333333]">
            What is challenging your well-being the most right now?
          </h1>
          <p className="text-base font-normal">Start a quick anonymous chat!</p>
        </motion.div>

        {/* Card Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {mental.map((ment) => (
            <motion.div
              key={ment.name}
              className="w-[270px] h-[350px] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${ment.img_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              variants={itemVariants}
            >
              <div className="flex p-4 justify-between mt-72">
                <Link
                  href="/"
                  className="flex justify-between w-full items-center"
                >
                  <h3 className="uppercase text-[#ffcc00] hover:text-white font-semibold transition-all duration-300">
                    {ment.name}
                  </h3>
                  <ChevronRight className="w-6 h-6 text-[#ffcc00] hover:text-white transition-all duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
