import React, { useState } from 'react'

const Readmore = ({ children }) => {
   const text = children
   const [isReadMore, setIsReadMore] = useState(true)
   const toggleReadMore = () => {
      setIsReadMore(!isReadMore)
   }
   return (
      <p className='text'>
         {isReadMore ? text.slice(0, 200) : text}
         <span onClick={toggleReadMore} className='cursor-pointer text-gray-600'>
            {text.length > 200 ? isReadMore ? '...Read more' : ' Show less' : ''}
         </span>
      </p>
   )
}

export default Readmore
