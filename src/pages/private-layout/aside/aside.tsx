import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Aside = (props: Props) => {
  const { children } = props
  return <main>{children}</main>
}
