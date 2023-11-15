import Banner from "../components/Banner/Banner";
import { motion, useScroll } from "framer-motion";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import { IoIosCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import FrequentQuestions from "../components/Others/FrequentQuestions";
import Featured from "../components/Others/Featured";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="">
      <Helmet>
        <title>Colab Task</title>
      </Helmet>
      <div className="">
        <Banner></Banner>
      </div>

      <Featured></Featured>

      {/* FaQ */}
      <div className="flex flex-col md:flex-row gap-6 py-16 px-10 text-lg lg:w-[80%] mx-auto">
        <div className="space-y-6 md:w-[40%]">
          <h2 className="text-3xl font-bold">Ask Our Best Team</h2>
          <img
            src="https://i.ibb.co/xh9ZJHn/banner3.jpg"
            alt="teams"
            className="w-[60%] rounded-ee-2xl rounded-ss-3xl aspect-square object-cover"
          />
          <p>
            <IoIosCall className="inline text-3xl text-purple-700 mr-4" />
            888-018-899-2345
          </p>
          <p>
            <BiLogoGmail className="inline text-3xl text-red-600 mr-4" />
            admin@collabora.com
          </p>
          <p>
            <HiLocationMarker className="inline text-3xl text-green-600 mr-4" />
            Dhaka, Bangladesh
          </p>
          <Link to={'/chats'} >
          
          <motion.button whileHover={{scale:1.1}} className="btn btn-success capitalize rounded-sm flex w-fit rounded-ee-2xl rounded-ss-3xl gap-2 mt-6" >
          <IoChatboxEllipsesOutline className="inline text-xl"/>
            Start LiveChat
          </motion.button>
          </Link>
        </div>
        <div className="md:w-[60%]">
          <FrequentQuestions></FrequentQuestions>
        </div>
      </div>
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed h-3 bg-gradient-to-tr from-indigo-700 to-blue-500 w-[100%] bottom-0 z-10">
        
        </motion.div>
    </div>
  );
};

export default Home;
