// Description of the component:
// This component surfaces work experience in a vertical timeline with expandable details.
// It pulls structured data from the constants file to keep content centralized.

import { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import {
   FaCalendarAlt,
   FaChevronDown,
   FaChevronUp,
   FaMapMarkerAlt,
} from 'react-icons/fa'
import { experiences } from '../constants/experienceData'

const ExperienceItem = ({ experience }) => {
   const { company, role, location, start, end, summary, achievements, tech } =
      experience
   const [expanded, setExpanded] = useState(false)
   const visibleAchievements =
      expanded || achievements.length <= 3
         ? achievements
         : achievements.slice(0, 3)

   return (
      <div className='relative sm:pl-12 pl-6'>
         <span className='absolute left-0 top-8 flex h-3 w-3 -translate-x-1/2 items-center justify-center'>
            <span className='h-3 w-3 rounded-full bg-primary ring-4 ring-gray-900 shadow-lg'></span>
         </span>

         <div className='rounded-2xl border border-gray-700 bg-gray-900/80 p-6 shadow-lg card-pop'>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
               <div className='space-y-1'>
                  <p className='text-sm font-semibold uppercase tracking-wide text-primary'>
                     {company}
                  </p>
                  <h3 className='text-xl font-semibold text-white'>{role}</h3>
                  <p className='text-sm text-gray-400'>{summary}</p>
               </div>
               <div className='flex flex-wrap gap-3 text-sm text-gray-400 sm:justify-end'>
                  <span className='inline-flex items-center gap-2'>
                     <FaCalendarAlt className='text-primary' />
                     {start} - {end}
                  </span>
                  {location && (
                     <span className='inline-flex items-center gap-2'>
                        <FaMapMarkerAlt className='text-primary' />
                        {location}
                     </span>
                  )}
               </div>
            </div>

            <ul className='mt-4 space-y-3 text-gray-300'>
               {visibleAchievements.map((item, index) => (
                  <li key={index} className='flex gap-3 leading-relaxed'>
                     <span className='mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/80'></span>
                     <span>{item}</span>
                  </li>
               ))}
            </ul>

            {achievements.length > 3 && (
               <button
                  className='mt-4 inline-flex items-center gap-2 text-sm md:text-xs btn btn-outline border-gray-700 text-gray-200 hover:border-primary hover:bg-primary/20 md:px-3 md:py-1.5'
                  onClick={() => setExpanded((prev) => !prev)}
               >
                  {expanded ? 'Show less' : 'Show details'}
                  {expanded ? (
                     <FaChevronUp className='text-primary' />
                  ) : (
                     <FaChevronDown className='text-primary' />
                  )}
               </button>
            )}

            {tech?.length > 0 && (
               <div className='mt-4 flex flex-wrap gap-2'>
                  {tech.map((item) => (
                     <span
                        key={item}
                        className='badge border border-gray-700 bg-gray-800 text-gray-200 font-normal'
                     >
                        {item}
                     </span>
                  ))}
               </div>
            )}
         </div>
      </div>
   )
}

const WorkExperience = () => {
   return (
      <section id='experience' className='scroll-mt-24 mt-10'>
         <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp'>
            <div className='mb-10 text-center text-4xl text-white font-bold bg-gray-900 border border-gray-700 py-6 rounded-lg shadow-md'>
               <h1>Work Experience</h1>
               <p className='mt-2 text-base font-normal text-gray-400'>
                  A quick look at the products I helped build and ship.
               </p>
            </div>
         </AnimationOnScroll>

         <div className='relative'>
            <div className='absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gray-700/80 via-gray-700/40 to-transparent hidden sm:block'></div>
            <div className='space-y-10'>
               {experiences.map((experience, index) => (
                  <AnimationOnScroll
                     key={index}
                     animateOnce={true}
                     animateIn='animate__fadeInUp'
                  >
                     <ExperienceItem experience={experience} />
                  </AnimationOnScroll>
               ))}
            </div>
         </div>
      </section>
   )
}

export default WorkExperience
