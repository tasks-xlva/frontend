import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

export const Settings = () => {
  return (
    <>
      <Typography.Title level={2}>Настройки</Typography.Title>
      <Form>
        <Form.Item name='Name' rules={[{ required: false }]}>
          <Input placeholder='Имя' size='large' />
        </Form.Item>
        <Form.Item name='Surname' rules={[{ required: false }]}>
          <Input placeholder='Фамилия' size='large' />
        </Form.Item>
        <Form.Item name='Email' rules={[{ required: false }]}>
          <Input type='email' placeholder='Почта' size='large' />
        </Form.Item>
        <Form.Item>
          <Link to=''>
            <Button type='primary' block size='large'>
              Сохранить
            </Button>
          </Link>
        </Form.Item>
        <Form.Item
          name='Password'
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input type='password' placeholder='Пароль' size='large' />
        </Form.Item>
        <Form.Item
          name='New password'
          rules={[{ required: true, message: 'Введите новый пароль' }]}
        >
          <Input type='password' placeholder='Новый пароль' size='large' />
        </Form.Item>
        <Form.Item>
          <Link to=''>
            <Button type='primary' block size='large'>
              Сохранить
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}
