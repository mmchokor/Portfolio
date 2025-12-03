// Description of the component:
// This component is used to display the skills that is passed in fromm the Skills Component

import PropTypes from 'prop-types'

export const SkillsCard = ({ icon, title, skillsArray, skillsArrayIcons }) => {
   return (
      <div className='block p-6 max-w-sm rounded-lg border shadow-md bg-gray-900 border-gray-700 min-h-[20rem] card-pop'>
         <h5 className='mb-4 text-2xl font-bold tracking-tight text-white inline-flex'>
            <span className='pr-3 mt-1 ml-2'>{icon}</span> {title}
         </h5>

         <ul className='font-normal text-gray-700 dark:text-gray-400'>
            {skillsArray.map((skill, index) => {
               return (
                  <li key={index} className='flex items-center mb-2 text-gray-400'>
                     <span className='mr-2 scale-110'>{skillsArrayIcons[index]}</span>
                     {skill}
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

SkillsCard.defaultProps = {
   title: 'Skills',
   skillsArray: [],
}

SkillsCard.propTypes = {
   title: PropTypes.string,
   skillsArray: PropTypes.array,
}
