import { Metadata } from 'next'

import { HomeScreen } from '@/screens/Home'
import { useListPosts } from '@/services/PostService'

export const metadata: Metadata = {
  title: 'Home | Luiz Ramos',
  description: 'Home page'
}

export default function HomeDataLayer() {
  const data = useListPosts()

  return <HomeScreen {...data} />
}
