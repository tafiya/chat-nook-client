
import { useQuery } from "react-query";
import useAxiosPublic from "./UseAxiosPublic";



const usePosts = () => {
     const axiosPublic = useAxiosPublic();
 

    const {data: posts = [], isPending: loading, refetch} = useQuery({
        queryKey: ['posts'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/posts');
            return res.data;
        }
    })


    return [posts,loading, refetch]
}

export default usePosts;