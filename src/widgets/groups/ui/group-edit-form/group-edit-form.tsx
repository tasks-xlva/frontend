import { Button, Form, Input, Typography } from 'antd'
import { useEffect, useMemo, useState } from 'react'

import { StudentModal, StudentsList } from 'entities/groups/ui'
import { UpdateMemberRole } from 'pages/group-edit/lib'
import { Grid } from 'shared/ui'
import { PrivateLayout } from 'widgets/private-layout'

interface Props {
  onSubmit: (values: Components.Schemas.GroupRequest) => void
  values?: Components.Schemas.Group
}

export const GroupEditForm = ({ onSubmit, values }: Props) => {
  const [id, setId] = useState<number | null>(null)
  const [form] = Form.useForm()

  const isNew = useMemo(() => values, [values])

  const changeStudentRole = (role: string) => {
    values && id && UpdateMemberRole(values?.id, id, role)
  }

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
      {isNew && (
        <PrivateLayout.Aside>
          <StudentsList onUserClick={setId} />
          <StudentModal
            id={id}
            onClose={() => setId(null)}
            onSave={changeStudentRole}
          />
        </PrivateLayout.Aside>
      )}
    </Grid>
  )
}
