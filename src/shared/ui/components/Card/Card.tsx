import { ComponentProps } from 'react'
import { Card as AntCard } from 'antd'

export const Card = ({ children, ...rest }: ComponentProps<typeof AntCard>) => {
  return <AntCard {...rest}>{children}</AntCard>
}
