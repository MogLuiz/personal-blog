import { siteConfig } from '@/config'

import { Grid } from '@/components/atoms/Grid'
import { Pagination } from '@/components/atoms/Pagination'
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

      <Pagination
        currentPage={1}
        totalPages={4}
        previousPage="/"
        nextPage="/?page=2"
      />
    </div>
  </main>
)
