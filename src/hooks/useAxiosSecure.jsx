import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: true,
});




// const useAxiosSecure = () => {


// };

// export default useAxiosSecure;