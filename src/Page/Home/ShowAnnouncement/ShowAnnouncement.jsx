import useAnnouncement from "../../../hooks/useAnnouncement";

const ShowAnnouncement = () => {
    const [posts]=useAnnouncement();
    return (
        <div>
            <h2 className="text-center text-2xl text-teal-500 my-12">Announcement (<span className=" text-red-600">{posts.length}</span> )</h2>
            <div className=" grid grid-cols-1 gap-6">
            {
                posts.map(post=><div className=" border border-l-gray-600 grid justify-center" key={post._id}>
                    <h2 className="text-center text-2xl text-red-500">{post.title}</h2>
                    <p className="text-center ">{post.details}</p>
                </div>)
            }

            </div>
          
            
        </div>
    );
};

export default ShowAnnouncement;