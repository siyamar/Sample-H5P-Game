import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../pages/AboutUs";
import Developers from "../pages/Developers";
import FollowUs from "../pages/FollowUs";
import Home from "../pages/Home";
import Play from "../pages/Play";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/Developers",
        element: <Developers></Developers>,
      },
      {
        path: "/followUs",
        element: <FollowUs></FollowUs>,
      },
      {
        path: "/play",
        element: <Play></Play>,
      },
    ],
  },
]);
