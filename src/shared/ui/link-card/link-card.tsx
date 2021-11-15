import { Card } from 'antd'
import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

interface Props extends ComponentProps<typeof Card> {
  href: ComponentProps<typeof Link>[`to`]
}

export const LinkCard = ({ children, href, ...rest }: Props) => {
  return (
    <Link to={href}>
      <Card {...rest}>{children}</Card>
    </Link>
  )
}
