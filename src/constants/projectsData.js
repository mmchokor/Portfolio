// Images ************************************************************************************
import BaddeSalemtak from '../assets/images/projectsImages/baddeSalemtak.webp'
import FaceAttendance from '../assets/images/projectsImages/face-attendance.webp'
import HouseMarketplaceImage from '../assets/images/projectsImages/hourse-marketplace.webp'
import PharmacyMS from '../assets/images/projectsImages/pharmacyMS.webp'
import PortfolioImage from '../assets/images/projectsImages/portfolio.webp'
import SupportDesk from '../assets/images/projectsImages/support-desk.webp'
// Images ************************************************************************************

export const projects = [
   {
      title: 'Badde Salemtak',
      description:
         'A mobile app designed to connect Lebanese residents with travelers visiting Lebanon, enabling them to request foreign products that are not readily available in the local market.',
      image: BaddeSalemtak,
      technologies: [
         'React Native',
         'ExpressJS',
         'NodeJS',
         'MongoDB',
         'AWS S3',
      ],
      soonBTN: true,
   },
   {
      title: 'House Marketplace',
      description:
         'A website that enables users to purchase, sell, and rent out their homes. A person may sign up for an account with his or her email or Google account and display their home with all of its characteristics. The user may also browse all of the houses that other users have uploaded, as well as search for residences and see which have offers. The user may also view the houses he has uploaded and edit the ones he has placed. The user can also remove the house that he has listed.',
      image: HouseMarketplaceImage,
      technologies: ['ReactJS', 'Firebase', 'NodeJS'],
      demoLink: 'https://chokor-house-marketplace.netlify.app/',
      githubLink: 'https://github.com/mmchokor/house_marketplace',
   },
   {
      title: 'Support Desk',
      description:
         'A full stack application that allows users to create tickets and view all tickets that have been created. The user can also view all tickets that have been assigned to him or her and view the tickets that have been resolved.',
      image: SupportDesk,
      technologies: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Vite'],
      demoLink: 'https://support-desk-frontend-chokor.vercel.app/',
      githubLink: 'https://github.com/mmchokor/support-desk-app',
   },
   {
      title: 'Face Attendance Program',
      description:
         'A program that assists University Doctors and teaching assistants with taking student attendance. It will scan students faces using the camera connected to the device on which the program is running, it will find the face in the video and encode it into data that will be compared with the encoding of the images present in the program database, upon detecting the facial identification, it will save the student s name together with the time he entered the class in a csv file that will be sent to the teacher via Email, after the software is closed by scanning the instructors face.',
      image: FaceAttendance,
      technologies: ['Python', 'OpenCV', 'face_recognition', 'Numpy'],
      demoLink: '',
      githubLink: 'https://github.com/mmchokor/Face-Attendace-Program',
   },
   {
      title: 'Pharmacy Admin Panel',
      description:
         'A website to manage all the data of a pharmacy. It was made using PHP, HTML, CSS, JavaScript, and SQL.',
      image: PharmacyMS,
      technologies: ['PHP', 'SQL', 'HTML', 'Bootstrap', 'CSS', 'JavaScript'],
      demoLink: '',
      githubLink: 'https://github.com/mmchokor/Pharmacy-Database-Project',
   },
   {
      title: 'Chokor.Portfolio()',
      description: 'The website you are currently viewing',
      image: PortfolioImage,
      technologies: ['ReactJS', 'Tailwind Css', 'NodeJS', 'Vite'],
      demoLink: 'https://mohamed-chokor.netlify.app/',
      githubLink: 'https://github.com/mmchokor/Portfolio',
   },
]
