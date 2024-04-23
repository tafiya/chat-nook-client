
import { FaGoogle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import useAxiosPublic from "../../hooks/UseAxiosPublic";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";



const SocialLogin = () => {
    const { googleSignIn } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
           // console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                
                toast.success('Successfully login!')
                navigate(location ?. state ? location.state : '/');
            })
        })
    }

    return (
        <div className="">
            <form action="" onClick={handleGoogleSignIn}>
            <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                        <div className="flex h-full w-[50%] items-center bg-[#6fcbcc] pl-4 font-semibold text-sm text-white">Sign With</div>
                        <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#6fcbcc] group-hover:hidden"></span>
                        <span className="pr-4 text-4xl font-bold text-[#6fcbcc]">G+</span>
                    </div>
            </form>
   
        </div>
    );
};

export default SocialLogin;