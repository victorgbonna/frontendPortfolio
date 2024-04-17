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
        <div className="py-6 pt-20 bg-gray-200 px-[300px] tablet:px-5 tablet:pt-10 tablet:h-fit">
            <h3 className="text-4xl text-center mb-20 tablet:text-2xl tablet:mb-10">ABOUT ME</h3>
            <div className="fadeInUp text-gray-700 gap-y-4 gap-x-6 text-md tablet:space-y-[40px] tracking-widest grid grid-cols-1 tablet:grid-cols-1 tablet:flex tablet:flex-col tablet:justify-between leading-10 justify-center 
            tablet:text-base tablet:gap-y-2 tablet:leading-4 tablet:tracking:wider
            ">
                <div className='w-full mb-2 tablet:w-full'>
                    <p style={{lineHeight:"34px", textAlign:"justify"}}>Have you met someone truly devoted to improving the world of technology, driven by a genuine willingness to learn? <br/><b> That someone is none other than me.</b></p>
                </div>
                
                <div className='w-full mb-2 tablet:w-full'>
                    <p style={{lineHeight:"34px", textAlign:"justify"}}>Through nine years of learning and contributing in work settings, I've gained knowledge in various languages and frameworks like  - <span className="text-purple-600"> ReactJs</span>, <span className="text-purple-600">NextJs</span>, 
                    <span className="text-purple-600">Javascript</span>
                    , <Span title="HTML"/>, <Span title="CSS"/>, <Span title="TailwindCss"/>, <Span title="NodeJs"/>, <Span title="MongoDB"/>, <Span title="Python"/> and some  Machine Learning Libraries.</p>
                </div>
                
                <div className='w-full mb-2 tablet:w-full'>
                    <p style={{lineHeight:"34px", textAlign:"justify"}}>
                    These skills come in handy for projects across E-commerce, Edu-tech, Marketing, and the innovative world of Web3. 
                    I can use this skillsets to make your projects shine even brighter, delivering results that not only meet but surpass your expectations.
                    </p>
                </div>
                
                <div data-wow-delay=".9s" className='wow fadeIn w-full mb-2 tablet:w-full'>
                    <p style={{lineHeight:"34px", textAlign:"justify"}}>
                        I have experiences in creating realtime chat applications using <span className="text-purple-600">SocketIo</span>, storing data in a primary memory and cache with  <span className="text-purple-600">Redis</span>, enabling payment integrations with <Span title="Paystack"/>, <Span title="Flutterwave"/> and <Span title="Paypal"/>. 
                        <br/>
                        I also do prefer <span className="text-purple-600">React UseQuery</span> than <span className="text-purple-600">UseEffect</span> when interacting with APIs.
                        <br/>
                        I have interacted with third party API services such as the <Span title="Google Maps"/> and <Span title="Youtube Data"/>.
                        <br/>
                        I also can enable OAuth Authentications using <Span title="Google"/>, <Span title="Facebook"/> and <Span title="Github"/>.
                    </p>               
                </div>
                
            </div>
            
        </div>
    )
}
function Span({title}){
    return(
        <span className="text-purple-600">{title}</span>
    )
}