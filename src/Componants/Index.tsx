import React from "react";
import DrawerAppBar from "./DrawerAppBar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Conatct from "./Conatct";
import CopyRight from "./CopyRight";

const Index: React.FC = () => (
  <div>
    <DrawerAppBar />
    <Home />
    <About />
    <Portfolio />
    <Conatct />
    <CopyRight />
  </div>
);

export default Index;
