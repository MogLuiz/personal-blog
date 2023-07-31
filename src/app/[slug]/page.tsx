import { PostScreen } from '@/screens/Post'
import { useShowPostBySlug } from '@/services/PostService'

type PostDataLayerProps = {
  params: {
    slug: string
  }
}

export default function PostDataLayer({ params }: PostDataLayerProps) {
  const { post } = useShowPostBySlug(params.slug)

  // TODO : Check if post is undefined
  if (!post?.title) return null

  return <PostScreen post={post} />
}
