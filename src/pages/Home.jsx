import { SkillsCard } from '../components/shared/SkillsCard'
import { FiMonitor, FiServer } from 'react-icons/fi'
import { DiCode } from 'react-icons/di'
import { FaLaptopCode } from 'react-icons/fa'
import Landing from '../components/Landing'

function Home() {
   const skillsArray = ['test1', 'test2', 'test3']
   return (
      <>
         <Landing />

         <div className='grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto'>
            <div className='container mx-auto px-3 pb-12'>
               <SkillsCard
                  title='Front-End'
                  skillsArray={skillsArray}
                  icon={<FiMonitor />}
               />
            </div>
            <div className='container mx-auto px-3 pb-12'>
               <SkillsCard
                  title='Backend'
                  skillsArray={skillsArray}
                  icon={<FiServer />}
               />
            </div>
            <div className='container mx-auto px-3 pb-12'>
               <SkillsCard
                  title='Programing Languages'
                  skillsArray={skillsArray}
                  icon={<DiCode className='scale-[200%]' />}
               />
            </div>
            <div className='container mx-auto px-3 pb-12'>
               <SkillsCard
                  title='Tools'
                  skillsArray={skillsArray}
                  icon={<FaLaptopCode />}
               />
            </div>
         </div>

         <p>rv</p>
         <p>rv</p>
         <p>rv</p>
         <p>rv</p>
         <p>rv</p>
         <p>rv</p>
         <p>rv</p>
         <p>rv</p>
         <p>rv</p>
      </>
   )
}

export default Home
