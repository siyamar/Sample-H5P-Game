import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white py-8"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/images/Frame.png"
              alt="Footer Logo"
              className="w-8 h-8"
            />
            <h1 className="ml-2 text-xl font-bold">
              <span className="text-red-500">G</span>amer
            </h1>
          </div>
          <div className="space-x-4">
            <a href="#our-story" className="hover:text-red-500">
              Our Story
            </a>
            <a href="#games" className="hover:text-red-500">
              Games
            </a>
            <a href="#web-games" className="hover:text-red-500">
              Web Games
            </a>
            <a href="#careers" className="hover:text-red-500">
              Careers
            </a>
            <a href="#support" className="hover:text-red-500">
              Support
            </a>
            <a href="#account" className="hover:text-red-500">
              My Account
            </a>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <i className="fa-brands fa-twitter text-xl"></i>
          <i className="fa-brands fa-facebook text-xl"></i>
          <i className="fa-brands fa-youtube text-xl"></i>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
