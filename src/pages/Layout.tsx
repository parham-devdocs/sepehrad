import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import useModalToggle from "../modalStateStore";
const Layout = () => {
  const {closeModal,isOpen}=useModalToggle()
  return (
    <div className="flex h-screen overflow-hidden bg-Background-dark relative">
      
      <div className="flex-1 flex flex-col overflow-y-auto rounded-tr-[50px] rounded-br-[50px] bg-Background-light">
        <Navbar />

        <main className="flex-1 p-4 overflow-y-auto mx-10">
          <Outlet />
        </main>
      </div>
      <div className=" flex-shrink-0">
        <Sidebar />
      </div>
    {isOpen &&  <div className=" absolute bg-red-200 w-12 h-9 top-[50%] left-[50%]"><button onClick={closeModal}>close it </button></div>}  
    </div>
  );
};

export default Layout;
