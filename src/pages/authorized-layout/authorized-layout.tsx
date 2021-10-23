import { ReactNode } from 'react'
import { PageHeader } from 'antd'

interface Props {
  children: ReactNode
}

export const AuthorizedLayout = (props: Props) => {
  const { children } = props
  return (
    <>
      <PageHeader
        className='site-page-header'
        onBack={() => null}
        title='Title'
        subTitle='This is a subtitle'
      />
      <main className=''>{children}</main>
    </>
  )
}
