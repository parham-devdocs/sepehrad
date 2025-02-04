import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import useModalToggle from "../modalStateStore";
import { Modal } from "../components/Modal";

const Layout = () => {
  const { url,text, isOpen } = useModalToggle();

  return (
    <div
      className={`flex h-screen overflow-hidden bg-Background-dark relative ${
        isOpen && "backdrop-blur-sm" // Add blur effect when modal is open
      }`}
    >
      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col overflow-y-auto rounded-tr-[50px] rounded-br-[50px] bg-Background-light ${
          isOpen && "pointer-events-none" // Disable interaction with background when modal is open
        }`}
      >
        <Navbar />
        <main className="flex-1 p-4 overflow-y-auto mx-10">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="absolute inset-0 bg-black/50 z-10"></div> // Dark overlay behind the modal
      )}

      {/* Modal */}
      {isOpen && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <Modal
            url={url}
            text={text}
            
          />
        </div>
      )}
    </div>
  );
};

export default Layout;