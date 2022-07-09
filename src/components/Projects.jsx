// Images ************************************************************************************
import HouseMarketplaceImage from '../assets/images/projectsImages/hourse-marketplace.jpg'
import PortfolioImage from '../assets/images/projectsImages/portfolio.png'
import SupportDesk from '../assets/images/projectsImages/support-desk.jpg'
// Images ************************************************************************************
import { AnimationOnScroll } from 'react-animation-on-scroll'
import ProjectCard from '../components/shared/ProjectCard'

const Projects = () => {
   const projects = [
      {
         title: 'House Marketplace',
         description:
            'A website that enables users to purchase, sell, and rent out their homes. A person may sign up for an account with his or her email or Google account and display their home with all of its characteristics. The user may also browse all of the houses that other users have uploaded, as well as search for residences and see which have offers. The user may also view the houses he has uploaded and edit the ones he has placed. The user can also remove the house that he has listed.',
         image: HouseMarketplaceImage,
         technologies: ['ReactJS', 'Firebase', 'NodeJS'],
         demoLink: 'https://chokor-house-marketplace.netlify.app/',
         githubLink: 'https://github.com/mmchokor/house_marketplace',
      },
      {
         titile: 'Support Desk',
         description:
            'A full stack application that allows users to create tickets and view all tickets that have been created. The user can also view all tickets that have been assigned to him or her and view the tickets that have been resolved.',
         image: SupportDesk,
         technologies: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Vite'],
         demoLink: 'https://chokor-support-desk.herokuapp.com/login',
         githubLink: 'https://github.com/mmchokor/support-desk-app',
      },
      {
         title: 'Chokor.Portfolio()',
         description: 'The website you are currently viewing',
         image: PortfolioImage,
         technologies: ['ReactJS', 'Tailwind Css', 'NodeJS', 'Vite'],
         demoLink: 'https://mohamed-chokor.netlify.app/',
         githubLink: 'https://github.com/mmchokor/Portfolio',
      },
   ]
   return (
      <section id='projects' className='scroll-mt-24 mt-10'>
         <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp'>
            <div className='mb-10 text-center text-4xl text-white font-bold bg-gray-900 border border-gray-700 py-6 rounded-lg shadow-md'>
               <h1>My Projects</h1>{' '}
               <span className='text-sm'>(Not all project are added yet)</span>
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
