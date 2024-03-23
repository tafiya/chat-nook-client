// import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";

import { FaAd,  FaArrowRight,  FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { Toaster } from "react-hot-toast";
//import useAdmin from "../hooks/useAdmin";




const Dashboard = () => {
    const [cart] = useCart();
      // TODO: get isAdmin value from the database
      //const isAdmin=true;
      const [isAdmin] = useAdmin();

    return (
        <div >
            <div className="container py-8">
                        {/* dashboard side bar */}
            <div className="grid grid-cols-1   lg:grid-cols-[250px_auto] gap-6  mb-24">
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-base-100 rounded-box w-72">
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
              </ul>
            </div>
                <aside className="hidden mt-12 lg:block py-8 px-6 bg-[#2D9596] shadow-lg shadow-[#265073] text-white rounded-lg h-[calc(100vh-147px)]">
                <h4 className="text-[18px] uppercase font-medium mb-4">Dashboard</h4>
            
                {
                        isAdmin ? <div className="space-y-1">
                                    <Link to="/dashboard/adminProfile" className="flex justify-between items-center py-2 rounded-lg border hover:bg-white hover:text-[#2D9596] ">
                                        <div className="flex items-center gap-4 px-2">
                                            <FaHome className="text-xl" />
                                            Admin Profile
                                        </div>
                                        <FaArrowRight />
                                    </Link>
                                    <Link to="/dashboard/announcement" className="flex justify-between items-center py-2 rounded-lg border hover:bg-white hover:text-[#2D9596] ">
                                        <div className="flex items-center gap-4 px-2">
                                            <FaUtensils className="text-xl" />
                                            Make Announcement
                                        </div>
                                        <FaArrowRight />
                                    </Link>
                                    <Link to="/dashboard/manageUser" className="flex justify-between items-center py-2 rounded-lg border hover:bg-white hover:text-[#2D9596] ">
                                        <div className="flex items-center gap-4 px-2">
                                            <FaUsers className="text-xl" />
                                            Manage Users
                                        </div>
                                        <FaArrowRight />
                                    </Link>
                                    <Link to="/dashboard/reportComment" className="flex justify-between items-center py-2 rounded-lg border hover:bg-white hover:text-[#2D9596] ">
                                        <div className="flex items-center gap-4 px-2">
                                            <FaList className="text-xl" />
                                            Reported Comment
                                        </div>
                                        <FaArrowRight />
                                    </Link>

                        </div>
                            :
                            <div className="space-y-1">
                                       <Link to="/dashboard/myProfile" className="flex justify-between items-center py-2 rounded-lg border hover:bg-white hover:text-[#2D9596] ">
                                        <div className="flex items-center gap-4 px-2 ">
                                            <FaHome className="text-xl" />
                                            My Profile
                                        </div>
                                        <FaArrowRight />
                                    </Link>
                                    <Link to="/dashboard/addPost" className="flex justify-between items-center py-2 rounded-lg border hover:bg-white hover:text-[#2D9596] ">
                                        <div className="flex items-center gap-4 px-2">
                                            <FaAd className="text-xl" />
                                            Add a Post
                                        </div>
                                        <FaArrowRight />
                                    </Link>
                                    <Link to="/dashboard/myPosts" className="flex justify-between items-center py-2 rounded-lg border hover:bg-white hover:text-[#2D9596] ">
                                        <div className="flex items-center gap-4 px-2">
                                            <FaList className="text-xl" />
                                            My Posts
                                        </div>
                                        <FaArrowRight />
                                    </Link>
                           
                            </div>
                    }
                 
                    {/* shared nav links */}
                    <h4 className="text-[18px] uppercase font-medium mb-4 mt-8">Menu</h4>
                    <div className="space-y-1">
                    <Link to='/' className="flex justify-between items-center py-2 rounded-lg border hover:bg-white hover:text-[#2D9596] ">
                  <div className="flex items-center gap-4 px-2">
                    <FaHome className="text-xl" />
                    Home
                  </div>
                  <FaArrowRight />
                </Link>
                        
                    </div>
               
               

                </aside>
                   {/* dashboard content */}
                    <div className="flex-1 px-8 ">

                        <Outlet></Outlet>
                    </div>
             
            </div>
         
            
          <Toaster
            position="top-center"
            reverseOrder={false}
          />

            </div>
        </div>
    );
};

export default Dashboard;

