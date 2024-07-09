import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../store/appHook";
import { addUser } from "../store/userSlice";

function useGetUser() {
    const [userId,setUserId] = useState< string | null >(null)

    const dispatch = useAppDispatch()
    

    useEffect( () => {
        async function fetchUser(){
            const res = await axios.get(import.meta.env.VITE_BACKEND_URL+"/user/verify",{
                headers : {
                    "Authorization" : localStorage.getItem("jwt_token"),
                }
            })
            // console.log(res)
            setUserId(res.data.userId)

            if( res.data.userId ){
                const userDetails = await axios.get(import.meta.env.VITE_BACKEND_URL+"/user/"+res.data.userId)
                dispatch(addUser(userDetails.data))
                console.log(userDetails.data)
            }
        }
        fetchUser();
    },[])

    return userId ;
}

export default useGetUser;