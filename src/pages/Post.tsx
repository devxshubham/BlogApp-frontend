import { PiPlusCircleThin } from "react-icons/pi";
import Navbar from "../components/Navbar";


function Post() {

    return <>
        <Navbar />
        <main className=" flex flex-col gap-4 px-14 py-14">
            <div className="flex gap-4">
                <PiPlusCircleThin size={70}  />
                <input type="text" className="text-[40px] font-bold outline-none" placeholder="Title"/>
            </div>
            <div className="pl-20">
                <input type="text" className="text-[40px] font-semibold outline-none" placeholder="Tell Us Your Story..."/>
            </div>
        </main>
    </>
}

export default Post;