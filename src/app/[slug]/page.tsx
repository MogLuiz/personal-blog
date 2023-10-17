import { notFound } from 'next/navigation'

import { PostScreen } from '@/screens/Post'
import { useShowPostBySlug } from '@/services/PostService'

type PostDataLayerProps = {
  params: {
    slug: string
  }
}

export default function PostDataLayer({ params }: PostDataLayerProps) {
  const { post } = useShowPostBySlug(params.slug)

  if (!post) notFound()

  return <PostScreen post={post} />
}
