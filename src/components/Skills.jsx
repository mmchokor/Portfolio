// Icons start ********************************************************************
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
import {
   SiRedux,
   SiExpress,
   SiCplusplus,
   SiKotlin,
   SiVisualstudiocode,
} from 'react-icons/si'
import { FaLaptopCode, FaHashtag } from 'react-icons/fa'
// Icons End **********************************************************************
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { SkillsCard } from './shared/SkillsCard'

const Skills = () => {
   const skills = [
      {
         name: 'Front-End',
         icon: <FiMonitor />,
         skills: ['ReactJs', 'HTML5', 'CSS3', 'JavaScript', 'Redux'],
         skillsIcons: [
            <DiReact className='scale-125' />,
            <DiHtml5 />,
            <DiCss3 />,
            <DiJavascript />,
            <SiRedux />,
         ],
      },
      {
         name: 'Back-End',
         icon: <FiServer />,
         skills: ['NodeJS', 'Express', 'MongoDB', 'Firebase', 'PHP', 'MySQL'],
         skillsIcons: [
            <DiNodejsSmall className='scale-125' />,
            <SiExpress />,
            <DiMongodb />,
            <DiFirebase className='scale-125' />,
            <DiPhp className='scale-125' />,
            <DiMysql className='scale-125' />,
         ],
      },
      {
         name: 'Languages',
         icon: <DiCode className='scale-[200%]'/>,
         skills: ['Java', 'Python', 'C/C++', 'C#', 'Kotlin'],
         skillsIcons: [
            <DiJava className='scale-125' />,
            <DiPython className='scale-125' />,
            <SiCplusplus />,
            <FaHashtag />,
            <SiKotlin />,
         ],
      },
      {
         name: 'Tools',
         icon: <FaLaptopCode />,
         skills: ['VsCode', 'Git', 'GitHub', 'Eclipse', 'Visual Studio'],
         skillsIcons: [
            <SiVisualstudiocode className='scale-90' />,
            <DiGit className='scale-125' />,
            <DiGithub className='scale-125' />,
            <DiEclipse className='scale-125' />,
            <DiVisualstudio className='scale-125' />,
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
                <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp'>
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
