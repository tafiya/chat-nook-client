

// import { FaTrashAlt, FaUsers } from "react-icons/fa";
// import Swal from "sweetalert2";


import { useQuery } from "react-query";
import { GrUserAdmin } from "react-icons/gr";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import admin from '../../../../assets/image/admin.png'
import onlyUser from '../../../../assets/image/user.png'
import member from '../../../../assets/image/member.png'


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
          
            return res.data;
        }
    })
    

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            //console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDeleteUser = user => {
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

                axiosSecure.delete(`/users/${user._id}`)
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
        <div >
            <div className="flex md:justify-evenly justify-center items-center mb-4 md:flex-row flex-col ">
                <h2 className="md:text-4xl text-2xl text-center text-[#265073] rounded-badge shadow-lg shadow-[#2D9596] font-bold sm:mt-6 mb-8  p-2 md:w-1/3 w-full">All Users</h2>
                <h2 className="md:text-4xl text-2xl text-center text-[#265073] rounded-badge shadow-lg shadow-[#2D9596] font-bold sm:mt-6 mb-8  p-2 md:w-1/3 w-full">Total Users:{users.length}</h2>
            </div>
            <div className="max-w-7xl mx-auto">

                <div className="overflow-x-auto bg-[#265073]  text-white p-4 rounded-2xl">
                    <table className="table  w-full ">
                        {/* head */}
                        <thead className=" bg-white ">
                            <tr className=" text-center text-xl font-extrabold">

                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr className=" rounded-xl shadow-lg shadow-white mb-4 hover:bg-gray-400 hover:text-white " key={user._id}>

                                    <td className=" uppercase text-lg font-semibold text-center" >{user.name}</td>
                                    <td className=" text-lg text-center">{user.email}</td>
                                    <td className=" text-center">
                                        {user.role === 'admin' ? <img src={admin} className="w-12 h-12" alt="" /> : <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="">
                                            <FaUsers size={'1.8em'} className="text-[#FFD43B]
                                        text-xl"></FaUsers>
                                        </button>}
                                        {/* <GrUserAdmin size={'1.8em'} className="text-white 
                                        text-xl"></GrUserAdmin> */}
                                    </td>
                                    <td>{user.status === 'member' ? <div className="tooltip tooltip-top text-lg font-bold" data-tip="Member">
                                        <button className=""><img src={member} className="w-12 h-12" alt="" /> </button>
                                    </div> : <div className="tooltip tooltip-top text-lg font-bold" data-tip="User">
                                        <button className=""><img src={onlyUser} className="w-12 h-12" alt="" /> </button>
                                    </div>}</td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-6 w-6">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>
                                            Delete
                                        </button>
                                       
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>


            </div>


        </div>


    );
};

export default AllUsers;


{/* <div className="overflow-x-auto">
    <table className=" shadow-md border mx-auto border-gray-100 my-6">
        <thead>
            <tr className="bg-[#0095FF] text-white">
                <th className="py-4 px-6 text-lg text-left border-b">Product Image</th>
                <th className="py-4 px-6 text-lg text-left border-b">Product Name</th>
                <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
                <td className="py-4 px-4 flex justify-start">
                    <img src="https://source.unsplash.com/64x64/?microphone" alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">Dual Speaker</td>
                <td className="py-4 px-6 border-b text-lg font-medium">$99.99</td>
                <td className="py-4 px-6 border-b text-end">
                    <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                </td>
            </tr>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
                <td className="py-4 px-4 flex justify-start">
                    <img src="https://source.unsplash.com/64x64/?phone" alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">Samsung s22</td>
                <td className="py-4 px-6 border-b text-lg font-medium">$599.99</td>
                <td className="py-4 px-6 border-b text-end">
                    <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                </td>
            </tr>
        </tbody>
    </table>
</div> */}




