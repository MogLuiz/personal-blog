'use client'
import NextImage from 'next/image';

import tw from 'tailwind-styled-components'

// export const Wrapper = tw.main``

export const ImageContainer = tw.div`
  relative
  h-96
  w-full
`;

export const Image = tw(NextImage)`
  h-full
  w-full
  object-cover
  object-center
  rounded-xl
`;

export const Title = tw.h1`
  mb-6
  text-3xl
  font-bold
`

export const Subtitle = tw.strong`
  flex
  mb-4
  text-xl
  font-bold
  leading-relaxed
`

export const Paragraph = tw.p`
  mb-2
  text-xl
  font-normal
  leading-relaxed
`

