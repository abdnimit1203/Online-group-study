import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AuthContext } from "../../hooks/AuthProvider";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const { user, emailLogin, googleLogin, githubLogin } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email,password);
    if (!user) {
      const toastId = toast.loading("logging in...");
      try {
        await emailLogin(email, password);
        toast.success(
          "Logged in successfully!",

          { id: toastId }
        );
        navigate(location?.state ? location.state : "/");
      } catch (err) {
        toast.error(err.message, { id: toastId });
      }
    } else {
      toast("Opps! Go back & Log out first!", {
        icon: "⚠",
        style: {
          padding: "16px",
          color: "white",
          background: "#f1c40f",
        },
      });
    }
  };

  const handleGoogleLogIn = () => {
    if (!user) {
      googleLogin()
        .then((res) => {
          console.log(res.user);
          toast.success("Google log in successful!");
          navigate(location?.state ? location.state : "/");
        })
        .catch();
    } else {
      toast.error("Sign out of other account first!");
    }
  };

  // github login handle
  const handleGithubSignUp = () => {
    console.log("github");
    if (!user) {
      githubLogin()
        .then((res) => {
          console.log(res.user);
          toast.success("Github log in successful!");
          navigate(location?.state ? location.state : "/");
          // ...
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.error("Sign out of other account first!");
    }
  };
  return (
    <div className="bg-lime-50 w-[90%] max-w-[500px] sm:w-[50%] mx-auto py-10 md:px-10 flex flex-col justify-center items-center rounded-xl text-slate-600 my-10 relative">
      <Link to={"/"} className="absolute top-4 left-4">
        <button className=" btn btn-ghost hover:bg-white text-center font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 ">
          <RiArrowGoBackFill className="text-purple-500" /> Back to Home
        </button>
      </Link>
    
      <div className="space-y-3 pb-6 text-center w-[80%] py-10">
        <h1 className="text-3xl font-bold text-center mb-4">ColabTask Login</h1>
        <p className="text-center text-sm text-gray-500 mb-8">
          Official login to the ColabTask Student Community
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-[80%] space-y-5 pb-10">
        <div className="flex flex-col">
          <label className="text-sm py-4" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-2 focus:outline-none border-b-2 text-lg"
            placeholder="Type your  email"
            required
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col relative">
          <label className="text-sm py-4" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="p-2 focus:outline-none border-b-2 text-lg mb-6"
            placeholder="Type your  password"
            required
            onBlur={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-16 pt-2 end-0 grid place-content-center px-4 text-purple-400 font-semibold text-2xl cursor-pointer "
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="btn  w-full rounded-full text-white bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500"
        >
          Login
        </motion.button>
        <p className="text-center font-bold">
          Dont have an account?{" "}
          <Link to={"/register"}>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-center font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mx-2"
            >
              Register
            </motion.button>
          </Link>
        </p>
      </form>
      <div className="w-[80%] space-y-3">
        <p className="text-center font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          OR
        </p>
        <hr className="border my-6" />
        <button
          onClick={handleGoogleLogIn}
          className="flex items-center justify-center gap-3 border rounded-lg py-2 w-full shadow-sm hover:bg-gray-100"
        >
          <FcGoogle className="w-6 h-6" />
          <span>Continue with Google</span>
        </button>

        <button
          onClick={handleGithubSignUp}
          className="flex items-center justify-center gap-3 border rounded-lg py-2 w-full shadow-sm hover:bg-gray-100"
        >
          <FaGithub className="w-6 h-6" />
          <span>Continue with GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
