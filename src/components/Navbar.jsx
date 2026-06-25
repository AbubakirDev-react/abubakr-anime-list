import { Circle, Dot, DotIcon, NotebookTextIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const {currentUser,login}=useAuth();
  return (
    <nav className='flex w-full sticky p-3 border-b border-white/50 items-center justify-between'>
        <Link to='/' className='text-2xl flex items-center gap-1'><NotebookTextIcon color='indigo' size={26}/> AniTrack</Link>
        <ul className='flex gap-3.5'>
            <Link to='list/' className='text-white/60 duration-300 hover:text-white'>Список</Link>
            <Link to='search/' className='text-white/60 duration-300 hover:text-white'>Поиск</Link>
            <Link to='profile/' className='text-white/60 duration-300 hover:text-white'>Профиль</Link>
        </ul>
        {currentUser?
        <Link to='/add-anime' className='btn rounded px-3 py-1.5'>Добавить</Link>:
        <Link to='/login' className='btn rounded px-3 py-1.5'>Войти</Link>  
      }
      </nav>
  )
}
