
import usePosts from "../../../hooks/usePosts";
import EachPost from "./EachPost";


const Posts = () => {
     const [posts]=usePosts();
    return (
        <div className=" border-opacity-90 p-4 border my-24 rounded-xl">
          <h2 className=" text-4xl font-semibold text-cyan-500 text-center my-12">-------Posts Feed-------</h2> 
          <div className=" grid  grid-cols-1 gap-6">
          {
            posts.map(post=><EachPost key={post._id} post={post}></EachPost>)
          } 

          </div>
         
            
        </div>
    );
};

export default Posts;