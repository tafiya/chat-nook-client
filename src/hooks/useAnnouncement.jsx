import { useQuery } from "react-query";
import useAxiosPublic from "./UseAxiosPublic";

const useAnnouncement = () => {
    const axiosPublic = useAxiosPublic();
 

    const {data: posts = [], isPending: loading, refetch} = useQuery({
        queryKey: ['announcements'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/announcements');
            return res.data;
        }
    })


    return [posts,loading, refetch]
};


export default useAnnouncement;