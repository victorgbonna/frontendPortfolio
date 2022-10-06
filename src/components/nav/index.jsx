import {useState, useEffect, useContext} from 'react'
import { ProjectContext } from '../../contexts/projectContext';
// import { ProjectContext } from '../contexts/projectContext';

export default function Nav({loggedUser= false}){
    const [toggle, setToggle]= useState(false)
    const {setShowProject, setShowChat} = useContext(ProjectContext);
    
    let navLinks=[
        'Home', 'About', "Projects", "Contact"
    ]
    if(loggedUser){
        navLinks= [...navLinks, 'Add Section']
    }
    return (
    <div className='justify-end h-screen-15 bg-gray-600 py-2 pr-20 tablet:pr-6 items-center 
    grid grid-cols-1 sticky top-0 tablet:pr-0 z-50'> 
        <div className='hidden tablet:justify-self-end tablet:block cursor-pointer tablet:pr-4'> 
            <svg  onClick={()=>{
                setToggle(!toggle); 
                setShowChat(false); setShowProject(false);
            }
        } className="w-10 h-10 text-gray-100 hover:text-gray-300" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
        <div 
        
        className='
         flex justify-end  relative w-full tablet:bg-gray-600
         tablet:justify-start
        '>
        <ul
         className={`${toggle?'toggle':'toggle toggleNone'} onshow tablet:pl-4 tablet:pb-3 tablet:px-2
          tablet:w-full
         flex gap-x-12 tablet:flex-col tablet:space-y-3`}>
            {navLinks.map((links, ind)=>
                <li className='text-gray-100 hover:text-gray-300
                cursor-pointer text-lg text-semimd w-fit mt-1'
                onClick={
                    ()=>{
                        document.querySelector('#'+links.toLowerCase()).scrollIntoView({behavior: "smooth"})
                    } 
                } 
                key={ind}>{links=="About"?"About Me": links}</li>
            )}
        </ul>
        </div>


    </div>
    )
}

const Navd = () => {
   
    return (
        <div 
        className={`animate-${hasScrollPass?'drop':'none'} text-white flex flex-wrap border-b-2 border-dotted pt-4 w-full bg-gray-800 z-50 sticky top-0 relative`}>
            <div className="p-6 flex-1 justify-center mx-24 tablet:mx-0 tablet:p-4">
                <h3 className='text-3xl ml-4 tablet:text-2xl'>My Portfolio</h3>
            </div>

            <div className="hidden tablet:block relative cursor-pointer" id="burger"> 
                <svg  onClick={()=>setToggle(!toggle)} className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <div className={`flex text-md font-body tablet:pb-4 tablet:border-gray-900 tablet:border-t-2 tablet:items-end tablet:pr-4 tablet:flex-col tablet:basis-full tablet:space-y-6 tablet:text-sm tablet:w-full tablet:${!toggle && screenSize?'hidden':'flex'} tablet:w-full w-5/12 justify-around pt-4 mx-20 tablet:mx-0 tablet:animate-appear`} id="menu">

                <button onClick={()=>setScrollvar('home')}>Home</button>
                <button  onClick={()=>setScrollvar('about')}>About Me</button>    

                <button  onClick={()=>setScrollvar('project')}>Projects</button>

                <button  onClick={()=>setScrollvar('contact')}>Contact</button>

            </div>
        </div>
    )
}



