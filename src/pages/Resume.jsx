import { useState } from 'react'

const Resume = () => {
   const [resumeLink] = useState(
      'https://drive.google.com/file/d/1dpJ9yvPYhm2LfyrQZZ7BGnHf0cNbOcfI/preview'
   )
   const [resumeLinkDownload] = useState(
      'https://drive.google.com/uc?export=download&id=1dpJ9yvPYhm2LfyrQZZ7BGnHf0cNbOcfI'
   )

   return (
      <section>
         <div class='flex flex-col items-center justify-center max-w-full'>
            <a
               href={resumeLinkDownload}
               target='_blank'
               rel='noopener noreferrer'
               className='row btn btn-primary w-2/3 mx-auto'
            >
               Download
            </a>
            <br />
            <iframe
               src={resumeLink}
               width='820'
               height='1100'
               allow='autoplay'
               className='shadow-lg rounded-lg max-w-full'
            ></iframe>
         </div>
      </section>
   )
}

export default Resume
