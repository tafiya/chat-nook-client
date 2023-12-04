import { useQuery } from "react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMyPosts = () => {
    const axiosSecure = useAxiosSecure();
    const {user}=UseAuth();
 
    const { data: posts = [],refetch } = useQuery({
        queryKey: ['posts', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/posts/${user.email}`)
            return res.data;
        }
    })
    return [posts,refetch]
  };

export default useMyPosts;