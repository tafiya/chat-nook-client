import { useState } from "react";
import usePosts from "../../../hooks/usePosts";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Tags = () => {
    const [posts]=usePosts();
    const [uniqueTags, setUniqueTags] = useState([]);
 
    useEffect(() => {
      // Extract unique tags from all posts
      const allTags = posts.flatMap(post => post.tags);
      const uniqueTagsSet = new Set(allTags);
      const uniqueTagsArray = Array.from(uniqueTagsSet);
      setUniqueTags(uniqueTagsArray);
    }, [posts]);
    useEffect(() => {
      AOS.init({})
    }, [])

    return (
        <div className="  mt-24">
        <div  data-aos="fade-down" data-aos-duration="1500" className=" shadow-lg shadow-[#2D9596] p-4  bg-[#265073] text-white rounded-xl border flex flex-wrap justify-center gap-6">
        {uniqueTags.map((tag, index) => (
          <ul data-aos="zoom-in-up" data-aos-duration="2000" className="  underline italic font-semibold" key={index}>#{tag}</ul>
        ))}

        </div>
       
          
      </div>
    );
};

export default Tags;