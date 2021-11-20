import { Button, Form, Input, Typography } from 'antd'
import { useEffect, useState } from 'react'

import { StudentModal, StudentsList } from 'entities/groups/ui'
import { Grid } from 'shared/ui'

interface Props {
  onSubmit: (values: Components.Schemas.GroupRequest) => void
  values?: Components.Schemas.GroupRequest
}

export const GroupEditForm = ({ onSubmit, values }: Props) => {
  const [id, setId] = useState<number | null>(null)
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(values)
  }, [form, values])

  return (
    <Grid>
      <Typography.Title level={2}>
        {values?.number || `Новая группа`}
      </Typography.Title>
      <Form form={form} layout='vertical' onFinish={onSubmit}>
        <Form.Item label='Номер группы' name='number'>
          <Input placeholder='К33402' />
        </Form.Item>
        <Form.Item>
          <Button block htmlType='submit' type='primary'>
            Сохранить
          </Button>
        </Form.Item>
      </Form>
      {values && (
        <>
          <StudentsList onUserClick={setId} />
          <StudentModal id={id} onClose={() => setId(null)} />
        </>
      )}
    </Grid>
  )
}
