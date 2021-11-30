import { Button, Form, Input, Typography } from 'antd'
import { useEffect, useMemo, useState } from 'react'

import { StudentModal, StudentsList } from 'entities/groups/ui'
import { Grid } from 'shared/ui'
import { PrivateLayout } from 'widgets/private-layout'

interface Props {
  onSubmit: (values: Components.Schemas.SubjectRequest) => void
  values?: Components.Schemas.SubjectRequest
}

export const SubjectEditForm = ({ onSubmit, values }: Props) => {
  const [id, setId] = useState<number | null>(null)

  const [form] = Form.useForm()

  const isNew = useMemo(() => values, [values])

  useEffect(() => {
    form.setFieldsValue(values)
  }, [form, values])

  return (
    <Grid>
      <Typography.Title level={2}>
        {values?.name || `Новый предмет`}
      </Typography.Title>
      <Form form={form} layout='vertical' onFinish={onSubmit}>
        <Form.Item label='Название предмета' name='name'>
          <Input placeholder='Программирование' />
        </Form.Item>
        <Form.Item>
          <Button block htmlType='submit' type='primary'>
            Сохранить
          </Button>
        </Form.Item>
      </Form>
      {isNew && (
        <PrivateLayout.Aside>
          <StudentsList onUserClick={setId} />
          <StudentModal id={id} onClose={() => setId(null)} />
        </PrivateLayout.Aside>
      )}
    </Grid>
  )
}
