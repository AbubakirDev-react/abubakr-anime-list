import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom';

export default function AuthenticatedError() {
    const {currentUser}=useAuth();
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className='text-3xl'>{currentUser.fname}. Вы уже вошли в учетный запись! <br /> <Link to='/' className='err'>Главная Страница</Link></h1>
      
    </div>
  )
}
