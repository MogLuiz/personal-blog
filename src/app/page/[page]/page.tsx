import { HomeScreen } from '@/screens/Home'
import { useListPosts } from '@/services/PostService'

type PaginatedHomeDataLayerProps = {
  params: {
    page: string
  }
}

export default function PaginatedHomeDataLayer({
  params
}: PaginatedHomeDataLayerProps) {
  const currentPage = Number(params.page)

  const data = useListPosts({ currentPage, limit: 1 })

  return <HomeScreen {...data} withProfileSection={false} />
}
