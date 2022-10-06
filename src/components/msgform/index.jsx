
import React from 'react'

export const MsgForm = () => {
    return (
        <form className='space-y-5'>
            <div className='flex tablet:block'>
                <div className='mr-10 mb-3 w-1/3 tablet:w-full tablet:mr-0'>
                    <p>Your Name</p>
                    <input type="text" name='visitorname' className='p-2 rounded-lg bg-transparent border-2 border-green-200 tablet:w-full'/>
                </div>
                <div className='mb-3 w-1/3 tablet:w-full'>
                    <p>Your Email</p>
                    <input type="email" name='visitoremail' className='p-2 rounded-lg bg-transparent border-2 border-green-200 tablet:w-full'/>
                </div>
            </div>
            <div className='mr-5 mb-3 tablet:mr-0'>
                <p>Your Subject</p>
                <input type="text" name='visitorsubject' className='p-2 px-3 rounded-lg bg-transparent border-2 border-green-200 w-9/12 text-md tablet:w-full'/>
            </div>
            <div>
                <p>Your Message</p>
                <textarea name="" id="" cols="30" rows="10" className='text-sm p-2 rounded-lg bg-transparent border-2 border-green-200 w-9/12 text-sm  tablet:w-full'/>
            </div>
            <button className='bg-gray-900 p-5 rounded-lg text-right ml-80 tablet:ml-0 tablet:w-full tablet:text-center'>Send The Message</button>
        </form>
    )
}
