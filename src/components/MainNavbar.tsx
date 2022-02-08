 import React, {useEffect, useState} from 'react';
 import {FiUsers} from 'react-icons/fi';
 import {ImBooks} from 'react-icons/im';
 import {SiBookstack} from 'react-icons/si';
 import {RiErrorWarningLine} from 'react-icons/ri';
 import {RiDashboardLine} from 'react-icons/ri';







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
            <div className=" bg-purple-100 h-[75vh] w-[75vw] fixed right-[3%] top-[15%] items-start flex justify-center rounded-xl overflow-hidden">

                <div className="h-[90%] w-[100%] p-5  pr-16">
                    <div className="Button-options active:bg-purple-700 bg-purple-600">
                        <label className=""><FiUsers color='white'size={'3rem'}/></label>
                        <p className="main-sidebar-text">
                            Members
                        </p>
                    </div>

                    <div className="Button-options active:bg-yellow-600 bg-yellow-500">
                        <label className=""><ImBooks color='white'size={'3rem'}/></label>
                        <p className="main-sidebar-text">
                            Books
                        </p>
                    </div>           
                </div>

                <div className="h-[90%] w-[100%] p-5 pr-16">
                    <div className="Button-options active:bg-green-700 bg-green-600">
                        <label className=""><SiBookstack color='white'size={'3rem'}/></label>
                        <p className="main-sidebar-text">
                            Returned
                        </p>
                    </div>

                    <div className="Button-options active:bg-red-700 bg-red-500">
                        <label className=""><RiErrorWarningLine color='white'size={'3rem'}/></label>
                        <p className="main-sidebar-text w-[80%]">
                            Not Returned
                        </p>
                    </div>
                </div>
            </div>
        }




            {/*SMALL BUTTONS*/}
            {!props.isBig && <div className=" h-[15vh] xl:w-[70vw] fixed right-[1%] top-[2%] items-start flex justify-center rounded-xl overflow-hidden">
            <a href=""className="link ">
                <div className="navbar-options active:bg-blue-700 bg-blue-500 mx-auto">
                    <label className=""><RiDashboardLine color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text">
                        Borrowed
                    </p>
                </div>
            </a>

            <a href="" className="link">
                <div className="navbar-options active:bg-purple-700 bg-purple-700">
                    <label className=""><FiUsers color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text">
                        Members
                    </p>
                </div>
            </a>

            <a href="" className="link">
                <div className="navbar-options active:bg-yellow-600 bg-yellow-500">
                    <label className=""><ImBooks color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text">
                        Books
                    </p>
                </div>
            </a>

            <a href="" className="link">
                <div className="navbar-options active:bg-green-700 bg-green-600">
                    <label className=""><SiBookstack color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text">
                        Returned
                    </p>
                </div>
            </a>
            
            <a href="" className="link">
                <div className="navbar-options active:bg-red-700 bg-red-500">
                    <label className=""><RiErrorWarningLine color='white'size={'3rem'}/></label>
                    <p className="main-sidebar-text w-[80%]">
                        Not Returned
                    </p>
                </div>
            </a>
            </div>
        }
        </> 
    );
}
export default MainNavbar;