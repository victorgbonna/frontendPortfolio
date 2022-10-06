import React,{createContext, useState,useEffect} from 'react'
export const AuthContext = createContext()

export default function AuthContextProvider({children}){
    const [user, setUser]= useState({access_token:"",refresh_token:"", role:""})
    useEffect(()=>{
        const getUser=window.localStorage.getItem('user')
        console.log(getUser)
        if (getUser!==null) setUser(JSON.parse(getUser))
    },[])   
    useEffect(()=>{ 
        window.localStorage.setItem('user',JSON.stringify(user))
    },[user])
        
 
    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
