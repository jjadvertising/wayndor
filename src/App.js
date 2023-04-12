import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.js';
import HomePage from "./components/HomePage.js";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
