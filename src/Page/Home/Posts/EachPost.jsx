import { Link } from "react-router-dom";


const EachPost = ({post}) => {
    const {_id,authorImage,postTitle,postDescription,tags}=post;

    return (
      <div>
        <Link to={`/viewDetails/${encodeURIComponent(_id)}`}>
        <div className="card w-96 lg:w-full bg-base-100 ">
        <div className="card-body">
            <div className=" flex justify-between ">
                <img src={authorImage} className=" w-24 h-24 rounded-lg" alt="" />
              
            </div>
            <h2 className=" text-base font-semibold text-cyan-600">#{tags}</h2>
          <h2 className="card-title">{postTitle}</h2>
          <p>{postDescription}</p>
          
        </div>
      </div>
        </Link>
      
      </div>
     
    );
};

export default EachPost;