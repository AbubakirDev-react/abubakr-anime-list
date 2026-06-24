import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroPage() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <span className='border px-3 py-1.5 rounded-2xl border-purple-800/50 text-purple-800/90'>Твой аниме дневник</span>
        <div className='flex flex-col gap-3'>
            <h1 className='text-5xl flex flex-col'> Следи за любимым аниме <br />в одном месте </h1>
            <h1 className='text-2xl'>Добавляй тайтлы, отмечай прогресс, ставь оценки<div className="br"></div> Никаких потерянных списков — всё под рукой.</h1>
        </div>
        <Link to='/register' className='mt-2 border border-blue-600/50 text-blue-800/80 rounded px-3 py-1.5 duration-300 hover:border-blue-600 hover:text-white'>Начать</Link>
    </div> 
    )
}
