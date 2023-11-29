import { GrDislike, GrLike } from "react-icons/gr";


const MyEachPost = ({myPost}) => {
    console.log(myPost);
    const {authorImage,authorName,postTitle,postDescription,tags,upvote,downvote,currentTime}=myPost;
    return (
        <div className="card w-full  bg-cyan-50 shadow-xl">
        <div className="card-body ">
            <div className=" flex  gap-2 justify-center">
                <img src={authorImage} className=" w-24 h-24 rounded-full" alt="" />
                <br></br>
                 
            </div >
            <h2 className=" text-center text-3xl font-semibold mb-4">{authorName} </h2>
        <div className=" w-3/4">
          <h2>{currentTime}</h2>
        <h2 className="card-title mb-4">{postTitle} <span className=" text-base font-semibold text-cyan-600">#{tags}</span></h2>
          <p>{postDescription}</p>
          <div className="card-actions my-6 ">
              <button className=" flex gap-1 border border-sm p-3 rounded-lg border-accent  mr-2">
              <div className="badge">+99</div>
              <GrLike /> UpVote
              </button>
              <button className=" flex gap-1 border border-sm p-3 rounded-lg border-accent  mr-20">
              <div className="badge ">+99</div>
              <GrDislike /> DownVote
              </button>
          
          <button className="btn btn-outline btn-accent mr-2 ">Comment</button>
            <button className="btn btn-accent btn-outline">Share</button>

        </div>
      
          </div>
        </div>

      </div>
    );
};

export default MyEachPost;