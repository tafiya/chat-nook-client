import { useForm } from "react-hook-form";
import { MdPostAdd } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/UseAxiosPublic";
import UseAuth from "../../../../hooks/UseAuth";
import useMyPosts from "../../../../hooks/useMyPosts";
import usePayment from "../../../../hooks/usePayment";
import { Link } from "react-router-dom";
import membership from '../../../../assets/image/membership.svg'


// import Swal from "sweetalert2";

// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// https://api.imgbb.com/1/upload
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPost = () => {
    const { register,handleSubmit,reset} = useForm();
    const {user}=UseAuth();
    const[posts]=useMyPosts();
    const [payments]=usePayment()
    const email=user.email;
    const axiosPublic = useAxiosPublic();
  
    const onSubmit = async (data) => {
       /// console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            },
         
        });
        const currentTime =new Date() ;
        //console.log(res.data);
        if (res.data.success) {
            // now send the post item data to the server with the image url
            const postItem = {
                email:email,
                authorName: data.name,
                authorImage: res.data.data.display_url,
                tags: data.tag,
                authorEmail:data.email,
                upvote: parseFloat(data.upVote),  
                downvote: parseFloat(data.downVote),
                postTitle: data.post,
                postDescription: data.postdetails,
                currentTime:currentTime,
                timestamp:currentTime.getTime()
            }
        
            // 
            const postRes = await axiosPublic.post('/posts', postItem);
          //  console.log(postRes.data)
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
    };
    return (
        <div>
       {
        posts.length>2 && payments.length<1?< div className=" flex justify-center md:my-16">
        <div className="card sm:w-3/4 md:h-[600px] w-96 bg-base-100 shadow-[#265073] shadow-lg">
  <figure className="px-10 pt-10">
    <img src={membership}alt="Shoes" className="rounded-xl sm:h-[300px] shadow-[#265073] shadow-lg " />
   
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-5xl font-bold  text-[#265073] ">Attention!</h2>
    <p className="text-[#2D9596] font-semibold text-lg" >To make more posts you need Membership</p>
    <div className="card-actions">
    <Link to='/membership'><button className="hover:bg-[#265073] hover:scale-95 text-xl font-medium hover:text-white w-full p-4 px-10 rounded-full hover:shadow-xl   text-[#265073] shadow-[0px_0px_10px_#E2DADA] t duration-500  "> Become a Member</button></Link>
    </div>
  </div>
</div>
       
        </div>:<div>
            
           
        {/* onSubmit={handleSubmit(onSubmit)} */}
            <form className=" rounded-xl  shadow-lg shadow-[#2D9596] border-white sm:p-12 sm:px-24 p-4 grid bg-[#265073] " onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex items-center justify-center">
            <h2 className=" text-4xl text-center text-white rounded-badge shadow-lg shadow-[#2D9596] font-bold mt-6 mb-8  p-2 md:w-2/3"> Create Post</h2>

            </div>
               
                <div className=" flex sm:flex-row flex-col gap-6">
                <div className="form-control w-full flex justify-center my-6">
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
                <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text text-lg font-semibold text-white">Author Email*</span>
                </label>
                <input
                        type="email"
                        placeholder="Author Email"
                        {...register('email', { required: true })}
                        required
                        className="input input-bordered w-full shadow-lg shadow-[#2D9596]" />
              </div>

                </div>
                <div className=" flex sm:flex-row flex-col gap-6">
                    <div className="form-control w-full my-4">
                    <label className="label">
                            <span className="label-text text-lg font-semibold text-white">Author Picture*</span>
                        </label>
                        <div className="form-control w-full ">
                    <input {...register('image', { required: true })} type="file" className="file-input w-full shadow-lg shadow-[#2D9596] " />
                </div>

                    </div>
                       {/* tag */}
                       <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-white">Tags*</span>
                        </label>
                        <select defaultValue="default" {...register('tag', { required: true })}
                            className="select select-bordered w-full shadow-lg shadow-[#2D9596]">
                            <option disabled value="default text-lg font-semibold text-white">Select a tag</option>
                            <option value="salad">Art</option>
                            <option value="pizza">Music</option>
                            <option value="soup">Solo travel</option>
                            <option value="dessert">Fitness</option>
                            <option value="drinks">Cooking</option>
                        </select>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col gap-6">
                    {/*post title */}
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-white">Post Title*</span>
                        </label>
                        <input
                        type="text"
                        placeholder="Post here"
                        {...register('post', { required: true })}
                        required
                        className="input input-bordered w-full shadow-lg shadow-[#2D9596]" />
                      
                    </div>
                     {/* postdetails details */}
                <div className="form-control w-full mt-4">
                    <label className="label">
                        <span className="label-text text-lg font-semibold text-white">Post Description</span>
                    </label>
                    <textarea {...register('postdetails')} className="textarea textarea-bordered h-24 shadow-lg shadow-[#2D9596]" placeholder="Bio"></textarea>
                </div>
                </div>
               <div className=" flex w-1/2 gap-6  flex-row ">
                    {/* price */}
                    <div className="form-control w-1/3">
                        <label className="label ">
                            <span className="text-lg font-semibold text-white">UpVote*</span>
                        </label>
                        <input
                        type="number"
                        placeholder="UpVote"
                        {...register('upVote', { required: true })}
                        required
                        className="input input-bordered w-full shadow-lg shadow-[#2D9596]" />
                      
                    </div>
                    <div className="form-control w-1/3">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-white">DownVote*</span>
                        </label>
                        <input
                        type="number"
                        placeholder="DownVote"
                        {...register('downVote', { required: true })}
                        required
                        className="input input-bordered w-full shadow-lg shadow-[#2D9596]" />
                      
                    </div>  

               </div>
                     
          <div className="form-control w-full flex justify-center items-center mt-3">
          <button className="btn w-1/3 my-4 btn-accent text-xl font-semibold text-white ">
          <MdPostAdd size={'2em'} className="" />Post 
                </button>

          </div>
                
            </form>
        </div>
       }
       
    </div>
    );
};

export default AddPost;