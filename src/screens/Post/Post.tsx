import { BackButton } from '@/components/atoms/BackButton'
import { Mdx } from '@/components/atoms/Mdx'

import { BlogPost } from '@/models'

import * as S from './styles'

type PostScreenProps = {
  post: BlogPost
}

export const PostScreen = ({
  post: { body, date, description, image, readingTime, title }
}: PostScreenProps) => (
  <S.Container>
    <S.IconContainer>
      <BackButton />
    </S.IconContainer>

    <S.ImageContainer>
      <S.Image
        src={image}
        alt={title}
        className="rounded-xl object-cover object-center"
      />
    </S.ImageContainer>

    <S.Content>
      <S.DateContainer>
        <S.Date>
          {date} • {readingTime} minutos de leitura
        </S.Date>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.DateContainer>

      <Mdx code={body.code} />
    </S.Content>
  </S.Container>
)
