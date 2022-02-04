import {RiLockPasswordFill} from 'react-icons/ri';
import {FaUser} from 'react-icons/fa';
import ntilogo from "../assets/images/NTI-Gymnasiet.svg";
const SignInWidget = () => {
    return (       
        <div className="container grid bg-pp mx-auto my-auto rounded-2xl w-auto lg:w-[25%] md:w-[40%] sm:w-[60%] xs:w-[80%] -z-[0]">
            <img src={ntilogo} alt="" className=" p-10 m-auto w-auto lg:w-[65%] md:w-[72.5] sm:w-[80%]" />
            <form action="#" method="post" className="w-[80%] mt-10 m-auto pb-10">
                
                <div className="flex items-center  bg-transparent text-white  border-2 border-white border-r-0 border-l-0 border-t-0  mb-6 pb-2 ">
                    <label htmlFor="email" className="grid mr-4"><FaUser color='white'size={'2rem'}/></label>
                    <input type="email" id="username" placeholder="Username" className="border-0 bg-transparent w-[100%] outline-none" />
                </div>
                
                <div className="flex items-center  bg-transparent text-white  border-2 border-white border-r-0 border-l-0 border-t-0 pb-2 ">
                    <label htmlFor="password" className="mr-4"><RiLockPasswordFill color='white' size={'2rem'}/></label>
                    <input type="password" id="password" placeholder="Password" className="bg-transparent border-0 ml-1 w-[100%] outline-none" />
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