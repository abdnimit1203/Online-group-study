import { FcCollaboration } from "react-icons/fc";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-[#4d34db] text-white">
        <aside>
          <h2
            id="logo"
            className="text-3xl md:text-4xl  p-4 text-white flex items-center gap-2"
          >
            <FcCollaboration className="bg-white rounded-ee-2xl rounded-ss-2xl px-2" />
            ColabTask
          </h2>
          <p className="font-bold">Providing reliable support since 2019</p>
          <p>
            Copyright © 2023 - All right reserved by -{" "}
            
              <motion.span whileHover={{ scale: 1.2 }} className="font-semibold bg-red-500 rounded-full px-1 text-xs w-fit"><Link
              to={"https://github.com/abdnimit1203"}
              target="_blank"
              rel="noopener noreferrer"
            >ABD NIMIT</Link></motion.span>
            
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <motion.p
                className="text-2xl"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.p>
            </Link>
            <Link>
              <motion.p
                className="text-2xl"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.p>
            </Link>
            <Link>
              <motion.p
                className="text-2xl"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.p>
            </Link>
            <Link>
              <motion.p
                className="text-2xl"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaYoutube />
              </motion.p>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
