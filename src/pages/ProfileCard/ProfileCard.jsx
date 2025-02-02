import  { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";

const ProfileCard = () => {
  const { user } = useContext(AuthContext);
  const name = user?.displayName || "John Doe";
  const email = user?.email || "john.doe@example.com";
  const image = user?.photoURL || "";

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name,
    email,
    additionalInfo: "Student of WUB!",
    image,
  });

  const [progress, setProgress] = useState({
    rating: 4.5,
    steps: 12345,
    progressPercent: 0, // Start with 0 to animate
  });

  const categoryProgress = [
    { title: "Category 1", progress: 60, description: "Adventure Game Progress" },
    { title: "Category 2", progress: 40, description: "Puzzle Game Progress" },
    { title: "Category 3", progress: 80, description: "Strategy Game Progress" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((prev) => ({
        ...prev,
        progressPercent: 75, // Final progress value
      }));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      style={{
        margin: "2rem auto",
        padding: "2rem",
        maxWidth: "800px",
      }}
    >
      {/* Top Row - Profile and Progress Cards */}
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        {/* Profile Card */}
        <motion.div
          className="profile-card"
          style={{
            flex: 1,
            padding: "2rem",
            border: "1px solid #ddd",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ position: "relative" }}>
            <motion.img
              src={formData.image || "https://via.placeholder.com/150?text=Avatar"}
              alt="Profile"
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                objectFit: "cover",
                marginBottom: "1rem",
              }}
              whileHover={{ scale: 1.1 }}
            />
            <motion.label
              htmlFor="image-upload"
              whileHover={{ scale: 1.2 }}
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                background: "#008CBA",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                color: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <FaCamera />
            </motion.label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>
          {isEditing ? (
            <motion.div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ display: "block", margin: "0.5rem 0" }}
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ display: "block", margin: "0.5rem 0" }}
              />
              <label>Additional Info:</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows="3"
                style={{ display: "block", margin: "0.5rem 0", width: "100%" }}
              />
              <motion.button
                onClick={handleSave}
                style={{
                  padding: "0.5rem 1rem",
                  marginTop: "1rem",
                  background: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Save
              </motion.button>
            </motion.div>
          ) : (
            <>
              <h2>{formData.name}</h2>
              <p>{formData.email}</p>
              <p>{formData.additionalInfo}</p>
              <motion.button
                onClick={handleEdit}
                style={{
                  padding: "0.5rem 1rem",
                  marginTop: "1rem",
                  background: "#008CBA",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Edit Information
              </motion.button>
            </>
          )}
        </motion.div>

        {/* Progress Card */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="progress-card"
        style={{
          flex: 1,
          padding: "2rem",
          border: "1px solid #ddd",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3>Game Progress</h3>
        <p>
          <strong>Rating:</strong> {progress.rating} / 5
        </p>
        <p>
          <strong>Total Steps:</strong> {progress.steps}
        </p>
        <p>
          <strong>Game Completion:</strong>
        </p>
        <motion.div
          style={{
            height: "10px",
            width: "100%",
            background: "#ddd",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress.progressPercent}%` }}
            transition={{ duration: 1.5 }}
            style={{
              height: "100%",
              background: "#4CAF50",
            }}
          />
        </motion.div>
        <p style={{ marginTop: "0.5rem" }}>{progress.progressPercent}%</p>
      </motion.div>
      </div>

      {/* Bottom Row - Category Cards */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {categoryProgress.map((category, index) => (
          <motion.div
            key={index}
            className="category-card"
            style={{
              flex: "1 1 calc(33% - 1rem)",
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4>{category.title}</h4>
            <p>{category.description}</p>
            <p>Progress: {category.progress}%</p>
            <motion.div
              style={{
                height: "10px",
                width: "100%",
                background: "#ddd",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${category.progress}%` }}
                style={{
                  height: "100%",
                  background: "#008CBA",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProfileCard;
