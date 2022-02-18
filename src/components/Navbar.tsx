import React from 'react';
import {BiUserCircle} from 'react-icons/bi';
import {ImUserPlus} from 'react-icons/im'
import {RiErrorWarningLine} from 'react-icons/ri';
import {RiDashboardLine} from 'react-icons/ri';
import {GiWhiteBook} from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {

  return(

    // Here is the main component of the navbar
    <div className="bg-adminSidebar divide-y-5 divide-rosa w-[20vw] xl:w-[16vw] xl:p-[2vw] h-[100%] items-center grid justify-center rounded-l-2xl overflow-hidden z-10">

      {/* Here is the icon, positioning (of) and admin */}
        <div className="grid place-items-center mb-3 pb-2">
          <label className="pt-9"><BiUserCircle color='white'size={'3rem'}/></label>
          <h1 className="text-zinc-50  pt-2 pb-2">Admin</h1> 
        </div>
        
      {/* Here is the line dividing the other links */}
      <hr className= "w-[80%] mx-auto divide-red-500" />

      {/* Here is the icon, positioning (of) and dashboard */}
      <div className="place-items-center w-[19vw]">  
        <NavLink to="/dashboard" className="w-[100%]">
          <div className="sidebar-options w-[full]">
            <label className=""><RiDashboardLine color='white'size={'3rem'}/>
            </label>
              <p className="sidebar-text">
                Dashboard
              </p>
          </div>
        </NavLink>
        {/* Here is the icon, positioning (of) and register user */}
      
        {/* Will be attempting to add a dropdown */}
        <NavLink to="/studentList" className="w-[100%]">
          <div className="sidebar-options">
            <label className=""><ImUserPlus color='white'size={'3rem'}/></label>
              <p className="sidebar-text">
                Register User
              </p>
          </div> 
        </NavLink>
        
        {/* Here is the icon, positioning (of) and register books */}  
        <NavLink to="/bookList" className="w-[100%]">
          <div className="sidebar-options">
          <label className=""><GiWhiteBook color='white'size={'3rem'}/></label>
            <p className="sidebar-text">
              Register Book
            </p>
          </div>
        </NavLink>
        
        {/* Here is the icon, positioning (of) and NOT returned */}
        <NavLink to="/loanedList" className="w-[100%]">
          <div className="sidebar-options">
            <label className=""><RiErrorWarningLine color='white'size={'3rem'}/></label>
              <p className="sidebar-text">
                Remind
              </p>
          </div>
        </NavLink>

      </div>
    </div>
  )
}
export default Navbar;