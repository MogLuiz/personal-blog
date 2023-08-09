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
}

export const useListPosts = ({
  currentPage = 1,
  limit = 10
}: UseListPostsParams): UseListPosts => {
  const formattedPosts = allPosts.sort(orderByDate).map(transformPostPayload)

  const { paginatedData, totalPages } = dataPagination(
    formattedPosts,
    currentPage,
    limit
  )

  return {
    posts: paginatedData,
    totalPages,
    currentPage
  }
}

const orderByDate = (a: Post, b: Post): number => (a.date < b.date ? 1 : -1)
