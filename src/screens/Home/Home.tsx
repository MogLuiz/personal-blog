import { Post } from 'contentlayer/generated'

import { Grid } from '@/components/atoms/Grid'
import { PostCard } from '@/components/molecules/PostCard'

type HomeProps = {
  allPosts: Post[]
}

export const Home = ({ allPosts }: HomeProps) => (
  <main>
    <div>
      <Grid gap={10} sm={1} md={2} lg={3}>
        {allPosts.map((post) => (
          <PostCard key={post._id} />
        ))}
      </Grid>
    </div>
  </main>
)