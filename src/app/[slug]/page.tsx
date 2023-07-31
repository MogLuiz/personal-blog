import { Post } from '@/screens/Post'
import { useShowPostBySlug } from '@/services/PostService'

type PostDataLayerProps = {
  params: {
    slug: string
  }
}

export default function PostDataLayer({ params }: PostDataLayerProps) {
  const { post } = useShowPostBySlug(params.slug)
  console.log({ post })

  // TODO : Check if post is undefined

  return <Post />
}
