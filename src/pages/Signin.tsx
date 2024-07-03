
import Quote from "../components/Quote";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInInput } from "@devxshubham/blogapp-common";
import LabelledInput from "../components/LabelledInput";
import axios from "axios";

function Login() {
  const navigate = useNavigate()
  const [postInputs, setPostInputs] = useState<signInInput>({
    username : "",
    password : "",
  })
  async function handleSubmit(){
    try{
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signin`,postInputs)
      // navigate('/blog')
      if(res.data.jwt_token){
        console.log(res.data)
        localStorage.setItem("jwt_token",res.data.jwt_token)
        navigate('/blog')
      }
    }
    catch{
      alert("error signing up")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col gap-5 w-full items-center justify-center">
      <div>
        <h1 className="text-[20px] font-bold text-center w-full">
          Sign In
        </h1>
        <h5 className="font-semibold text-gray-500">
          Already have an account?{" "}
          <Link
            className="underline"
            to={`/user/signup`}
          >
            signup
          </Link>
        </h5>
      </div>
      <div className="flex flex-col gap-2">
        <LabelledInput
          label="Username"
          onchange={(e) => {
            setPostInputs({
              ...postInputs,
              username: e.target.value,
            });
          }}
          type={"text"}
          placeholder={"Enter your Username"}
        ></LabelledInput>
        
        <LabelledInput
          label="Password"
          onchange={(e) => {
            setPostInputs({
              ...postInputs,
              password: e.target.value,
            });
          }}
          type={"password"}
          placeholder={""}
        ></LabelledInput>
      </div>
      <button className="bg-black px-24 rounded py-2 text-white" onClick={handleSubmit}>
        Sign In
      </button>
    </div>
      <Quote />
    </div>
  );
}

export default Login;
