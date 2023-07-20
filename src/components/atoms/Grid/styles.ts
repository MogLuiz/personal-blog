import tw from 'tailwind-styled-components'

import { GridProps } from './Grid'

export const Container = tw.div<GridProps>`
  grid
  w-full
  
  ${({ gap }: GridProps) => `gap-${gap}`}
  ${({ cols }: GridProps) => `grid grid-cols-${cols}`})}

  ${({ sm }: GridProps) => sm && `sm:grid-cols-${sm}`}
  ${({ md }: GridProps) => md && `md:grid-cols-${md}`}
  ${({ lg }: GridProps) => lg && `lg:grid-cols-${lg}`}
  ${({ xl }: GridProps) => xl && `xl:grid-cols-${xl}`}
  ${({ xxl }: GridProps) => xxl && `2xl:grid-cols-${xxl}`}
`
