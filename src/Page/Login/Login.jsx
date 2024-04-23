import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import lock from '../../assets/image/icons8-lock.gif'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import toast, { Toaster } from 'react-hot-toast';
//import SocialLogin from '../../Componants/SocialLogin/SocialLogin';
const Login = () => {
   
   // const [disable,setDisable]=useState(true);

    const {signIn}=useContext(AuthContext);
    const navigate =useNavigate();
    const location =useLocation();
  
    const from =location.state?.from?.pathname || "/";

    // useEffect(()=>{
    //     loadCaptchaEnginge(6); 
    // },[])
    // const handleValidCaptcha=e=>{
    //     const user_captcha_value=e.target.value;
    //     //console.log(user_captcha_value);
    //     if (validateCaptcha(user_captcha_value)==true) {
           
    //         setDisable(false);
    //     }
    //     else
    //     {
    //         setDisable(true);
    //     }

    // }
    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
       
       
        signIn(email,password)
        .then(result=>{
            const user =result.user;
            toast.success('Successfully login!')
           
          navigate(from,{replace: true});
        })
    }
    return (
        <>
         <Helmet>
            <title>ChatNook |login</title>
            </Helmet>
      <div className="flex h-screen items-center justify-center   p-6 md:p-0">
            <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[60%] lg:h-[80%]">
                {/* register design side  */}
                <div className="relative hidden h-full items-center justify-center bg-[#6fcbcc] md:flex md:w-[60%] lg:w-[40%]">
                    <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#adf1f2] to-[#6fcbcc]"></div>
                    <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#adf1f2] to-[#6fcbcc]"></div>
                    <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#adf1f2] to-[#6fcbcc] transition-all"></div>
                    <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#adf1f2] to-[#6fcbcc]"></div>
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-medium text-white ">Welcome Back</h2>
                        <p className="animate-pulse text-base text-white">Please Enter You Information</p>
                    </div>
                </div>
                {/* input side  */}
                <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
                    <h2 className="pb-8  text-center text-4xl font-bold text-[#6fcbcc]">Login Here</h2>
                    <form onSubmit={handleLogin}  className="flex  w-full flex-col items-center justify-center gap-4">
                        <input className="w-[80%] rounded-lg border border-[#6fcbcc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#6fcbcc]/50 md:w-[60%]" type="email" placeholder="Email" name="email"/>
                        <input className="w-[80%] rounded-lg border border-[#6fcbcc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#6fcbcc]/50 md:w-[60%]" type="password" placeholder="Password" name="password"/>

                        <p className="text-[14px] text-gray-400">Do not have an account ? <Link to='/signup' className="text-[#6fcbcc] font-bold text-base">Create one</Link ></p>
                        <input className="w-[80%] rounded-lg bg-[#6fcbcc] px-6 py-2 font-medium text-white md:w-[60%]" type="submit" />
                    </form>
                    {/* divider  */}
                    <div className="my-8 flex items-center px-8">
                        <hr className="flex-1" />
                        <div className="mx-4 text-gray-400">OR</div>
                        <hr className="flex-1" />
                    </div>
                    {/* sign with google */}
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
      </>
      
    );
};

export default Login;