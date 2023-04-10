import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import DrawerAppBar from "./Componants/DrawerAppBar";
import Home from "./Componants/Home";
import { Routes, BrowserRouter } from "react-router-dom";
import About from "./Componants/About";
import Portfolio from "./Componants/Portfolio";
import Conatct from "./Componants/Conatct";
import { motion, useScroll } from "framer-motion";
import CopyRight from "./Componants/CopyRight";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="App">
      <BrowserRouter>
        <DrawerAppBar></DrawerAppBar>
        <Home></Home>
        <About></About>
        <Portfolio></Portfolio>
        <Conatct></Conatct>
        <CopyRight></CopyRight>
      </BrowserRouter>
    </div>
  );
}

export default App;
