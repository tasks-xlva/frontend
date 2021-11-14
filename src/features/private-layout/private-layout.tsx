import { ReactNode } from 'react'
import { PageHeader } from 'antd'
import styles from './private-layout.module.scss'
import { Aside } from './ui/aside/aside'
import { MenuOutlined } from '@ant-design/icons'
import { Navigation } from './ui/navigation/navigation'
import { useVisible } from 'shared/hooks/use-visible'

interface Props {
  children: ReactNode
}

export const PrivateLayout = ({ children }: Props) => {
  const { show, hide, isVisible } = useVisible()

  return (
    <>
      <PageHeader
        className={styles.header}
        backIcon={<MenuOutlined />}
        onBack={show}
        title='Tasks'
      />
      <Navigation onClose={hide} visible={isVisible} />
      <main className={styles.content}>{children}</main>
      <aside className={styles.aside} id='private-layout-aside' />
    </>
  )
}

PrivateLayout.Aside = Aside
