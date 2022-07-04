import { SkillsCard } from '../components/shared/SkillsCard'
import { FiMonitor, FiServer } from 'react-icons/fi'
import {
   DiCode,
   DiReact,
   DiHtml5,
   DiCss3,
   DiJavascript,
   DiNodejsSmall,
   DiMongodb,
   DiFirebase,
   DiPhp,
   DiMysql,
   DiJava,
   DiPython,
   DiGit,
   DiGithub,
   DiEclipse,
   DiVisualstudio,
} from 'react-icons/di'
import { SiRedux, SiExpress, SiCplusplus, SiKotlin,SiVisualstudiocode } from 'react-icons/si'
import { FaLaptopCode, FaHashtag } from 'react-icons/fa'
import Landing from '../components/Landing'

function Home() {
   // Skills arrays
   const frontend = ['ReactJs', 'HTML5', 'CSS3', 'JavaScript', 'Redux']
   const backend = ['NodeJS', 'Express', 'MongoDB', 'Firebase', 'PHP', 'MySQL']
   const pl = ['Java', 'Python', 'C/C++', 'C#', 'Kotlin']
   const tools = ['VsCode', 'Git', 'GitHub', 'Eclipse', 'Visual Studio']
   // Skills arrays icons
   const frontendIcons = [
      <DiReact className='scale-125' />,
      <DiHtml5 />,
      <DiCss3 />,
      <DiJavascript />,
      <SiRedux />,
   ]
   const backendIcons = [
      <DiNodejsSmall className='scale-125' />,
      <SiExpress />,
      <DiMongodb />,
      <DiFirebase className='scale-125' />,
      <DiPhp className='scale-125' />,
      <DiMysql className='scale-125' />,
   ]
   const plIcons = [
      <DiJava className='scale-125' />,
      <DiPython className='scale-125' />,
      <SiCplusplus />,
      <FaHashtag />,
      <SiKotlin />,
   ]
   const toolsIcons = [
      <SiVisualstudiocode className='scale-90' />,
      <DiGit className='scale-125' />,
      <DiGithub className='scale-125' />,
      <DiEclipse className='scale-125' />,
      <DiVisualstudio className='scale-125' />,
   ]

   return (
      <>
         {/* Landing Section */}
         <Landing />

         {/* Skills Section */}
         <section id='skills' className='scroll-mt-24 mt-16'>
            <h1 className='text-center text-4xl text-white font-bold my-10 bg-gray-900 border-gray-700 py-6 rounded-lg'>
               My Skills
            </h1>
            <div className='grid gap-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto'>
               <div className='container mx-auto px-3 pb-12'>
                  <SkillsCard
                     title='Front-End'
                     skillsArray={frontend}
                     icon={<FiMonitor />}
                     skillsArrayIcons={frontendIcons}
                  />
               </div>
               <div className='container mx-auto px-3 pb-12'>
                  <SkillsCard
                     title='Backend'
                     skillsArray={backend}
                     icon={<FiServer />}
                     skillsArrayIcons={backendIcons}
                  />
               </div>
               <div className='container mx-auto px-3 pb-12'>
                  <SkillsCard
                     title='Programing Languages'
                     skillsArray={pl}
                     icon={<DiCode className='scale-[200%]' />}
                     skillsArrayIcons={plIcons}
                  />
               </div>
               <div className='container mx-auto px-3 pb-12'>
                  <SkillsCard
                     title='Tools'
                     skillsArray={tools}
                     icon={<FaLaptopCode />}
                     skillsArrayIcons={toolsIcons}
                  />
               </div>
            </div>
         </section>
      </>
   )
}

export default Home
