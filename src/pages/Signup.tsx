import axios from "axios";
import Quote from "../components/Quote";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { signUpInput } from "@devxshubham/blogapp-common";
import LabelledInput from "../components/LabelledInput";
import { useAppDispatch } from "../utils/store/appHook";
import { addUser } from "../utils/store/userSlice";

function Signup() {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<signUpInput>({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const dispatch = useAppDispatch();
  async function handleSubmit() {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/signup`,
        postInputs
      );

      if (res.data.jwt_token) {
        localStorage.setItem("jwt_token", res.data.jwt_token);
        dispatch(addUser(res.data.userDetail));
        navigate("/");
      }
    } catch {
      alert("error signing up");
    }
  }
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col gap-5 w-full items-center justify-center">
        <div>
          <h1 className="text-[20px] font-bold text-center w-full">Sign In</h1>
          <h5 className="font-semibold text-gray-500">
            Don't have an account?{" "}
            <Link className="underline" to={`/user/signin`}>
              signin
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
            label="Name"
            onchange={(e) => {
              setPostInputs({
                ...postInputs,
                name: e.target.value,
              });
            }}
            type={"text"}
            placeholder={"Enter your Name"}
          ></LabelledInput>

          <LabelledInput
            label="Email"
            onchange={(e) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
            type={"text"}
            placeholder={""}
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
        <button
          className="bg-black px-24 rounded py-2 text-white"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <Link to={"/"}>Skip Sign Up</Link>
      </div>
      <Quote />
    </div>
  );
}

export default Signup;
