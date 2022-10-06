import React from 'react'
import {FaFacebook, FaLinkedin} from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
    const [email, setEmail]= useState('')
    const [subject, setSubject]= useState('')
    const [msg, setMsg]= useState('')

    const submitForm=(e)=>{
        console.log({email, subject, msg})
        // e.preventDefault()
    }
    return (
        <footer id='contact' className='bg-gray-800 text-white'>
            <div className='grid grid-cols-1 px-6 py-3 pt-9 tablet:grid-cols-1 place-items-center'>
                <h3 className="text-3xl text-center mb-4 tablet:text-3xl tablet:mb-3">CONTACT ME</h3>
                <div className='flex gap-x-3 mb-5'>
                    <Link href='https://web.facebook.com/victor.ogbonna.3597/'>
                        <a className='cursor-pointer' > <FaFacebook size={25}/></a>
                    </Link>
                    <Link href='https://www.linkedin.com/in/victor-ogbonna-5a3113230'>
                        <a className='cursor-pointer' > <FaLinkedin size={25}/></a>
                    </Link>
                </div>
                <p className="text-sm text-center mb-3 tablet:mb-3  text-green-300">Have a question for me or you want us to work together?</p>

                <form action="https://formsubmit.co/victorgbonna@gmail.com" method="POST" 
                target="_blank" 
                className='w-full flex flex-col items-center px-20 tablet:px-8'>
            
                    <div 
                    className='text-md mb-3 tablet:mr-0 w-4/12 tablet:w-full'>
                        <p>Your Email</p>
                        <input type="text" name='email' 
                        onChange={(e)=> setEmail(e.target.value)}
                        className='p-2 px-3 rounded-lg w-full bg-transparent border-2 border-green-200 text-sm tablet:w-full'/>
                    </div>
                    <div className='text-md mb-3 tablet:mr-0 w-4/12 tablet:w-full'>
                        <p>Your Name</p>
                        <input type="text" name='name'
                        value={subject} onChange={(e)=>setSubject(e.target.value)} 
                        className='p-2 px-3 rounded-lg w-full bg-transparent border-2 border-green-200 text-sm tablet:w-full'/>
                    </div>
                    <div className='text-md tablet:mr-0 w-4/12 tablet:w-full'>
                        <p>Your Message</p>
                        <textarea name="message"
                        value={msg} onChange={(e)=>setMsg(e.target.value)} 
                        cols="30" rows="10" className='text-sm p-2 rounded-lg bg-transparent w-full border-2 border-green-200 text-sm  tablet:w-full'/>
                    </div>
                    <button onClick={submitForm} disabled={!email || !subject || !msg} className='cursor-pointer bg-gray-900 p-3 text-sm mt-6 hover:bg-green-600 rounded-lg tablet:ml-0 tablet:w-full tablet:text-center'>Send The Message</button>
                </form>
            </div>
        
            <div className='text-center text-sm mt-10 bg-gray-900 p-10'>
                <h5>&copy; Copyright {new Date().getFullYear()}. Made by Ogbonna Victor</h5>
                

            </div>
        </footer>
    )
}
{/* <div className='justify-self-start'>
    <h4 className='text-xl flex mt-20 mb-8 tablet:mt-10'>Reach out through</h4>
    <div className='space-y-4'>
        <div className=''>
            <FaMapMarker/>
            <span>Portharcourt, Rivers, Nigeria</span> 
        </div>
        <div className=''>
            <FaPhone/>
            <span>victorgbonna@gmail.com</span>
        </div>
        <div className=''>
            <FaEnvelope/>
            <span>+234 8102603301</span> 
        </div>
    </div>
</div>
<div className='col-span-2 justify-self-end mt-20 tablet:mt-10 w-5/6 tablet:justify-self-start tablet:w-full'>
    <h5 className='mb-10 text-xl tablet:hidden'>Better still, directly send a message</h5>
    <h5 className='mb-10 text-xl hidden tablet:block'>Or send a message</h5>
    <MsgForm/>
</div> */}