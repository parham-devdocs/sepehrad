import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Users from "./pages/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Default route */}
            <Route path="users" element={<Users />} /> {/* About page */}
          </Route>
        </Routes>
      </Router>{" "}
    </>
  );
};

export default App;
