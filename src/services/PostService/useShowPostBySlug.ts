import { Post, allPosts } from 'contentlayer/generated'

type UseShowPostBySlug = {
  post?: Post
}

export const useShowPostBySlug = (slug: string): UseShowPostBySlug => {
  const post = allPosts.find((post) => post.slug === slug)

  return {
    post
  }
}
