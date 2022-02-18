import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import ntilogo from "../../assets/images/NTI-Gymnasiet.svg";
import bg0 from "../../assets/images/vector3.svg";
const SignInMobile = () => {
  return (
    <div className="jusitfy-center bg-realshiiii h-full w-screen items-center ">
      <div className="grid ">
        <img src={bg0} alt="" className="grid h-[100%] w-[100%]" />
      </div>
      <br />
      <fieldset className="mx-auto w-[80%] rounded-2xl border-2 border-gray-400">
        <br />
        <legend className="pl-2  pr-2 text-[45px]">Login</legend>
        <br />
        <form
          action="#"
          method="POST"
          className=" mx-auto my-auto h-[auto] w-[80%] items-center"
        >
          <div className="mb-6 flex items-center border-2 border-r-0 border-l-0 border-t-0 border-black bg-transparent  pb-2 text-black ">
            <label htmlFor="email" className="mr-4 grid">
              <FaUser color="black" size={"2rem"} />
            </label>
            <input
              type="email"
              id="username"
              placeholder="Username"
              className="w-[100%] border-0 bg-transparent outline-none"
            />
          </div>

          <div className="flex items-center  border-2 border-r-0  border-l-0 border-t-0 border-black bg-transparent pb-2 text-black ">
            <label htmlFor="password" className="mr-4">
              <RiLockPasswordFill color="black" size={"2rem"} />
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="ml-1 w-[100%] border-0 bg-transparent outline-none"
            />
          </div>

          <div className="mt-6 ml-1 flex items-center border-none">
            <input type="checkbox" id="remember" className="mr-2 h-5 w-5" />
            <label htmlFor="remember" className="text-text">
              Remember me
            </label>
          </div>

          <div className="grid ">
            <button
              type="submit"
              className="m-auto mt-10 mb-10 w-[60%] rounded-full border-none bg-pink-600 p-2 text-white "
            >
              Sign in
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};
export default SignInMobile;
