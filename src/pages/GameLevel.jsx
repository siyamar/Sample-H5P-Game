import axios from "axios";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

// GameLevelPage component
const GameLevel = () => {
  const [levels, setLevels] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to play the game!",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  }, [user, navigate, location]);

  useEffect(() => {
    // Fetch JSON data using Axios
    axios
      .get("/public/gameLevel.json")
      .then((response) => {
        setLevels(response.data); // Set the data in state
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        Swal.fire({
          title: "Error",
          text: "Failed to load levels. Please try again later.",
          icon: "error",
        });
      });
  }, []);

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-8">Select Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {levels.map((level) => (
          <motion.div
            key={level.id}
            className="border border-gray-300 rounded-lg shadow-md p-4 bg-white flex flex-col sm:flex-row items-center sm:items-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={level.image}
              alt={level.title}
              className="w-full sm:w-40 h-40 object-cover rounded-md mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{level.title}</h2>
              <p className="text-gray-600 mb-4">{level.description}</p>
              {/* <Link to={`/gameLevel/${level.id}`}> */}
              <Link to={`/gameLevelCategory/${level.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  Play
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GameLevel;
