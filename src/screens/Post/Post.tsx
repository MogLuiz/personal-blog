import { BlogPost } from '@/models'

type PostScreenProps = {
  post: BlogPost
}

export const PostScreen = ({ post }: PostScreenProps) => (
  <div>
    <h1>{post.title}</h1>
  </div>
)
