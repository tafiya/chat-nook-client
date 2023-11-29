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
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);
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
            console.log(announcementRes.data)
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
        console.log( 'with image url', res.data);
    };
    return (
        <div>
       
        <div>
        {/* onSubmit={handleSubmit(onSubmit)} */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Author Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Author Name"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <label className="label">
                            <span className="label-text">Author Picture*</span>
                        </label>
                <div className="form-control w-full ">
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>
                <div className="flex gap-6">
                  

                    {/* price */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Announcement Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            {...register('title', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                {/* details details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Announcement Description</span>
                    </label>
                    <textarea {...register('details')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>

             

                <button className="btn my-4 btn-accent  ">
                    Make Announcement <TfiAnnouncement />
                </button>
            </form>
        </div>
    </div>
    );
};

export default Announcement;