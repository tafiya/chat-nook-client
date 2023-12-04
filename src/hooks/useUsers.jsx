
import UseAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';
//import UseAuth from './UseAuth';
import { useQuery } from 'react-query';

const useUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {user}=UseAuth();
    const { data: CurrentUser = [],refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await axiosSecure.get(`/users/${user.email}`);
      
        return res.data;
    }
})
    return [CurrentUser,refetch]
  };

export default useUsers;