import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800 text-white p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/public/images/Frame.png" alt="Logo" className="w-8 h-8" />
          <p className="ml-2 text-xl font-bold">
            <span className="text-red-500">G</span>amer
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#about" className="hover:text-red-500">
            About Us
          </a>
          <a href="#developers" className="hover:text-red-500">
            Developers
          </a>
          <a
            href="#social"
            className="flex items-center space-x-2 hover:text-red-500"
          >
            <span>Follow Us On</span>
            <i className="fa-brands fa-youtube text-red-500"></i>
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
