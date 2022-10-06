import React,{createContext, useState} from 'react'
export const ProjectContext = createContext()

export default function ProjectContextProvider({children}){
    const [showProject, setShowProject]= useState(null)
    const [showChat, setShowChat]= useState(false)
    const [showAll, setShowAll]= useState(false)
    return(
        <ProjectContext.Provider value={{showProject, setShowProject, 
        setShowChat, showChat, showAll, setShowAll}}>
            {children}
        </ProjectContext.Provider>
    )
}
