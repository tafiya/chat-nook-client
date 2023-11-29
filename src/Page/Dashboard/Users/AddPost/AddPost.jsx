import { useForm } from "react-hook-form";

import { MdPostAdd } from "react-icons/md";

import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";


// import Swal from "sweetalert2";

// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// https://api.imgbb.com/1/upload
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPost = () => {
    const { register,handleSubmit,reset} = useForm();
    const {user}=useContext(AuthContext);
    const email=user.email;
    const axiosPublic = useAxiosPublic();
  
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            },
         
        });
        const currentTime =new Date() ;
        console.log(res.data);
        if (res.data.success) {
            // now send the post item data to the server with the image url
            const postItem = {
                email:email,
                authorName: data.name,
                authorImage: res.data.data.display_url,
                tags: data.tag,
                
                upvote: parseFloat(data.upVote),
                
                downvote: parseFloat(data.downVote),
                 postTitle: data.post,
                
                postDescription: data.postdetails,
                
                currentTime:currentTime,
            }
        
            // 
            const postRes = await axiosPublic.post('/posts', postItem);
            console.log(postRes.data)
            if(postRes.data.insertedId){
                //show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.post} is added to the post.`,
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
                    {/* tag */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Tags*</span>
                        </label>
                        <select defaultValue="default" {...register('tag', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a tag</option>
                            <option value="salad">Art</option>
                            <option value="pizza">Music</option>
                            <option value="soup">Solo travel</option>
                            <option value="dessert">Fitness</option>
                            <option value="drinks">Cooking</option>
                        </select>
                    </div>

                    {/* price */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Post Title*</span>
                        </label>
                        <input
                        type="text"
                        placeholder="Post here"
                        {...register('post', { required: true })}
                        required
                        className="input input-bordered w-full" />
                      
                    </div>

                </div>
                {/* postdetails details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Post Description</span>
                    </label>
                    <textarea {...register('postdetails')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>

                  {/* price */}
                  <div className="form-control w-1/3 my-6">
                        <label className="label">
                            <span className="label-text">UpVote*</span>
                        </label>
                        <input
                        type="number"
                        placeholder="UpVote"
                        {...register('upVote', { required: true })}
                        required
                        className="input input-bordered w-full" />
                      
                    </div>
                    <div className="form-control w-1/3 my-6">
                        <label className="label">
                            <span className="label-text">DownVote*</span>
                        </label>
                        <input
                        type="number"
                        placeholder="DownVote"
                        {...register('downVote', { required: true })}
                        required
                        className="input input-bordered w-full" />
                      
                    </div>

             

                <button className="btn my-4 btn-accent  ">
                    Create Post <MdPostAdd className="ml-4" />
                </button>
            </form>
        </div>
    </div>
    );
};

export default AddPost;