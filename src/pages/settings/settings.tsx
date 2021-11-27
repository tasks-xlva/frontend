import { Button, Form, Input, Typography } from 'antd'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useMyself } from 'entities/users/api'
import { Grid } from 'shared/ui'

export const Settings = () => {
  const [form] = Form.useForm()
  const { myself } = useMyself()

  useEffect(() => {
    form.setFieldsValue(myself)
  }, [form, myself])

  return (
    <Grid>
      <Typography.Title level={2}>Настройки</Typography.Title>
      <Form form={form} layout='vertical'>
        <Form.Item label='Имя' name='firstName' rules={[{ required: false }]}>
          <Input placeholder='Имя' />
        </Form.Item>
        <Form.Item
          label='Фамилия'
          name='lastName'
          rules={[{ required: false }]}
        >
          <Input placeholder='Фамилия' />
        </Form.Item>
        <Form.Item label='Почта' name='email' rules={[{ required: false }]}>
          <Input placeholder='Почта' type='email' />
        </Form.Item>
        <Form.Item>
          <Link to=''>
            <Button block type='primary'>
              Сохранить
            </Button>
          </Link>
        </Form.Item>
        <Form.Item
          label='Пароль'
          name='Password'
          rules={[{ required: true, message: `Введите пароль` }]}
        >
          <Input placeholder='Пароль' type='password' />
        </Form.Item>
        <Form.Item
          label='Новый пароль'
          name='New password'
          rules={[{ required: true, message: `Введите новый пароль` }]}
        >
          <Input placeholder='Новый пароль' type='password' />
        </Form.Item>
        <Form.Item>
          <Link to=''>
            <Button block type='primary'>
              Сохранить
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </Grid>
  )
}
