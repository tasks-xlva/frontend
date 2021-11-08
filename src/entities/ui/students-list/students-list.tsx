import { List, Typography } from 'antd'
import { Dispatch } from 'react'

interface Props {
  onUserClick?: Dispatch<number>
}

const data = [
  {
    id: 111,
    name: 'Товарищ Тимофей',
    extra: 'Админ',
  },
  {
    id: 112,
    name: 'Товарищ Матвей',
    extra: '',
  },
]

export const StudentsList = ({ onUserClick }: Props) => {
  return (
    <>
      <Typography.Title level={3}>Студенты</Typography.Title>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            onClick={() => onUserClick && onUserClick(item.id)}
            extra={
              <Typography.Text type='warning'>{item.extra}</Typography.Text>
            }
          >
            <Typography.Text>{item.name}</Typography.Text>
          </List.Item>
        )}
      />
    </>
  )
}
