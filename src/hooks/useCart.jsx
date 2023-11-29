import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";



const useCart = () => {
  //tan stack query
  const axiosSecure = useAxiosSecure();
  const {user}=UseAuth();
  const {refetch, data: cart =[] } =useQuery({
    queryKey:['carts',user?.email],
    queryFn: async ()=>{
        const res =await axiosSecure.get(`/posts?email=${user?.email}`);
        return res.data;
    }
  })
  return [cart,refetch]
};

export default useCart;