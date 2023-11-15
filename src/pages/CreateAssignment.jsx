import { Helmet } from "react-helmet-async";
import AllPageBanner from "../components/Banner/AllPageBanner";
import CreateAssignmentForm from "../components/Forms/CreateAssignmentForm";

const CreateAssignment = () => {
    return (
        <>
        <Helmet>
        <title>ColabTask | Create Assignment</title>
      </Helmet>
        <div>
            <AllPageBanner headerText={"Create Assignments"}></AllPageBanner>
        </div>
        <div>
            <CreateAssignmentForm></CreateAssignmentForm>
        </div>
        </>
    );
};

export default CreateAssignment;