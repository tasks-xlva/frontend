import { List, Typography } from 'antd'
import { Dispatch } from 'react'

import { Grid } from 'shared/ui'

interface Props {
  onUserClick?: Dispatch<number>
}

const data = [
  {
    id: 111,
    name: `Товарищ Тимофей`,
    extra: `Админ`,
  },
  {
    id: 112,
    name: `Товарищ Матвей`,
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
            <Typography.Text>{item.name}</Typography.Text>
          </List.Item>
        )}
      />
    </Grid>
  )
}
