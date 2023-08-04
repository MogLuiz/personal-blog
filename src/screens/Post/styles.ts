import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex
  flex-col
  items-center
  justify-center
`

export const IconContainer = tw.div`
  flex
  w-full
  justify-items-start
  pb-4 
`

export const Image = tw.img`
  rounded-xl
  object-cover
  object-center
`

export const ImageContainer = tw.div`
  flex  
  sm:h[30rem]
  relative
  h-96
  w-full
`

export const Content = tw.div`
  w-full
  max-w-5xl
  mt-6
`

export const DateContainer = tw.div``

export const Date = tw.p`
  mb-2
  text-gray-400
`

export const Title = tw.h1`
  mb-4
  text-5xl
  font-bold
  sm:text-6xl
`

export const Description = tw.p`
  mb-6
  text-2xl
  text-gray-400
`
