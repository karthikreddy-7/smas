"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/seaweed-banner.jpg"
          alt="Seaweed Farming"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-teal-800/70 to-blue-900/80 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title with Gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-teal-200 via-teal-100 to-blue-200 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Subtitle with Animation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-teal-50 mb-8 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Wave Overlay - Positioned Higher */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full transform scale-y-150" // Added scale transform for more pronounced waves
        >
          <path
            d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V30Z"
            fillOpacity="0.9" // Increased opacity slightly
          />
        </svg>
      </div>
    </div>
  );
}
