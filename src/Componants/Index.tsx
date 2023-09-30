import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import DrawerAppBar from "./DrawerAppBar";
import Home from "./Home";
import { Routes, BrowserRouter } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Conatct from "./Conatct";
import { motion, useScroll } from "framer-motion";
import CopyRight from "./CopyRight";
const Index = () => {
  return (
    <div>
      <DrawerAppBar></DrawerAppBar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Conatct></Conatct>
      <CopyRight></CopyRight>
    </div>
  );
};

export default Index;
