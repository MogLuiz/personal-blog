'use client'

import NextLink from 'next/link'

import tw from 'tailwind-styled-components'

import { ArrowLeftIcon, ArrowRightIcon } from '@/components/atoms/Icons'

export const Container = tw.div`
  flex
  w-full
  items-center
  justify-between
  pt-7
`

export const PrevPageIcon = tw(ArrowLeftIcon)`
  transition-transform
  duration-300
  ease-in-out
  text-lg

  group-hover:-translate-x-1
`

export const NextPageIcon = tw(ArrowRightIcon)`
  transition-transform
  duration-300
  ease-in-out
  text-lg

  group-hover:translate-x-1
`

export const PageDisplay = tw.p``

export const Link = tw(NextLink)`
  flex
  items-center
  gap-2
  group 
  duration-300
  transition-colors
  hover:text-link
`
