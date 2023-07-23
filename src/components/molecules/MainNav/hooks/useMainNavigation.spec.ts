import { renderHook } from '@testing-library/react'

import { useMainNavigation } from './useMainNavigation'

describe('useMainNavigation', () => {
  it('should initialize with the correct initial state', () => {
    const { result } = renderHook(() => useMainNavigation())
    const { isOpenMenu, handleToggleMenu } = result.current

    expect(isOpenMenu).toBe(false)
    expect(typeof handleToggleMenu).toBe('function')
  })
})
