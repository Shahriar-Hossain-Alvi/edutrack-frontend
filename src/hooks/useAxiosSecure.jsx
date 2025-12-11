import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth.jsx";


const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    // Must include credentials for cookies to be sent cross-domain
    withCredentials: true
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {
        setLoading, 
        logout
    } = useAuth();

    axiosSecure.interceptors.request.use((config) => {
        // browser attaches token to request automatically because the token is saved as HTTPOnly cookie.
        return config;
    }, (error) => {
        return Promise.reject(error);
    })


    // after intercepting response, if status code is in range of 2xx return the data to the caller functions or components and if 401 and 403 error, logout and send user to login page
    axiosSecure.interceptors.response.use((response) => {
        // if the status code within the range of 2xx
        return response;
    }, async (error) => {
        // if status code falls outside of range 2xx
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logout();
            setLoading(false);
            navigate('/signin');
        }
        return Promise.reject(error);
    });
    return axiosSecure;
}

export default useAxiosSecure;