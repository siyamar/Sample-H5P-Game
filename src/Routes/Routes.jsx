import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../pages/AboutUs";
import Developers from "../pages/Developers";
import FollowUs from "../pages/FollowUs";
import Game1Level1 from "../pages/Game1/Game1Level1";
import Game1Level2 from "../pages/Game1/Game1Level2";
import Game1Level3 from "../pages/Game1/Game1Level3";
import Game1Level4 from "../pages/Game1/Game1Level4";
import GameDetails from "../pages/GameDetails";
import GameLevel from "../pages/GameLevel";
import Home from "../pages/Home";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/Login/Login";
import ProfileCard from "../pages/ProfileCard/ProfileCard";
import GameLevelCategory from "../pages/GameLevelCategory";
import SeekAdvice from "../pages/SeekAdvice";

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
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/developers",
        element: <Developers></Developers>,
      },
      {
        path: "/followUs",
        element: <FollowUs></FollowUs>,
      },
      {
        path: "/seekAdvice",
        element: <SeekAdvice></SeekAdvice>,
      },
      {
        path: "/profile",
        element: <ProfileCard></ProfileCard>,
      },
      {
        path: "/gameLevel",
        element: <GameLevel></GameLevel>,
      },
      {
        path: "/gameLevel/:id",
        element: <GameDetails></GameDetails>,
      },
      {
        path: "/gameLevelCategory/:id",
        element: <GameLevelCategory></GameLevelCategory>,
      },
      // {
      //   path: "/game1Animation",
      //   element: <Game1Animation></Game1Animation>,
      // },
      {
        path: "/game/:id/level1",
        element: <Game1Level1></Game1Level1>,
      },
      {
        path: "/game1level2",
        element: <Game1Level2></Game1Level2>,
      },
      {
        path: "/game1level3",
        element: <Game1Level3></Game1Level3>,
      },
      {
        path: "/game1level4",
        element: <Game1Level4></Game1Level4>,
      },
    ],
  },
]);
