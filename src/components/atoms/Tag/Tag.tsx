import * as S from './styles'

export type TagProps = {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export const Tag = ({ children, size = 'sm' }: TagProps) => (
  <S.Tag size={size} className="">
    {children}
  </S.Tag>
)
