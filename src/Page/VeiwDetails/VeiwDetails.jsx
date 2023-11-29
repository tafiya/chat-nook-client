import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EachDetails from "./EachDetails";
import postBanner from '../../assets/image/pexels-pixabay-267355.jpg'

const VeiwDetails = () => {
    const [NewPost,setNewPost]=useState([]);
    const {id}=useParams();
    console.log(id);
    const posts =useLoaderData();
    console.log(posts);
    useEffect(()=>{
        const newEvent= posts?.find(event=>event._id==id);
        setNewPost(newEvent);
    },[posts,id])
    console.log(NewPost);
    return (
        <div>
            <img src={postBanner} className="h-[600px] w-full" alt="" />
            <div className=" my-12">
            <EachDetails  NewPost={NewPost} key={NewPost._id}></EachDetails>

            </div>
            
           
            
        </div>
    );
};

export default VeiwDetails;

