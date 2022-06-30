import PropTypes from 'prop-types'

export const SkillsCard = ({ icon, title, skillsArray }) => {
   return (
      <div class='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 min-h-[25rem]'>
         <h5 class='mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white inline-flex'>
            <span className='pr-3 mt-1 ml-2'>{icon}</span> {title}
         </h5>

         <ul class='font-normal text-gray-700 dark:text-gray-400'>
            {skillsArray.map((skill, index) => {
               return (
                  <li key={index} class='flex items-center mb-2'>
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
