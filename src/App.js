import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Cotact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
