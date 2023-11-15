import { useContext, useState } from "react";
import { FcCollaboration } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion"

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthProvider";
import { RiArrowGoBackFill } from "react-icons/ri";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const { user, emailSignUp, updateUserProfile, googleLogin ,githubLogin} =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passError, setPassError] = useState(null);
  //email signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, username, photoURL);
    if (!user) {
      if (password.length < 6) {
        setPassError("*password must be more than 6 characters");
      } else if (!/(?=.*[A-Z])/.test(password)) {
        setPassError("*must have one capital letter");
      } else if (!/(?=.*[@$!%*?&])/.test(password)) {
        setPassError("*must contain a special character");
      } else {
        setPassError(null);
        if (photoURL == "") {
          setPhotoURL("https://i.ibb.co/5x6DN2n/blank-dp.png")
        }

      const toastId = toast.loading("logging in...");
      try {
        await emailSignUp(email, password);
        toast.success(
          "User created Successfully",

          { id: toastId }
        );
        await updateUserProfile(username, photoURL)
          .then(() => {
            console.log("Profile updated");
          })
          .catch((error) => {
            console.log(error.message);
            toast.error("Opss! something went wrong");
          });
        navigate("/");
      } catch (err) {
        toast.error(err.message, { id: toastId });
      }
    } }else {
      toast("Opps! Go back & Log out first!", {
        icon: "⚠",
        style: {
          padding: "16px",
          color: "white",
          background: "#f1c40f",
        },
      });
    }
  }

  // google sign up

  const handleGoogleSignUp = () => {
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
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="study-background"
            src="https://i.ibb.co/PWwpHHs/register.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:flex flex-col justify-start h-full p-10 mx-auto  xl:p-36 text-white  bg-[#11111163] w-full space-y-6 ">
            <h2 className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-4xl lg:w-[80%] shadow-lg ">

              Welcome to assignment based online study team : CollaborTask!
            </h2>
            <p className="text-xl w-[80%]">
              {" "}
              Create a new account to share your assignments and complete the
              other assignments.
            </p>
            <ul className="font-semibold space-y-4 list-disc">
              <li>24/7 assigment submission</li>
              <li>Group study using google meet</li>
              <li>Assigment marks checking</li>
              <li>Online study support</li>
            </ul>
          </div>
        </section>

        <main className="lg:col-span-7 xl:col-span-6">
          <div className="md:max-w-[800px] sm:w-[90%] mx-auto flex flex-col justify-center items-center rounded-xl text-slate-600 relative">
            <Link to={"/"} className="absolute top-4 left-4">
              <button className=" btn btn-ghost hover:bg-white text-center font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 ">
                <RiArrowGoBackFill className="text-purple-500" /> Back to Home
              </button>
            </Link>

            <div className="space-y-3 p-6 text-center">
              <a className="block text-neutral text-center" href="/">
                <h1 className="text-4xl font-bold py-10">Register to</h1>
                <motion.h2 whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
                  id="logo"
                  className="text-3xl md:text-5xl bg-gradient-to-br from-fuchsia-500 to-blue-600 rounded-ee-3xl rounded-ss-2xl  p-4 text-white flex items-center gap-2"
                >
                  <FcCollaboration className="bg-white rounded-ee-2xl rounded-ss-2xl px-2" />
                  ColabTask
                </motion.h2>
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-[80%] space-y-5 font-semibold pb-6"
            >
              <div className="flex flex-col">
                <label className="text-sm py-4" htmlFor="username">
                  Username*
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="p-2 focus:outline-none border-b-2 text-lg"
                  placeholder="Type your  username"
                  required
                  onBlur={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm py-4" htmlFor="photoURL">
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photoURL"
                  id="photoURL"
                  className="p-2 focus:outline-none border-b-2 text-lg"
                  placeholder="Enter a photoURL"
                  onBlur={(e) => setPhotoURL(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm py-4" htmlFor="email">
                  Email*
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
                  Password*
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
              <span>
            {passError ? (
              <p className="text-red-600 rounded p-2 block ">{passError}</p>
            ) : (
              ""
            )}
          </span>
              <motion.button whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
                type="submit"
                className="btn  w-full rounded-full text-white bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 hover:to-purple-400"
              >
                Register
              </motion.button>
              <p className="text-center font-bold">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  
                >
                  <motion.button whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }} className="text-center font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mx-2">

                  Login
                  </motion.button>
                </Link>
              </p>
            </form>
            <div className="w-[80%] pb-10">
              <p className="text-center font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                OR
              </p>
              <hr className="border my-6" />
             <div className="flex flex-col gap-6">
             <button
                onClick={handleGoogleSignUp}
                className="flex flex-row justify-center items-center gap-5 font-bold btn w-full"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                  alt="google-logo"
                  className="w-8 h-8"
                />
                Join with Google
              </button>
              <button
                onClick={handleGithubSignUp}
                className="flex flex-row justify-center items-center gap-5 font-bold btn w-full"
              >
                <img
                  src="https://pngimg.com/d/github_PNG32.png"
                  alt="google-logo"
                  className="w-8 h-8"
                />
                Join with Github
              </button>
             </div>
              
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default RegisterForm;
