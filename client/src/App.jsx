import './App.css'
import Home from './Pages/home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pharmacy from './Pages/pharmacy';
import Login from './Pages/login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pharm" element={<Pharmacy />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
