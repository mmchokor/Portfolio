import { useState } from 'react'

const Resume = () => {
   const [resumeLink] = useState(
      'https://drive.google.com/file/d/1GZ9gr_qRIv0pDsaK6RNG5S-nrq9L9Ynz/preview'
   )
   const [resumeLinkDownload] = useState(
      'https://drive.google.com/uc?export=download&id=1GZ9gr_qRIv0pDsaK6RNG5S-nrq9L9Ynz'
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
