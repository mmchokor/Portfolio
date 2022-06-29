import React from 'react'

function About() {
   return (
    // center the div belwon

      <div className='max-w-2xl py-4 px-8 bg-neutral shadow-lg rounded-lg my-20 mx-auto'>
         <div className='flex justify-center md:justify-end -mt-16'>
            <img
               className='w-20 h-20 object-cover rounded-full border-2 border-indigo-500 lg:scale-150 md:scale-125 lg:mr-10 md:mr-7'
               src='https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
            />
         </div>
         <div className='pt-4'>
            <h2 className='text-white-800 text-3xl font-semibold'>
               Software Developer
            </h2>
            <p className='mt-2 text-white-600'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
               dolores deserunt ea doloremque natus error, rerum quas odio
               quaerat nam ex commodi hic, suscipit in a veritatis pariatur
               minus consequuntur!
            </p>
         </div>
         <div className='flex justify-end mt-4'>
            <a href='#' className='text-xl font-medium text-indigo-500'>
               Mohamed-Hammoud Ahmed Chokor
            </a>
         </div>
      </div>
   )
}

export default About
