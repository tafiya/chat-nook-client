import { GrAnnounce } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/image/chitchatlogo.png';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import profile from '../assets/image/istockphoto-1495088043-612x612.jpg'

import useAnnouncement from "../hooks/useAnnouncement";
import ShowAnnouncement from "../Page/Home/ShowAnnouncement/ShowAnnouncement";

import '../Shared/button.css'
import toast from "react-hot-toast";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const [posts]=useAnnouncement();
  const [isAdmin] = useAdmin();
  //const [cart] =useCart()
  const handleLogout=()=>{
    logOut()
    .then(()=>{
      toast('logOut...!', {
        icon: '👏',
      });
    })
    .catch(error=>console.log(error));
  }
    const navOption=<>
    <li><Link className="active:underline font-medium text-lg" to='/'>Home</Link></li>
    <li><Link className="active:underline  font-medium text-lg" to='/membership'>Membership</Link></li>
          
    </>
    return (
      < div>
        <div className="navbar   text-white fixed z-10 bg-opacity-30 bg-black">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                {navOption}
              </ul>
            </div>

            <img src={logo} className=" sm:w-12 w-10 h-8 rounded-2xl" alt="" />
            <a className="ml-2 normal-case test-base sm:text-xl">ChatNook</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="gap-4 menu-horizontal px-1">
              {navOption}
            </ul>
          </div>
          <div className="navbar-end">
            {
              user?  <div><Link > <button className="   hover:bg-transparent border-transparent" onClick={() => document.getElementById('my_modal_5').showModal()} >
              <div className="badge text-red-600 font-extrabold text-lg p-4 bg-[#ECF4D6]"><GrAnnounce  size={'1.5em'} color="#265073"/>+{posts.length}</div>
            </button></Link></div> :<></>
            }
            {
              user ?<>
             
                <div className="dropdown ml-2 dropdown-bottom dropdown-end text-black">
                <label tabIndex={0} className=" m-1"><img src={user.photoURL ? user.photoURL : profile} alt="" className=" border rounded-full sm:h-12 h-8 w-8 sm:w-12" /></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a className="text-[#265073]  text-lg font-bold">{user.displayName}</a></li>
                  <li><a><button className="but text-accent border-0"  onClick={handleLogout}>Logout</button></a></li>
                  {
                     user && isAdmin &&  <li><Link to='/dashboard/adminProfile'><button className="but text-accent border-0" >Dashboard</button></Link></li>
                  }
                  {
                      user && !isAdmin && <li><Link to='/dashboard/myProfile'><button className="but text-accent border-0" >Dashboard</button></Link></li>
                  }
                 

                </ul>
              </div>
             
              
              </>
                :
                <>
                 <Link to='/login'><button className=" p-2 border border-accent  rounded-lg  text-accent ">Join us</button></Link>
                </>
                

            }
           
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

              <div className="modal-box">
                {
                  posts.length > 0 ? <><ShowAnnouncement></ShowAnnouncement></> : <></>
                }
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
   
    );
};

export default Navbar;



