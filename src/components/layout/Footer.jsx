import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
   return (
      <footer className='items-center p-4 bg-gray-900 text-neutral-content'>
         <div className='footer container mx-auto'>
            <div className='items-center grid-flow-col'>
               <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
            <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
                  <a
                     href='https://github.com/mmchokor'
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                     <FaGithub className='fill-current text-neutral-content scale-150 hover:brightness-150' />
                  </a>
                  <a
                     href='https://www.linkedin.com/in/mohamedhammoudchokor/'
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                     <FaLinkedin className='fill-current text-neutral-content scale-150  hover:brightness-150' />
                  </a>
            </div>
         </div>
      </footer>
   )
}

export default Footer
