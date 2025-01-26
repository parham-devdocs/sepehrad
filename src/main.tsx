import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import Users from "./pages/Users.tsx";
import Layout from "./pages/Layout.tsx";
import App from "./App.tsx";
// const router = createBrowserRouter([
 
//   {
//     path: "/",
//     element: <Home />,
//   },
//   { path: "/users", element: <Users /> },
// ]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </StrictMode>
);
