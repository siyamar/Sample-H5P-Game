import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router";
import "tailwindcss/tailwind.css";
import { AuthContext } from "../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 text-white p-4"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/public/images/Frame.png"
              alt="Logo"
              className="w-8 h-8"
            />
            <p className="ml-2 text-xl font-bold">
              <span className="text-red-500">G</span>amer
            </p>
          </div>
          <div className="flex space-x-4 justify-center items-center">
            <Link to={"/"} className="hover:text-red-500">
              Home
            </Link>
            <Link to={"/aboutUs"} className="hover:text-red-500">
              About Us
            </Link>
            <Link to={"/developers"} className="hover:text-red-500">
              Developers
            </Link>
            <Link to={"/seekAdvice"} className="hover:text-red-500">
              Seek Advice
            </Link>
            {user ? (
              <>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full mr-1">
                    <Link to={"/profile"}>
                    <img src={user?.photoURL} alt="user" />
                    </Link>
                  </div>
                </label>
                <button onClick={handleLogout} className="btn btn-secondary">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-secondary">
                  <Link to={"/login"}>Login</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </motion.nav>
      
    </>
  );
};

export default Navbar;
