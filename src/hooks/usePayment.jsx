import { useQuery } from "react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePayment = () => {
    const axiosSecure = useAxiosSecure();
    const {user}=UseAuth();
 
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return [payments]
  };


export default usePayment;