// Description of the component:
// This component is used to display the landing, skills and Projects component

import Landing from '../components/Landing'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

function Home() {
   return (
      <>
         {/* Landing Section */}
         <Landing />

         {/* Skills Section */}
         <Skills />

         {/* Projects Section */}
         <Projects />
      </>
   )
}

export default Home
