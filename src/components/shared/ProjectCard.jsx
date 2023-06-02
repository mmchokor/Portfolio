import React from 'react'
import Readmore from './Readmore'

const ProjectCard = ({
   title,
   description,
   image,
   technologies,
   demoLink,
   githubLink,
   soonBTN,
   apkDownload,
}) => {
   return (
      <div className='flex justify-center'>
         <div className='flex flex-col lg:flex-row md:max-w-xl rounded-lg bg-white shadow-lg min-h-[20rem]'>
            <img
               className='w-full h-80 md:h-auto md:min-h-[17rem] object-cover lg:min-w-[40%] xl:w-[70%] md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
               src={image}
               alt=''
            />

            <div className='p-6 flex flex-col justify-start bg-gray-900'>
               <h5 className='text-xl font-medium mb-2 text-white'>{title}</h5>
               <Readmore>{description}</Readmore>
               <p className='m-3'>
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
               <div className='p-6 flex flex-wrap justify-center gap-4 mt-1'>
                  {demoLink && (
                     <a
                        href={demoLink}
                        className='btn btn-primary md:btn-md text-xl'
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        Demo
                     </a>
                  )}

                  {Array.isArray(githubLink) && githubLink.length > 1 ? (
                     <div className='dropdown inline-block relative'>
                        <button className='btn btn-secondary md:btn-md text-xl'>
                           <span>Code Links</span>
                        </button>
                        <ul className='dropdown-content absolute hidden text-whtie pt-1'>
                           {githubLink.map((link, index) => (
                              <li key={index}>
                                 <a
                                    className='bg-secondary hover:bg-fuchsia-900 py-2 px-4 block whitespace-no-wrap text-white'
                                    href={link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                 >
                                    {index === 0 ? 'Frontend' : index === 1 ? 'Backend' : 'Application' }
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ) : (
                     githubLink && (
                        <a
                           href={githubLink}
                           className='btn btn-secondary md:btn-md text-xl'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           Code
                        </a>
                     )
                  )}

                  {apkDownload && (
                     <a
                        href={apkDownload}
                        className='btn bg-green-700 md:btn-md text-xl text-white'
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        APK Download
                     </a>
                  )}
                  {soonBTN && (
                     <a
                        href={'#'}
                        className='btn btn-primary md:btn-md text-xl pointer-events-none'
                        target='_blank'
                        rel='noopener noreferrer'
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
