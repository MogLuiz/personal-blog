import { allPosts } from 'contentlayer/generated'

import { Home as HomeScreen } from '@/screens/Home'

export default function Home() {
  const posts = allPosts

  return <HomeScreen allPosts={posts} />
}
