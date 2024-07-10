import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import useGetUser from "../utils/hooks/useGetUser";

function Blog() {
  const user = useGetUser()

  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([
    {
      id: "123",
      authorId: "97",
      title: "Why dogs are the best?",
      content: `Dogs have a strong sense of smell and are known to never forget anyone they encounter because of this characteristic.Highly intelligent, dogs have the capability of expressing their joy and happiness by wagging their tails.They are known to be the most loyal of animals. Dogs can sense your pain and can be your best friend. They can sense emotions, and when you are sad, they become sad and when you are happy, they are happy.The dog is a simple animal that shows no complex characteristics. Dogs are selfless animals and they do not have any extraordinary requirements. They look for little care and affection. A dog becomes a good companion for its owner.Dogs are known to be one of the most faithful and loyal species. Dogs need good treatment and good care from us humans, and they are happy. `,
    },
  ]);

  useEffect(() => {
    async function getBlogs() {
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
      setBlogs(res.data);
    }
    getBlogs();
  }, []);
  return (
    <>
      <Navbar user={user}></Navbar>
      <Banner>
        <div>
          Be part of a better internet. Get 20% off membership for a limited
          time
        </div>
      </Banner>
      <main className="flex flex-col gap-14 items-center justify-center mx-auto max-w-[700px]">
        {blogs.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorId={blog.authorId}
              title={blog.title}
              content={blog.content}
            />
          );
        })}
      </main>
    </>
  );
}

export default Blog;
