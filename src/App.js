import './App.css';
import Home from './Home';
import Header from './Header';

function App() {
  return (

    //BEM
    <div className="app">
     {/* <h1>let's biuld holiday home</h1> */}
     <Header />
     <Home />
  
    </div>
  );
}

export default App;
