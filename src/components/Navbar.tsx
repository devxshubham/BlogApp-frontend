import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo-medium.png";

import { TfiWrite } from "react-icons/tfi";
import { useAppDispatch, useAppSelector } from "../utils/store/appHook";
import axios from "axios";
import { removeUser } from "../utils/store/userSlice";

function Navbar({ user }: { user: string | null }) {
  const location = useLocation();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/post");
  };
  const username = useAppSelector((store) => store.user.username);

  async function handlePost() {
    if (user) {
    }
  }

  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(removeUser());
    localStorage.removeItem("jwt_token");
    navigate("/user/signin");
  }

  return (
    <nav className="flex px-6 items-center justify-between">
      <img
        className="max-w-[200px]"
        onClick={() => navigate("/")}
        src={logo}
        alt=""
      />
      <div>{username}</div>
      <div className="flex gap-8 items-center">
        {location.pathname != "/post" ? (
          <div
            onClick={handleClick}
            className="flex hover:text-black cursor-pointer gap-2 items-center text-gray-600"
          >
            <TfiWrite size={20} />
            <div className="text-[16px]">Write</div>
          </div>
        ) : (
          <></>
        )}
        {location.pathname == "/post" ? (
          <button
            onClick={handlePost}
            className={`bg-green-600 px-2 cursor-pointer rounded-xl text-white ${
              user ? "" : "cursor-not-allowed"
            } `}
          >
            Publish
          </button>
        ) : (
          <></>
        )}
        <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-10 h-10 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        {user ? <button onClick={handleLogout}>Log Out</button> : <></>}
      </div>
    </nav>
  );
}

export default Navbar;
