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

  const data = useListPosts({ currentPage })

  if (!data.posts.length) {
    return (
      <div>
        <h2>Não há posts</h2>
      </div>
    )
  }

  return <HomeScreen {...data} withProfileSection={false} />
}
