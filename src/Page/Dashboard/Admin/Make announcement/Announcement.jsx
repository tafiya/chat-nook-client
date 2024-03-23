import { useForm } from "react-hook-form";

import { TfiAnnouncement } from "react-icons/tfi";

import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/UseAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


// import Swal from "sweetalert2";

// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// https://api.imgbb.com/1/upload
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Announcement = () => {
    const { register,handleSubmit,reset} = useForm();
   
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
       // console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        //console.log(res.data);
        if (res.data.success) {
            // now send the announcement item data to the server with the image url
            const announcementItem = {
                name: data.name,
                title: data.title,
                details: data.details,
                image: res.data.data.display_url
            }
        
            // 
            const announcementRes = await axiosSecure.post('/announcements', announcementItem);
            //console.log(announcementRes.data)
            if(announcementRes.data.insertedId){
                //show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is added to the announcement.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        //console.log( 'with image url', res.data);
    };
    return (
      
        <div>
        {/* onSubmit={handleSubmit(onSubmit)} */}
            <form className="rounded-xl   shadow-lg shadow-[#2D9596] border-white sm:p-6  p-4 grid bg-[#265073]" onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex items-center justify-center">
            <h2 className=" text-4xl text-center text-white rounded-badge shadow-lg shadow-[#2D9596] font-bold mt-6 mb-8  p-4 md:w-1/2">  Make Announcement</h2>

            </div>
                <div className="flex justify-center sm:flex-row flex-col gap-6">
                <div className="form-control sm:w-2/3 flex  my-6">
                    <label className="label">
                        <span className="label-text text-lg font-semibold text-white">Author Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Author Name"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full shadow-lg shadow-[#2D9596]" />
                </div>
                    
                </div>
               <div className="flex justify-center sm:flex-row flex-col gap-6">
               <div className="form-control sm:w-2/3 flex  my-6">
                <label className="label">
                            <span className="label-text text-lg font-semibold text-white">Author Picture*</span>
                        </label>
                    <input {...register('image', { required: true })} type="file" className="file-input w-full  shadow-lg shadow-[#2D9596]" />
                </div>

               </div>
                <div className="flex  justify-center sm:flex-row flex-col gap-6">
                    <div className="form-control sm:w-2/3 flex  my-6">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-white">Announcement Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            {...register('title', { required: true })}
                            className="input input-bordered w-full shadow-lg shadow-[#2D9596]" />
                    </div>

                </div>
                <div className="flex justify-center sm:flex-row flex-col gap-6">
                <div className="form-control sm:w-2/3 flex  my-6">
                    <label className="label">
                        <span className="label-text text-lg font-semibold text-white">Announcement Description</span>
                    </label>
                    <textarea {...register('details')} className="textarea textarea-bordered h-24 shadow-lg shadow-[#2D9596]" placeholder="Description"></textarea>
                </div>

                </div>
               <div className="flex justify-center sm:flex-row flex-col gap-6" >
                <div className="form-control sm:w-1/3 flex  my-6">
                <button className="hover:bg-white flex gap-6 justify-center hover:scale-95 font-medium hover:text-accent p-2 rounded-full hover:shadow-xl   text-white text-xl shadow-[0px_0px_10px_#E2DADA] t duration-500 bg-accent  ">
                <TfiAnnouncement size={'1.8em'} />Announced 
                </button>

                </div>
               

               </div>
               
            </form>
        </div>
    );
};

export default Announcement;