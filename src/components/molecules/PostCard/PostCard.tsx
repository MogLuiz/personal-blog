import Image from 'next/image'

import { Tag } from '@/components/atoms/Tag'

import { BlogPost } from '@/models'

import * as S from './styles'

export type PostCardProps = BlogPost & {
  isMain?: boolean
}

export const PostCard = ({
  readingTime,
  slug,
  date,
  description,
  image,
  title,
  tags,
  isMain = false
}: PostCardProps) => (
  <S.LinkContainer href={slug} $isMain={isMain}>
    <S.ImageContainer className={`${isMain && 'lg:mr-3'}`}>
      <Image
        src={image}
        fill
        alt={title}
        priority
        className="rounded-xl object-cover object-center"
      />
    </S.ImageContainer>

    <S.Content className={`${isMain && 'lg:pt-0'}`}>
      <S.TagsContainer>
        {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </S.TagsContainer>

      <S.Time>
        {date} • {readingTime} minutos de leitura
      </S.Time>

      <S.Title>{title}</S.Title>

      <S.Description>{description}</S.Description>
    </S.Content>
  </S.LinkContainer>
)
