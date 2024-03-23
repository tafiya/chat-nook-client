

import UseAuth from "../../../../hooks/UseAuth";

import gold from "../../../../assets/image/GoldenBadge.png";
import brown from '../../../../assets/image/brown badge.png'
import usePayment from "../../../../hooks/usePayment";
import useMyPosts from "../../../../hooks/useMyPosts";
import { useEffect, useState } from "react";
import { MdAttachEmail } from "react-icons/md";

const MyProfile = () => {
    const {user}= UseAuth();
    const [payments]=usePayment();
    const[posts]=useMyPosts();
    const [recent, setRecent] = useState([]);
 
    useEffect(() => {
       
        const sortedPosts = posts.sort((a, b) => b.timestamp - a.timestamp);
    
        // Select the recent three posts
        const recentThreePosts = sortedPosts.slice(0, 3);
    
        setRecent(recentThreePosts);
      }, [posts]);

    return (
        <div className="card w-full" >
            <div className="w-[300px]  sm:w-full bg-white mb-20 p-6 md:p-8 shadow-md rounded-2xl space-y-8">
                {/* profile image & bg  */}
                <div className="relative">
                    <img className="w-full sm:h-96 h-full rounded-2xl bg-gray-500" src="https://source.unsplash.com/350x150/?northern lights" alt="card navigate ui" />
                    <img className="sm:w-[300px] w-[100px] sm:h-[300px] h-[100px] absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-gray-400 border border-white" src={user.photoURL} alt="card navigate ui" />
                </div>
                {/* profile name & role */}
                <div className="pt-8 text-center space-y-1">
                    <h1 className="text-xl text-[#265073] font-semibold md:text-2xl"> {user.displayName}</h1>
                    <div className=" flex items-center justify-center">
                        {payments.length > 0 ? < div className=" grid ">
                            <h2 className="text-[#265073] text-md">Member</h2>
                            <img src={gold} className="h-24 w-24 " alt="" />
                        </div> : <>
                            <img src={brown} className="h-24 w-24 " alt="" /></>
                        }
                    </div>
                </div>
                <div className=" grid">
                    <div className="flex flex-wrap px-4  md:px-8 justify-center gap-6 sm:gap-24 items-center mb-6">
                        <div className="text-center">
                            <h5 className="font-medium text-xl">{posts.length}</h5>
                            <p className="text-sm  text-[#265073]">Posts</p>
                        </div>
                        <div className="text-center">
                            <h5 className="font-medium text-[#265073] text-xl">9.7k</h5>
                            <p className="text-sm  text-[#265073]">Followers</p>
                        </div>
                        <div className="text-center">
                           <button onClick={() => document.getElementById('user_email').showModal()} ><MdAttachEmail size={'2em'} /></button>
                        </div>


                    </div>
                    <div className=" flex justify-center">
                        <button onClick={() => document.getElementById('my_profile').showModal()} className="hover:bg-[#265073] hover:scale-95 font-medium hover:text-white w-[50%] py-2 rounded-full hover:shadow-xl   text-[#265073] shadow-[0px_0px_10px_#E2DADA] t duration-500  ">
                            Recent Posts
                        </button>
                    </div>

                </div>
            </div>
            <dialog id="my_profile" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="  my-12">
                        <h2 className=" text-3xl text-accent text-center">My Recent Posts</h2>
                        <div className=" grid grid-cols-1 gap-6">
                            {
                                recent.map(post => <div key={post._id} className="card card-side bg-base-100 shadow-xl">
                                    <figure><img src={post.authorImage
                                    } className=" h-12 w-12 ml-4 rounded-lg" alt="Movie" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{post.postTitle
                                        } <span className=" text-sm text-slate-400">#{post.tags}</span></h2>
                                        <p>{post.postDescription
                                        }</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id="user_email" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <h2 className=" text-center">{user.email}</h2>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">X</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyProfile;