import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar"; // Adjust path if needed
import Home from "./pages/Home/Home"; // Adjust path if needed
import NotHome from "./pages/NotHome/NotHome"; // Adjust path if needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/nothome" element={<NotHome />} />
      </Routes>
    </Router>
  );
}

export default App;
