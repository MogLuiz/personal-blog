import { useCallback, useState, useEffect } from 'react'

export const useBackToTop = () => {
  const [show, setShow] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setShow(false)
      return
    }

    if (window.scrollY > lastScrollY) {
      setShow(false)
    } else {
      setShow(true)
    }

    setLastScrollY(window.scrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll, lastScrollY])

  const handleBackToTop = useCallback(() => {
    window.scrollTo(0, 0)
    setLastScrollY(0)
  }, [])

  return {
    show,
    handleBackToTop
  }
}
