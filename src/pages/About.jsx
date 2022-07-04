import { Link } from 'react-router-dom'

function About() {
   return (
      // center the div belwon
      <section>
         <div className='max-w-3xl py-4 px-8 bg-slate-900 shadow-lg rounded-lg my-20 mx-auto'>
            <div className='flex justify-center md:justify-end -mt-16'>
               <img
                  className='w-20 h-20 object-cover rounded-full border-2 border-indigo-500 lg:scale-150 md:scale-125 lg:mr-10 md:mr-7'
                  src='../src/assets/images/about-image.jpg'
               />
            </div>
            <div className='pt-4 text-gray-400'>
               <h2 className='text-white-800 text-3xl font-semibold'>
                  Software Developer
               </h2>
               <p className='mt-3 text-white-600'>
                  I am a software developer located in Lebanon. I have a passion
                  for for Web Development, solving challenging tasks, and
                  anything programming related.
               </p>
               <p className='mt-2 text-white-600'>
                  Well organized person, problem solver, independent person with
                  high attention to detail. Big fan of Formula 1, and anything
                  Car related, also have a big passion for tech.
               </p>
               <p className='my-2 text-white-600'>
                  Interested in the entire software development life cycle, from
                  requirements gathering to development to deployment and
                  maintenance, and all of that working with positive people.
               </p>
               <Link
                  to='/contact'
                  className='text-white-600 text-indigo-500 text-lg'
               >
                  Let's work on a new project!
               </Link>
            </div>
            <div className='flex justify-end mt-4'>
               <a href='#' className='text-xl font-medium text-indigo-500'>
                  Mohamed-Hammoud Ahmed Chokor
               </a>
            </div>
         </div>
      </section>
   )
}

export default About
