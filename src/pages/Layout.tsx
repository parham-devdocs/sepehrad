// Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet /> {/* Renders the matched child route */}
      </main>
      <footer>
        <p>Footer content here</p>
      </footer>
    </div>
  );
};

export default Layout;
