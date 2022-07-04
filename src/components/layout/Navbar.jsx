import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaFilePdf } from 'react-icons/fa'
import useScrollPosition from '../../hooks/useScrollPosition'

function Navbar({ title }) {
   // constants of classes
   const standardNav = 'navbar mb-12 z-50'
   const standardButton = 'btn btn-ghost btn-sm rounded-btn text-gray-300'

   // States
   const [isNavOpen, setIsNavOpen] = useState(false)
   const [navbarBg, setNavbarBg] = useState()

   // Hooks
   const location = useLocation()
   const scrollPosition = useScrollPosition()

   // a function to ckeck for which route we are on to customize the styling
   // of certain elemeents in the navbar
   const pathMatchRoute = (route) => {
      if (route === location.pathname) {
         return true
      }
   }

   // a useEffect to check if the user is scrolling down or up to change the
   // navbar background using the scroll position hook
   useEffect(() => {
      if (scrollPosition > 40) {
         setNavbarBg(
            standardNav + ' sticky top-0 shadow-lg bg-gray-900 navbar-toggler'
         )
      } else {
         setNavbarBg(standardNav + ' bg-transparent navbar-toggler')
      }
   }, [scrollPosition])

   return (
      <>
         <nav className={navbarBg}>
            <div className='container mx-auto'>
               <div className='flex-none px-2 mx-2'>
                  <Link
                     to='/'
                     className='text-2xl font-bold align-middle text-white brightness-125'
                  >
                     {title}
                  </Link>
               </div>

               {/* mobile hamburger */}
               <section className='MOBILE-MENU flex lg:hidden'>
                  <div
                     className={
                        isNavOpen ? 'showMenuNav bg-gray-800' : 'hideMenuNav'
                     }
                  >
                     {/* Cross Icon */}
                     <div
                        className='CROSS-ICON absolute top-0 right-0 px-8 py-8 text-white'
                        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                     >
                        <svg
                           className='h-8 w-8 text-white'
                           viewBox='0 0 24 24'
                           fill='none'
                           stroke='currentColor'
                           strokeWidth='2'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <line x1='18' y1='6' x2='6' y2='18' />
                           <line x1='6' y1='6' x2='18' y2='18' />
                        </svg>
                     </div>

                     {/* Hamburger menu elements */}
                     <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] space-y-12'>
                        <Link
                           to='/'
                           className={`text-gray-300 scale-150 ${
                              pathMatchRoute('/') &&
                              '  font-bold brightness-125  text-white'
                           }`}
                           onClick={() => setIsNavOpen(false)}
                        >
                           HOME
                        </Link>
                        <Link
                           to='/projects'
                           className={`text-gray-300 scale-150 ${
                              pathMatchRoute('/projects') &&
                              '  font-bold brightness-125  text-white'
                           }`}
                           onClick={() => setIsNavOpen(false)}
                        >
                           PROJECTS
                        </Link>
                        <Link
                           to='/contact'
                           className={`text-gray-300 scale-150 ${
                              pathMatchRoute('/contact') &&
                              '  font-bold brightness-125  text-white'
                           }`}
                           onClick={() => setIsNavOpen(false)}
                        >
                           CONTACT
                        </Link>
                        <Link
                           to='/about'
                           className={`text-gray-300 scale-150 ${
                              pathMatchRoute('/about') &&
                              '  font-bold brightness-125  text-white'
                           }`}
                           onClick={() => setIsNavOpen(false)}
                        >
                           ABOUT
                        </Link>
                        <Link
                           to='/resume'
                           className='btn btn-primary btn-md rounded-btn text-lg'
                           onClick={() => setIsNavOpen(false)}
                        >
                           <FaFilePdf style={{ paddingRight: '5px' }} /> RESUME
                        </Link>
                     </ul>
                  </div>
               </section>

               {/* Hamburger menu */}
               <div className='flex-1' />
               <div className='flex-none lg:hidden text-white'>
                  <button
                     className='btn btn-ghost btn-sm rounded-btn'
                     onClick={() => setIsNavOpen(!isNavOpen)}
                  >
                     <svg
                        className='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                     >
                        <path
                           fillRule='evenodd'
                           d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                           clipRule='evenodd'
                        />
                     </svg>
                  </button>
               </div>

               {/* Desktop eleemts */}
               <div className='flex-1 px-2 mx-2 hidden lg:block'>
                  <div className='flex justify-end'>
                     <Link
                        to='/'
                        className={`${standardButton} ${
                           pathMatchRoute('/') && 'font-bold brightness-125 text-white'
                        }`}
                     >
                        Home
                     </Link>
                     <Link
                        to='/projects'
                        className={`${standardButton} ${
                           pathMatchRoute('/projects') &&
                           'font-bold brightness-125 text-white'
                        }`}
                     >
                        Projects
                     </Link>
                     <Link
                        to='/contact'
                        className={`${standardButton} ${
                           pathMatchRoute('/contact') &&
                           'font-bold brightness-125 text-white'
                        }`}
                     >
                        Contact
                     </Link>
                     <Link
                        to='/about'
                        className={`${standardButton} ${
                           pathMatchRoute('/about') &&
                           'font-bold brightness-125 text-white'
                        }`}
                     >
                        about
                     </Link>
                     <Link
                        to='/resume'
                        className='btn btn-primary btn-sm rounded-btn ml-2'
                     >
                        <FaFilePdf className='pr-1' /> resume
                     </Link>
                  </div>
               </div>
            </div>
         </nav>
      </>
   )
}

Navbar.defaultProps = {
   title: 'Chokor Portfolio',
}

Navbar.propTypes = {
   title: PropTypes.string,
}

export default Navbar
