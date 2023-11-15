import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from './../pages/Register';
import PrivateRoutes from "./PrivateRoutes";
import CreateAssignment from "../pages/CreateAssignment";
import Assignments from './../pages/Assignments';
import Error404 from "../pages/Error404";
import UpdateAssignment from "../pages/UpdateAssignment";
import Details from "../pages/Details";
import SubmittedAssignments from "../pages/SubmittedAssignments";
import Grading from "../pages/Grading";
import MyAssignments from "../pages/MyAssignments";
import Chats from "../pages/Chats";
import UserProfile from "../pages/UserProfile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout> ,
      errorElement: <Error404></Error404>,
      children: [
        {
          index:true,
          element: <Home></Home>,
          
        },
       
        {
          path: "/assignments",
          element: <Assignments></Assignments>,
        },
        {
          path: "/create-assignment",
          element: <PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>,
        },
        {
          path: "/submitted-assignment",
          element: <PrivateRoutes><SubmittedAssignments></SubmittedAssignments></PrivateRoutes>,
        },
        {
          path: "/details/:id",
          element: <PrivateRoutes><Details></Details></PrivateRoutes>,
          loader: ({params})=>fetch(`https://collabora-task-server.vercel.app/api/v1/assignments/${params.id}`)
        },
        {
          path: "/update-assignment/:id",
          element: <PrivateRoutes><UpdateAssignment></UpdateAssignment></PrivateRoutes>,
          loader: ({params})=>fetch(`https://collabora-task-server.vercel.app/api/v1/assignments/${params.id}`)
        },
        {
          path: "/grading/:id",
          element: <PrivateRoutes><Grading></Grading></PrivateRoutes>,
          loader: ({params})=>fetch(`https://collabora-task-server.vercel.app/api/v1/submitted-assignments/${params.id}`)
        },
        {
          path: "/my-assignments",
          element: <PrivateRoutes><MyAssignments></MyAssignments></PrivateRoutes>,
        },
        {
          path: "/chats",
          element: <PrivateRoutes><Chats></Chats></PrivateRoutes>,
        },
        {
          path: "/user-profile",
          element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    }
   
  ])
  // vercel server api link : https://collabora-task-server.vercel.app     


  //  https://collabora-task-server.vercel.app 