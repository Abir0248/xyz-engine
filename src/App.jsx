import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Result from "./components/Result";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    client: "",
    contractor: "",
    csvFile: null,
    maxX: 0,
    minX: 0,
    maxY: 0,
    minY: 0,
    maxZ: 0,
    minZ: 0,
  });

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Step1 />} /> */}
        {/* <Route path="/step-2" element={<Step2 />} /> */}
        {/* <Route path="/result" element={<Result />} /> */}
        <Route path="/" element={<Step1 setFormData={setFormData} />} />
        <Route path="/step-2" element={<Step2 formData={formData} />} />
        <Route path="/result" element={<Result formData={formData} />} />
      </Routes>
    </Router>
  );
}

export default App;
