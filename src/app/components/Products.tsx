"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Galaxy S24 Ultra",
    category: "Smartphone",
    price: 1199,
    rating: 4.8,
    image: "/images/phone1.jpg",
    description: "Latest flagship with 200MP camera and S Pen"
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    category: "Smartphone",
    price: 1299,
    rating: 4.9,
    image: "/images/phone2.jpg",
    description: "Titanium design with A17 Pro chip"
  },
  {
    id: 3,
    name: "Wireless Charger",
    category: "Accessory",
    price: 39.99,
    rating: 4.5,
    image: "Charger.jpg",
    description: "Fast charging for all devices"
  },
  {
    id: 4,
    name: "Premium Earbuds",
    category: "Accessory",
    price: 149.99,
    rating: 4.7,
    image: "Wireless earbuds.jpg",
    description: "Active noise cancellation"
  },
  // Add more products as needed
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our selection of premium smartphones and accessories
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative h-60">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{product.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition duration-300">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}