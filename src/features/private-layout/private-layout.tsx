import { ReactNode } from 'react'
import { PageHeader } from 'antd'
import styles from './private-layout.module.scss'
import { Aside } from './ui/aside/aside'
import { MenuOutlined } from '@ant-design/icons'
import { Navigation } from './ui/navigation/navigation'
import { useVisible } from 'shared/hooks/use-visible'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
}

export const PrivateLayout = ({ children }: Props) => {
  const { show, hide, isVisible } = useVisible()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <PageHeader
        className={styles.header}
        backIcon={<MenuOutlined />}
        onBack={show}
        title='Tasks'
      />
      <Navigation onClose={hide} visible={isVisible} />
      <main className={styles.content}>{children}</main>
      <aside className={styles.aside} id='private-layout-aside' />
    </motion.div>
  )
}

PrivateLayout.Aside = Aside
