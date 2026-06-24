import { createContext, Children, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext(null);

export default function AuthProvider({children}){
    const [users,setUsers] = useState(()=>{
        const saved = localStorage.getItem('users')
        if(saved){
            return JSON.parse(saved)
        } else {
            return []
        }
    })
    const navigate=useNavigate('');
    const [err,setErr]=useState(null);
    useEffect(()=>{
        const email=JSON.parse(localStorage.getItem('currentEmail'))
        if(!email) return
        const user = users.find(u=>u.email===email)
        localStorage.setItem('users',JSON.stringify(users))
        setCurrentUser(user)
    },[users])
    const [currentUser,setCurrentUser]=useState(()=>{
        const currentEmail=JSON.parse(localStorage.getItem('currentEmail'))
        if(currentEmail){
             const user=users.find(user=>user.email===currentEmail)
            return user
        } else {
            return null
        }
    })
    function signup(fullname,email,password){
        const isExists = users.find(user=>user.email===email)
        if(isExists){
            setErr(`${email} уже есть!`)
        } else{
            const newUser = {
                fname:fullname,
                email,
                pwd: password
            }
            setUsers(prev=>[...prev,newUser])
            setCurrentUser(newUser)
            localStorage.setItem('currentEmail',JSON.stringify(email))
         }
    }
    function login(email,password){
        const foundUser = users.find(u=>u.email===email)
        if(!foundUser){
            setErr('Такая почта не существует!')
        }
        if(foundUser.email===email && foundUser.pwd===password){
            setCurrentUser(foundUser)
            localStorage.setItem('currentEmail',JSON.stringify(email))
            navigate('/profile')
        } else {
            setErr('Почта или Пароль неправильный!')
        }
    }
    function logout(){
        setCurrentUser(null)
        localStorage.removeItem('currentEmail')
    }
    return (
        <AuthContext.Provider value={{ signup,err,currentUser,login,logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}