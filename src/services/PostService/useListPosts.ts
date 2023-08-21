import { Post, allPosts } from 'contentlayer/generated'

import { dataPagination } from '@/utils/functions/pagination'

import { BlogPost } from '@/models'

import { transformPostPayload } from './shared'

type UseListPostsParams = {
  limit?: number
  currentPage?: number
}

type UseListPosts = {
  posts: BlogPost[]
  totalPages: number
  currentPage: number
  previousPage: string
  nextPage: string
}

export const useListPosts = ({
  currentPage = 1,
  limit = 10
}: UseListPostsParams = {}): UseListPosts => {
  const formattedPosts = allPosts.sort(orderByDate).map(transformPostPayload)

  const { paginatedData, totalPages } = dataPagination(
    formattedPosts,
    currentPage,
    limit
  )

  const { nextPage, previousPage } = paginationPages(currentPage)

  return {
    posts: paginatedData,
    totalPages,
    currentPage,
    previousPage,
    nextPage
  }
}

const orderByDate = (a: Post, b: Post): number => (a.date < b.date ? 1 : -1)

const paginationPages = (currentPage = 1, pageRoute = '/page') => {
  const previousPage =
    currentPage - 1 === 1 ? '/' : `${pageRoute}/${currentPage - 1}`
  const nextPage = `${pageRoute}/${currentPage + 1}`

  return {
    previousPage,
    nextPage
  }
}
