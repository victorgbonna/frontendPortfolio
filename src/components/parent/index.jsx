import {useContext} from 'react'
import { ProjectContext } from '../../contexts/projectContext'
import About from '../about'
import Blogs from '../blog'
import Contact from '../contact'

import Nav from '../nav'
import Project from '../project'

export default function Parent(){
    const {showAll}= useContext(ProjectContext)
    if(!showAll) return null
    return (
        <>
        <Nav/>
        <div id="about" className=''>
            <About/>
            {/* <AboutMe/> */}
        </div>
        <div id="projects">
            <Project/>
        </div>
        <div id="blog">
            <Blogs/>
        </div>
        <Contact/>
        </>
    )
}





