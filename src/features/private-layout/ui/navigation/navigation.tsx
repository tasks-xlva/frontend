import { Link } from 'react-router-dom'
import { PRIVATE_PATH } from 'shared/config'
import { Drawer, Typography } from 'antd'
import { useLogout } from '../../lib/use-logout'

interface Props {
  onClose: () => void
  visible: boolean
}

export const Navigation = ({ onClose, visible }: Props) => {
  const { handleLogout } = useLogout()

  return (
    <Drawer
      placement='left'
      title='Имя Фамилия'
      onClose={onClose}
      visible={visible}
    >
      <Link to='' onClick={onClose}>
        <p>Мои задания</p>
      </Link>
      <Link to={PRIVATE_PATH.SUBJECTS} onClick={onClose}>
        <p>Предметы</p>
      </Link>
      <Link to={PRIVATE_PATH.GROUPS} onClick={onClose}>
        <p>Группы</p>
      </Link>
      <Link to={PRIVATE_PATH.SETTINGS} onClick={onClose}>
        <p>Настройки</p>
      </Link>
      <p onClick={handleLogout}>
        <Typography.Text type='danger'>Выход</Typography.Text>
      </p>
    </Drawer>
  )
}
