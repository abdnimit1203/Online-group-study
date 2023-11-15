import { Helmet } from "react-helmet-async";
import RegisterForm from "../components/Forms/RegisterForm";

const Register = () => {
    return (
        <div>
            <Helmet>
        <title>ColabTask | Register</title>
      </Helmet>
            <RegisterForm></RegisterForm>
        </div>
    );
};

export default Register;