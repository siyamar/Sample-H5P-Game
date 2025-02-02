import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const FunnyVideos = () => {
  const videos = [
    {
      id: 1,
      description: "No Download. No Installs. Play games instantly on Gamer.",
    },
    {
      id: 2,
      description: "No Download. No Installs. Play games instantly on Gamer.",
    },
    {
      id: 3,
      description: "No Download. No Installs. Play games instantly on Gamer.",
    },
    {
      id: 4,
      description: "No Download. No Installs. Play games instantly on Gamer.",
    }
    // Add more video items here
  ];

  return (
    <section className="bg-gray-100 text-center py-8">
      <div className="container mx-auto">
        <h3 className="text-xl font-bold mb-2">
          Online Games <span className="text-red-500">Funny Videos</span>
        </h3>
        <p className="text-gray-600 mb-8">
          A Collection of Hilarious Videos to Brighten Your Day
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <motion.div
              className="bg-white shadow-md rounded overflow-hidden"
              key={video.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
              <video
        className=" mx-auto my-4"
        width={900}
        autoPlay
        loop
        muted
        src="/public/animation1.mp4"
      ></video>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <i className="fa-solid fa-play text-white text-4xl"></i>
                </div>
              </div>
              <p className="p-4 text-gray-800">{video.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunnyVideos;
