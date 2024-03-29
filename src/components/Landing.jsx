// Descripion of the component:
// This component is used to introduce my self to the user
// It has links to my github and linkedin
// It has a button to hire me with a link to the contact page

import { FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Landing = () => {
   return (
      <>
         <section className='container mx-auto px-3 h-[90vh]'>
            <div className='absolute bottom-20 pr-8'>
               <h1 className='text-6xl text-gray-300'>Hi! I am,</h1>
               <h1 className='text-6xl text-gray-300'>Mohamed-Hammoud Chokor</h1>
               <h2 className='text-3xl mt-3 text-gray-300'>
                  I am a Junior Software Engineer
               </h2>
               <div className='inline-flex gap-12 mt-12 pl-5 '>
                  <Link
                     to='/contact'
                     className='btn btn-primary rounded-btn text-xl -m-4 mr-1'
                  >
                     Hire Me!
                  </Link>
                  <span className='text-3xl -mt-3 -mx-4 pr-2 text-gray-300'>|</span>
                  <a
                     href='https://github.com/mmchokor'
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                     <FaGithub className='fill-current text-neutral-content scale-[250%] hover:brightness-150' />
                  </a>
                  <a
                     href='https://www.linkedin.com/in/mohamedhammoudchokor/'
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                     <FaLinkedin className='fill-current text-neutral-content scale-[250%]  hover:brightness-150' />
                  </a>
               </div>
               <br />
            </div>
         </section>
         <div className='flex flex-row justify-center items-center text-gray-300'>
         <a
            href='#skills'
            className='text-center absolute bottom-7 text-md'
         >
            Skills

         </a>
         <p className='text-center absolute bottom-4 text-md'><FaChevronDown/></p>
         </div>
      </>
   )
}

export default Landing
