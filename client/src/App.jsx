import './App.css'
import Home from './Pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pharmacy from './Pages/pharmacy'
import Login from './Pages/login'
import Profile from './Pages/profile';
import Signup from "./Pages/signup";
import Consultation from './Pages/consult';
import LabTestPage from "./Pages/lab";
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pharm" element={<Pharmacy />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/consult' element={<Consultation />} />
            <Route path='/labpage' element={<LabTestPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
