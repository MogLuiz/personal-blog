import { renderHook, act } from '@testing-library/react'

import { useMainNavigation } from './useMainNavigation'

describe('useMainNavigation', () => {
  it('should initialize with the correct initial state', () => {
    const { result } = renderHook(() => useMainNavigation())
    const { isOpenMenu, handleToggleMenu } = result.current

    expect(isOpenMenu).toBe(false)
    expect(typeof handleToggleMenu).toBe('function')
  })

  it('should change isOpenMenu when handleToggleMenu is called', () => {
    const { result } = renderHook(() => useMainNavigation())
    const { handleToggleMenu } = result.current

    expect(result.current.isOpenMenu).toBe(false)

    act(() => {
      handleToggleMenu()
    })

    expect(result.current.isOpenMenu).toBe(true)

    act(() => {
      handleToggleMenu()
    })

    expect(result.current.isOpenMenu).toBe(false)
  })
})
