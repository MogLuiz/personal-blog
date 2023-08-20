import { siteConfig } from '@/config'

import { Grid } from '@/components/atoms/Grid'
import { Pagination } from '@/components/atoms/Pagination'
import { Profile } from '@/components/atoms/Profile'
import { PostCard } from '@/components/molecules/PostCard'

import { BlogPost } from '@/models'

type HomeProps = {
  posts: BlogPost[]
  currentPage: number
  totalPages: number
  previousPage: string
  nextPage: string
  withProfileSection?: boolean
}

export const HomeScreen = ({
  posts,
  currentPage,
  totalPages,
  nextPage,
  previousPage,
  withProfileSection = true
}: HomeProps) => {
  return (
    <main className="flex flex-col gap-6">
      {withProfileSection && (
        <div>
          <Profile title={siteConfig.title} subtitle={siteConfig.subtitle} />
        </div>
      )}

      <div>
        <Grid gap={10} sm={1} md={2} lg={3}>
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </Grid>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    </main>
  )
}
