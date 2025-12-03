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
      demoLink: 'https://badde-salemtak-senior-project-website.vercel.app/',
      githubLink: [
         'https://github.com/mmchokor/Badde-Salemtak--Senior-Project--Website',
         'https://github.com/mmchokor/Badde-Salemtak--Senior-Project--Backend',
         'https://github.com/mmchokor/Badde-Salemtak--Senior-Project',
      ],
      apkDownload:
         'https://expo.dev/accounts/ramiskakini/projects/Badde-Salemtak/builds/417595ec-8122-40e4-85ea-91e756a3ef98',
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
      title: 'House Marketplace',
      description:
         'A website that enables users to purchase, sell, and rent out their homes. A person may sign up for an account with his or her email or Google account and display their home with all of its characteristics. The user may also browse all of the houses that other users have uploaded, as well as search for residences and see which have offers. The user may also view the houses he has uploaded and edit the ones he has placed. The user can also remove the house that he has listed.',
      image: HouseMarketplaceImage,
      technologies: ['ReactJS', 'Firebase', 'NodeJS'],
      demoLink: 'https://chokor-house-marketplace.netlify.app/',
      githubLink: 'https://github.com/mmchokor/house_marketplace',
   },
]
