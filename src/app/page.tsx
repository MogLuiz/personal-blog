import { HomeScreen } from '@/screens/Home'
import { useListPosts } from '@/services/PostService'

export default function HomeDataLayer() {
  const { posts, currentPage, totalPages } = useListPosts({})

  return <HomeScreen posts={posts} />
}
