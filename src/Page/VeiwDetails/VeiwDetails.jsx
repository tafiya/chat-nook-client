import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EachDetails from "./EachDetails";

const VeiwDetails = () => {
    const [NewItem,setNewItem]=useState([]);
    const {id}=useParams();
    console.log(id);
    const events =useLoaderData();
    console.log(events);
    useEffect(()=>{
        const newEvent= events?.find(event=>event._id==id);
        setNewItem(newEvent);
    },[events,id])
    console.log(NewItem);
    return (
        <div>
            <EachDetails  NewItem={NewItem} key={NewItem._id}></EachDetails>
           
            
        </div>
    );
};

export default VeiwDetails;

