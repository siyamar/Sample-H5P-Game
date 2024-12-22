import { motion } from "framer-motion";
import { Link } from "react-router";
import "tailwindcss/tailwind.css";

const Banner = () => {
  return (
    <section className="bg-blue-500 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-lg font-medium">Play Like The</h3>
          <h1 className="text-4xl font-bold">G.O.A.T.</h1>
          <p className="mt-4">1-click instant play</p>
          <p>No Download</p>
          <p>1000s of supported online games</p>
          <div className="mt-6 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-white text-blue-500 px-4 py-2 rounded"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-gray-300 text-blue-500 px-4 py-2 rounded"
            >
              <Link to={"/play"}>Play</Link>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="/public/images/Group 18.png"
            alt="Banner"
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
