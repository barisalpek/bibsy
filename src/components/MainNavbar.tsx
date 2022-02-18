import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { ImBooks } from "react-icons/im";
import { SiBookstack } from "react-icons/si";
import { RiErrorWarningLine } from "react-icons/ri";
import { RiDashboardLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const MainNavbar = (props: any) => {
  //     const [] = useEffect<>();

  //     useEffect(() => {
  //         //fetching data
  //        //fakeUseFetch
  //        //${props.mainColor}
  //        //${props.listColor}
  //        setData(list);
  //        setTheadStyle(`bg-${props.mainColor} h-16 text-3xl text-left text-white`);
  //        setTrStyle(`w-screen odd:bg-white even:bg-${props.listColor} h-16`);
  //        setTdStyle('p-3');

  //        if (props.typeOf === 'member') {
  //            setIsMemberType(true);
  //        }
  //        else if (props.typeOf === 'book') {
  //            setIsMemberType(false);
  //        }
  //        else {
  //            setIsMemberType(null);
  //        }

  //    }, []);

  return (
    <>
      {/*BIG BUTTONS*/}
      {props.isBig && (
        <div className=" z-10 flex h-[100%] w-[100%] flex-col rounded-xl bg-white">
          <div className="flex h-[30%] w-[100%] flex-row p-5">
            {/* Books knapp */}
            <NavLink
              to="/bookList"
              className="Button-options active:bg-mörkGul bg-gul h-[100%]"
            >
              <label className="">
                <ImBooks color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text">Books</p>
            </NavLink>
            {/* Available knapp */}
            <NavLink
              to="/availableBookList"
              className="Button-options active:bg-mörkGrön bg-grön h-[100%]"
            >
              <label className="">
                <SiBookstack color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text">Available</p>
            </NavLink>
          </div>
          <div className="flex h-[30%] w-[100%] flex-row p-5">
            {/* Borrowed Knapp */}
            <NavLink
              to="/borrowedList"
              className="Button-options active:bg-mörkBlå bg-blå h-[100%]"
            >
              <label className="">
                <RiErrorWarningLine color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text w-[80%]">Borrowed</p>
            </NavLink>
            {/* Not Returned Knapp */}
            <NavLink
              to="/missingList"
              className="Button-options active:bg-mörkRöd bg-röd h-[100%]"
            >
              <label className="">
                <RiErrorWarningLine color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text w-[80%]">Missing</p>
            </NavLink>
          </div>
          <div className="flex h-[30%] w-[100%] flex-row p-5">
            {/* Staff knapp */}
            <NavLink
              to="/staffList"
              className="Button-options active:bg-mörkLila bg-lila h-[100%]"
            >
              <label className="">
                <FiUsers color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text">Staff</p>
            </NavLink>
            {/* Students knapp */}
            <NavLink
              to="/studentsList"
              className="Button-options active:bg-mörkRosa bg-rosa h-[100%]"
            >
              <label className="">
                <FiUsers color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text">Students</p>
            </NavLink>
          </div>
        </div>
      )}

      {/*SMALL BUTTONS*/}
      {!props.isBig && (
        <div className=" right-[1%] top-[1%] flex h-[15vh] w-[100%] items-start justify-center overflow-hidden rounded-xl">
          <NavLink to="/dashboard" className="link">
            <div className="navbar-options active:bg-adminSidebar bg-adminSidebar overflow-hidden">
              <label className="">
                <RiDashboardLine color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text">Dashboard</p>
            </div>
          </NavLink>

          <NavLink to="/staffList" className="link">
            <div className="navbar-options active:bg-mörkLila bg-lila">
              <label className="">
                <FiUsers color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text">Staff</p>
            </div>
          </NavLink>
          <NavLink to="/studentList" className="link">
            <div className="navbar-options active:bg-mörkRosa bg-rosa">
              <label className="">
                <FiUsers color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text">Students</p>
            </div>
          </NavLink>

          <NavLink to="/bookList" className="link">
            <div className="navbar-options active:bg-mörkGul bg-gul">
              <label className="">
                <ImBooks color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text">Books</p>
            </div>
          </NavLink>

          <NavLink to="/availableBookList" className="link">
            <div className="navbar-options active:bg-mörkGrön bg-grön">
              <label className="">
                <SiBookstack color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text">Available</p>
            </div>
          </NavLink>
          <NavLink to="/borrowedList" className="link ">
            <div className="navbar-options active:bg-mörkBlå bg-blå mx-auto">
              <label className="">
                <SiBookstack color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text">Borrowed</p>
            </div>
          </NavLink>
          <NavLink to="/notReturnedList" className="link">
            <div className="navbar-options active:bg-mörkRöd bg-röd">
              <label className="">
                <RiErrorWarningLine color="white" size={"3rem"} />
              </label>
              <p className="main-sidebar-text w-[80%]">Missing</p>
            </div>
          </NavLink>
        </div>
      )}
    </>
  );
};
export default MainNavbar;
