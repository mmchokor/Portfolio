// Description of the component:
// This component is used to contain the routes of all the pages in the app
// It also contains the Navbarar and Footer component
// It is all contained in a flexbox container

import "animate.css/animate.min.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import './index.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Resume from './pages/Resume'

function App() {
   return (
      <>
         <Router>
            <div className='flex flex-col justiy-between min-h-screen bg-gray-800'>
               <Navbar title={'Chokor.Portfolio()'} />
               <main className='container mx-auto px-3 pb-12 flex-grow'>
                  <Routes>
                     <Route path='/' element={<Home />} />
                     <Route path='/contact' element={<Contact />} />
                     <Route path='/about' element={<About />} />
                     <Route path='/resume' element={<Resume />} />
                  </Routes>
               </main>
               <Footer />
            </div>
         </Router>
      </>
   )
}

export default App
