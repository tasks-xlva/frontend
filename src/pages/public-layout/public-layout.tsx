import { Drawer, PageHeader } from 'antd'
import { ReactNode } from 'react'
import styles from './public-layout.module.scss'
import { MenuOutlined } from '@ant-design/icons'
import { useVisible } from 'src/hooks/use-viisible'

interface Props {
  children: ReactNode
}

export const PublicLayout = (props: Props) => {
  const { isVisible, show, hide } = useVisible()
  const { children } = props

  return (
    <>
      <PageHeader
        backIcon={<MenuOutlined />}
        onBack={show}
        title='Public title'
        subTitle='This is a subtitle'
      />
      <main className={styles.wrapper}>{children}</main>
      <Drawer
        title='Basic Drawer'
        placement='left'
        width='100%'
        className={styles.drawer}
        visible={isVisible}
        onClose={hide}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}
