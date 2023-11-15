import { Link, NavLink, useNavigate } from "react-router-dom";
import { FcCollaboration, FcEditImage } from "react-icons/fc";
import { motion } from "framer-motion";

import toast from "react-hot-toast";
import { FiLogOut } from "react-icons/fi";
import { IoMdCreate } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsChatRightTextFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Navbar = () => {
  const { user, userSignOut } = useAuth();
  const navigate = useNavigate();
  //change navbar backgroud on scroll
  const [navBG, setNavBG] = useState(false);
  const changeBG = () => {
    if (window.scrollY >= 90) {
      setNavBG(true);
    } else {
      setNavBG(false);
    }
  };
  window.addEventListener("scroll", changeBG);

  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active text-white bg-gradient-to-tl from-primary  to-rose-500 p-5 rounded-ee-2xl rounded-ss-2xl"
            : "p-5 text-base"
        }
      >
        Home
      </NavLink>
      <div className="xl:dropdown xl:dropdown-hover">
        <label tabIndex={0} className="btn btn-ghost m-2 pl-6 text-base">
          Assignements <AiOutlineCaretDown />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 xl:shadow xl:bg-base-100 xl:rounded-box xl:w-60 border-l-2 xl:text-black"
        >
          <NavLink
            to="/assignments"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " active text-white  bg-gradient-to-tl from-primary  to-rose-500  p-5 text-base rounded-ee-2xl rounded-ss-2xl flex justify-center items-center gap-2"
                : "p-5 text-base flex justify-center items-center gap-2"
            }
          >
            <ImBooks /> All Assignments
          </NavLink>
          {user?.email && (
            <NavLink
              to="/create-assignment"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " active text-white  bg-gradient-to-tl from-primary  to-rose-500  p-5 text-base rounded-ee-2xl rounded-ss-2xl flex justify-center items-center gap-2"
                  : "p-5 text-base flex justify-center items-center gap-2"
              }
            >
              <IoMdCreate />
              Create Assignment
            </NavLink>
          )}
        </ul>
      </div>

      {user?.email && (
        <>
          <NavLink
            to="/submitted-assignment"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " active text-white  bg-gradient-to-tl from-primary  to-rose-500  p-5 text-base rounded-ee-2xl rounded-ss-2xl"
                : "p-5 text-base"
            }
          >
            Submitted Assignments
          </NavLink>
          <NavLink
            to="/my-assignments"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " active text-white  bg-gradient-to-tl from-primary  to-rose-500  p-5 text-base rounded-ee-2xl rounded-ss-2xl"
                : "p-5 text-base"
            }
          >
            My Assignments
          </NavLink>
        </>
      )}
    </>
  );

  // handle signgout

  const handleLogOut = async () => {
    const toastId = toast.loading("logging out...");
    try {
      await userSignOut();
      toast.success(
        "User logged out successfully!",

        { id: toastId }
      );
      navigate("/login");
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };
  return (
    <>
      {/* navbar drawer */}
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="fixed top-0 w-full z-10 ">
            <div
              className={
                navBG
                  ? "bg-[#4d34dbf3] transition duration-400 ease-in-out shadow-md text-white "
                  : "transition duration-600 ease-in-out text-white"
              }
            >
              <div className=" navbar w-[90%] sm:w-[80%] mx-auto justify-between">
                <div className="navbar-start ">
                  <div className="flex-none xl:hidden">
                    <label
                      htmlFor="my-drawer-3"
                      aria-label="open sidebar"
                      className="btn btn-square btn-ghost"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </label>
                  </div>
                  <div className="sm:pr-2 mr-2 w-fit">
                    <Link to={"/"}>
                      <motion.h2
                        whileTap={{ scale: 0.9 }}
                        id="logo"
                        className="text-2xl md:text-3xl bg-gradient-to-br from-fuchsia-500 to-blue-600 rounded-ee-3xl rounded-ss-2xl p-2 sm:p-4 text-white flex items-center gap-2"
                      >
                        <FcCollaboration className="bg-white rounded-ee-2xl rounded-ss-2xl px-2" />
                        ColabTask
                      </motion.h2>
                    </Link>
                  </div>
                </div>
                <div className="navbar-center flex-none hidden xl:block">
                  <div className="menu menu-horizontal space-x-2  font-semibold">
                    {/* Navbar menu content here */}
                    {navlinks}
                  </div>
                </div>
                <div className="navbar-end">
                  {user ? (
                    <>
                      <motion.div
                        whileHover={{
                          scale: [1, 2, 2, 1, 1],
                          rotate: [0, 0, 270, 270, 0],
                          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        
                        className="px-4 md:pr-4 text-xl  "
                      >
                        <Link to={"/chats"} className="">
                          <BsChatRightTextFill className="animate-pulse  text-2xl" />
                        </Link>
                      </motion.div>
                      <div className="dropdown dropdown-end ">
                        <div tabIndex={0} className="avatar online">
                          <motion.div 
                           whileTap={{scale:1.2}}className="w-12 cursor-pointer sm:w-14 rounded-full">
                            <img
                           
                              src={
                                user?.photoURL
                                  ? user.photoURL
                                  : "https://i.ibb.co/5x6DN2n/blank-dp.png"
                              }
                            />
                          </motion.div>
                        </div>

                        <div
                          tabIndex={0}
                          className="dropdown-content z-[1] menu shadow bg-base-100  rounded-box  border p-4 sm:p-10 space-y-3 text-slate-600 font-semibold sm:text-lg"
                        >
                          {user?.displayName && (
                            <div className="flex justify-center items-center  border-b-2 border-purple-500 pb-4">
                              <img
                                className="mx-auto w-20 h-20  object-cover rounded-full border-2"
                                src={
                                  user?.photoURL
                                    ? user.photoURL
                                    : "https://i.ibb.co/5x6DN2n/blank-dp.png"
                                }
                              />
                              <p className="text-center font-boldpy-2">
                                {user?.displayName}
                              </p>
                            </div>
                          )}

                          <p className="flex justify-center items-center gap-2">
                            <BiSolidUserCircle className="text-secondary text-3xl" />{" "}
                            {user.email}
                          </p>
                          <Link
                            to={"/user-profile"}
                            className="btn btn-ghost border-2 border-slate-300 hover:btn-accent hover:text-white btn-sm "
                          >
                            <FcEditImage className="text-xl" /> Edit Profile
                          </Link>

                          <button
                            onClick={handleLogOut}
                            className="md:hidden btn-sm btn-error rounded-full mx-2 flex justify-center items-center text-center font-bold p-2 gap-2"
                          >
                            <FiLogOut className="font-black text-xl" />
                            Log Out
                          </button>
                        </div>
                      </div>
                      <div>
                        <motion.button
                        whileHover={{scale:1.1,
                          transition: { duration: 1 }}}
                          whileTap={{ scale: 0.9 }}
                          onClick={handleLogOut}
                          className="hidden btn-sm btn-error rounded-full mx-2 md:flex justify-center items-center text-center font-bold p-2 gap-2"
                        >
                          <FiLogOut 
                          
                          className="font-black text-xl" />
                          Log Out
                        </motion.button>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <button
                          className="
                      btn btn-ghost border-primary text-white font-bold btn-circle border-4 hover:btn-primary hover:text-white w-20 btn-sm mx-4
                     "
                        >
                          Login
                        </button>
                      </Link>
                      <Link to={"/register"}>
                        <button className="hidden sm:block btn btn-primary  text-white font-bold btn-circle w-24 btn-sm">
                          Register
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Page content here */}
          {/* Content */}
        </div>
        <div className="drawer-side z-20 h-full">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-gradient-to-br from-fuchsia-500 via-blue-600 to-purple-600 text-center text-white space-y-3 py-10 ">
            {/* Sidebar content here */}
            {navlinks}
            {user?.email && (
              <button
                onClick={handleLogOut}
                className="md:hidden btn-sx btn-error rounded-full flex justify-center items-center text-center font-bold p-1 gap-2"
              >
                <FiLogOut className="font-black text-xl" />
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
