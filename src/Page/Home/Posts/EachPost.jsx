

const EachPost = ({post}) => {
    const {authorImage,authorName,postTitle,postDescription,tags,upvote,downvote}=post;
    const viewDetails=()=>{
        
    }
    return (
        <div onClick={viewDetails} className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <div className=" flex justify-between ">
                <img src={authorImage} className=" w-24 h-24 rounded-lg" alt="" />
              
            </div>
            <h2 className=" text-base font-semibold text-cyan-600">#{tags}</h2>
          <h2 className="card-title">{postTitle}</h2>
          <p>{postDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default EachPost;