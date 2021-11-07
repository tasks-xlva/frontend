import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

export const Settings = () => {
  return (
    <>
      <Typography.Title level={2}>Настройки</Typography.Title>
      <Form>
        <Form.Item name='Name' rules={[{ required: false }]}>
          <Input placeholder='Имя' />
        </Form.Item>
        <Form.Item name='Surname' rules={[{ required: false }]}>
          <Input placeholder='Фамилия' />
        </Form.Item>
        <Form.Item name='Email' rules={[{ required: false }]}>
          <Input type='email' placeholder='Почта' />
        </Form.Item>
        <Form.Item>
          <Link to=''>
            <Button type='primary' block>
              Сохранить
            </Button>
          </Link>
        </Form.Item>
        <Form.Item
          name='Password'
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input type='password' placeholder='Пароль' />
        </Form.Item>
        <Form.Item
          name='New password'
          rules={[{ required: true, message: 'Введите новый пароль' }]}
        >
          <Input type='password' placeholder='Новый пароль' />
        </Form.Item>
        <Form.Item>
          <Link to=''>
            <Button type='primary' block>
              Сохранить
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}
