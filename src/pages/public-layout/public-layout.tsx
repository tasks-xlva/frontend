import { PageHeader } from 'antd'
import { ReactNode } from 'react'
import styles from './public-layout.module.scss'

interface Props {
  children: ReactNode
}

export const PublicLayout = (props: Props) => {
  const { children } = props

  return (
    <>
      <PageHeader title='Tasks' className={styles.header} />
      <main className={styles.wrapper}>{children}</main>
    </>
  )
}
