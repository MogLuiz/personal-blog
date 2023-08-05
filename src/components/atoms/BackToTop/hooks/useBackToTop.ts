import { useCallback, useState, useEffect, useRef } from 'react'

export const useBackToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  const prevScrollY = useRef(0)

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setShowScrollButton(false)
      prevScrollY.current = 0
      return
    }

    if (window.scrollY > prevScrollY.current) {
      setShowScrollButton(false)
    } else {
      setShowScrollButton(true)
    }

    prevScrollY.current = window.scrollY
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll, prevScrollY])

  const handleBackToTop = useCallback(() => {
    window.scrollTo(0, 0)
    prevScrollY.current = 0
  }, [])

  return {
    showScrollButton,
    handleBackToTop
  }
}
