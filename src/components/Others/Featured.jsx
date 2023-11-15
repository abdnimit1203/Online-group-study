import Flicking from "@egjs/react-flicking";
import { motion } from "framer-motion"
import { PiLaptopBold } from "react-icons/pi";
import { MdOutlineGroups2 ,MdOutlineGrade} from "react-icons/md";
import { HiDocumentAdd } from "react-icons/hi";
import { Link } from "react-router-dom";
const Featured = () => {
  return (
    <>
      <div className="px-6 w-[80%] mx-auto">
        <motion.h2 animate={{
          scale:1.2,}} className="my-16 p-6  text-center text-2xl md:text-4xl font-bold mx-auto mb-6 border-x-8 border-purple-700  w-fit bg-gradient-to-r text-transparent from-purple-600 to-blue-500 bg-clip-text">
          <MdOutlineGroups2 className=" block mx-auto text-4xl text-purple-600" />
          Online Assignment based group study
        </motion.h2>
        <motion.h3 initial={{
          scale:0.7,
          y:50}} 
          animate={{
            scale:1.2,
            y:0}}  className="my-16 p-6  text-center text-2xl md:text-4xl font-bold mx-auto mb-6 border-b-8 border-amber-700  w-fit bg-gradient-to-r text-transparent from-amber-600 to-red-500 bg-clip-text">Features</motion.h3>
            <div className="flex flex-col xl:flex-row-reverse items-center gap-4">
              
              <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
                <img src="https://i.ibb.co/CnQ9gZD/books-Animated1.png" alt="featured image" className="max-w-sm mx-auto xl:max-w-lg" />
              </motion.div>
              <div className="grid grid-cols-1 gap-10 mt-20 md:w-[90%] mx-auto">
          <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className="flex py-4 flex-col md:flex-row gap-8 justify-center items-center ">
            <div className="text-[100px] text-amber-600 rounded-full border-amber-600 border-4 p-4 w-fit ">
              <PiLaptopBold className="text-center " />
            </div>
            <div className="md:col-span-3 space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-semibold">
                Let Us Know Your Requirements
              </h2>
              <p className="text-xl md:w-[80%]">
                You can visit our website and fill the order form while
                providing all the requirements. If you want a customized
                assignment solution, feel free to contact us via chat or
                WhatsApp.
              </p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className="flex py-4 flex-col md:flex-row gap-8 justify-center items-center ">
            <div className="text-[100px] text-amber-600 rounded-full border-amber-600 border-4 p-4 w-fit ">
              <HiDocumentAdd className="text-center " />
            </div>
            <div className="md:col-span-3 space-y-4 ">
              <h2 className="text-3xl font-semibold">
                Make your own Assignment
              </h2>
              <p className="text-xl md:w-[80%]">
                You can visit our website and fill the form to create a
                assigment with other where everyone can solve the assignment for
                you and their own. Go to create assigment page to create and
                share. Make sure to create an account
              </p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className="flex py-4 flex-col md:flex-row gap-8 justify-center items-center ">
            <div className="text-[100px] text-amber-600 rounded-full border-amber-600 border-4 p-4 w-fit ">
              <MdOutlineGrade className="text-center " />
            </div>
            <div className="md:col-span-3 space-y-4 ">
              <h2 className="text-3xl font-semibold">
              Receive Assignment Solution and Grade on Time
              </h2>
              <p className="text-xl md:w-[80%]">
                Your assignments will be saved in pending state for peer review. User will give marks and feedback once they found your assignment and grade them. You can finbd them in the My asignment to sse what are the status of your assignments
              </p>
            </div>
          </motion.div>
        </div>
            </div>
       
      </div>
      <div className="flex flex-col md:flex-row w-[80%] mx-auto gap-6 justify-center items-center py-16 md:py-28 space-y-6">
        <div className=" text-xl   md:border-r-4 border-purple-600">
          <p className="pr-4 md:pr-8">
            Collaborate and Cooperate with the best ones from our group!
          </p>
        </div>
        <div className="bg-[#e9e9e9]">
          <Flicking
            align="prev"
            circular={true}
            onMoveEnd={(e) => {
              console.log(e);
            }}
          >
            <div className="panel">
              <img
                src="/assets/universityList1.png"
                alt="uni list"
                className="px-4  h-10 md:h-auto "
              />
            </div>
            <div className="panel">
              <img
                src="/assets/universityList2.png"
                alt="uni list"
                className="px-4 h-10 md:h-auto"
              />
            </div>
            <div className="panel">
              <img
                src="/assets/universityList3.png"
                alt="uni list"
                className="px-4  h-10 md:h-auto "
              />
            </div>
            <div className="panel">
              <img
                src="/assets/universityList2.png"
                alt="uni list"
                className="px-4  h-10 md:h-auto "
              />
            </div>
            
          </Flicking>
        </div>
      </div>
      <div>
        <h2 className="p-6  text-center text-2xl md:text-4xl font-bold mx-auto mb-6 border-x-8 border-purple-700 text-slate-600 w-fit">
          Way More Than
          <br />
          <br /> Any Other Assignment Website
        </h2>
        <div className="hero py-10 bg-gradient-to-tr from-purple-200 t">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <motion.img whileHover={{ scale: 0.8}}
    whileTap={{ scale: 0.9 }}
              src="https://i.ibb.co/85Ybv4G/solution.jpg"
              className="md:max-w-sm rounded-lg shadow-2xl max-w-xs"
            />
            <div className="m-6">
              <h1 className="bg-gradient-to-r from-purple-600 to-blue-500 inline-block text-transparent bg-clip-text  text-3xl md:text-4xl font-bold">
                Colab Task
              </h1>
              <p className="py-6 md:pr-6 text-lg md:text-2xl w-[80%]">
                Work on your assignments while being guided by an expert in the
                discipline. Chat with them discuss the matter you are facing
                problem with
              </p>
              <p className="text-[100px]">👨‍💻</p>
              <Link to={'/chats'}>
              
              <motion.button whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className="btn btn-success rounded-sm rounded-ee-2xl rounded-ss-3xl">
                Cooperate with Experts
              </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
