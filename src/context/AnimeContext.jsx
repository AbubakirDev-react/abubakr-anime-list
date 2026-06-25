import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

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
   useEffect(()=>{
      localStorage.setItem('animeList',JSON.stringify(animeList))
   },[animeList])
   function addAnimeToList(name,genre,status,watched,allSeries){
      const exists = animeList.find(anime=>anime.name===name)
      if(!exists){
         const newAnime = {
            user:currentUser,
            name:name,
            genre:genre,
            status:status,
            watched:watched,
            allSeries:allSeries,
            rating:10
         }
         setAnimeList(prev=>[...prev,newAnime])
      }
   }
   const animeStatuses = ['Планирую','Смотрю','Просмотрено','Брошено']
   return <AnimeContext.Provider value={{animeStatuses,addAnimeToList}}>{children}</AnimeContext.Provider>
}

export function useAnime(){
   return useContext(AnimeContext)
}