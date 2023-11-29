
import { Link } from "react-router-dom";
import logo from '../assets/image/chitchatlogo.png';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import profile from '../assets/image/istockphoto-1495088043-612x612.jpg'
import Swal from "sweetalert2";


const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  //const [cart] =useCart()
  const handleLogout=()=>{
    logOut()
    .then(()=>{
      Swal.fire("Logout successfully done!");
    })
    .catch(error=>console.log(error));
  }
    const navOption=<>
    <li><Link to='/'>Home</Link></li>
 
     
     
          
    </>
    return (
        <>
             <div className="navbar max-w-screen-xl text-white fixed z-10 bg-opacity-30 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
             {navOption}
            </ul>
          </div>
       
         <img src={logo} className=" w-14 h-8 rounded-2xl" alt="" />
         <a className="btn btn-ghost normal-case text-xl">ChatNook</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navOption}
          </ul>
        </div>
        <div className="navbar-end">
        {
        user?<div className="dropdown dropdown-bottom dropdown-end text-black">
        <label tabIndex={0} className=" m-1"><img src={user.photoURL? user.photoURL:profile} alt="" className=" border rounded-full h-12 w-12" /></label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a className="text-accent text-base font-semibold">{user.displayName}</a></li>
          <li><a><button className="hover:btn btn-outline btn-accent  " onClick={handleLogout}>Logout</button></a></li>
          <li><Link to='/dashboard/dHome'><button className=" hover:btn btn-outline btn-accent  ">Dashboard</button></Link></li>

        </ul>
      </div> :<Link to='/login'><button className=" btn btn-outline btn-accent text-white">Join us</button></Link>
    
      }
        </div>
      </div>
        </>
   
    );
};

export default Navbar;



