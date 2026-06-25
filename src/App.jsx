import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import HeroPage from './pages/HeroPage'; 
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AuthProvider, { useAuth } from './context/AuthContext';
import AuthenticatedError from './pages/AuthenticatedError';
import ProfilePage from './pages/ProfilePage';
import AnimeProvider from './context/AnimeContext';
import AddAnime from './pages/AddAnime';

function App() {
  const {currentUser} = useAuth();
  return (
    <div className='w-full h-screen'>
      <AnimeProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={currentUser?<HomePage/>:<HeroPage />} />
          <Route path='/login' element={currentUser?<AuthenticatedError/>:<LoginPage />}/>
          <Route path='/register' element={currentUser?<AuthenticatedError/>:<RegisterPage />} />
          <Route path='/profile' element={currentUser?<ProfilePage />:<LoginPage/>} />
          <Route path='/add-anime' element={currentUser?<AddAnime />:<LoginPage/>} />
        </Routes>
      </AnimeProvider>
    </div>
    )
}

export default App
