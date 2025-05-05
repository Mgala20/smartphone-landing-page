"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaShippingFast, FaHeadset, FaExchangeAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-4xl text-blue-600" />,
    title: "1 Year Warranty",
    description: "All our products come with a full manufacturer's warranty"
  },
  {
    icon: <FaShippingFast className="text-4xl text-blue-600" />,
    title: "Free Shipping",
    description: "Free delivery on all orders over $50"
  },
  {
    icon: <FaHeadset className="text-4xl text-blue-600" />,
    title: "24/7 Support",
    description: "Our customer service team is always available"
  },
  {
    icon: <FaExchangeAlt className="text-4xl text-blue-600" />,
    title: "Easy Returns",
    description: "30-day return policy for all purchases"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the best products and services to our customers
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}