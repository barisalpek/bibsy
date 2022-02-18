import { RiLockPasswordFill } from "react-icons/ri";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import ntilogo from "../assets/images/NTI-Gymnasiet.svg";
import UseAxios from "./UseAxios";
import axios from "axios";

const SignInWidget = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitFormSignIn = (event: any) => {
    event.preventDefault();
    let SignIn = {
      id: username,
      pass: password,
    };
    console.log("FrontEnd:");
    console.log(SignIn);
    axios
      .post("http://192.168.198.153:2398/login", SignIn)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-pp xs:w-[80%] container -z-[0] mx-auto my-auto grid w-auto rounded-2xl sm:w-[60%] md:w-[40%] lg:w-[25%]">
      <img
        src={ntilogo}
        alt=""
        className=" m-auto w-auto p-10 sm:w-[80%] md:w-[72.5] lg:w-[65%]"
      />
      {/* När formens butten submit tryckes med hjälp av onSubmit körs funktionen submitFormSignIn */}
      <form
        action="/login"
        method="post"
        className="m-auto mt-10 w-[80%] pb-10"
        onSubmit={submitFormSignIn}
      >
        <div className="SignIn-div">
          <label htmlFor="email" className="mr-4 grid">
            <FaUser color="white" size={"2rem"} />
          </label>
          {/* ger inputen ett värde och sedan lagrar den till useState */}
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-[100%] border-0 bg-transparent outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className=" SignIn-div">
          <label htmlFor="password" className="mr-4">
            <RiLockPasswordFill color="white" size={"2rem"} />
          </label>
          {/* ger inputen ett värde och sedan lagrar den till useState */}
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="ml-1 w-[100%] border-0 bg-transparent outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-6 ml-1 flex items-center border-none">
          <input type="checkbox" id="remember" className="mr-2 h-5 w-5" />
          <label htmlFor="remember" className="text-white">
            Remember me
          </label>
        </div>

        <div className="grid">
          <button
            type="submit"
            className="m-auto mt-10 mb-10 w-[60%] rounded-full border-none bg-pink-600 p-2 text-white "
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInWidget;
