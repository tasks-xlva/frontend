import { Typography, Popover, Button } from 'antd'
import { useMemo } from 'react'

import { useMyself } from 'entities/users/api'

import styles from './extra.module.scss'

import { useLogout } from '../../lib/use-logout'

export const Extra = () => {
  const { myself } = useMyself()
  const { handleLogout } = useLogout()

  const menu = useMemo(
    () => (
      <Button danger onClick={handleLogout}>
        Выйти
      </Button>
    ),
    [handleLogout],
  )

  return (
    <>
      <Popover placement='bottom' content={menu} trigger='click'>
        <Typography.Title level={5} className={styles.title}>
          {myself?.firstName} {myself?.lastName}
        </Typography.Title>
      </Popover>
    </>
  )
}
