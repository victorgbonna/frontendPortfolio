import React,{createContext, useState} from 'react'
export const GeneralContext = createContext()

export default function GenContextProvider({children}){
    const [user, setUser]= useState({access_token:"",refresh_token:"", role:""})

    return(
        <GeneralContext.Provider value={{user,setUser}}>
            {children}
        </GeneralContext.Provider>
    )
}
