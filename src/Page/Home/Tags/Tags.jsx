import usePosts from "../../../hooks/usePosts";


const Tags = () => {
    const [posts]=usePosts();
    return (
        <div className="  my-24">
              <h2 className=" text-4xl font-semibold text-cyan-500 text-center mt-12">-------Tags-------</h2>
              <p className=" text-center text-xl text-slate-600 mb-12 mt-4 ">You can search by tag name</p> 
       
        <div className=" border-opacity-90 p-4  rounded-xl border grid md:grid-cols-6 grid-cols-1 gap-6">
        {
          posts.map(post=><div key={post.id} > #{post.tags}</div>)
        } 

        </div>
       
          
      </div>
    );
};

export default Tags;