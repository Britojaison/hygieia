import './App.css'
import Home from "./Pages/home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Pages/login"

function App(){
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
