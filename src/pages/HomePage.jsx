import React, { useState } from 'react';
import { useAnime } from '../context/AnimeContext';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { getListByEmail, animeStatuses, setListStatus, myList } = useAnime();
  const [activeStatus, setActiveStatus] = useState('Все');

  const userList = getListByEmail();
  
  if (userList.length === 0) {
    return (
      <div className='w-full h-full flex flex-col gap-2 items-center justify-center min-h-screen'>
        <h1 className='text-center text-2xl'>Список пустая</h1>
        <Link to='/add-anime' className='btn rounded px-3 py-1.5'>Добавить</Link>
      </div>
    );
  }

  const total = userList.length;
  const watching = userList.filter(a => a.status === 'Смотрю').length;
  const watched = userList.filter(a => a.status === 'Просмотрено').length;

  const handleStatusChange = (status) => {
    setListStatus(status);
    setActiveStatus(status);
  };

  return (
    <div className='w-full min-h-screen flex flex-col gap-2 pb-10'>
     
      <div className="grid gap-2 grid-cols-3 p-3">
        <div className="card rounded-xl p-3 flex flex-col gap-1.5 items-center justify-center">
          <h3 className='text-xl'>{total}</h3>
          <p className='text-sm'>Всего</p>
        </div>
        <div className="card rounded-xl p-3 flex flex-col gap-1.5 items-center justify-center">
          <h3 className='text-xl'>{watching}</h3>
          <p className='text-sm'>Смотрю</p>
        </div>
        <div className="card rounded-xl p-3 flex flex-col gap-1.5 items-center justify-center">
          <h3 className='text-xl'>{watched}</h3>
          <p className='text-sm'>Просмотрено</p>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-2 p-3'>
        <div className='w-full flex items-center justify-between'>
          <h3 className='text-xl font-semibold'>Мой Список</h3>
          <Link to='/add-anime' className='btn rounded px-3 py-1.5'>Добавить</Link>
        </div>
        
        <div className='flex items-center justify-start gap-2 flex-wrap'>
          <button 
            className={`btn px-3 py-1.5 rounded transition-all ${
              activeStatus === 'Все' ? 'border-2 border-indigo-500 text-indigo-500' : ''
            }`}
            onClick={() => handleStatusChange('Все')}
          >
            Все
          </button>
          {animeStatuses.map((s) => (
            <button 
              key={s}
              className={`btn px-3 py-1.5 rounded transition-all ${
                activeStatus === s ? 'border-2 border-indigo-500 text-indigo-500' : ''
              }`}
              onClick={() => handleStatusChange(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {myList.length === 0 ? (
        <div className='text-center text-white/50 py-10'>
          <p>Нет аниме с таким статусом</p>
        </div>
      ) : (
        myList.map((anime) => {
          
          const progress = anime.allSeries > 0 
            ? (anime.watched / anime.allSeries * 100) 
            : 0;

          return (
            <div 
              key={`${anime.email}-${anime.name}`}  
              className="card rounded-lg p-3 m-3 flex flex-col md:flex-row items-center justify-evenly gap-4"
            >
              <div className='flex flex-col gap-1 text-center md:text-left'>
                <h3 className='text-xl font-semibold'>{anime.name}</h3>
                <p className='text-sm text-white/70'>{anime.genre}</p>
              </div>
              
              {/* Progress Bar */}
              <div className='w-full px-5 flex items-center justify-center gap-2'>
                <div className='w-full h-2 bg-white/20 rounded-full overflow-hidden'>
                  <div 
                    className='bg-indigo-500 h-full transition-all duration-300 rounded-full' 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className='text-white/80 text-sm whitespace-nowrap'>
                  {anime.watched}/{anime.allSeries}
                </span>
              </div>
              
              {/* Status Badge */}
              <div className='px-3 py-1 border border-indigo-500 text-indigo-500 rounded-full text-sm'>
                {anime.status}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}