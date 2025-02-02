import axios from "axios";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

// GameLevelPage component
const GameLevelCategory = () => {
  const { id } = useParams(); // Get the id from the URL params
  const [levels, setLevels] = useState([]); // Store all levels
  const [filteredLevels, setFilteredLevels] = useState([]); // Store filtered levels
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is logged in
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

  // Fetch JSON data
  useEffect(() => {
    axios
      .get("/public/gameLevel.json")
      .then((response) => {
        setLevels(response.data); // Store levels in state
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

  // Filter levels whenever `levels` or `id` changes
  useEffect(() => {
    const data = levels.filter((level) => String(level.id) === id); // Ensure `id` comparison works
    setFilteredLevels(data);
  }, [levels, id]);

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-8">Select Your Lavel</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredLevels.length > 0 ? (
    filteredLevels.map((level) => (
      <motion.div
        key={level.id}
        className="border border-gray-300 rounded-lg shadow-md p-4 bg-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to={`/gameLevel/${level.id}`}>
          <img
            src={level.image}
            alt={level.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{level.title}</h2>
          <p className="text-gray-600 mb-4">{level.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Play
          </button>
        </Link>
      </motion.div>
    ))
  ) : (
    <p className="text-gray-500">No levels found for this category.</p>
  )}
</div>
<div className="text-right mr-16">
        <button className="btn  btn-secondary mr-2">
          {" "}
          <Link to={`/gamelevel`}>Back</Link>
        </button>
      </div>

    </div>
  );
};

export default GameLevelCategory;

/*
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <motion.div
            key={level.id}
            className="border border-gray-300 rounded-lg shadow-md p-4 bg-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={/gameLevel/${level.id}}>
              <img
                src={level.image}
                alt={level.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{level.title}</h2>
              <p className="text-gray-600 mb-4">{level.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Play
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
**/ 