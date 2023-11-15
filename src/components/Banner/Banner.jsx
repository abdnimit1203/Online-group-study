import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Banner = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,

    // autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
  };
  return (
    <div className="mx-auto -z-0">
      <Slider {...settings} className="relative">
        {/* slide 1 */}
        <div className="relative">
          <div>
            <img
              src="https://i.ibb.co/GQvVf8Y/banner1.jpg"
              alt="banner-1"
              className="h-[700px] w-full object-cover"
            />
          </div>
          <div className="absolute z-10 bg-gradient-to-r from-[#111111ad] to-[#11111152] w-full h-full top-0 flex flex-col justify-center text-center md:text-left items-center md:items-start md:px-32 text-white gap-6 pt-10 px-4">
            <h2 className="font-bold text-3xl md:text-5xl lg:w-[80%] xl:w-[35%] ">
              Meet, chat, and study with students Collaborate on Tasks, Achieve
              Success!!!
            </h2>
            <p className="text-lg md:text-xl w-[80%] lg:w-[35%]">
              Welcome to Colab Task, where friends become collaborators.
              Create, manage, and complete tasks together for academic
              excellence.
            </p>
            <div className="md:space-x-3 flex flex-col  gap-4 md:flex-row">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-primary rounded-[4px]"
              >
                Discover More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-ghost rounded-[4px] border border-white hover:btn-neutral"
              >
                Latest Project
              </motion.button>
            </div>
          </div>
        </div>
        {/* slide 2 */}
        <div className="relative">
          <div>
            <img
              src="https://i.ibb.co/ggkg7XP/banner2.jpg"
              alt="banner-2"
              className="h-[700px] w-full object-cover"
            />
          </div>
          <div className="absolute z-10 bg-gradient-to-r from-[#111111ad] to-[#11111152] w-full h-full top-0 flex flex-col justify-center text-center md:text-left items-center md:items-start md:px-32 text-white gap-6 pt-10 px-4">
            <h2 className="font-bold text-3xl md:text-5xl md:w-[80%] lg:w-[35%]">
              Create and Manage Assignments
            </h2>
            <p className=" text-xl w-[80%] ">
              Empower yourself to organize study tasks with ease. Our platform
              allows you to effortlessly create assignments, track progress, and
              grade your friends work.
            </p>
            <div className="md:space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-primary rounded-[4px]"
              >
                Start Assigning
              </motion.button>
            </div>
          </div>
        </div>
        {/* slide 3 */}
        <div className="relative">
          <div>
            <img
              src="https://i.ibb.co/xh9ZJHn/banner3.jpg"
              alt="banner3"
              className="h-[700px] w-full object-cover"
            />
          </div>
          <div className="absolute z-10 bg-gradient-to-r from-[#111111ad] to-[#11111152] w-full h-full top-0 flex flex-col justify-center text-center  items-center  md:px-32 text-white gap-6 pt-10 px-4">
            <h2 className="font-bold text-3xl md:text-5xl md:w-[80%] lg:w-[35%] ">
              Study Together, Succeed Together!!!
            </h2>
            <p className=" text-xl w-[80%] ">
              Unlock the potential of group study with our user-friendly web
              application. Collaborate with your friends in real-time, complete
              assignments, and watch your grades soar.
            </p>
            <div className="md:space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-ghost rounded-[4px] border border-white hover:btn-secondary"
              >
                Join the Study Group
              </motion.button>
            </div>
          </div>
        </div>
        {/* slide 4 */}
        <div className="relative">
          <div>
            <img
              src="https://i.ibb.co/9TrKqjK/banner4.jpg"
              alt="banner 4"
              className="h-[700px] w-full object-cover"
            />
          </div>
          <div className="absolute z-10 bg-gradient-to-r from-[#111111ad] to-[#11111152] w-full h-full top-0 flex flex-col justify-center text-center  items-center  md:px-32 text-white gap-6 pt-10 px-4">
            <h2 className="font-bold text-3xl md:text-5xl md:w-[80%] ">
              Peer Evaluation and Feedback
            </h2>
            <p className=" text-xl w-[80%] lg:w-[35%] ">
              Elevate your academic journey with peer evaluation and
              constructive feedback. Help your friends improve, and in return,
              enhance your own skills and understanding.
            </p>
            <div className="md:space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-secondary rounded-[4px] border border-white "
              >
                Get Involved
              </motion.button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
