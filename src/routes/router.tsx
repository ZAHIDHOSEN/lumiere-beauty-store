import { createBrowserRouter, Navigate } from "react-router";
import HomePage from "../pages/HomePage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "*",
    element: <Navigate to={`/`} replace></Navigate>
  }
]);