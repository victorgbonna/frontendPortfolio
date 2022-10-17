import React, {useState} from 'react'
import Link from 'next/link'
import { FaLanguage } from 'react-icons/fa'

export default function Project(){
const projects=[
        {
            "title":'MyMently Platform (client project)',
            "stack":["Frontend"],
            "coverPhoto":"./images/mymently.png",
            "skillsets":["HTML", "CSS","JavaScript", "NextJs"],
            "description":"Mently (beta phase) provides a way to connect and meet one-on-one with mentors from trusted organizations. I was the frontend lead for this project and I contributed much to the client-side development of this web application.",
            "codeLink":"https://github.com/victorgbonna/mently-client",
            "siteLink":"Mently"
        },
        {
            "title":'Nfticket (client project)',
            "stack":["Frontend"],
            "coverPhoto":"./images/nfticket.png",
            "skillsets":["HTML", "CSS","JavaScript", "NextJs", "Web 3"],
            "description":"NFticket (beta phase) is a web 3 product, designed to enable users purchase tickets and create events in the blockchain. I supervised this and made corrections when needed, but I was not the major frontend contributor.",
            "extra":"While working at Next Gen Labs, We built a web 3 platform called nfticket. ",
            "codeLink":"https://github.com/noblejos/Nfticket",
            "siteLink":"Nftiket"
        },
        {
            "title":'Ecommerce Web Application',
            "stack":["Frontend", "API/Backend"],
            "coverPhoto":"./images/mystore.png",
            "skillsets":["HTML", "CSS","TailwindCss", "JavaScript", "Express","NodeJs", "MongoDb"],
            "description":"This is an E-commerce app where only the admin user can post products while a customer orders. I enabled a payment authentication with the paystack api.",
            "codeLink":"https://github.com/victorgbonna/myStore",
            "siteLink":"Mystore"
        },
        {
            "title":'My Portfolio',
            "stack":["Frontend"],
            "coverPhoto":"./images/portfolio.png",
            "skillsets":["HTML", "CSS","JavaScript", "NextJs", "TailwindCss"],
            "description":"After receiving no call back when submitting my portfolio to numerous jobs, I decided to modify it. I did some research: watching videos and reading articles, to come up with this site.",
            "codeLink":"https://github.com/victorgbonna/mently-client",
            "siteLink":"Portfolio"
        }
    ] 


    const [activeProj, setActiveProj]= useState(null)
    return (
        <div className="py-6 pt-20 bg-gray-200 px-32 tablet:px-4 tablet:pt-10 tablet:h-fit">
            <h3 className="text-4xl text-center mb-10 tablet:text-2xl tablet:mb-10">PROJECTS</h3>
            <div className='text-gray-700 grid grid-cols-3 gap-2 tablet:grid-cols-1 tablet:gap-y-10'>

                {projects.map((project,index)=>
                // <>
                    <div key={index} style={{borderRadius:8}}  className={`
                    wow
                    ${((index+1) % 3)==0?' fadeInRight':((index+1) % 3)==1?' fadeInLeft':' zoomIn'}
                    panels w-full h-80 tablet:h-64 
                     shadow-lg 
                    relative overflow-hidden tablet:mb-10`}>
                        <img src={project.coverPhoto}  alt="not show" 
                        className='front tablet:hidden 
                         cursor-pointer' loading='lazy'/>
                        <img src={project.coverPhoto}  alt="not show" 
                        className={`front hidden tablet:block tablet:h-full
                         cursor-pointer ${activeProj==project.title?'f':''}`} onClick={activeProj==project.title?null:()=>setActiveProj(project.title)} 
                         loading='lazy'/>
                        <div className={`back bg-gray-600 
                        p-2 text-center py-6 space-y-3                          
                        ${activeProj==project.title?'b':''}`}>
                            <h4 className='text-gray-300 text-xl tablet:text-lg'>{project.title}</h4>
                            <p className='mb-2 text-gray-200 p-3 text-left text-md tablet:text-sm'>{project.description}</p>
                            <Link href={'/project/'+project.siteLink}>
                                <a className='text-white bg-transparent border-2 border-gray-200 rounded-md p-3 px-5 hover:border-green-200 hover:bg-green-600 hover:text-white'>See More</a>
                            </Link>
                        </div>
                    </div>
                // </>
                )}

            </div>

        </div>
    )
}
