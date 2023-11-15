import { useLoaderData } from "react-router-dom";
import AllPageBanner from "../components/Banner/AllPageBanner";
import UpdateForm from "../components/Forms/UpdateForm";
import { Helmet } from "react-helmet-async";

const UpdateAssignment = () => {
    const data = useLoaderData ()
    
   
    return (
        <>
        <Helmet>
        <title>ColabTask | Update</title>
      </Helmet>
        <div>
           <AllPageBanner headerText={"Update Assignment"}></AllPageBanner>
        </div>
        <div>
            <UpdateForm data={data}>

            </UpdateForm>
        </div>
        </>
    );
};

export default UpdateAssignment;