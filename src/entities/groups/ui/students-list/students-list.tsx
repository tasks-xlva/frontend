import { List, Typography } from 'antd'
import { Dispatch } from 'react'

import { Grid } from 'shared/ui'

import styles from './students-list.module.scss'

interface Props {
  onUserClick?: Dispatch<number>
}

const data = [
  {
    id: 111,
    firstName: `Товарищ`,
    lastName: `Тимофей`,
    extra: `Админ`,
  },
  {
    id: 112,
    firstName: `Товарищ`,
    lastName: `Матвей`,
    extra: ``,
  },
]

export const StudentsList = ({ onUserClick }: Props) => {
  return (
    <Grid>
      <Typography.Title level={3}>Студенты</Typography.Title>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            extra={
              <Typography.Text type='warning'>{item.extra}</Typography.Text>
            }
            onClick={() => onUserClick && onUserClick(item.id)}
          >
            <Typography.Text className={styles.name}>
              {item.firstName} {item.lastName.charAt(0)}.
            </Typography.Text>
          </List.Item>
        )}
      />
    </Grid>
  )
}
