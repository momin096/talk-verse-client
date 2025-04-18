import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";


// 
export const axiosSecure = axios.create({
    // baseURL: 'http://localhost:8000',
    baseURL: 'https://talk-verse-server-psi.vercel.app',
    withCredentials: true,
});




const useAxiosSecure = () => {
    const { logOut } = useAuth();
    // const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, async error => {
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
            }
        })
    }, [logOut])
    return axiosSecure;

};

export default useAxiosSecure;