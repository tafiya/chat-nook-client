import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
const EachDetails = ({NewPost}) => {
    const {authorImage,authorName,postTitle,postDescription,tags,upvote,downvote,currentTime}=NewPost;
//     const newcurrentTime = new Date();

// // Calculate the time difference in milliseconds
// const timeDifference = newcurrentTime - currentTime;
// console.log(newcurrentTime ,currentTime)

// // Convert the time difference to a human-readable format
// const secondsDifference = Math.floor(timeDifference / 1000);
// const minutesDifference = Math.floor(secondsDifference / 60);
// const hoursDifference = Math.floor(minutesDifference / 60);
// const daysDifference = Math.floor(hoursDifference / 24);


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
              <div className="badge">{upvote}</div>
              <GrLike /> UpVote
              </button>
              <button className=" flex gap-1 border border-sm p-3 rounded-lg border-accent  mr-20">
              <div className="badge ">{downvote}</div>
              <GrDislike /> DownVote
              </button>
              <AwesomeButton type="secondary" href="/comment">Comment</AwesomeButton>
              <AwesomeButton type="secondary">Share</AwesomeButton>
       

        </div>
      
          </div>
        </div>

      </div>
    );
};

export default EachDetails;