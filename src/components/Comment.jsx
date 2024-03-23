import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/UseAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Comment = () => {
    const { register,handleSubmit,reset} = useForm();
   
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
            const commentItem = {
              
                details: data.details,
             
            }
        
            // 
            const commentRes = await axiosSecure.post('/comment', commentItem);
            console.log(commentRes.data)
            if(commentRes.data.insertedId){
                //show success popup
                reset();
                Swal.fire("Comment is  successfully done!");
            }
        // }
     
    };
    return (
        <div>
             <div>
        {/* onSubmit={handleSubmit(onSubmit)} */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* details details */}
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
        </div>
            
        </div>
    );
};

export default Comment;