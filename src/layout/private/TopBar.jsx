import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoNotifications } from 'react-icons/io5';
import { SlLogout } from 'react-icons/sl';
import { RiSettings2Line } from 'react-icons/ri';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';
import ClickAwayListener from 'react-click-away-listener';


const TopBar = () => {
  // This state use for hide & show user profile tool tip
  const [showToolTip, setShowToolTip] = useState(false)
  
  const handleClickAway = () => {
    setShowToolTip(false)
	};

  return (
    <div className="bg-[#1A1C23] flex items-center justify-end h-16 border-2 border-t-0 border-l-0 border-r-0">
      <div className='flex justify-end w-full'>
      
        {/* Notification here */}
        <div className="flex items-center mx-3">
          <div className='p-2 text-2xl mx-3 text-[#0E9F6E] rounded-lg hover:text-gray-900 hover:bg-gray-100'>
            <IoNotifications/>
          </div>
          <div>
            <a href="#" onClick={() => setShowToolTip(!showToolTip)}>
              <img className="w-10 h-10 rounded-full" src="/images/profile.png" alt="profile"/>
            </a>
          </div>
        </div>

        {/* Tool Tip here */}
        {
          showToolTip 
          ?
          <ClickAwayListener onClickAway={handleClickAway}>
            <div role="tooltip" className="absolute right-0 mt-12 z-10 inline-block w-56 text-sm text-gray-500 transition-opacity duration-300 bg-[#1A1C23] border border-gray-200 rounded-lg shadow-sm opacity-1">
              <div className="p-3">
                <p className="text-base font-semibold leading-none text-white"><a href="#">Moinuddin</a></p>
                <p className="mb-3 text-sm font-normal"><a href="#" className="hover:underline">moin123@gmail.com</a></p>
              <hr />
                <ul className='mt-3'>
                  <li>
                    <NavLink to="#" className='flex items-center p-2 text-[#0E9F6E] rounded-lg hover:bg-gray-100'>
                    <BiUser className="w-4 h-4 tbit-gray-500 transition duration-75 group-hover:text-gray-900 sidebar-icon"/>
                    <span className="ml-3">My Profile</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className='flex items-center p-2 text-[#0E9F6E] rounded-lg hover:bg-gray-100'>
                    <HiOutlineLockClosed className="w-4 h-4 text-[#0E9F6E] transition duration-75 group-hover:text-gray-900 sidebar-icon"/>
                    <span className="ml-3">Change-Password</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className='flex items-center p-2 text-[#0E9F6E] rounded-lg hover:bg-gray-100'>
                    <RiSettings2Line className="w-4 h-4 text-[#0E9F6E] transition duration-75 group-hover:text-gray-900 sidebar-icon"/>
                    <span className="ml-3">Settings</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className='flex items-center p-2 text-[#0E9F6E] rounded-lg hover:bg-gray-100'>
                    <SlLogout className="w-4 h-4 text-red-500 transition duration-75 group-hover:text-gray-900"/>
                    <span className="ml-3">Log Out</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </ClickAwayListener>
          : 
            null
        }
      </div>
    </div>
  )
}

export default TopBar