// Description: This component is used to display a project card
// Parameters:
// title: string
// description: string
// image: string
// technologies: array
// demoLink: string
// githubLink: string

import Readmore from './Readmore'

const ProjectCard = ({
   title,
   description,
   image,
   technologies,
   demoLink,
   githubLink,
   soonBTN,
}) => {
   return (
      <div className='flex justify-center'>
         <div className='flex flex-col lg:flex-row md:max-w-xl rounded-lg bg-white shadow-lg min-h-[20rem]'>
            <img
               className=' w-full h-80 md:h-auto md:min-h-[17rem] object-cover lg:min-w-[40%] xl:w-[70%] md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
               src={image}
               alt=''
            />

            <div className='p-6 flex flex-col justify-start bg-gray-900'>
               <h5 className='text-xl font-medium mb-2 text-white'>{title}</h5>
               <Readmore className='text-base mb-4 text-gray-400'>
                  {description}
               </Readmore>
               <p>
                  {/* a map to display disabled btn */}
                  {technologies.map((technology, index) => {
                     return (
                        <span
                           key={index}
                           className='inline-block bg-gray-700 text-white px-2 py-1 rounded-full mr-2 my-1'
                        >
                           {technology}
                        </span>
                     )
                  })}
               </p>
               <div className='p-6 flex flex-row justify-center gap-4 mt-1'>
                  {demoLink && (
                     <a
                        href={demoLink}
                        className='btn btn-primary md:btn-md w-1/2 text-xl'
                        target='_blank'
                     >
                        Demo
                     </a>
                  )}
                  {githubLink && (
                     <a
                        href={githubLink}
                        className='btn btn-secondary md:btn-md w-1/2 text-xl'
                        target='_blank'
                     >
                        Code
                     </a>
                  )}
                  {soonBTN && (
                     <a
                        href={'#'}
                        className='btn btn-primary md:btn-md text-xl pointer-events-none'
                        target='_blank'
                     >
                        Coming Soon
                     </a>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectCard
