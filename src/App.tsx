import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Index from "./Componants/Index";
import DetailProjet from "./Componants/DetailProjet";

// import { motion, useScroll } from "framer-motion";

function App() {
  // const { scrollYProgress } = useScroll();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Index />} />
          <Route path="/:slug" element={<DetailProjet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
