import { List, ListItem } from '@/components/atoms/List'

import { NavItem } from '@/models'

import * as S from './styles'

type SocialMediaProps = {
  items: NavItem[]
}

export const SocialMedia = ({ items }: SocialMediaProps) => (
  <List className="flex-col">
    {items.map((item) => (
      <ListItem key={item.title}>
        <S.Link href={item.href}>
          {item?.icon}
          <S.Text>{item.title}</S.Text>
        </S.Link>
      </ListItem>
    ))}
  </List>
)
