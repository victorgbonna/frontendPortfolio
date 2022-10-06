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
        <div className="h-screenplus py-6 pt-20 bg-gray-700 px-32 tablet:px-4 tablet:pt-10 tablet:h-screen">
            <h3 className="text-4xl text-center mb-20 tablet:text-2xl tablet:mb-10 text-gray-900">ABOUT ME</h3>
            <div className="wow fadeInUp text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-3 tablet:grid-cols-2 leading-10 justify-center 
            tablet:text-sm tablet:gap-y-2 tablet:leading-4 tablet:tracking:wider
            ">
                <div className='w-full mb-2 tablet:w-full'>
            
                    <p>I did "write" programs during my secondary&#40;high&#41; school days, where It was part of those questions set in our written exams. That became my favourite topic in Computer Science alongside Number base and Logic gate; due to the logic in them.</p>
                </div>
                <div className='w-full mb-2 tablet:w-full'>
                    <p>My first official "typing" of codes was in 2018. Then I learnt HTML, CSS, bootstrap and basic Javascript with some online resources.</p>
                </div>
                <div className='w-full mb-2 tablet:w-full'>
                    <p>Mid-2019 was my trainee program. I learnt Python, Tkinter and Some Machine learning libraries. I used what I learnt to develop a desktop ball game app, EPL 2019/2020 season analysis and my version of the famous Titanic dataset prediction.</p>
                </div>
                <div className='w-full mb-2 tablet:w-full'>
                    <p>
                        Lockdown was a period I learnt so much. My dedication and consistency to learning were top-notch. I dived into Flask, NodeJs and ReactJs and other frameworks/libraries in Web development, which I practised over time. 
                    </p>
                </div>
                <div className=' w-full mb-2 tablet:w-full'>
                    <p>
                        So far, I have developed a personal e-commerce project and worked on two client projects. I have even improved on those that I needed to, especially in CSS and JavaScript.
                    </p>               
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
