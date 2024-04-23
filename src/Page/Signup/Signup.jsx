import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import { useForm } from 'react-hook-form';




const Signup = () => {
    const axiosPublic = useAxiosPublic();
    const {register,handleSubmit,reset,formState: { errors }} = useForm();
    const {createUser,updateUserProfile}=useContext(AuthContext);
    const navigate =useNavigate();

    const onSubmit = data =>{
        
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser=result.user;
            //console.log(loggedUser);
            updateUserProfile(data.name,data.photoURL,data.phone)
            .then(()=>{
              const userInfo = {
                name: data.name,
                email: data.email
            }
              axiosPublic.post('/users', userInfo)
                .then(res => {
                  if (res.data.insertedId) {
                   // console.log('user added to the database')
                    reset();
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'User created successfully.',
                      showConfirmButton: false,
                      timer: 1500
                    });
                    navigate('/');
                  }
                })
            })
            .catch(error => console.log(error))
        })
    } 
  
    return (
        <>
         <Helmet>
            <title>Chat Nook |Sign Up</title>
            </Helmet>
          <div className="flex h-screen items-center justify-center   p-6 md:p-0">
          <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
                {/* register form  */}
                <form onSubmit={handleSubmit(onSubmit)} className={`p-8 w-full mr-0 ml-auto duration-500 $`}>
            <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"  {...register("name",{ required: true })} placeholder="name" className="input input-bordered"  />
                {errors.name && <span className=" text-red-600">This field is required</span>}
              </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input type="tel" name="phone" pattern="^\+?(88)?01[0-9]{9}$" placeholder="Phone Number" className="input input-bordered" {...register("phone", { required: true })} />
                  <small>Format: 01XXXXXXXXX</small>
                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{ required: true })} placeholder="email" className="input input-bordered"  />
                {errors.email && <span className=" text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input type="text" placeholder="photoURL" {...register("photoURL",{ required: true })} className="input input-bordered"  />
                {errors.image && <span className=" text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password",{ required: true,minLength:6, maxLength: 20,
                pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/})} className="input input-bordered"/>
                {errors.password?.type=='required' && <span className=" text-red-600">password is required</span>}
                {errors.password?.type=='minLength' && <span className=" text-red-600">password must be 6 characters</span>}
                {errors.password?.type=='maxLength' && <span className=" text-red-600">password must be less then 20 characters</span>}
                {errors.password?.type=='pattern' && <span className=" text-red-600">password must have One UpperLetter ,one small letter and one special character</span>}
              </div>
         
              <div className="form-control mt-6">
                <input  type="submit"  className="btn btn-primary" value="Signup" />
                
              </div>
              <p><small>Already have an Account? <Link to='/login'><span className=" text-green-700 text-xl font-semibold">Login </span></Link></small></p>
              {/* <SocialLogin></SocialLogin> */}
            </form>
                {/* img */}
                <div className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${register ? 'translate-x-full rounded-bl-full duration-500' : 'rounded-br-full'}`}>
                    <img src="https://source.unsplash.com/random" className="object-cover h-full" alt="card navigate ui" />
                </div>
                {/* login form */}
                <form className={`p-8 w-full mr-0 ml-auto duration-500 ${register ? 'lg:translate-x-full hidden lg:block' : ''}`}>
                    <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Login</h1>
                    <div className="space-y-5">
                        <label htmlFor="_email" className="block">Email</label>
                        <input id="_email" type="email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                        <label htmlFor="_password" className="block">Password</label>
                        <input id="_password" type="password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"/>
                    </div>
                    {/* button type will be submit for handling form submission*/}
                    <button type="button" className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">Submit</button>
                    <p className="mb-3 text-center">Don&apos;t have an account?<Link onClick={() => {setRegister(!register);}} className="underline font-semibold">Register</Link></p>
                    <hr />
                    <button type="button" className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"><svg viewBox="-0.5 0 48 48" version="1.1" className="w-6 inline-block mr-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Google-color</title> <desc>Created with Sketch.</desc><defs></defs><g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Color-" transform="translate(-401.000000, -860.000000)"><g id="Google" transform="translate(401.000000, 860.000000)"><path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path><path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path><path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path><path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path></g></g></g></g></svg>Continue with Google</button>
                </form>
            </div>
   
      </div>
        </>
      
    );
};

export default Signup;