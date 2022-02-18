 import React, {useEffect, useState} from 'react';
 import {ImUsers} from 'react-icons/im';
 import {ImUserTie} from 'react-icons/im';
 import {ImBooks} from 'react-icons/im';
 import {SiBookstack} from 'react-icons/si';
 import {RiErrorWarningLine} from 'react-icons/ri';
 import {RiDashboardLine} from 'react-icons/ri';
 import {GiBookmarklet} from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';







 const MainNavbar = (props: any) => {
    const rowStyle = ""

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

            <div className=" bg-white h-[100%] w-[100%] flex flex-row rounded-r-2xl z-10">
                <div className="h-[100%] w-[20%] p-5 flex-row flex">
                    <div className="h-[90%] w-[100%] flex flex-col my-auto">
                        
                        {/* Sign Out knapp */}
                        <NavLink to="/bookList" className=" h-[10%] m-auto w-[100%] flex flex-row rounded-2xl bg-pink-600 mb-[10%]">
                            <div className="flex flex-row m-auto">
                                <label className="">{/*<ImBooks color='white'size={'5rem'}/>*/}</label>
                                <p className="text-white my-auto text-xl">
                                    Sign Out
                                </p>
                            </div>
                        </NavLink>    
                        <div className="mt-16 w-[100%] h-full">
                        {/* Loan Out knapp */}
                        <NavLink to="/" className="h-[20%] my-5 w-[100%] flex flex-row rounded-2xl bg-blå">
                            <div className="flex flex-row m-auto">
                                <label className="">{/*<ImBooks color='white'size={'5rem'}/>*/}</label>
                                <p className="text-white my-auto text-2xl">
                                    Borrow Book
                                </p>
                            </div>
                        </NavLink>    
                        {/* Return knapp */}
                        <NavLink to="/LÅNA LÄNK" className="h-[20%] my-5 w-[100%] flex flex-row rounded-2xl bg-grön">
                            <div className="flex flex-row m-auto">
                                <label className="">{/*<ImBooks color='white'size={'5rem'}/>*/}</label>
                                <p className="text-white my-auto text-2xl">
                                    Return Book
                                </p>
                            </div>
                        </NavLink>  
                        <NavLink to="/remind" className="h-[20%] m-auto w-[100%] flex flex-row rounded-2xl bg-röd">
                            <div className="flex flex-row m-auto">
                                <p className="text-white my-auto text-2xl">
                                    Remind
                                </p>
                                <label className="ml-5"><RiErrorWarningLine color='white'size={'2rem'}/></label>
                            </div>
                        </NavLink>    
                    </div>
                    </div>
                </div>
                <div className="w-[80%] h-[100%] my-auto flex flex-col">
                    <div className="h-[90%] flex flex-col my-auto">
                        <div className="h-[30%] w-[100%] p-5 flex-row flex">
                            {/* Books knapp */}
                            <NavLink to="/bookList" className=" h-[100%] m-auto w-[40%] flex flex-row rounded-2xl active:bg-mörkGul bg-gul">
                                <div className="flex flex-row m-auto">
                                    <label className="mr-5"><ImBooks color='white'size={'5rem'}/></label>
                                    <p className="main-sidebar-text my-auto text-3xl">
                                        Books
                                    </p>
                                </div>
                            </NavLink>   
                            {/* Available knapp */}
                            <NavLink to="/availableBookList" className=" h-[100%] m-auto w-[40%] flex flex-row rounded-2xl active:bg-mörkGrön bg-grön">
                                <div className="flex flex-row m-auto">
                                    <label className="mr-5"><SiBookstack color='white'size={'5rem'}/></label>
                                    <p className="main-sidebar-text my-auto text-3xl">
                                        Available
                                    </p>
                                </div>
                            </NavLink>    
                        </div>
                        <div className="w-[100%] p-5 flex-row  my-auto flex h-[30%]">
                            {/* Borrowed Knapp */}
                            <NavLink to="/borrowedList" className="h-[100%] m-auto w-[40%] flex flex-row rounded-2xl active:bg-mörkBlå bg-blå">
                                <div className="flex flex-row m-auto">
                                    <label className="mr-5"><GiBookmarklet color='white'size={'5rem'}/></label>
                                    <p className="main-sidebar-text my-auto text-3xl">
                                        Borrowed
                                    </p>
                                </div>
                            </NavLink>
                            {/* Not Returned Knapp */}
                            <NavLink to="/missingList" className=" h-[100%] m-auto w-[40%] flex flex-row rounded-2xl active:bg-mörkRöd bg-röd">
                                <div className="flex flex-row m-auto">
                                    <label className="mr-5"><RiErrorWarningLine color='white'size={'5rem'}/></label>
                                    <p className="main-sidebar-text my-auto text-3xl">
                                        Missing
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                        <div className="h-[30%] w-[100%] p-5 flex-row flex">
                            {/* Staff knapp */}
                            <NavLink to="/staffList" className="h-[100%] m-auto w-[40%] flex flex-row rounded-2xl active:bg-mörkLila bg-lila">
                                <div className="flex flex-row m-auto">  
                                    <label className="mr-5"><ImUserTie color='white'size={'5rem'}/></label>
                                    <p className="main-sidebar-text my-auto text-3xl">
                                        Staff
                                    </p>
                                </div>
                            </NavLink>    
                            {/* Students knapp */}
                            <NavLink to="/studentsList" className="h-[100%] m-auto w-[40%] flex flex-row rounded-2xl active:bg-mörkRosa bg-rosa">
                                <div className="flex flex-row m-auto">
                                    <label className="mr-5"><ImUsers color='white'size={'5rem'}/></label>
                                    <p className="main-sidebar-text my-auto text-3xl">
                                        Students
                                    </p>
                                </div>
                            </NavLink>   
                        </div>
                    </div>
                </div>
            </div>
            
        }

            {/*SMALL BUTTONS*/}
            {!props.isBig && 
            <div className=" h-[100%] w-[100%] right-[1%]  items-start flex justify-center rounded-xl overflow-hidden">
            
            <NavLink to="/dashboard" className="link mx-auto flex">
                <div className="navbar-options active:bg-adminSidebar bg-adminSidebar overflow-hidden">
                    <label className=""><RiDashboardLine color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text">
                        Dashboard
                    </p>
                </div>
            </NavLink>

            <NavLink to="/staffList" className="link">
                <div className="navbar-options active:bg-mörkLila bg-lila">
                    <label className=""><ImUserTie color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text">
                        Staff
                    </p>
                </div>
            </NavLink>
            <NavLink to="/studentList" className="link">
                <div className="navbar-options active:bg-mörkRosa bg-rosa">
                    <label className=""><ImUsers color='white'size={'3rem'}/></label>
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
                    <label className=""><GiBookmarklet color='white'size={'3rem'}/></label>
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