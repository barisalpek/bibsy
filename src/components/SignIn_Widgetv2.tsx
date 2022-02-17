import {RiLockPasswordFill} from 'react-icons/ri';
import React,{useState} from 'react';
import {FaUser} from 'react-icons/fa';
import ntilogo from "../assets/images/NTI-Gymnasiet.svg";
import UseAxios from './UseAxios'
import axios from 'axios';


const SignInWidget = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const submitFormSignIn = (event:any) => {
      event.preventDefault();
      let SignIn = {
        id:        username,
        pass:       password,
      }
    console.log("FrontEnd:");
    console.log(SignIn);
    axios.post('http://192.168.198.153:2398/login', SignIn).then(res => {
        console.log((res.data));
    }).catch(err => {
        console.log(err);
    }
    );
}

    return (       
        <div className="container grid bg-pp mx-auto my-auto rounded-2xl w-auto lg:w-[25%] md:w-[40%] sm:w-[60%] xs:w-[80%] -z-[0]">
            <img src={ntilogo} alt="" className=" p-10 m-auto w-auto lg:w-[65%] md:w-[72.5] sm:w-[80%]" />
                {/* När formens butten submit tryckes med hjälp av onSubmit körs funktionen submitFormSignIn */}
            <form action="/login" method="post" className="w-[80%] mt-10 m-auto pb-10" onSubmit={submitFormSignIn}>
                
                <div className="SignIn-div">
                    <label htmlFor="email" className="grid mr-4"><FaUser color='white'size={'2rem'}/></label>
                        {/* ger inputen ett värde och sedan lagrar den till useState */}
                    <input type="text" id="username" placeholder="Username" className="border-0 bg-transparent w-[100%] outline-none" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                
                <div className=" SignIn-div">
                    <label htmlFor="password" className="mr-4"><RiLockPasswordFill color='white' size={'2rem'}/></label>
                        {/* ger inputen ett värde och sedan lagrar den till useState */}
                    <input type="password" id="password" placeholder="Password" className="bg-transparent border-0 ml-1 w-[100%] outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <div className="mt-6 flex items-center border-none ml-1">
                    <input type="checkbox" id="remember" className="h-5 w-5 mr-2"/> 
                    <label htmlFor="remember" className="text-white">Remember me</label>
                </div>
                
                <div className="grid">
                    <button type="submit" className="bg-pink-600 border-none text-white mt-10 mb-10 p-2 w-[60%] m-auto rounded-full ">Sign in</button>
                </div>

            </form>
        </div>
    );
    };
    
export default SignInWidget;