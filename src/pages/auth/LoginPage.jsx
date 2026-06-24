import { KeyRoundIcon, Mail } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
       <div className="card w-1/4 p-5 rounded-2xl">
        <h1 className='text-xl text-center'>Войти</h1>
        <form action="" className='w-full'>
            <div className='flex flex-col'>
                <label htmlFor="email">Почта</label>
                <div className='flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500'>
                    <div className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6"><Mail/></div>
                    <input type="email" placeholder='Ваша почта' id='email' className='block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6' />
                </div>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="pwd">Пароль</label>
                <div className='flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500'>
                    <div className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6"><KeyRoundIcon/></div>
                    <input type="password" placeholder='Ваш пароль' id='pwd' className='block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6' />
                </div>
            </div>
            <button className='btn px-3 py-1.5 rounded my-2' type='submit'>Войти</button>
        </form>
        <p className='text-center'>Нету аккаунта? <Link to='/register' className='text-blue-500 duration-300 hover:underline'>Создать</Link></p>
        </div> 
    </div>
  )
}
