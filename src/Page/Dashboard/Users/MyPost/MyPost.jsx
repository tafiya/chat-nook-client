

import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useMyPosts from "../../../../hooks/useMyPosts";



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
        <div>
        <h2 className="text3-xl">Total Posts: {posts.length}</h2>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th> Post Title</th>
                        <th>Number of votes</th>
                        <th> Comment Button</th>
                        <th> Delete Button</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => <tr key={post._id}>
                        <th>{post.postTitle}</th>
                        <td>${post.upvote}</td>
                        <td><button className="btn btn-outline btn-accent">See Comments</button></td>
                        <td> <button
                                        onClick={() => handleDeleteUser(post)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button></td>
                    </tr>)}
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyPost;