import { PiPlusCircleThin } from "react-icons/pi";
import Navbar from "../components/Navbar";
import useGetUser from "../utils/hooks/useGetUser";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import axios from "axios";

function Post() {
  const user = useGetUser();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    async function postBlog() {
      const res = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/blog/bulk",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("jwt_token"),
          },
          
        }
      );
      if (res.data == "login first") {
        navigate("/user/signin");
      }
    }
    postBlog();
  }, []);

  return (
    <>
      <Navbar user={user} />
      {!user ? (
        <Banner>
          <Link className="underline" to={"/user/signup"}>
            Sign Up
          </Link>
          {" or "}
          <Link className="underline" to={"/user/signin"}>
            Sign In
          </Link>
          first to post
        </Banner>
      ) : (
        <></>
      )}
      <main className=" flex flex-col gap-4 px-14 py-14">
        <div className="flex gap-4">
          <button className="">
            <PiPlusCircleThin size={70} />
          </button>
          <input
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            type="text"
            className="text-[40px] font-bold outline-none"
            placeholder="Title"
          />
        </div>
        <div className="pl-20">
          <input
          onChange={(e)=>{
            setContent(e.target.value)
          }}
            type="text"
            className="text-[40px] font-semibold outline-none"
            placeholder="Tell Us Your Story..."
          />
        </div>
      </main>
    </>
  );
}

export default Post;
