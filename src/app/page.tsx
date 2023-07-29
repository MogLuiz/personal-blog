import { Home as HomeScreen } from '@/screens/Home'
import { useListPosts } from '@/services/PostService'

export default function Home() {
  const { posts } = useListPosts()

  return <HomeScreen posts={posts} />
}
