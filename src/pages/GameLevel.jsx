import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router";

// GameLevelPage component
const GameLevel = () => {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    // Fetch JSON data using Axios
    axios
      .get("/public/gameLevel.json") // Fetches from the public folder
      .then((response) => {
        setLevels(response.data); // Set the data in state
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-8">Select Your Level</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <motion.div
            key={level.id}
            className="border border-gray-300 rounded-lg shadow-md p-4 bg-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={level.image}
              alt={level.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{level.title}</h2>
            <p className="text-gray-600 mb-4">{level.description}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              //   onClick={() => handlePlay(level.id)}
            >
              <Link to={`/gameLevel/${level.id}`}>Play</Link>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GameLevel;
