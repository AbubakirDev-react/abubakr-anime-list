import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AnimeContext = createContext(null);

export default function AnimeProvider({ children }) {
   const { currentUser } = useAuth();
   const navigate = useNavigate();

   const [animeList, setAnimeList] = useState(() => {
      const saved = JSON.parse(localStorage.getItem('animeList'));
      return saved || [];
   });

   const [listStatus, setListStatus] = useState(() => {
      const saved = localStorage.getItem('listStatus');
      return saved ? JSON.parse(saved) : 'Все';
   });


   useEffect(() => {
      localStorage.setItem('animeList', JSON.stringify(animeList));
   }, [animeList]);

   useEffect(() => {
      localStorage.setItem('listStatus', JSON.stringify(listStatus));
   }, [listStatus]);

 
   function addAnimeToList(name, genre, status, watched, allSeries) {
      const myList = animeList.filter(a => a.email === currentUser?.email);
      const exists = myList.find(anime => anime.name === name);
      
      if (!exists && currentUser) {
         const newAnime = {
            email: currentUser.email,
            name: name,
            genre: genre,
            status: status,
            watched: watched,
            allSeries: allSeries,
            rating: 10
         };
         setAnimeList(prev => [...prev, newAnime]);
         navigate('/');
      }
   }


   const getListByEmail = () => {
      if (!currentUser) return [];
      return animeList.filter(a => a.email === currentUser.email);
   };


   function filterListByStatus(status) {
      const userList = getListByEmail(); 
      if (status === 'Все') {
         return userList;
      }
      return userList.filter(a => a.status === status);
   }

   const myList = filterListByStatus(listStatus);

   const animeStatuses = ['Планирую', 'Смотрю', 'Просмотрено', 'Брошено'];

   return (
      <AnimeContext.Provider value={{
         animeStatuses,
         addAnimeToList,
         animeList,
         getListByEmail,
         myList,        
         listStatus,    
         setListStatus,
         filterListByStatus
      }}>
         {children}
      </AnimeContext.Provider>
   );
}

export function useAnime() {
   const context = useContext(AnimeContext);
   if (!context) {
      throw new Error('useAnime must be used within AnimeProvider');
   }
   return context;
}