// Description of the component:
// This component is used to contain the routes of all the pages in the app
// It also contains the Navbarar and Footer component
// It is all contained in a flexbox container

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Resume from './pages/Resume'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import './index.css'
import "animate.css/animate.min.css"

function App() {
   return (
      <>
         <Router>
            <div className='flex flex-col justiy-between min-h-screen bg-gray-800'>
               <Navbar title={'Chokor.Protfolio()'} />
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
