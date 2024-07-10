import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/appHook";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function useGetUser() {
  const [userId, setUserId] = useState<string | null>(null);

  const navigate = useNavigate();
  const user = useAppSelector((store) => store.user.id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchUser() {
      const res = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/user/verify",
        {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        }
      );
      // console.log(res)
      setUserId(res.data.userId);

      if (res.data.userId) {
        const userDetails = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/user/" + res.data.userId
        );
        dispatch(addUser(userDetails.data));
      }
    }

    if (user) setUserId(user);
    else if (!localStorage.getItem("jwt_token")) navigate("/user/signup");
    else fetchUser();
  }, []);

  return userId;
}

export default useGetUser;
