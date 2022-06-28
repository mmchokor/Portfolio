import { useState } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
   const FORM_ENDPOINT =
      'https://public.herotofu.com/v1/b0657050-f6ee-11ec-bc36-e1ea9ccadd33'

   const [status, setStatus] = useState()
   const handleSubmit = (e) => {
      e.preventDefault()

      const injectedData = {
         DYNAMIC_DATA_EXAMPLE: '',
      }
      const inputs = e.target.elements
      const data = {}

      for (let i = 0; i < inputs.length; i++) {
         if (inputs[i].name) {
            data[inputs[i].name] = inputs[i].value
         }
      }

      Object.assign(data, injectedData)

      fetch(FORM_ENDPOINT, {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      })
         .then((response) => {
            // It's likely a spam/bot request, so bypass it to validate via captcha
            if (response.status === 422) {
               Object.keys(injectedData).forEach((key) => {
                  const el = document.createElement('input')
                  el.type = 'hidden'
                  el.name = key
                  el.value = injectedData[key]

                  e.target.appendChild(el)
               })

               e.target.submit()
               throw new Error('Please finish the captcha challenge')
            }

            if (response.status !== 200) {
               throw new Error(response.statusText)
            }

            return response.json()
         })
         .then(() => setStatus('Success'))
         .catch((err) => setStatus(err.toString()))
   }

   if (status) {
      return (
         <>
            {status !== 'Success' ? (
               <div className='text-center'>
                <h1 className='text-5xl font-bold'>
                     Sorry something went wrong!
                  </h1>
                  <br />
                  <p className='text-2xl'>
                     The email couldn't be sent
                  </p>
                  <br />
                  <p>{status}</p>
                  
                  <br />
                    <button  className='btn btn-error btn-md rounded-btn text-lg w-56' onClick={() => { 
                        setStatus()
                     }}>Try Again</button>
                  <br />
                  <br />
                  <Link
                     to='/'
                     className='btn btn-primary btn-md rounded-btn text-lg w-56'
                  >
                     Home
                  </Link>
                
                <br />
               
               </div>
               
            ) : (
               <div className='text-center'>
                  <h1 className='text-5xl font-bold'>
                     Thank you for contacting me!
                  </h1>
                  <br />
                  <p className='text-2xl'>
                     I will get back to you as soon as possible.
                  </p>
                  <br />
                  <Link
                     to='/'
                     className='btn btn-primary btn-md rounded-btn text-lg w-56'
                  >
                     Home
                  </Link>
               </div>
            )}
         </>
      )
   }

   return (
      <div className='w-full md:w-4/5 md:max-w-full mx-auto lg:w-3/5'>
         <div className='p-9 border border-gray-600 sm:rounded-md bg-neutral'>
            <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method='POST'>
               <label className='block mb-6'>
                  <span className='text-gray-300'>Your name</span>
                  <input
                     name='name'
                     type='text'
                     className='
            block
            w-full
            mt-1
            border-gray-600
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            bg-transparent
            placeholder-gray-600
            text-gray-300
          '
                     placeholder='Mohamed Chokor'
                     required
                  />
               </label>
               <label className='block mb-6'>
                  <span className='text-gray-300'>Email address</span>
                  <input
                     name='email'
                     type='email'
                     className='
            block
            w-full
            mt-1
            border-gray-600
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            bg-transparent
            placeholder-gray-600
            text-gray-300
          '
                     placeholder='Chokor@example.com'
                     required
                  />
               </label>
               <label className='block mb-6'>
                  <span className='text-gray-300'>Message</span>
                  <textarea
                     name='message'
                     className='
            block
            w-full
            mt-1
            border-gray-600
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            bg-transparent
            placeholder-gray-600
            text-gray-300
          '
                     rows='3'
                     placeholder="Type your message"
                     required
                  ></textarea>
               </label>
               <div className='mb-6 flex justify-center items-center'>
                  <button
                     type='submit'
                     className='
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
            w-full
            lg:w-4/5
          '
                  >
                     Contact Me
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Contact