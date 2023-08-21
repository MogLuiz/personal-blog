import { siteConfig } from '@/config'

import { Grid } from '@/components/atoms/Grid'
import { Pagination } from '@/components/atoms/Pagination'
import { Profile } from '@/components/atoms/Profile'
import { PostCard } from '@/components/molecules/PostCard'

import { BlogPost } from '@/models'

import * as S from './styles'

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
    <S.Container>
      {withProfileSection && (
        <S.HeaderContainer>
          <Profile title={siteConfig.title} subtitle={siteConfig.subtitle} />
        </S.HeaderContainer>
      )}

      <S.ContentContainer>
        <S.PostListContainer>
          <Grid gap={10} sm={1} md={2} lg={3}>
            {posts.map((post, index) => (
              <PostCard key={post.slug} {...post} isMain={index === 0} />
            ))}
          </Grid>
        </S.PostListContainer>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </S.ContentContainer>
    </S.Container>
  )
}
