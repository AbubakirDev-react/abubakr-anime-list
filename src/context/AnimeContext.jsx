import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AnimeContext=createContext(null);

export default function AnimeProvider({children}){
   const {currentUser} = useAuth()
   const [animeList,setAnimeList]=useState(()=>{
      const saved = JSON.parse(localStorage.getItem('animeList'))
      if(saved){
         return saved
      } else {
         return []
      }
   })
   const navigate = useNavigate('');
   useEffect(()=>{
      localStorage.setItem('animeList',JSON.stringify(animeList))
   },[animeList])
   function addAnimeToList(name,genre,status,watched,allSeries){
      const myList=animeList.filter(a=>a.email===currentUser.email)
      const exists = myList.find(anime=>anime.name===name)
      if(!exists){
         const newAnime = {
            email:currentUser.email,
            name:name,
            genre:genre,
            status:status,
            watched:watched,
            allSeries:allSeries,
            rating:10
      }
         setAnimeList(prev=>[...prev,newAnime])
         navigate('/')
      } else {
         return
      }
   }
   
   
   const getListByEmail = ()=>{
      if(currentUser){
         console.log(animeList.filter(a=>a.email===currentUser.email))
         return animeList.filter(a=>a.email===currentUser.email)
      } else{
         return []
      }
   }

   
   
   
   const animeStatuses = ['Планирую','Смотрю','Просмотрено','Брошено']
   return <AnimeContext.Provider value={{animeStatuses,addAnimeToList,animeList,getListByEmail}}>{children}</AnimeContext.Provider>
}

export function useAnime(){
   return useContext(AnimeContext)
}