import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const FollowUs = () => {
  const socialMedia = [
    {
      id: 1,
      name: "YouTube",
      icon: faYoutube,
      color: "text-red-600",
      link: "https://www.youtube.com/",
    },
    {
      id: 2,
      name: "TikTok",
      icon: faTiktok,
      color: "text-gray-800",
      link: "https://www.tiktok.com/",
    },
    {
      id: 3,
      name: "Facebook",
      icon: faFacebook,
      color: "text-blue-600",
      link: "https://www.facebook.com/",
    },
    {
      id: 4,
      name: "Twitter",
      icon: faTwitter,
      color: "text-blue-400",
      link: "https://twitter.com/",
    },
    {
      id: 5,
      name: "Instagram",
      icon: faInstagram,
      color: "text-pink-500",
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        {/* Page Title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-gray-800">Follow Us On</h1>
          <p className="text-gray-600 mt-4">
            Stay connected with us on your favorite social media platforms!
          </p>
        </motion.div>

        {/* Social Media Icons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {socialMedia.map((platform) => (
            <motion.a
              key={platform.id}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: platform.id * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <FontAwesomeIcon
                icon={platform.icon}
                className={`text-4xl ${platform.color} mb-4`}
              />
              <span className="text-gray-800 font-medium">{platform.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
