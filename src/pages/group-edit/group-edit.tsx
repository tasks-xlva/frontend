import { Form, Input, Typography } from 'antd'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { StudentsList, StudentModal } from 'entities/ui'

export const GroupEdit = () => {
  let { groupId } = useParams<{ groupId: string }>()

  const [id, setId] = useState<number | null>(null)

  return (
    <>
      <Typography.Title level={2}>{groupId}</Typography.Title>
      <Form>
        <Form.Item label='Название'>
          <Input placeholder='Название' />
        </Form.Item>
      </Form>
      <StudentsList onUserClick={setId} />
      <StudentModal id={id} onClose={() => setId(null)} />
    </>
  )
}
