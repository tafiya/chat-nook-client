// import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";

import { FaAd,  FaHome, FaList,  FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
//import useAdmin from "../hooks/useAdmin";




const Dashboard = () => {
    const [cart] = useCart();
      // TODO: get isAdmin value from the database
      //const isAdmin=true;
      const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen border border-lg  border-accent">
                <ul className="menu p-4 text-cyan-700">
                {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminProfile">
                                    <FaHome></FaHome>
                                    Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/announcement">
                                    <FaUtensils></FaUtensils>
                                    Make Announcement</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageUser">
                                    <FaUsers></FaUsers>
                                    Manage Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reportComment">
                                    <FaList></FaList>
                                    Reported Comment</NavLink>
                            </li>
                           
                          
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/myProfile">
                                        <FaHome></FaHome>
                                        My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addPost">
                                        <FaAd></FaAd>
                                        Add a Post</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myPosts">
                                        <FaList></FaList>
                                        My Posts</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li> */}
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

