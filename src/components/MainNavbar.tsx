 import React, {useEffect, useState} from 'react';
 import {FiUsers} from 'react-icons/fi';
 import {ImBooks} from 'react-icons/im';
 import {SiBookstack} from 'react-icons/si';
 import {RiErrorWarningLine} from 'react-icons/ri';
 import {RiDashboardLine} from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';







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
            {props.isBig && 

            <div className=" bg-white h-[100%] w-[100%] flex flex-col rounded-xl z-10">
                <div className="h-[30%] w-[100%] p-5 flex-row flex">
                     {/* Books knapp */}
                    <NavLink to="/bookList" className="Button-options h-[100%] active:bg-mörkGul bg-gul">
                        <label className=""><ImBooks color='white'size={'3rem'}/></label>
                        <p className="main-sidebar-text">
                            Books
                        </p>
                    </NavLink>   
                    {/* Available knapp */}
                    <NavLink to="/availableBookList" className="Button-options h-[100%] active:bg-mörkGrön bg-grön">
                        <label className=""><SiBookstack color='white'size={'3rem'}/></label>
                        <p className="main-sidebar-text">
                            Available
                        </p>
                    </NavLink>    
                </div>
                <div className="w-[100%] p-5 flex-row flex h-[30%]">
                     {/* Borrowed Knapp */}
                    <NavLink to="/borrowedList" className="Button-options h-[100%] active:bg-mörkBlå bg-blå">
                        <label className=""><RiErrorWarningLine color='white'size={'3rem'}/></label>
                        <p className="main-sidebar-text w-[80%]">
                            Borrowed
                        </p>
                    </NavLink>
                    {/* Not Returned Knapp */}
                    <NavLink to="/missingList" className="Button-options h-[100%] active:bg-mörkRöd bg-röd">
                        <label className=""><RiErrorWarningLine color='white'size={'3rem'}/></label>
                        <p className="main-sidebar-text w-[80%]">
                            Missing
                        </p>
                    </NavLink>
                </div>
                <div className="h-[30%] w-[100%] p-5 flex-row flex">
                    {/* Staff knapp */}
                    <NavLink to="/staffList" className="Button-options h-[100%] active:bg-mörkLila bg-lila">
                        <label className=""><FiUsers color='white'size={'3rem'}/></label>
                        <p className="main-sidebar-text">
                            Staff
                        </p>
                    </NavLink>    
                    {/* Students knapp */}
                    <NavLink to="/studentsList" className="Button-options h-[100%] active:bg-mörkRosa bg-rosa">
                        <label className=""><FiUsers color='white'size={'3rem'}/></label>
                        <p className="main-sidebar-text">
                            Students
                        </p>
                    </NavLink>   
                </div>
            </div>
        }

            {/*SMALL BUTTONS*/}
            {!props.isBig && 
            <div className=" h-[15vh] w-[100%] right-[1%] top-[1%] items-start flex justify-center rounded-xl overflow-hidden">
            
            <NavLink to="/dashboard" className="link">
                <div className="navbar-options active:bg-adminSidebar bg-adminSidebar overflow-hidden">
                    <label className=""><RiDashboardLine color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text">
                        Dashboard
                    </p>
                </div>
            </NavLink>

            <NavLink to="/staffList" className="link">
                <div className="navbar-options active:bg-mörkLila bg-lila">
                    <label className=""><FiUsers color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text">
                        Staff
                    </p>
                </div>
            </NavLink>
            <NavLink to="/studentList" className="link">
                <div className="navbar-options active:bg-mörkRosa bg-rosa">
                    <label className=""><FiUsers color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text">
                        Students
                    </p>
                </div>
            </NavLink>

            <NavLink to="/bookList" className="link">
                <div className="navbar-options active:bg-mörkGul bg-gul">
                    <label className=""><ImBooks color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text">
                        Books
                    </p>
                </div>
            </NavLink>

            <NavLink to="/availableBookList" className="link">
                <div className="navbar-options active:bg-mörkGrön bg-grön">
                    <label className=""><SiBookstack color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text">
                        Available
                    </p>
                </div>
            </NavLink>
            <NavLink to="/borrowedList" className="link ">
                <div className="navbar-options active:bg-mörkBlå bg-blå mx-auto">
                    <label className=""><SiBookstack color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text">
                        Borrowed
                    </p>
                </div>
            </NavLink>
            <NavLink to="/notReturnedList" className="link">
                <div className="navbar-options active:bg-mörkRöd bg-röd">
                    <label className=""><RiErrorWarningLine color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text w-[80%]">
                        Missing
                    </p>
                </div>
            </NavLink>
            </div>
        }
        </> 
    );
}
export default MainNavbar;