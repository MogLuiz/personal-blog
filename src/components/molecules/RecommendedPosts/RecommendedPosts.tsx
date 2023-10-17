import { useListPosts } from '@/services/PostService'

import { Grid } from '@/components/atoms/Grid'
import { PostCard } from '@/components/molecules/PostCard'

import * as S from './styles'

export const RecommendedPosts = () => {
  const { posts } = useListPosts()

  const postsRecommended = posts.slice(0, 2)

  return (
    <S.Container>
      <Grid sm={1} md={2} lg={2} gap={2}>
        {postsRecommended.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </Grid>
    </S.Container>
  )
}
