import { NavLink } from 'react-router-dom';
import Logo from '../../components/logo';
import { VscPieChart } from 'react-icons/vsc';
import { BiCartAdd } from 'react-icons/bi';


const SideBar = () => {
  return (
    <aside id="default-sidebar" className="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#1A1C23]">
            <div className='flex items-center p-2 pb-7'>
                {/* Dashboard logo */}
                <Logo/>
            </div>
            <ul className="space-y-2 font-medium">
                <li>
                    <NavLink to="/" className="flex items-center p-2 text-[#0E9F6E] rounded-lg hover:bg-gray-100">
                    <VscPieChart className="w-6 h-6 text-[#0E9F6E] transition duration-75 group-hover:text-gray-900 sidebar-icon"/>
                    <span className="ml-3">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/product" className="flex items-center p-2 text-[#0E9F6E] rounded-lg hover:bg-gray-100">
                    <BiCartAdd className="w-6 h-6 text-[#0E9F6E] transition duration-75 group-hover:text-gray-900 sidebar-icon"/>
                    <span className="ml-3">Products</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default SideBar