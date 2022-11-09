import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import LoginForm from "./components/loginform";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
      <Header />
    
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
