import { Post, allPosts } from 'contentlayer/generated'

import { formatDate, slugify } from '@/utils/functions'

import { BlogPost } from '@/models'

type UseListPosts = {
  posts: BlogPost[]
}

export const useListPosts = (): UseListPosts => {
  const formattedPosts = allPosts.sort(orderByDate).map(transformPayload)

  return {
    posts: formattedPosts
  }
}

const transformPayload = (post: Post): BlogPost => ({
  title: post.title,
  description: post.description,
  date: formatDate(post.date),
  tags: post.tags,
  image: post.image,
  slug: slugify(post.slug),
  body: post.body,
  readingTime: Math.ceil(post.readingTime.minutes)
})

const orderByDate = (a: Post, b: Post): number => (a.date < b.date ? 1 : -1)
