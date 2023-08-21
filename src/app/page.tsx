import { HomeScreen } from '@/screens/Home'
import { useListPosts } from '@/services/PostService'

export default function HomeDataLayer() {
  const data = useListPosts()

  return <HomeScreen {...data} />
}
