import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Landing = () => {
   return (
      <>
         <div className='container mx-auto px-3 h-[90vh]'>
            <div className='absolute bottom-20'>
               <h1 className='text-6xl'>Hi! I am,</h1>
               <h1 className='text-6xl'>Mohamed-Hammoud Chokor</h1>
               <h2 className='text-3xl mt-3'>
                  I am a Junior Software/Web Developer
               </h2>
               <div className='inline-flex gap-12 mt-12 pl-5'>
               <Link to='/contact' className='btn btn-primary rounded-btn text-xl -m-4 mr-1'>
                  Hire Me!
               </Link><span className='text-3xl -mt-3'>|</span>
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
            </div>
         </div>
      </>
   )
}

export default Landing
