import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";


const MyProfile = () => {
    const {user}= useContext(AuthContext);


    console.log('my profile ',user)
    return (
        <div className="card w-full" >
            <div className=" flex justify-center">
            <img src={user.photoURL} className="h-48 w-48 " alt="" />
            </div>
         
             <br />
             <div className=" grid justify-center">
             <h2 className="text-xl font-bold text-center"> {user.displayName}</h2>
       
           
            <h2 className=" text-center">{user.email}</h2>


             </div>

           
            
        </div>
    );
};

export default MyProfile;