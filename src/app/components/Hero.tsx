"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image 
        src="/images/hero-bg.jpg" 
        alt="Smartphones and accessories"
        fill
        className="object-cover"
        priority
      />
      
      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center px-4 container"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Premium Smartphones & Accessories</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover the latest smartphones, cases, chargers, and more at unbeatable prices.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="#products" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300"
          >
            Shop Now
          </Link>
          <Link 
            href="#contact" 
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-full font-medium transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}