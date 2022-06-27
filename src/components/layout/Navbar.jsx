import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
   const [isNavOpen, setIsNavOpen] = useState(false)

   const location = useLocation()

   const pathMatchRoute = (route) => {
      if (route === location.pathname) {
         return true
      }
   }

   return (
      <>
         <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content sticky top-0'>
            <div className='container mx-auto'>
               <div className='flex-none px-2 mx-2'>
                  {/* logo */}
                  <Link to='/' className='text-lg font-bold align-middle'>
                     {title}
                  </Link>
               </div>

               {/* mobile hamburger */}
               <section className='MOBILE-MENU flex lg:hidden'>
                  <div
                     className={
                        isNavOpen ? 'showMenuNav bg-neutral' : 'hideMenuNav'
                     }
                  >
                     {/* Cross Icon */}
                     <div
                        className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
                        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                     >
                        <svg
                           className='h-8 w-8 text-gray-600'
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
                     <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
                        <Link
                           to='/'
                           className={
                              pathMatchRoute('/')
                                 ? ' scale-150 font-bold'
                                 : ' scale-150'
                           }
                           onClick={() => setIsNavOpen(false)}
                        >
                           HOME
                        </Link>
                        <Link
                           to='/contact'
                           className={
                              pathMatchRoute('/contact')
                                 ? ' scale-150 font-bold'
                                 : ' scale-150'
                           }
                           onClick={() => setIsNavOpen(false)}
                        >
                           CONTACT
                        </Link>
                        <Link
                           to='/about'
                           className={
                              pathMatchRoute('/about')
                                 ? ' scale-150 font-bold'
                                 : ' scale-150'
                           }
                           onClick={() => setIsNavOpen(false)}
                        >
                           ABOUT
                        </Link>
                     </ul>
                  </div>
               </section>

               {/* Hamburger menu */}
               <div className='flex-1' />
               <div className='flex-none lg:hidden'>
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
                        className={
                           pathMatchRoute('/')
                              ? 'btn btn-ghost btn-sm rounded-btn font-bold'
                              : 'btn btn-ghost btn-sm rounded-btn'
                        }
                     >
                        Home
                     </Link>
                     <Link
                        to='/contact'
                        className={
                           pathMatchRoute('/contact')
                              ? 'btn btn-ghost btn-sm rounded-btn font-bold'
                              : 'btn btn-ghost btn-sm rounded-btn'
                        }
                     >
                        Contact
                     </Link>
                     <Link
                        to='/about'
                        className={
                           pathMatchRoute('/about')
                              ? 'btn btn-ghost btn-sm rounded-btn font-bold'
                              : 'btn btn-ghost btn-sm rounded-btn'
                        }
                     >
                        about
                     </Link>
                  </div>
               </div>
            </div>
         </nav>
         <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
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
