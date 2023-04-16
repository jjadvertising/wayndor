import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.js';
import HomePage from "./components/HomePage.js";
import About from "./components/About.js";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
