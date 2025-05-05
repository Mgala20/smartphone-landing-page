"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    content: "The smartphone I bought exceeded my expectations. The camera quality is amazing and the battery lasts all day!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    content: "Great customer service and fast shipping. The accessories I ordered were high quality and reasonably priced.",
    rating: 4
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Student",
    content: "I was hesitant to order online, but the process was smooth and the product arrived in perfect condition.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What our customers say about our products and services
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-between mb-4">
                <FaQuoteLeft className="text-2xl text-gray-300" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < testimonial.rating ? "★" : "☆"}</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}