import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/UseAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Comment = () => {
    const { register,handleSubmit,reset} = useForm();
   
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
       
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post( imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);
        if (res.data.success) {
            // now send the comment item data to the server with the image url
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
        }
     
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