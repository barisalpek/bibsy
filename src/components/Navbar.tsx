import React from 'react';

  const Navbar = () =>{
    return(
      <div className="bg-purple-900 w-72 h-[96vh] top-5 left-5 fixed rounded-l-2xl">
        <div>
          <img src="" alt="admin" />
        <h1 className="text-zinc-50 text-center pt-10 pb-10 w-100">Admin</h1>
        </div>
        <hr className="pt-5" />

        <a href="" className="w-[100%]">
        <div className="text-center pt-5 pb-5 text-zinc-50 hover:bg-purple-800">
            <p className="w-[100%]">
            Dashboard
            </p>
        </div>
        </a>

        <a href="" className="w-[100%]">
        <div className="text-center pt-5 pb-5 text-zinc-50 hover:bg-purple-800">
            <p className="w-[100%]">
            Members
            </p>
        </div>
        </a>

        <a href="" className="w-[100%]">
        <div className="text-center pt-5 pb-5 text-zinc-50 hover:bg-purple-800">
            <p className="w-[100%]">
            Books
            </p>
        </div>
        </a>

        <a href="" className="w-[100%]">
        <div className="text-center pt-5 pb-5 text-zinc-50 hover:bg-purple-800">
            <p className="w-[100%]">
            Returned
            </p>
        </div>
        </a>

        <a href="" className="w-[100%]">
        <div className="text-center pt-5 pb-5 text-zinc-50 hover:bg-purple-800">
            <p className="w-[100%]">
            Not Returned
            </p>
        </div>
        </a>
      </div>
    )

  }

  export default Navbar;