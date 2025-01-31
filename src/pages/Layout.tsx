import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Navbar />

        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <div className=" flex-shrink-0">
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
