// import styles from "./About.module.css"
import { useEffect, useState } from "react";

export default function About(){
    const isServer = typeof window === 'undefined'
    const WOW = !isServer ? require('wowjs') : null

    const [additionalText, setAdditionalText]= useState(null)
    useEffect(() => {
        const storageTarget=window.localStorage.getItem('target')         
        if(storageTarget) return setAdditionalText(JSON.parse(storageTarget))
    }, []);
    useEffect(() => {
        new WOW.WOW().init()
      }, []);
    
    return(
        <div className="h-screen py-6 pt-20 bg-gray-200 px-32 tablet:px-4 tablet:pt-10 tablet:h-screen">
            <h3 className="text-4xl text-center mb-20 tablet:text-2xl tablet:mb-10">ABOUT ME</h3>
            <div className="wow fadeInUp text-gray-700 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-3 tablet:grid-cols-2 leading-10 justify-center 
            tablet:text-sm tablet:gap-y-2 tablet:leading-4 tablet:tracking:wider
            ">
                <div className='w-full mb-2 tablet:w-full'>
            
                    <p>Ever seen someone who finds a way to contribute to the advancement of the technology space and is eager, willing and passionate to learn more? That person is me.</p>
                </div>
                <div className='w-full mb-2 tablet:w-full'>
                    <p>With over six years of learning and contributing in workplaces, I have gathered knowledge in numerous languages and frameworks such as - ReactJs, NextJs, Javascript, HTML, CSS, TailwindCss, NodeJs, MongoDB, Python and some  Machine Learning Libraries.</p>
                </div>
                
                {additionalText &&
                    <div data-wow-delay=".9s" className='wow fadeIn w-full mb-2 tablet:w-full'>
                        <p>
                            I hope to be given the opportunity to work, contribute and learn at <span className="text-purple-500 font-bold">{additionalText.slice(1, additionalText.length)}</span> 
                        </p>               
                    </div>
                }
            </div>
            
        </div>
    )
}
