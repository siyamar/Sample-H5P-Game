import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const AboutUs = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 mb-6">
            Welcome to <span className="font-bold text-blue-600">Gamer</span>!
            We are a passionate team dedicated to bringing you the best online
            gaming experience. Our mission is to make gaming accessible, fun,
            and engaging for everyone, whether youre a casual gamer or a
            hardcore enthusiast.
          </p>
          <p className="text-gray-600 mb-6">
            With an extensive library of games and innovative features, we aim
            to redefine how you experience games online. Join us as we continue
            to push boundaries and create a community for gamers to connect,
            compete, and thrive.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 text-white px-6 py-3 rounded shadow-lg"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="/public/images/Rectangle 55.png"
            alt="About Us"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
