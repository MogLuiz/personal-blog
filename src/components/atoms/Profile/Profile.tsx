import Image from 'next/image'

import * as S from './styles'

type ProfileProps = {
  title: string
  subtitle: string
}

export const Profile = ({ title, subtitle }: ProfileProps) => (
  <>
    <Image
      src="/assets/images/profile.jpg"
      alt="Profile image"
      width={80}
      height={80}
      title="Profile image"
      className="h-20 w-20 rounded-full"
      priority
    />

    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
  </>
)
