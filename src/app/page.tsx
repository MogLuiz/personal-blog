import { Home as HomeScreen } from '@/screens/Home'
import { PostService } from '@/services/PostService'

export default function Home() {
  const { posts } = PostService.list()

  return <HomeScreen allPosts={posts} />
}
