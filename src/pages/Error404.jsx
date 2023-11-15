import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <>
        <Helmet>
        <title>ColabTask | Not Found!</title>
      </Helmet>
        
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#DFF1EE]">

            <img src="/assets/404.png" alt="Error 404" className="md:max-w-xl"/>
            <Link to={'/'}>
            
            <button className="btn btn-secondary text-white font-bold">Go Back Home</button>
            </Link>
        </div>
        </>
    );
};

export default Error404;