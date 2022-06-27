import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function App() {
   return (
      <>
         <Router>
            <div className='flex flex-col justiy-between h-screen'>
               <Navbar />
               <main className='container mx-auto px-3 pb-12'>
                  <Routes>
                     {/* <Route path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/contact' element={<Contact />} /> */}
                  </Routes>
               </main>
            </div>
         </Router>
      </>
   )
}

export default App
