import { useContext, useEffect, useState } from "react";
import MyEachPost from "./MyEachPost";
import { AuthContext } from "../../../../Providers/AuthProvider";



const MyPost = () => {
    const {user}=useContext(AuthContext);
    const [myPosts,setMyPosts]=useState([]);
    //${user?.email}
   
    const url=`https://online-chat-nook-server.vercel.app/posts?email=${user?.email}`;
    useEffect(()=>{
        // axios.get(url,{withCredentials:true})
        // .then(res=>{
        //     setMyPosts(res.data);
        // })
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyPosts(data))
    },[url]);
    return (
        <div  className=' max-w-7xl mx-auto'>
          
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {
                myPosts.map(myPost=><MyEachPost key={myPost._id} myPost={myPost}></MyEachPost >)
            }

        </div>
        
    </div>
    );
};

export default MyPost;