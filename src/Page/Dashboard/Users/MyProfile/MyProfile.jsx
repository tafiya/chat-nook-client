

import UseAuth from "../../../../hooks/UseAuth";

import gold from "../../../../assets/image/GoldenBadge.png";
import brown from '../../../../assets/image/brown badge.png'
import usePayment from "../../../../hooks/usePayment";
import useMyPosts from "../../../../hooks/useMyPosts";
import { useEffect, useState } from "react";

const MyProfile = () => {
    const {user}= UseAuth();
    const [payments]=usePayment();
    const[posts]=useMyPosts();
    const [recent, setRecent] = useState([]);
    //const postLength=posts.length;
    useEffect(() => {
        // Fetch or somehow obtain all posts data from the server
        // For the sake of example, let's assume you have a mock API response
      
    
        // Sort posts by timestamp in descending order
        const sortedPosts = posts.sort((a, b) => b.timestamp - a.timestamp);
    
        // Select the recent three posts
        const recentThreePosts = sortedPosts.slice(0, 3);
    
        setRecent(recentThreePosts);
      }, [posts]);


    console.log('my profile ',recent)
    return (
        <div className="card w-full" >
            <div className=" border border-lg border-emerald-400 rounded-lg p-8">
            <div className=" flex justify-center">
            <img src={user.photoURL} className="h-48 w-48 " alt="" />
            </div>
         
             <br />
             <div className=" grid justify-center">
             <h2 className="text-xl font-bold text-center"> {user.displayName}</h2>
       
           
            <h2 className=" text-center">{user.email}</h2>
            {payments.length>0? <>
            <img src={gold} className="h-48 w-48 " alt="" />
            </>:<>
            <img src={brown} className="h-48 w-48 " alt="" /></>
                
            }


             </div>
            </div>
           
             <div className="  my-12">
                <h2 className=" text-3xl text-accent text-center">MY recent posts</h2>
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

           
            
        </div>
    );
};

export default MyProfile;