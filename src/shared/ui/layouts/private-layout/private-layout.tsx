import { ReactNode, useState } from 'react'
import { Drawer, PageHeader } from 'antd'
import styles from 'shared/ui/layouts/private-layout/private-layout.module.scss'
import { Main } from 'shared/ui/layouts/private-layout/main/main'
import { Aside } from 'shared/ui/layouts/private-layout/aside/aside'
import { MenuOutlined } from '@ant-design/icons'

interface Props {
  children: ReactNode
}

export const PrivateLayout = (props: Props) => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  const { children } = props
  return (
    <>
      <PageHeader
        className={styles.header}
        backIcon={<MenuOutlined />}
        onBack={showDrawer}
        title='Tasks'
      />
      <Drawer
        placement='left'
        title='Drawer'
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <div>{children}</div>
    </>
  )
}

PrivateLayout.Main = Main
PrivateLayout.Aside = Aside
