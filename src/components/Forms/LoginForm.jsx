import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AuthContext } from "../../hooks/AuthProvider";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = () => {
  const { user,emailLogin,googleLogin,githubLogin } = useContext(AuthContext);
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
    }else{
    toast('Opps! Go back & Log out first!', {

        icon: '⚠',
        style: {
           
            padding: '16px',
            color: "white",
            background:"#f1c40f"
          },
      });
  }
}

const handleGoogleLogIn = () => {
 if(!user){
    googleLogin()
    .then((res) => {
      console.log(res.user)
      toast.success("Google log in successful!")
      navigate(location?.state ? location.state : "/");
    })
    .catch();
} else {
  toast.error("Sign out of other account first!");
}
}

// github login handle
const handleGithubSignUp = () => {
  console.log("github");
  if(!user){
    githubLogin()
    .then((res) => {
      console.log(res.user);
        toast.success("Github log in successful!");
        navigate(location?.state ? location.state : "/");
      // ...
    }).catch((error) => {
      console.log(error.message);
    });
  } else {
    toast.error("Sign out of other account first!");
  }
  }
  return (
    <div className="bg-base-100 w-[90%] max-w-[500px] sm:w-[50%] mx-auto py-10 md:px-10 flex flex-col justify-center items-center rounded-xl text-slate-600 my-10 relative">
      <Link to={"/"} className="absolute top-4 left-4">
        <button className=" btn btn-ghost hover:bg-white text-center font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 ">
          <RiArrowGoBackFill className="text-purple-500" /> Back to Home
        </button>
      </Link>
      <h1 className="text-4xl font-bold py-10">Login</h1>
      <div className="space-y-3 pb-6 text-center w-[80%]">
        <h2 className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl">
          Welcome to <span className="">ColabTask</span>!
        </h2>
        <p>
          {" "}
          Join the largest global student community online and say goodbye to
          lack of motivation.
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
        <motion.button whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
          type="submit"
          className="btn  w-full rounded-full text-white bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500"
        >
          Login
        </motion.button>
        <p className="text-center font-bold">Dont have an account? <Link to={'/register'} >
          <motion.button whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }} className="text-center font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mx-2">

          Register
          </motion.button>
          </Link></p>
      </form>
      <div className="w-[80%]">
        <p className="text-center font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          OR
        </p>
        <hr className="border my-6" />
        <button
         onClick={handleGoogleLogIn}
          className="flex justify-center items-center gap-5 font-bold btn w-full"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
            alt="google-logo"
            className="w-8 h-8"
          />
          Login with Google
        </button>
        <button
                onClick={handleGithubSignUp}
                className="flex flex-row justify-center items-center gap-5 font-bold btn w-full my-5"
              >
                <img
                  src="https://pngimg.com/d/github_PNG32.png"
                  alt="google-logo"
                  className="w-8 h-8"
                />
                Login with Github
              </button>
      </div>
    </div>
  );
};

export default LoginForm;
