// Description of the component:
// This component is used to display my resume in a iframe tag
// It gets my resume from my google drive

import { useState } from 'react'

const Resume = () => {
   // Link for the iframe to view my resume from my google drive 
   const [resumeLink] = useState(
      'https://drive.google.com/file/d/1c8N2l7FA3SsUTXC_BevIb_0Tk4nKleg8/preview'
   )
   // Link to be used in the a tag to directly download my resume
   const [resumeLinkDownload] = useState(
      'https://drive.google.com/uc?export=download&id=1c8N2l7FA3SsUTXC_BevIb_0Tk4nKleg8'
   )
   const [loading, setLoading] = useState(true)

   return (
      <section>
         <div class='flex flex-col items-center justify-center max-w-full'>
            <a
               href={resumeLinkDownload}
               target='_blank'
               rel='noopener noreferrer'
               className='row btn btn-primary w-1/2 mx-auto'
            >
               Download
            </a>
            <br />
            {loading && <div className='loader'></div>}
            <iframe
               src={resumeLink}
               width='820'
               height='1100'
               allow='autoplay'
               className='shadow-lg rounded-lg max-w-full'
               onLoad={() => {
                  setLoading(false)
               }}
            ></iframe>
         </div>
      </section>
   )
}

export default Resume
