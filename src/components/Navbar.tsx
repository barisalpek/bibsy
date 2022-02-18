import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RiErrorWarningLine } from "react-icons/ri";
import { RiDashboardLine } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // Here is the main component of the navbar
    <div className="bg-adminSidebar  z-10 grid h-[100%] w-[2vw] items-center justify-center overflow-hidden rounded-l-2xl xl:w-[16vw] xl:p-[2vw]">
      {/* Here is the icon, positioning (of) and admin */}
      <div className="mb-3 grid place-items-center pb-2">
        <label className="pt-9">
          <BiUserCircle color="white" size={"3rem"} />
        </label>
        <h1 className="pt-2  pb-2 text-zinc-50">Admin</h1>
      </div>

      {/* Here is the line dividing the other links */}
      <hr className="mx-auto w-[80%]" />

      {/* Here is the icon, positioning (of) and dashboard */}
      <div className="w-[19vw] place-items-center">
        <NavLink to="/dashboard" className="w-[100%]">
          <div className="sidebar-options w-[full]">
            <label className="">
              <RiDashboardLine color="white" size={"3rem"} />
            </label>
            <p className="sidebar-text">Dashboard</p>
          </div>
        </NavLink>
        {/* Here is the icon, positioning (of) and members */}

        {/* Will be attempting to add a dropdown */}
        <NavLink to="/studentList" className="w-[100%]">
          <div className="sidebar-options">
            <label className="">
              <FiUsers color="white" size={"3rem"} />
            </label>
            <p className="sidebar-text">Members</p>
          </div>
        </NavLink>

        {/* Here is the icon, positioning (of) and books */}
        <NavLink to="/bookList" className="w-[100%]">
          <div className="sidebar-options">
            <label className="">
              <ImBooks color="white" size={"3rem"} />
            </label>
            <p className="sidebar-text">Books</p>
          </div>
        </NavLink>

        {/* Here is the icon, positioning (of) and NOT returned */}
        <NavLink to="/loanedList" className="w-[100%]">
          <div className="sidebar-options">
            <label className="">
              <RiErrorWarningLine color="white" size={"3rem"} />
            </label>
            <p className="sidebar-text">Missing</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
