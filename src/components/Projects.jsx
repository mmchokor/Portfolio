// Descripion of the component
// This component is used to display the projects tin the Home page

import { AnimationOnScroll } from 'react-animation-on-scroll'
import ProjectCard from '../components/shared/ProjectCard'
import { projects } from '../constants/projectsData'

const Projects = () => {
   // Array of projects objects
   // Each object has a title, description, image, and a link to the project live demo or github
   
   return (
      <section id='projects' className='scroll-mt-24 mt-10'>
         <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp'>
            <div className='mb-10 text-center text-4xl text-white font-bold bg-gray-900 border border-gray-700 py-6 rounded-lg shadow-md'>
               <h1>My Projects</h1>{' '}
            </div>
         </AnimationOnScroll>

         <div className='grid gap-10 md:grid-cols-2 sm:grid-cols-1 mx-auto'>
            {/* map through the array of objects projects */}
            {projects.map((project, index) => {
               return (
                  <AnimationOnScroll
                     animateOnce={true}
                     animateIn='animate__fadeInUp'
                  >
                     <ProjectCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        demoLink={project.demoLink}
                        githubLink={project.githubLink}
                        soonBTN={project.soonBTN}
                        key={index}
                     />
                  </AnimationOnScroll>
               )
            })}
         </div>
      </section>
   )
}

export default Projects
