import { ReactNode } from 'react'
import { PageHeader } from 'antd'
import styles from './private-layout.module.scss'
import { Main } from './main/main'
import { Aside } from './aside/aside'
import { MenuOutlined } from '@ant-design/icons'

interface Props {
  children: ReactNode
}

export const PrivateLayout = (props: Props) => {
  const { children } = props
  return (
    <>
      <PageHeader
        className={styles.header}
        backIcon={<MenuOutlined />}
        onBack={() => null}
        title='Tasks'
      />
      <div>{children}</div>
    </>
  )
}

PrivateLayout.Main = Main
PrivateLayout.Aside = Aside
