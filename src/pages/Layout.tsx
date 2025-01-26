// Layout.js
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>My App</h1>
        {/* Add navigation links here */}
      </header>
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
