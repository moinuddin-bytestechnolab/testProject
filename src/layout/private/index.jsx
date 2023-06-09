import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import TopBar from "./TopBar"


const Index = () => {

  return (
    <>
      <div className="flex h-screen overflow-hidden  bg-gray-100">
        {/* Dashboard sidebar */}
            <SideBar/>
        <div className="flex-1 grid">
        {/* Dashboard topbar */}
            <TopBar />
        <div className="m-3">
        {/* Dashboard content here */}
            <div>
              {<Outlet/>}
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Index