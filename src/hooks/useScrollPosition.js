// Description of the hook:
// This hook is used to get the scroll position of the page

import { useEffect, useState } from 'react'

const useScrollPosition = () => {
   const [scrollPosition, setScrollPosition] = useState(0)

   useEffect(() => {
      const updatePosition = () => {
         setScrollPosition(window.pageYOffset)
      }
      window.addEventListener('scroll', updatePosition)
      updatePosition()
      return () => window.removeEventListener('scroll', updatePosition)
   }, [])

   return scrollPosition
}

export default useScrollPosition
