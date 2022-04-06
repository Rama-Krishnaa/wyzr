import React from "react";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
