/**
    * @description      : 
    * @author           : computer
    * @group            : 
    * @created          : 30/11/2024 - 13:07:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/11/2024
    * - Author          : computer
    * - Modification    : 
**/
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"; // Import the Header
import Features from "./Components/Features";
import Blog from "./Components/Blog";
import Community from "./Components/Community";
import Documentation from "./Components/Documentation";
import OnlineDemo from "./Components/OnlineDemo";
import Downloads from "./Components/Downloads";
import Addons from "./Components/Addons";
import Image from "./Components/Image";

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Image />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/online-demo" element={<OnlineDemo />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/addons" element={<Addons />} />
        {/* Add a fallback route for unmatched paths */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
