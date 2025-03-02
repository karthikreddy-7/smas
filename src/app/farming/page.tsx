"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FARMING_METHODS } from "@/constants/farming";

export default function Farming() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-800 to-green-600 text-white">
      {/* Header Section */}
      <section className="relative text-center py-16 px-6 sm:px-12">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sustainable Seaweed Farming
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Discover innovative and eco-friendly methods to cultivate seaweed in different marine
          environments.
        </motion.p>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/images/waves.svg')] bg-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        />
      </section>

      {/* Farming Methods Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FARMING_METHODS.map((method, index) => (
            <motion.div
              key={method.id}
              className="bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Image Section */}
              <div className="relative w-full h-48 bg-teal-700">
                {method.image ? (
                  <Image
                    src={method.image}
                    alt={method.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-white text-lg font-medium">
                    🌊 No Image Available
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-teal-800 mb-2">{method.title}</h2>
                <p className="text-gray-700 text-sm sm:text-base">{method.description}</p>
                <p className="mt-4 text-sm text-teal-600 font-medium">
                  <span className="font-semibold">Ideal Conditions:</span> {method.idealConditions}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-teal-900 min-h-[70vh] flex flex-col items-center justify-center px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Explore More?
        </motion.h2>
        <motion.p
          className="max-w-lg mx-auto text-lg opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Contact us to learn about sustainable farming techniques and how you can contribute to
          marine conservation.
        </motion.p>
        <motion.a
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-full shadow-md hover:bg-green-600 transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Get in Touch
        </motion.a>
      </section>
    </div>
  );
}
