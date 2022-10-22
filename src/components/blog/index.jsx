import React, {useState} from 'react'
import Link from 'next/link'

export default function Blogs(){
const blogs=[
        {
            "title":'Handling pagination with UseReducer',
            "coverPhoto":"/images/pagination.png",
            "description":"As I worked on a website project's pagination area, I discovered that I had multiple states and user-defined functions. I decided to look for an alternative because it appeared unkempt and disorganized.",
            "date":"Oct 22nd 2022",
            "codeLink":"https://greyhaired.hashnode.dev/handling-pagination-with-usereducer",
        },
        {
            "title":'EPL 2020/2021 Statistics',
            "coverPhoto":"/images/epl.jpg",
            "description":"The analysis to be done on the notebook would be of 3 sections- League Analysis, Club Analysis and Individual Analysis. Be sure to hit the upvote button or drop your opinions in the comment section below. Please if you found this interesting, drop your reviews and click the upvotes as i would highly appreciate.",
            "date":"Oct 23rd 2021",
            "codeLink":"https://www.kaggle.com/ogbonnachiedo/epl-2020-21-stats-2/notebook",
        },{
            "title":'Random Forest Titanic Prediction',
            "coverPhoto":"/images/titanic.jpg",
            "date":"Oct 18th 2021",
            "description":"There was no graphical representational analysis done on this notebook, nevertheless, I used my wholesome skills in pandas to pinpoint and document the necessary analysis alongside detailed comments. I would appreciate feedbacks, comments and if you find the work worthful, please upvote, I would deeply appreciate.",
            "codeLink":"https://www.kaggle.com/ogbonnachiedo/randomforest-titanic-prediction-gh1",
        }
    ] 
    return (
        <div className="h-screen py-6 pt-20 bg-gray-200 px-32 tablet:px-4 tablet:pt-10 tablet:h-fit">
            <h3 className="text-4xl text-center mb-10 tablet:text-2xl tablet:mb-10">BLOGS AND NOTES</h3>
            <div className='flex tablet:flex-col tablet:place-items-center gap-1 gap-x-6 tablet:gap-y-6 tablet:justify-center'>

                {blogs.map((blog,index)=>
                <Link href={blog.codeLink} key={index}>
                    <a target='blank' className={`
                    wow ${((index+1) % 3)==0?' fadeInRight':((index+1) % 3)==1?' fadeInLeft':' zoomIn'} 
                    w-80 card2`}>
                        <img src={blog.coverPhoto}  alt="not show" 
                        className='front tablet:static h-60 w-full
                         cursor-pointer'/>
                        <div className=' 
                        py-6 space-y-3 p-2'>
                            <h4 className='text-gray-800 text-lg'>{blog.title}</h4>
                            <p className='text-gray-700 text-sm'>{blog.date}</p>
                            <p className='text-gray-600 text-left text-md'>{blog.description && blog.description.slice(0,150)+'...'}</p>
                        </div>
                    </a>
                </Link>
                )}

            </div>

        </div>
    )
}
