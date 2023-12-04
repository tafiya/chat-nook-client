import { useState } from "react";
import usePosts from "../../../hooks/usePosts";
import { useEffect } from "react";


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

    return (
        <div className="  my-24">
              <h2 className=" text-4xl font-semibold text-cyan-500 text-center mt-12">-------Tags-------</h2>
              <p className=" text-center text-xl text-slate-600 mb-12 mt-4 ">You can search by tag name</p> 
       
        <div className=" border-opacity-90 p-4  rounded-xl border grid md:grid-cols-2 grid-cols-2 gap-6">
        {uniqueTags.map((tag, index) => (
          <ul key={index}>#{tag}</ul>
        ))}

        </div>
       
          
      </div>
    );
};

export default Tags;