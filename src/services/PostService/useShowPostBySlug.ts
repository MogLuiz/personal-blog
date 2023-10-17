import { allPosts } from 'contentlayer/generated'

import { BlogPost } from '@/models'

import { transformPostPayload } from './shared'

type UseShowPostBySlug = {
  post?: BlogPost
}

export const getPostBySlug = (slug: string): UseShowPostBySlug => {
  const post = allPosts.find((post) => post.slug === slug)
  const formattedPost = post && transformPostPayload(post)

  return {
    post: formattedPost
  }
}


