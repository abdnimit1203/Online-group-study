import { Helmet } from "react-helmet-async";
import LoginForm from "../components/Forms/LoginForm";

const Login = () => {
  return (
    <div className="bg-gradient-to-tr from-sky-400 via-purple-500 to-pink-500 min-h-screen flex justify-center items-center">
      <Helmet>
        <title>ColabTask | Login</title>
      </Helmet>
      <LoginForm></LoginForm>
    </div>
  );
};

export default Login;
