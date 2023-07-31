import { siteConfig } from '@/config'

import { Grid } from '@/components/atoms/Grid'
import { Profile } from '@/components/atoms/Profile'
import { PostCard } from '@/components/molecules/PostCard'

import { BlogPost } from '@/models'

type HomeProps = {
  posts: BlogPost[]
}

export const HomeScreen = ({ posts }: HomeProps) => (
  <main className="flex flex-col gap-6">
    <div>
      <Profile title={siteConfig.title} subtitle={siteConfig.subtitle} />
    </div>

    <div>
      <Grid gap={10} sm={1} md={2} lg={3}>
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </Grid>
    </div>
  </main>
)
