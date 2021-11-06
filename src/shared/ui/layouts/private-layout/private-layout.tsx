import { ReactNode, useState } from 'react'
import { Drawer, PageHeader } from 'antd'
import styles from 'shared/ui/layouts/private-layout/private-layout.module.scss'
import { Main } from 'shared/ui/layouts/private-layout/main/main'
import { Aside } from 'shared/ui/layouts/private-layout/aside/aside'
import { MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { PRIVATE_PATH } from '../../../config'

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
        title='Имя Фамилия'
        onClose={onClose}
        visible={visible}
      >
        <p>Мои задания</p>
        <p>Предметы</p>
        <p>Группы</p>
        <Link to={PRIVATE_PATH.SETTINGS}>
          <p>Настройки</p>
        </Link>
        <p>Выход</p>
      </Drawer>
      <main className={styles.content}>{children}</main>
    </>
  )
}

PrivateLayout.Main = Main
PrivateLayout.Aside = Aside
