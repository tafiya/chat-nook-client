
import { useQuery } from "react-query";
import useAxiosPublic from "./UseAxiosPublic";


// import { useQuery } from "react-query";
// import useAxiosPublic from "./useAxiosPublic";

const usePosts = () => {
     const axiosPublic = useAxiosPublic();
    //const [posts, setPosts] = useState([]);
    //const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://online-chat-nook-server.vercel.app/posts')
    //         .then(res => res.json())
    //         .then(data => {
    //             setPosts(data);
    //             //setLoading(false);
    //         });
    // }, [])

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