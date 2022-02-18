import { RiLockPasswordFill } from "react-icons/ri";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import ntilogo from "../assets/images/NTI-Gymnasiet.svg";
import UseAxios from "./UseAxios";
import axios from "axios";

const SignInWidget = () => {
  //Lagrar informationen som username och password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Skickar koden till backend med hjälp av Axios, objekten som skickas heter SignIn
  const submitFormSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    let bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);
    //Post body
    let SignIn = {
      id: username,
      pass: password,
    };
    console.log("FrontEnd:  " + JSON.stringify(SignIn));
    axios
      .request({
        method: "POST",
        url: "http://192.168.198.153:2398/login",
        data: bodyFormData,
        headers: {
          "Content-Type": "multipart/form-data", // <-- Important
        },
      })
      .then(function (response) {
        console.log("BackEnd:   " + response.data);
      });
    // axios.post('http://192.168.198.153:2398/login', SignIn).then(res => {
    //     console.log("UserName: "+username);
    //     console.log("BackEnd:   "+res.data);
    //     if(!res.data.success) return console.log(res.data.message);

    //     if(res.data.UserName ==username){

    //     alert(JSON.stringify(res.data));
    //     }
    // });
    //      UseAxios("http://192.168.198.153:2398/login", SignIn).then(res => {
    //         console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // });
    // alert(username + password);
  };

  // Själva utseendet på sign in

  return (
    <div className="bg-pp xs:w-[80%] container -z-[0] mx-auto my-auto grid w-auto rounded-2xl sm:w-[60%] md:w-[40%] lg:w-[25%]">
      <img
        src={ntilogo}
        alt=""
        className=" m-auto w-auto p-10 sm:w-[80%] md:w-[72.5] lg:w-[65%]"
      />
      {/* När formens butten submit tryckes med hjälp av onSubmit körs funktionen submitFormSignIn */}
      <form
        action="#"
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
