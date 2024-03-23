

import EachPost from "./EachPost";


const Posts = ({posts}) => {
    
    return (
        <div className="my-24  p-4  rounded-xl">
          {/* <h2 className=" text-4xl font-semibold text-cyan-500 text-center my-12">-------Posts Feed-------</h2>  */}
          <div className=" grid grid-cols-1   md:grid-cols-2 gap-8">
          {
            posts.map(post=><EachPost key={post._id} post={post}></EachPost>)
          } 

          </div>
         
            
        </div>
    );
};

export default Posts;