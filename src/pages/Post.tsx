import { PiPlusCircleThin } from "react-icons/pi";
import Navbar from "../components/Navbar";
import useGetUser from "../utils/hooks/useGetUser";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import { useAppDispatch } from "../utils/store/appHook";

function Post() {

  const user = useGetUser();



  return (
    <>
      <Navbar />
      { !user ? <Banner> <Link className="underline" to={"/user/signup"}>Sign Up </Link> {" or "} <Link className="underline" to={"/user/signin"}>Sign In</Link> first to post </Banner> : <></>}
      <main className=" flex flex-col gap-4 px-14 py-14">
        
        <div className="flex gap-4">
          <button className="">
            <PiPlusCircleThin size={70} />
          </button>
          <input
            type="text"
            className="text-[40px] font-bold outline-none"
            placeholder="Title"
          />
        </div>
        <div className="pl-20">
          <input
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
