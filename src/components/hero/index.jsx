import {FaFacebook, FaGithub, FaKaggle, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { ProjectContext } from '../../contexts/projectContext';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
// import WOW from 'wowjs';

export default function Hero(){
    const isServer = typeof window === 'undefined'
    const WOW = !isServer ? require('wowjs') : null
        
    const {showAll, setShowAll}= useContext(ProjectContext)
    const showEverything=()=>{
        // window.scrollBy(0, window.innerHeight);
        document.querySelector('#about').scrollIntoView({behavior: "smooth"})
    }
    useEffect(() => {
        new WOW.WOW().init()
      }, []);
    return (
        <div className='tablet:grid-cols-1 tablet:pt-10 
        bg-gray-700 h-screen overflow-hidden relative
        text-gray-200 p-10 pt-20 grid grid-cols-2 place-items-center
        
        '>
            {/* <div className='grid grid-cols-2 place-items-center'> */}
                <div className='p-3 justify-self-center bg-gray-600 '>
                    <img src="/images/mypic.jpg" alt="GreyHaired" className=" rounded-l-lg w-96 tablet:w-60 wow fadeIn" loading='lazy'
                     data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s"/>
                </div>
                <div className='space-y-5 tablet:space-y-3 
                justify-self-start tablet:justify-self-center'>
                    <div>
                        <h3 data-wow-iteration="1" data-wow-delay=".3s" className='wow bounce font-body text-5xl tablet:mt-5 tablet:text-2xl text-center tablet:text-2xl'>Hello, I am <span className='underAnim'>Ogbonna Victor</span></h3>
                    </div>
                    <div className=' text-2xl space-y-4 tablet:text-lg tablet:space-y-1'>
                        <div data-wow-iteration="1" data-wow-delay=".6s"  className='wow zoomIn  flex row-gap-2 '>
                            <h5 className='text-center tablet:hidden'>A Fullstack Web Developer at work<span className='ethu'>; A Tech Enthusiast at heart</span></h5>
                            <h5 className='hidden tablet:text-left tablet:block'>A Fullstack Web Developer and more<span className='ethu'>; A Tech Enthusiast at heart</span></h5>
                        </div>
                        
                        <span className='flex space-x-4 justify-center wow zoomIn' data-wow-iteration="1" data-wow-delay=".8s">
                            <Link  href="https://github.com/victorgbonna">
                            <a className='cursor-pointer'><FaGithub size={30}/></a>
                            </Link>
                            <Link href='https://www.linkedin.com/in/victor-ogbonna-5a3113230'>
                            <a className='cursor-pointer' > <FaLinkedin size={30}/></a>
                            </Link>
                            <Link href='https://hashnode.com/@greyhaired'>
                                <a className='cursor-pointer'>
                                    <img src="/svg/hashnode2.svg" alt="hashnode icon"/>
                                </a>
                            </Link>
                            <Link href='https://www.kaggle.com/ogbonnachiedo'>
                                <a className='cursor-pointer'><FaKaggle size={30}/></a>
                            </Link>
                        </span>
                    </div>
                    {/* {showAll && } */}
                    {!showAll && <div  data-wow-delay=".9s" className='wow fadeIn' style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:50}}>
                    <button  className=' flex gap-x-3 outline outline-offset-2 outline-1 
                    rounded-sm p-4 border-slate-200 cursor-pointer hoverButton
                    tablet:p-2
                    ' style={{zIndex:99}} onClick={
                        ()=>{
                            setShowAll(true);
                            setTimeout(() => {
                                showEverything()                                
                            }, 100);

                        } 
                    }>
                        <p className='text-lg tablet:text-md'>Check me out</p>
                        <FaArrowRight size={30}/>
                    </button>
                    </div>}

                </div>
            {/* </div> */}
            {[...Array(6).keys()].map((index)=>
                <div key={index} className="cube">
                    
                    {/* {'victor'[Math.floor(Math.random() * 10)]} */}
                </div>
            )}

        </div>
    )
}