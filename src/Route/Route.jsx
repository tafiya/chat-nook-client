import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import Dashboard from "../Layouts/Dashboard";

import AddPost from "../Page/Dashboard/Users/AddPost/AddPost";
import AllUsers from "../Page/Dashboard/Admin/ManageUser/AllUsers";
import Announcement from "../Page/Dashboard/Admin/Make announcement/Announcement";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
          },
          {
            path:'signup',
            element:<Signup></Signup>
          },
      ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'addPost',
            element:<AddPost></AddPost>
          },
        
        //   // {
        //   //   path: 'paymentHistory',
        //   //   element: <PaymentHistory></PaymentHistory>
        //   // },
  
        //     // admin routes
        {
            path: 'manageUser',
            element:<AllUsers></AllUsers>
          },
          {
            path:'announcement',
            element:<Announcement></Announcement>
          }

        //     {
        //       path: 'addItems',
        //       element: <AdminRoute><AddItems></AddItems></AdminRoute>
        //     },
        //     {
        //       path: 'manageItems',
        //       element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        //     },
        //     {
        //       path: 'updateItem/:id',
        //       element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        //       loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        //     },
        //     {
        //       path: 'users',
        //       element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        //     }
        ]
      }
  ]);