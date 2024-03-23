
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";


const EachPost = ({post}) => {
    const {_id,authorImage,authorName,postTitle,postDescription,tags}=post;
    const { register,handleSubmit,reset} = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
            const commentItem = {
              
               details: data.details,
               postId:_id,
               postTitle:postTitle,
               authorName:authorName
            }
        
            // 
            const commentRes = await axiosSecure.post('/comment', commentItem);
            //console.log(commentRes.data)
            if(commentRes.data.insertedId){
                //show success popup
                reset();
         
                toast.success('Successfully commented!')
            }
         }
         useEffect(() => {
            AOS.init({})
          }, [])

    return (
       <div>
          {/* to={`/viewDetails/${encodeURIComponent(_id)}`} */}
          {/* <Link >   */}
          <div data-aos="zoom-in-up" data-aos-duration="2000" className="flex bg-white shadow-lg shadow-[#265073] rounded-lg mx-4 md:mx-auto  ">
             <div className="flex items-start px-4 py-6">
                <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={authorImage} alt="avatar" />
                <div className="">
                   <div className="flex items-center sm:justify-between">
                      <h2 className="sm:text-lg text-base text-[#2D9596] font-semibold -mt-1">{authorName} </h2>
                      <small className="text-sm text-gray-700 underline sm:font-semibold italic">#{tags}</small>
                   </div>
                   <p className=" sm:text-xl text-lg font-semibold">{postTitle}</p>
                   <p className="mt-3 text-gray-700 text-sm">
                      {postDescription}
                   </p>
                   <div className="mt-4 flex items-center sm:gap-8">
                      <div className="flex mr-2 text-gray-700  lg:text-lg  px-4 py-1 rounded-lg  hover:bg-[#265073] hover:text-white ">
                         <button> <FaRegHeart className='mr-1' size={'1.5em'} /></button>
                         <span>12</span>
                      </div>
                      <div>
                         <button onClick={() => document.getElementById('feed').showModal()}> <FaRegComment className='mr-1' size={'1.5em'} /></button>
                         <dialog id="feed" className="modal modal-bottom sm:modal-middle">
                            <Toaster />
                            <div className="modal-box">
                               <form onSubmit={handleSubmit(onSubmit)}>
                                  <div className="form-control">
                                     <label className="label">
                                        <span className="label-text">Comment</span>
                                     </label>
                                     <textarea {...register('details')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                                  </div>
                                  <button className="btn my-4 btn-accent  ">
                                     Comment
                                  </button>
                               </form>
                               <div className="modal-action">
                                  <form method="dialog">
                                     <button className="btn">Close</button>
                                  </form>
                               </div>
                            </div>
                         </dialog>
                         <span>8</span>
                      </div>
                      <div className="flex mr-2 text-gray-700 rounded-lg  px-4 py-1 lg:text-lg hover:bg-[#265073] hover:text-white ">
                         <HiOutlineShare className='mr-1' size={'1.5em'} />
                         <span>share</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* </Link> */}

       </div>
     
    );
};

export default EachPost;