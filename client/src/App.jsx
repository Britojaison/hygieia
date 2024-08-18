import Nav from "./components/nav"
import './App.css'
import Header from "./components/HEADER"
import Home from "./components/home"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
    </BrowserRouter>
    
    <Nav  />
    <Home/>
    </>
  );
}

export default App
