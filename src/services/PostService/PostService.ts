import { allPosts } from 'contentlayer/generated'

export const PostService = {
  list: () => ({
    posts: allPosts
  })
}
