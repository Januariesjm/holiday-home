import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import {BrowserRouter as Router, Navigate, Route } from "react-router-dom";

function App() {
  return (

    //BEM
    <div className="app">
     <Router>
      <Header />

    <Navigate>
      <Route path="/search">
      <SearchPage />
    </Route>
    <Route path="/">
      <Home />
    </Route>

    </Navigate>
      <Footer />
     </Router>
  
    </div>
  );
}

export default App;
