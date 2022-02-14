import React from 'react';
import {BiUserCircle} from 'react-icons/bi';
import {FiUsers} from 'react-icons/fi'
import {SiBookstack} from 'react-icons/si'
import {RiErrorWarningLine} from 'react-icons/ri';
import {RiDashboardLine} from 'react-icons/ri';
import {ImBooks} from 'react-icons/im';


  const NavbarL = () =>{
    return(
      <div className="bg-adminSidebar w-60 h-[auto] top-[10%] bottom-[10%] left-[2vw] fixed items-center grid justify-center rounded-2xl overflow-hidden">
        <div className="grid place-items-center mb-3 pb-2">
          <label className="pt-9"><BiUserCircle color='white'size={'3rem'}/></label>
          <h1 className="text-zinc-50  pt-2 pb-2">Admin</h1> 
        </div>

        <hr className= "w-[80%] mx-auto" />

      <div className="place-items-center w-[19vw]">  

            <a href="" className="w-[100%]">
              <div className="sidebar-options w-[full]">
                <label className=""><RiDashboardLine color='white'size={'3rem'}/></label>
                <p className="sidebar-text mx-6 mb-2 text-xs tracking-widest">
                  Dashboard
                </p>
              </div>
            </a>

            <a href="">
              <div className="sidebar-options w-[100%]"> 
                <label className=""><FiUsers color='white'size={'3rem'}/></label>
                <p className="sidebar-text mx-6 mb-2 text-xs tracking-widest">
                  Members
                </p>
              </div>
            </a>
          
            
            <a href="" className="w-[100%]">
              <div className="sidebar-options">
                <label className=""><ImBooks color='white'size={'3rem'}/></label>
                <p className="sidebar-text mx-6 mb-2 text-xs tracking-widest">
                  Books
                </p>
              </div>
            </a>

            <a href="" className="w-[100%]">
              <div className="sidebar-options">
                <label className=""><SiBookstack color='white'size={'3rem'}/></label>
                <p className="sidebar-text mx-6 mb-2 text-xs tracking-widest">
                  Returned
                </p>
              </div>
            </a>

            <a href="" className="w-[100%]">
              <div className="sidebar-options">
                <label className=""><RiErrorWarningLine color='white'size={'3rem'}/></label>
                <p className="sidebar-text mx-6 mb-2 text-xs tracking-widest">
                  Not Returned
                </p>
              </div>
            </a>
        </div>
       
      </div>
    )
  }
  export default NavbarL;