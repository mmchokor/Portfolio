import HouseMarketplaceImage from '../assets/images/projectsImages/hourse-marketplace.jpg'
import PortfolioImage from '../assets/images/projectsImages/portfolio.png'
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
         title: 'Chokor.Portfolio() 22',
         description: 'The website you are currently viewing',
         image: PortfolioImage,
         technologies: ['ReactJS', 'Tailwind Css', 'NodeJS'],
         demoLink: 'https://mohamed-chokor.netlify.app/',
         githubLink: 'https://github.com/mmchokor/Portfolio',
      },
   ]
   return (
      <section>
         <div className='-mt-6 mb-10 text-center text-4xl text-white font-bold bg-gray-900 border border-gray-700 py-6 rounded-lg shadow-md'>
            <h1>My Projects</h1>{' '}
            <span className='text-sm'>(Not all project are added yet)</span>
         </div>

         <div className='grid gap-10 md:grid-cols-2 sm:grid-cols-1 mx-auto'>
            {/* map through the array of objects projects */}
            {projects.map((project, index) => {
               return (
                  <ProjectCard
                     title={project.title}
                     description={project.description}
                     image={project.image}
                     technologies={project.technologies}
                     demoLink={project.demoLink}
                     githubLink={project.githubLink}
                     key={index}
                  />
               )
            })}
         </div>
      </section>
   )
}

export default Projects
