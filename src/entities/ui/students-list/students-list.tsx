import { Divider, List, Typography } from 'antd'
import { Dispatch } from 'react'

interface Props {
  onUserClick?: Dispatch<number>
}

export const StudentsList = ({ onUserClick }: Props) => {
  const data = [
    {
      id: 111,
      name: 'jkmv',
    },
    {
      id: 112,
      name: 'jkmvddd',
    },
  ]

  return (
    <>
      <Typography.Title level={3}>Студенты</Typography.Title>
      <Divider orientation='left'>Админы</Divider>
      <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item onClick={() => onUserClick && onUserClick(item.id)}>
            <Typography.Text>{item.name}</Typography.Text>
          </List.Item>
        )}
      />
    </>
  )
}
