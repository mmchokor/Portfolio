import Readmore from "./Readmore"

const ProjectCard = ({ title, description, image, technologies, demoLink, githubLink }) => {
   return (
      <div className='flex justify-center'>
         <div className='flex flex-col lg:flex-row md:max-w-xl rounded-lg bg-white shadow-lg min-h-[20rem]'>
            <img
               className=' w-full h-96 md:h-auto md:min-h-[17rem] object-cover lg:min-w-[40%] xl:w-[70%] md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
               src={image}
               alt=''
            />

            <div className='p-6 flex flex-col justify-start bg-gray-900'>
               <h5 className='text-xl font-medium mb-2 text-white'>{title}</h5>
               <Readmore className='text-base mb-4 text-gray-400'>{description}</Readmore>
               <p>
                  {/* a map to display disabled btn */}
                  {technologies.map((technology, index) => {
                     return (
                        <span key={index} className='inline-block bg-gray-700 text-white px-2 py-1 rounded-full mr-2 my-1'>
                           {technology}
                        </span>
                     )
                  }
                  )}
               </p>
               <div className='p-6 flex flex-row justify-center gap-8'>
                  <a href={demoLink} className='btn btn-primary md:btn-md  text-xl'>
                     Live Demo
                  </a>
                  <a href={githubLink} className='btn btn-secondary md:btn-md text-xl'>
                     Code
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectCard
