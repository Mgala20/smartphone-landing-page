import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SmartTech</h3>
            <p className="text-gray-400">
              Your one-stop shop for the latest smartphones and accessories.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin className="text-xl" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#products" className="text-gray-400 hover:text-white transition">Products</Link></li>
              <li><Link href="#features" className="text-gray-400 hover:text-white transition">Features</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-white transition">Reviews</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Smartphones</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Cases & Covers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Chargers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Headphones</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SmartTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}