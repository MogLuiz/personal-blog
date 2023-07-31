import { Post } from 'contentlayer/generated'

import { formatDate, slugify } from '@/utils/functions'

import { BlogPost } from '@/models'

export const transformPostPayload = (post: Post): BlogPost => ({
  title: post.title,
  description: post.description,
  date: formatDate(post.date),
  tags: post.tags,
  image: post.image,
  slug: slugify(post.slug),
  body: post.body,
  readingTime: Math.ceil(post.readingTime.minutes)
})
