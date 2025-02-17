import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useContext(AuthContext);


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // event.target.reset();
     //reset error
     setLoginError('')

    //  kito-diet-follow
     signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate("/");
        
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message)
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then((result)=>{
      console.log(result.user);
      navigate("/");
    })
    .catch();
    
  };
  return (
    <div className="max-w-6xl mx-auto">
      {/* <Navbar></Navbar> */}
      <div className="mt-16">
        <h2 className="text-3xl font-extrabold mt-10 text-center">
          Please Login
        </h2>
        <form onSubmit={handleLogin} className="p-4 md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-black text-white hover:bg-black">
              Login
            </button>
          </div>
        </form>
        {
          loginError && <p className="text-red-700 text-center mt-4">{loginError}</p>
        }
        <div className="flex items-center justify-center gap-6">
          <p className="text-center mt-4">
            Do not have an account?{" "}
            <Link className="text-blue-600" to={"/signUp"}>
              Register
            </Link>
          </p>
          <p className="text-center mt-4">
            Login With Google{" "}
            <button onClick={handleGoogleSignIn} className="btn btn-secondary">
              Google
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
