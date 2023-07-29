import { allPosts } from 'contentlayer/generated'

import { BlogPost } from '@/models'

type UseListPosts = {
  posts: BlogPost[]
}

export const useListPosts = (): UseListPosts => {
  const formattedPosts = allPosts.map((post) => ({
    title: post.title,
    description: post.description,
    date: post.date,
    tags: post.tags,
    image: post.image,
    slug: post._id,
    body: post.body,
    readingTime: 20
  }))

  return {
    posts: formattedPosts
  }
}
