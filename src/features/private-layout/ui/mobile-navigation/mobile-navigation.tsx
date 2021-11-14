import { Link } from 'react-router-dom'
import { Drawer, Typography } from 'antd'
import { pages } from '../../lib/pages'
import classNames from 'classnames'
import styles from './mobile-navigation.module.scss'
import { useLogout } from 'features/private-layout/lib/use-logout'
import { useMyself } from 'entities/users/api'

interface Props {
  onClose: () => void
  visible: boolean
  className?: string
}

export const MobileNavigation = ({ onClose, visible, className }: Props) => {
  const { handleLogout } = useLogout()
  const { myself } = useMyself()

  return (
    <Drawer
      className={classNames(styles.drawer, className)}
      placement='left'
      title={`${myself?.firstName} ${myself?.lastName}`}
      onClose={onClose}
      visible={visible}
      width='100%'
    >
      {pages.map(({ title, link }) => (
        <Link key={link} to={link} onClick={onClose}>
          <Typography.Title level={2}>{title}</Typography.Title>
        </Link>
      ))}
      <Typography.Title
        className={styles.logout}
        type='danger'
        level={3}
        onClick={handleLogout}
      >
        Выход
      </Typography.Title>
    </Drawer>
  )
}
