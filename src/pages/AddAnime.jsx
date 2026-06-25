import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { useAnime } from '../context/AnimeContext'

export default function AddAnime() {
  const {animeStatuses,addAnimeToList} = useAnime();
  const [name,setName]=useState('');
  const [genre,setGenre]=useState('');
  const [status,setStatus]=useState(animeStatuses[0]);
  const [watched,setWatched]=useState(Number(''));
  const [allSeries,setAllSeries]=useState(Number(''));

  function handleSubmit(e){
    e.preventDefault()
    addAnimeToList(name,genre,status,watched,allSeries)
    setName('')
    setGenre('')
    setStatus(animeStatuses[0])
    setWatched('')
    setAllSeries('')
  }
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className="card w-6/12 p-3 rounded-xl">
         <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <div className='flex flex-col w-full gap-1'>
            <label htmlFor="animeName" className='text-sm'>Название аниме*</label>
            <input required type="text" placeholder='Например: Naruto' id='animeName' className='block min-w-0  py-1.5 pr-3 pl-2 placeholder:text-gray-500  sm:text-sm/6 outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 rounded-lg' onChange={(e)=>setName(e.target.value)}/>
          </div>
            <div className='flex gap-2'>
              <div className="flex flex-col w-1/2 gap-1">
              <label htmlFor="genre">Жанр*</label>
              <input required type="text" placeholder='Экшен, Фэнтези...' id='genre' className='block min-w-0  py-1.5 pr-3 pl-2 placeholder:text-gray-500  sm:text-sm/6 outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 rounded-lg' onChange={(e)=>setGenre(e.target.value)}/>
            </div>
            <div className="flex flex-col w-1/2 gap-1">
              <label htmlFor="status">Статус</label>
              <div className='grid grid-cols-1'>
                <select
                  id="status"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" required onChange={(e)=>setStatus(e.target.value)}
                >
                  {animeStatuses.map((status,index)=>(
                    <option value={status} key={index}>{status}</option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                />
              </div>
            </div>
          </div>
            <div className='flex gap-2'>
              <div className="flex flex-col w-1/2 gap-1">
              <label htmlFor="watched">Просмотрено Серий</label>
              <input required type="number" placeholder='0' id='watched' className='block min-w-0  py-1.5 pr-3 pl-2 placeholder:text-gray-500  sm:text-sm/6 outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 rounded-lg' onChange={(e)=>setWatched(e.target.value)} />
            </div>
            <div className="flex flex-col w-1/2 gap-1">
              <label htmlFor="allSeries">Всего Серий</label>
              <input required type="number" placeholder='0' id='allSeries' className='block min-w-0  py-1.5 pr-3 pl-2 placeholder:text-gray-500  sm:text-sm/6 outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 rounded-lg' onChange={(e)=>setAllSeries(e.target.value)} />
            </div>
          </div>
          <div className="flex gap-2">
            <button type='submit' className='flex-9 btn px-3 py-1.5 rounded-lg'>Добавить в список</button>
            <button type='reset' className='flex-3 duration-300 bg-red-600 hover:opacity-70 active:opacity-50 cursor-pointer px-3 py-1.5 rounded-lg'>Сбросить</button>
          </div>
         </form>
      </div>
    </div>
  )
}
