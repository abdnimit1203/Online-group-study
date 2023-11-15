import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div >
        <Outlet></Outlet>
      </div>
      <div className="bottom-0  w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
