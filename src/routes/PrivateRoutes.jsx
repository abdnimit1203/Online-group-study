import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);
  console.log(user);
  if (loading == true) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen ">
          <img src="/assets/loading.gif" alt="Loading..." className="w-36" />
        </div>
      </>
    );
  }
  if (user) {
    return children;
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      iconColor: "white",

      title: "<sub>You have to Login first!</sub>",
      color: "white",
      showConfirmButton: false,
      timer: 2000,
      background: "#f1c40f",
    });
  }
  return (
    <>
      <Navigate state={location.pathname} to="/login"></Navigate>
    </>
  );
};
PrivateRoutes.propTypes = {
  children: PropTypes.object.isRequired,
};
export default PrivateRoutes;
