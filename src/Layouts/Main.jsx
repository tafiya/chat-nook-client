import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Toaster } from "react-hot-toast";


const Main = () => {
    const  location=useLocation();
    // console.log(location);
    const noHeaderFooter =location.pathname.includes('login') ||location.pathname.includes('signup')||location.pathname.includes('membership');

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
     
           <Outlet ></Outlet>
   
            
            {noHeaderFooter || <Footer></Footer>}
           
            
           
          <Toaster
            position="top-center"
            reverseOrder={false}
          /> 
        </div>
    );
};

export default Main;