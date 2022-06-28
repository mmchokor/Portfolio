import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import './index.css'

function App() {
   return (
      <>
         <Router>
            <div className='flex flex-col justiy-between min-h-screen'>
               <Navbar />
               <main className='container mx-auto px-3 pb-12 flex-grow'>
                  <Routes>
                     <Route path='/' element={<Home />} />
                     {/* <Route path='/about' element={<About />} /> */}
                     <Route path='/contact' element={<Contact />} />
                  </Routes>
               </main>
               <Footer />
            </div>
         </Router>
      </>
   )
}

export default App
