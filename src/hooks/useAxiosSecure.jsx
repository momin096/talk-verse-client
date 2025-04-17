import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate, useNavigationType } from "react-router-dom";
import { useEffect } from "react";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
});




const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(
            res => {
                return res
            },
            async error => {
                console.log('err caught axios', error.response);
                if (error.response.status === 401 || error.response.status === 403) {
                    // logout
                    logOut()
                    // navigate to login
                    // navigate('/login')

                }
            }
        )
    }, [logOut, navigate])
    return axiosSecure;

};

export default useAxiosSecure;