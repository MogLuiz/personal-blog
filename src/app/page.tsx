import { HomeScreen } from '@/screens/Home'
import { useListPosts } from '@/services/PostService'

export default function PaginatedHomeDataLayer() {
  const data = useListPosts({
    limit: 1
  })

  return <HomeScreen {...data} />
}
