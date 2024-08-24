import './App.css'
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Pharmacy from './pages/pharmacy'

function App(){
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
