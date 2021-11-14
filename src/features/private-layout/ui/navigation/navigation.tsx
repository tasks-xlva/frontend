import { Link } from 'react-router-dom'
import { PRIVATE_PATH } from 'shared/config'
import { Drawer, Typography } from 'antd'
import { useLogout } from '../../lib/use-logout'
import styles from './navigation.module.scss'
import { useMyself } from 'entities/users/api'

interface Props {
  onClose: () => void
  visible: boolean
}

const pages: { link: string; title: string }[] = [
  { title: `Мои задания`, link: PRIVATE_PATH.TASKS },
  { title: `Предметы`, link: PRIVATE_PATH.SUBJECTS },
  { title: `Группы`, link: PRIVATE_PATH.GROUPS },
  { title: `Настройки`, link: PRIVATE_PATH.SETTINGS },
]

export const Navigation = ({ onClose, visible }: Props) => {
  const { handleLogout } = useLogout()
  const { myself } = useMyself()

  return (
    <Drawer
      className={styles.drawer}
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
