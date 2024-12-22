import { motion } from "framer-motion";
import { Link } from "react-router";
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
          <Link to={"/"} className="hover:text-red-500">
            Home
          </Link>
          <Link to={"/aboutUs"} className="hover:text-red-500">
            About Us
          </Link>
          <Link to={"/Developers"} className="hover:text-red-500">
            Developers
          </Link>
          <Link
            to={"/followUs"}
            className="flex items-center space-x-2 hover:text-red-500"
          >
            <span>Follow Us On</span>
            <i className="fa-brands fa-youtube text-red-500"></i>
            <i className="fa-brands fa-tiktok"></i>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
