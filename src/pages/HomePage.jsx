import React from 'react'
import { useAnime } from '../context/AnimeContext'
import { Link } from 'react-router-dom';

export default function HomePage() {
  const {getListByEmail,animeStatuses} = useAnime();
  if(getListByEmail().length===0){
    return <h1 className='text-center'>Список пустая</h1>
  }
  
  return (
    <div className='w-full h-screen flex flex-col gap-2'>
      <div className="grid gap-2 grid-cols-3 p-3">
        <div className="card rounded-xl p-3 flex flex-col gap-1.5 items-center justify-center">
          <h3 className='text-xl'>{getListByEmail().length}</h3>
          <p className='text-sm'>Всего</p>
        </div>
        <div className="card rounded-xl p-3 flex flex-col gap-1.5 items-center justify-center">
          <h3 className='text-xl'>{getListByEmail().filter(a=>a.status==='Смотрю').length}</h3>
          <p className='text-sm'>Смотрю</p>
        </div>
        <div className="card rounded-xl p-3 flex flex-col gap-1.5 items-center justify-center">
          <h3 className='text-xl'>{getListByEmail().filter(a=>a.status==='Просмотрено').length}</h3>
          <p className='text-sm'>Просмотрено</p>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-2 p-3'>
        <div className='w-full flex items-center justify-between'>
          <h3>Мой Список</h3>
         <Link to='/add-anime' className='btn rounded px-3 py-1.5'>Добавить</Link>
        </div>
        {/* header Menu */}
        <nav className='flex items-center justify-start gap-2'>
          {animeStatuses.map((s)=>(
            <button className='btn px-3 py-1.5 rounded focus:border'>{s}</button>
          ))}
        </nav>
      </div>
      {getListByEmail().map((anime,index)=>{
        return <div key={index} className="card rounded-lg p-3 m-3 flex items-center justify-evenly">
          <div className='flex flex-col gap-2'>
            <h3 className='text-xl'>{anime.name}</h3>
            <p className='text-sm'>{anime.genre}</p>
          </div>
          {/* progress */}
          <div className='w-full px-5 flex items-center justify-center gap-2'>
            <div className='w-full h-1 bg-white/50'>
              <div className='bg-indigo-500 h-1' style={{width:`${anime.watched/anime.allSeries*100}%`}}></div>
            </div>
            <span className='text-white/80'>{anime.watched}/{anime.allSeries}</span>
          </div>
          <div className='px-2 py-1 border border-indigo-500 text-indigo-500 rounded-2xl'>{anime.status}</div>
        </div>
      })}
    </div>
  )
}
