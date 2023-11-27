import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";

const EachDetails = ({post}) => {
    const {authorImage,authorName,postTitle,postDescription,tags,upvote,downvote}=post;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <div className=" flex gap-2">
                <img src={authorImage} className=" w-24 h-24 rounded-lg" alt="" />
                 <h2>Author name: {authorName} </h2>
            </div>
            <h2 className=" text-base font-semibold text-cyan-600">#{tags}</h2>
          <h2 className="card-title">{postTitle}</h2>
          <p>{postDescription}</p>
          <div className="card-actions justify-between">
            <button><GrLike /></button>
            <button><GrDislike /></button>
          <button className="btn btn-primary">Comment</button>
            <button className="btn btn-primary">Comment</button>
          </div>
        </div>
      </div>
    );
};

export default EachDetails;