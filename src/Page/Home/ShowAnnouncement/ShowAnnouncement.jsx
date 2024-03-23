import useAnnouncement from "../../../hooks/useAnnouncement";
import announcement from '../../../assets/image/announcement.jpg'


const ShowAnnouncement = () => {
    const [posts]=useAnnouncement();
    return (
        <div>
           
            <img src={announcement} alt="" />
            <div className=" grid grid-cols-1 gap-6">
            {
                posts.map(post=><div className=" grid mx-12" key={post._id}>
                    <div className=" flex-wrap flex justify-center shadow-lg shadow-[#265073] bg-teal-500 p-2 rounded-2xl  ">
                    <img className="w-10 h-10 rounded-full border-4 border-white object-cover mr-4 shadow" src={post.image} alt="avatar" />
                    <div>
                    <h2 className=" text-xl uppercase text-[#265073] font-bold">{post. name}</h2>
                    <h2 className=" text-2xl font-semibold text-white">{post.title}</h2>
                    <p className="text-center text-[#ECF4D6] ">{post.details}</p>

                    </div>
                  
                    </div>
                   
                   
                   
                </div>)
            }

            </div>
          
            
        </div>
    );
};

export default ShowAnnouncement;