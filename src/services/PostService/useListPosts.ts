import { Post, allPosts } from 'contentlayer/generated'

import { BlogPost } from '@/models'

import { transformPostPayload } from './shared'

type UseListPosts = {
  posts: BlogPost[]
}

export const useListPosts = (): UseListPosts => {
  const formattedPosts = allPosts.sort(orderByDate).map(transformPostPayload)

  return {
    posts: formattedPosts
  }
}

const orderByDate = (a: Post, b: Post): number => (a.date < b.date ? 1 : -1)
