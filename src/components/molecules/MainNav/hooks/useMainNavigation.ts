import { useState } from 'react'

type UseMainNavigation = {
  isOpenMenu: boolean
  handleToggleMenu: () => void
}

export const useMainNavigation = (): UseMainNavigation => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleToggleMenu = () => {
    setIsOpenMenu((prevState) => !prevState)
  }

  return { isOpenMenu, handleToggleMenu }
}
