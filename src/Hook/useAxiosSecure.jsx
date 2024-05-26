import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})


const useAxiosSecure = () => {

   const {SignOutUser} = useAuth()
   const navigate = useNavigate()



    axiosSecure.interceptors.request.use(function(config){
        config.headers.authorization = `Bearer ${localStorage.getItem("access_token")}`
        return config
    }, function(errors){
        return Promise.reject(errors)
    })

    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async (error) => {
        const status = error.response.status;
        if(status === 401 || status === 403){
         await SignOutUser()
         navigate('/login')
        }
        return Promise.reject(error)
    })




    return axiosSecure
};

export default useAxiosSecure;