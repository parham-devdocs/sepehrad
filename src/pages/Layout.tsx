// Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
const Layout = () => {
  return (
    <div className="flex min-h-[90vh] overflow-x-hidden">
      <div className="flex-1">
        <Navbar />
        <main>
          <Outlet /> {/* Renders the matched child route */}
        </main>
        <footer>
          <p>Footer content here</p>
        </footer>
      </div>
      <Sidebar /> {/* Adjust width as needed */}
    </div>
  );
};


export default Layout;
