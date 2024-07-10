import axios from "axios";
import { useEffect, useState } from "react";

interface blogCardType {
    id : string,
    authorId : string,
    content : string,
    title :string,
}

function BlogCard({id,authorId,content,title} : blogCardType) {
    const [user,setUser] = useState({
        name : "",
        id : "",
    })

    useEffect( () => {
        async function getUser(){
            const res = await axios.get(import.meta.env.VITE_BACKEND_URL+"/user/"+authorId);
            setUser(res.data);
        }
        getUser();
    },[authorId])

    return <div className="flex flex-col my-10 gap-4" key={id}>
        <div className="flex gap-3 items-center">
            <Avatar/>
            <div className="text-[15px]  font-semibold">{user.name}</div>
            <div className="h-1 w-1  rounded-full bg-gray-500"></div>
            <div className="font-serif opacity-60">{Math.ceil(content.length/1000)} min read</div>
        </div>
        <div className="text-[23px] font-bold">{title}</div>
        <div className="font-serif">{content.slice(0,280)+"....."}</div>
        <div>{authorId}</div>
        <div>post:{id}</div>
    </div>;
}

function Avatar(){
    return <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
}

export default BlogCard;