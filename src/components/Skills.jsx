// Description of the component:
// This component is used to display the skills in the Home page

// Icons start ********************************************************************
import { AiOutlineConsoleSql } from 'react-icons/ai'
import {
   DiCode,
   DiCss3,
   DiEclipse,
   DiFirebase,
   DiGit,
   DiGithub,
   DiHtml5,
   DiJava,
   DiJavascript,
   DiMongodb,
   DiMysql,
   DiNodejsSmall,
   DiPhp,
   DiPython,
   DiReact,
   DiVisualstudio,
} from 'react-icons/di'
import { FaHashtag, FaLaptopCode, FaVuejs } from 'react-icons/fa'
import { FiMonitor, FiServer } from 'react-icons/fi'
import {
   SiCplusplus,
   SiDotnet,
   SiExpress,
   SiKotlin,
   SiMicrosoftazure,
   SiRedux,
   SiVisualstudiocode,
} from 'react-icons/si'
// Icons End **********************************************************************
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { SkillsCard } from './shared/SkillsCard'

const Skills = () => {
   // Array of skills objects
   // Each object has a title, icon, an array of skills, and an array of icons of each skill in the array
   const skills = [
      {
         name: 'Front-End',
         icon: <FiMonitor />,
         skills: ['ReactJs', 'VueJs', 'HTML5', 'CSS3', 'JavaScript', 'Redux'],
         skillsIcons: [
            <DiReact className='scale-125' />,
            <FaVuejs />,
            <DiHtml5 />,
            <DiCss3 />,
            <DiJavascript />,
            <SiRedux />,
         ],
      },
      {
         name: 'Back-End',
         icon: <FiServer />,
         skills: [
            '.NET Core',
            'NodeJS',
            'Express',
            'SQL Server',
            'MongoDB',
            'Firebase',
         ],
         skillsIcons: [
            <SiDotnet />,
            <DiNodejsSmall className='scale-125' />,
            <SiExpress />,
            <AiOutlineConsoleSql />,
            <DiMongodb />,
            <DiFirebase className='scale-125' />,
         ],
      },
      {
         name: 'Languages',
         icon: <DiCode className='scale-[200%]' />,
         skills: ['C#', 'Java', 'Python', 'C/C++', 'Kotlin'],
         skillsIcons: [
            <FaHashtag />,
            <DiJava className='scale-125' />,
            <DiPython className='scale-125' />,
            <SiCplusplus />,
            <SiKotlin />,
         ],
      },
      {
         name: 'Tools',
         icon: <FaLaptopCode />,
         skills: ['Vs Code', 'Visual Studio', 'Git', 'GitHub', 'Azure', 'Eclipse'],
         skillsIcons: [
            <SiVisualstudiocode className='scale-90' />,
            <DiVisualstudio className='scale-125' />,
            <DiGit className='scale-125' />,
            <DiGithub className='scale-125' />,
            <SiMicrosoftazure />,
            <DiEclipse className='scale-125' />,
         ],
      },
   ]

   return (
      <section id='skills' className='scroll-mt-24 mt-16'>
         <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp'>
            <div className='text-center text-4xl text-white font-bold my-10 bg-gray-900 border border-gray-700 py-6 rounded-lg shadow-md'>
               <h1 className=''>My Skills</h1>
            </div>
         </AnimationOnScroll>
         <div className='grid gap-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto'>
            {skills.map((skill, index) => (
               <AnimationOnScroll
                  animateOnce={true}
                  animateIn='animate__fadeInUp'
                  key={index}
               >
                  <div className='container mx-auto px-3 pb-12'>
                     <SkillsCard
                        title={skill.name}
                        skillsArray={skill.skills}
                        icon={skill.icon}
                        skillsArrayIcons={skill.skillsIcons}
                     />
                  </div>
               </AnimationOnScroll>
            ))}
         </div>
      </section>
   )
}

export default Skills
