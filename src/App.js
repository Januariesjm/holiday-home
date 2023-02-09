import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
      <Header />
    
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/register/Register" element={<Register />} />
          <Route path="/login/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
