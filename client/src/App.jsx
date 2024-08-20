import Nav from "./components/nav"
import './App.css'
import Header from "./components/HEADER"
import Home from "./components/home"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    
    
    <Nav  />
    <Home/>
    <div>
          <Link to="/">
            <button>Click</button>
          </Link>
    </div>
    </BrowserRouter>
    
    </>
  );
}

export default App
