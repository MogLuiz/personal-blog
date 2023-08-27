import { AnchorHTMLAttributes } from 'react'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
}

export const Link = ({ children, ...rest }: LinkProps) => (
  <a {...rest}>
    <span>{children}</span>
  </a>
)
