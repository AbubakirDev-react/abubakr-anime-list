import { KeyRoundIcon, Mail, User } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function LoginPage() {
    const [fullname,setFullname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {signup,err} = useAuth();
    function SubmitHandle(e){
        e.preventDefault();
        signup(fullname,email,password)
    }
  return (
    <div className='w-full max-h-full min-h-10/12 flex flex-col items-center justify-center'>
       <div className="card w-1/4 p-5 rounded-2xl">
        <h1 className='text-xl text-center my-2'>Создать учетный запись</h1>
        <form className='w-full' onSubmit={SubmitHandle}>
            <div className='flex flex-col'>
                <label htmlFor="fullname">Полная имя</label>
                <div className='flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500'>
                    <div className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6"><User/></div>
                    <input onChange={(e)=>setFullname(e.target.value)} type="text" placeholder='Имя Фамилия' id='fullname' className='block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6' required />
                </div>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email">Почта</label>
                <div className='flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500'>
                    <div className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6"><Mail/></div>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='почта@пример.com' id='email' className='block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6' required />
                </div>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="pwd">Пароль</label>
                <div className='flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500'>
                    <div className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6"><KeyRoundIcon/></div>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='********' id='pwd' className='block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6' required />
                </div>
            </div>
            {err&&<p className='err'>{err}</p>}
            <button className='btn px-3 py-1.5 rounded my-2' type='submit' >Создать</button>
        </form>
        <p className='text-center'>Уже есть учетный запись? <Link to='/login' className='text-blue-500 duration-300 hover:underline'>Войти</Link></p>
        </div> 
    </div>
  )
}
