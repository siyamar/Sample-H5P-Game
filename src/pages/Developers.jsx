import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const Developers = () => {
  const developers = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Frontend Developer",
      image: "/public/images/developer1.jpeg",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Backend Developer",
      image: "/public/images/developer2.jpeg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "UI/UX Designer",
      image: "/public/images/developer3.jpeg",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        {/* Page Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-gray-800">
            Meet Our Developers
          </h1>
          <p className="text-gray-600 mt-4">
            A passionate team dedicated to crafting amazing experiences.
          </p>
        </motion.div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developers.map((developer) => (
            <motion.div
              key={developer.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: developer.id * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Developer Image */}
              <div className="h-48 w-full bg-gray-200">
                <img
                  src={developer.image}
                  alt={developer.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Developer Info */}
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {developer.name}
                </h2>
                <p className="text-gray-600">{developer.role}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                >
                  View Profile
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;
