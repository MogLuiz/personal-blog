import { Post } from 'contentlayer/generated'

import { siteConfig } from '@/config'

import { Grid } from '@/components/atoms/Grid'
import { Profile } from '@/components/atoms/Profile'
import { PostCard } from '@/components/molecules/PostCard'

type HomeProps = {
  allPosts: Post[]
}

export const Home = ({ allPosts }: HomeProps) => (
  <main className="flex flex-col gap-6">
    <div>
      <Profile title={siteConfig.title} subtitle={siteConfig.subtitle} />
    </div>

    <div>
      <Grid gap={10} sm={1} md={2} lg={3}>
        {allPosts.map((post) => (
          <PostCard key={post._id} />
        ))}
      </Grid>
    </div>
  </main>
)
