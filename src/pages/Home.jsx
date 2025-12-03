// Description of the component:
// This component is used to display the landing, skills and Projects component

import Landing from '../components/Landing'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

function Home() {
   return (
      <>
         {/* Landing Section */}
         <Landing />

         {/* Work Experience Section */}
         <WorkExperience />

         {/* Skills Section */}
         <Skills />

         {/* Projects Section */}
         <Projects />
      </>
   )
}

export default Home
