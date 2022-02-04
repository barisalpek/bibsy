import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import ntilogo from "../../assets/images/NTI-Gymnasiet.svg";
import bg0 from "../../assets/images/vector3.svg";
const SignInMobile = () => {
  return (


    <div className="h-full w-screen jusitfy-center items-center bg-realshiiii ">
        <div className="grid "> 
            <img src={bg0} alt="" className="grid w-[100%] h-[100%]"/>
        </div>
        <br />
        <fieldset className="w-[80%] mx-auto border-2 border-gray-400 rounded-2xl">
            <br />
            <legend className="pl-2  pr-2 text-[45px]">
                Login
            </legend>
            <br />
            <form
                action="#"
                method="POST"
                className=" w-[80%] h-[auto] mx-auto my-auto items-center"
            >
                <div className="flex items-center bg-transparent text-black border-2 border-black border-r-0 border-l-0 border-t-0  mb-6 pb-2 ">
                    <label htmlFor="email" className="grid mr-4">
                        <FaUser color="black" size={"2rem"} />
                    </label>
                    <input
                        type="email"
                        id="username"
                        placeholder="Username"
                        className="border-0 bg-transparent w-[100%] outline-none"
                    />
                </div>

                <div className="flex items-center  bg-transparent text-black  border-2 border-black border-r-0 border-l-0 border-t-0 pb-2 ">
                    <label htmlFor="password" className="mr-4">
                        <RiLockPasswordFill color="black" size={"2rem"} />
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="bg-transparent border-0 ml-1 w-[100%] outline-none"
                    />
                </div>

                <div className="mt-6 flex items-center border-none ml-1">
                    <input type="checkbox" id="remember" className="h-5 w-5 mr-2" />
                    <label htmlFor="remember" className="text-text">
                        Remember me
                    </label>
                </div>

                <div className="grid">
                    <button
                        type="submit"
                        className="bg-pink-600 border-none text-white mt-10 mb-10 p-2 w-[60%] m-auto rounded-full "
                    >Sign in</button>
                </div>
            </form>
        </fieldset>
    </div>
  );
};
export default SignInMobile;