import PropTypes from "prop-types";
import { motion } from "framer-motion"
const AllPageBanner = ({ headerText }) => {
  return (
    <motion.div className="relative min-h-[200px] mb-10"
    initial={{
      x: 0,
      y: 59,
      scaleX: 1.6,
      rotate: 0,
    }}
    animate={{
      x: 0,
      y: 0,
      scaleX: 1,
      rotate: 0,
    }}
    // whileHover={{ scaleY: 1.1 }}
   >
         <div className=" text-white text-2xl lg:text-4xl absolute flex justify-center items-center w-full text-center h-full">
            <motion.p  whileHover={{ scale: 1.5,y:0 }} className="font-bold">{headerText}</motion.p>
        </div>
        <div className="">
            <img src="/assets/pagesBG.png" alt="bg" className="w-full" />
        </div>
       
    </motion.div>
  );
};
AllPageBanner.propTypes = {
    headerText: PropTypes.string.isRequired,
  };
export default AllPageBanner;
