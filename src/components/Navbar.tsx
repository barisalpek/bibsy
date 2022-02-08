import React from 'react';
import {BiUserCircle} from 'react-icons/bi';
import {FiUsers} from 'react-icons/fi'
import {SiBookstack} from 'react-icons/si'
import {RiErrorWarningLine} from 'react-icons/ri';
import {RiDashboardLine} from 'react-icons/ri';
import {ImBooks} from 'react-icons/im';

  const Navbar = () =>{
    return(
      
      // Here is the main component of the navbar
      <div className="bg-adminSidebar  w-[30vw] xl:w-[16vw] xl:p-[2vw] h-[100%] mr-[5%] items-center grid justify-center rounded-2xl overflow-hidden">
        {/* Here is the icon, positioning (of) and admin */}
        <div className="grid place-items-center mb-3 pb-2">
          <label className="pt-9"><BiUserCircle color='white'size={'3rem'}/></label>
             <h1 className="text-zinc-50  pt-2 pb-2">Admin</h1> 
        </div>
        {/* Here is the line dividing the other links */}
        <hr className= "w-[80%] mx-auto" />
        {/* Here is the icon, positioning (of) and dashboard */}
        <div className="place-items-center w-[19vw]">  
            <a href="" className="w-[100%]">
              <div className="sidebar-options w-[full]">
                <label className=""><RiDashboardLine color='white'size={'3rem'}/>
                </label>
                <p className="sidebar-text">
                  Dashboard
                </p>
              </div>
            </a>
        {/* Here is the icon, positioning (of) and members */}
          <div>
            {/* Will be attempting to add a dropdown */}
            <button className="w-[100%]">
              <div className="sidebar-options">
                <label className=""><FiUsers color='white'size={'3rem'}/></label>
                    <p className="sidebar-text">
                      Members
                    </p>
              </div> 
           </button>
          </div>
            
        {/* Here is the icon, positioning (of) and books */}  
            <a href="" className="w-[100%]">
              <div className="sidebar-options">
                <label className=""><ImBooks color='white'size={'3rem'}/></label>
                    <p className="sidebar-text">
                      Books
                    </p>
              </div>
            </a>

            
        {/* Here is the icon, positioning (of) and NOT returned */}
            <a href="" className="w-[100%]">
               <div className="sidebar-options">
                 <label className=""><RiErrorWarningLine color='white'size={'3rem'}/></label>
                    <p className="sidebar-text">
                      Not Returned
                   </p>
             </div>
            </a>
        </div>
      </div>
      
    )
  }
  export default Navbar;