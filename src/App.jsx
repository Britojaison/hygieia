import Nav from "./components/nav.jsx"
import './App.css'
import Header from "./components/HEADER.jsx"
import Home from "./components/home.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pharmacy from "./components/pharmacy.jsx"


function App(){
  return (
    <>
    <Header />
    <Nav />
    <Home/>
    
    
    </>
  )
}

export default App
