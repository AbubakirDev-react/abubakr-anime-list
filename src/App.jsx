import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import HeroPage from './pages/HeroPage'; 
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AuthProvider, { useAuth } from './context/AuthContext';
import AuthenticatedError from './pages/AuthenticatedError';

function App() {
  const {currentUser} = useAuth();
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={currentUser?<AuthenticatedError/>:<LoginPage />}/>
        <Route path='/register' element={currentUser?<AuthenticatedError/>:<RegisterPage />} />
      </Routes>
    </div>
    )
}

export default App
