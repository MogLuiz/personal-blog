import tw from 'tailwind-styled-components'

import { GridProps } from './Grid'

export const Container = tw.div<GridProps>`
  grid
  w-full
  
  ${({ gap }) => `gap-${gap}`}
  ${({ cols }) => `grid grid-cols-${cols}`})}

  ${({ sm }) => sm && `sm:grid-cols-${sm}`}
  ${({ md }) => md && `md:grid-cols-${md}`}
  ${({ lg }) => lg && `lg:grid-cols-${lg}`}
  ${({ xl }) => xl && `xl:grid-cols-${xl}`}
  ${({ xxl }) => xxl && `2xl:grid-cols-${xxl}`}
`
