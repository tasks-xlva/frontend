import { MenuOutlined } from '@ant-design/icons'
import { PageHeader } from 'antd'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

import { useIsDesktop, useIsVisible } from 'features/helpers/lib'
import { Logo } from 'shared/assets'

import styles from './private-layout.module.scss'

import { DesktopNavigation, MobileNavigation, Aside, Extra } from '..'

interface Props {
  children: ReactNode
}

export const PrivateLayout = ({ children }: Props) => {
  const { show, hide, isVisible } = useIsVisible()
  const { isDesktop } = useIsDesktop()

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
        onBack={!isDesktop ? show : undefined}
        title={<Logo className={styles.logo} />}
        extra={isDesktop && <Extra />}
      />
      <div className={styles.wrapper}>
        {isDesktop ? (
          <DesktopNavigation className={styles.navigation} />
        ) : (
          <MobileNavigation
            className={styles.navigation}
            onClose={hide}
            visible={isVisible}
          />
        )}
        <main className={styles.content}>{children}</main>
        <aside className={styles.aside} id='private-layout-aside' />
      </div>
    </motion.div>
  )
}

PrivateLayout.Aside = Aside
