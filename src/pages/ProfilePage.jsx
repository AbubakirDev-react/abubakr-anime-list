import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function ProfilePage() {
  const {currentUser,logout} = useAuth();
  return (
    <div className='w-full h-full p-3'>
      <div className="card p-3 rounded flex items-center justify-start gap-2">
        <div className='circle border rounded-full'></div>
        <div className="flex flex-col gap-2">
          <h1 className='text-2xl'>{currentUser.fname}</h1>
          <h3 className='text-sm'>{currentUser.email}</h3>
        </div>
          <button className='ml-auto me-3 px-3 py-1.5 rounded border-2 border-red-600/70 text-red-400/50 duration-300 hover:border-red-600 hover:text-red-400' onClick={()=>logout()}>Выйти</button>
      </div>
    </div>
  )
}
