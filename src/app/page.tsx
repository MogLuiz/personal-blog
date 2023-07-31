import { HomeScreen } from '@/screens/Home'
import { useListPosts } from '@/services/PostService'

export default function HomeDataLayer() {
  const { posts } = useListPosts()

  return <HomeScreen posts={posts} />
}
