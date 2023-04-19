import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import About from "./components/About.js";
import React from "react";
import Landing from "./components/Landing.js";
import Opportunity from "./components/Opportunity.js";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/opportunity" element={<Opportunity/>}/>
      </Routes>
    </>
  );
}

export default App;
