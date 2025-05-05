"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaPhone } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SmartTech
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#products" className="hover:text-blue-600 transition">Products</Link>
          <Link href="#features" className="hover:text-blue-600 transition">Features</Link>
          <Link href="#testimonials" className="hover:text-blue-600 transition">Reviews</Link>
          <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link href="tel:+1234567890" className="flex items-center text-blue-600">
            <FaPhone className="mr-2" /> +1 (234) 567-890
          </Link>
          <button className="p-2 relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="#products" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">Products</Link>
            <Link href="#features" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">Features</Link>
            <Link href="#testimonials" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">Reviews</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">Contact</Link>
            <div className="pt-4 border-t flex items-center justify-between">
              <Link href="tel:+1234567890" className="flex items-center text-blue-600">
                <FaPhone className="mr-2" /> Call Us
              </Link>
              <button className="p-2 relative">
                <FaShoppingCart className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}