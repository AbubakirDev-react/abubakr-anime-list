import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom';

export default function AuthenticatedError() {
    const {currentUser}=useAuth();
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className='text-3xl'>{currentUser.fname}. You are already logged in! <br /> <Link to='/' className='err'>Home</Link></h1>
      
    </div>
  )
}
