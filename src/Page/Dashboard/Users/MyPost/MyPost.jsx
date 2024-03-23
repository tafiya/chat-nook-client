

import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useMyPosts from "../../../../hooks/useMyPosts";
import comment from '../../../../assets/image/comment.png'



const MyPost = () => {
    // const {user}= UseAuth();
     const axiosSecure = useAxiosSecure();

    // const { data: posts = [],refetch } = useQuery({
    //     queryKey: ['posts', user.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/posts/${user.email}`)
    //         return res.data;
    //     }
    // })
    const[posts,refetch]=useMyPosts()
    const handleDeleteUser = post => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/posts/${post._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className=" md:p-4 rounded-lg w-full mb-80 lg:mb-auto ">
        <div className="flex justify-evenly mb-8 ">
        <h2 className="md:text-4xl text-2xl text-center text-[#265073] rounded-badge shadow-lg shadow-[#2D9596] font-bold mt-6 mb-8  p-2 md:w-2/3 w-full">My Posts</h2>

        </div>
        <div className=" overflow-x-auto bg-[#265073] md:p-6 rounded-lg shadow-lg shadow-[#2D9596] lg:mb-0  ">
            <table className="table table-zebra md:w-full  ">
                {/* head */}
                <thead className="text-center text-xl font-extrabold bg-white  shadow rounded-xl" >
                    <tr>
                        
                        <th>Post Title</th>
                        <th> votes</th>
                        <th>Comment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((item) => <tr className=" rounded-xl shadow-lg shadow-white mb-4 hover:bg-gray-400 hover:text-white" key={item._id}>
                          
                            <td className="text-lg text-center font-semibold ">
                            {item.postTitle}
                            </td>
                            <td className=" font-semibold  md:text-lg text-center" >
                            {item.upvote}
                            </td>
                            <td className=" md:text-lg font-semibold text-center"> <button className=""><img src={comment} className="w-12 h-12" alt="" /> </button></td>
                            <th className=" flex justify-center items-center">
                            <button    onClick={() => handleDeleteUser(item._id)}className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-6 w-6">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>
                                            Delete
                                        </button>
                             
                            </th>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyPost;


{/* <div className=" rounded-xl  shadow-lg shadow-[#2D9596] border-white sm:p-12 sm:px-24 md:p-4 md:grid bg-[#265073] ">
<table className="table table-zebra w-full ">
    {/* head */}
//     <thead className=" bg-white rounded-lg sm:text-lg ">
//         <tr>
//             <th> Post Title</th>
//             <th>Number of votes</th>
//             <th> Comment </th>
//             <th> Action</th>
//         </tr>
//     </thead>
//     <tbody className=" ">
//         {posts.map((post) => <tr className=" text-[#f5f8ebfd] " key={post._id}>
//             <th >{post.postTitle}</th>
//             <td>${post.upvote}</td>
//             <td><button className="rounded-md border-2 border-[#f5f8ebfd] md:px-4 md:py-2 md:text-lg text-[#f5f8ebfd] duration-200 hover:bg-[#f5f8ebfd] hover:text-[#265073]">See Comments</button></td>
//             <td> <button
//                 onClick={() => handleDeleteUser(post)}
//                 className="btn btn-[#f5f8ebfd]">
//                 <FaTrashAlt size={""} className="text-red-600"></FaTrashAlt>
//             </button></td>
//         </tr>)}

//     </tbody>
// </table>
// </div> */}