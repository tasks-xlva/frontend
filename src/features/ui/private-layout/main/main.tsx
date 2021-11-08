import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Main = (props: Props) => {
  const { children } = props
  return <main>{children}</main>
}
