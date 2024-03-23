import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import Dashboard from "../Layouts/Dashboard";

import AddPost from "../Page/Dashboard/Users/AddPost/AddPost";
import AllUsers from "../Page/Dashboard/Admin/ManageUser/AllUsers";
import Announcement from "../Page/Dashboard/Admin/Make announcement/Announcement";
import VeiwDetails from "../Page/VeiwDetails/VeiwDetails";
import MyProfile from "../Page/Dashboard/Users/MyProfile/MyProfile";

import MyPost from "../Page/Dashboard/Users/MyPost/MyPost";
import AdminProfile from "../Page/Dashboard/Admin/AdminProfile/AdminProfile";
import ReportedComment from "../Page/Dashboard/Admin/reportedComment/ReportedComment";
import Dhome from "../Page/Dashboard/Dhome/Dhome";
import Comment from "../components/Comment";
import PrivateRouter from "./PrivateRouter";
import AdminRoute from "./AdminRoute";
import Membership from "../Page/membership/Membership";
import ErrorPage from "../Page/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'membership',
          element:<PrivateRouter><Membership></Membership></PrivateRouter>

        },
        {
            path:'login',
            element:<Login></Login>
          },
          {
            path:'signup',
            element:<Signup></Signup>
          },
          {
            path:'viewDetails/:id',
            element:<VeiwDetails></VeiwDetails>,
            loader: ()=> fetch(`https://online-chat-nook-server.vercel.app/posts`)
          },
         
      ]
    },
    {
      path:'/comment',
      element:<Comment></Comment>
    },
   
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [

          {
            path: 'addPost',
            element:<PrivateRouter><AddPost></AddPost></PrivateRouter>
          },
          {
            path: 'dHome',
            element:<Dhome></Dhome>
          },
          {
            path:'myProfile',
            element:<PrivateRouter><MyProfile></MyProfile></PrivateRouter>,

          },
          {
            path:'myPosts',
            element:<PrivateRouter><MyPost></MyPost></PrivateRouter>,

          },
          
        {
            path: 'manageUser',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
          },
          {
            path:'announcement',
            element:<AdminRoute><Announcement></Announcement></AdminRoute>
          },


          {
              path: 'adminProfile',
              element:<AdminProfile><AdminProfile></AdminProfile></AdminProfile> 
            },
          {
              path: 'reportComment',
              element: <AdminRoute><ReportedComment></ReportedComment></AdminRoute>
            },

        ]
      }
  ]);