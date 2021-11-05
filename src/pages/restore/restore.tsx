import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { PUBLIC_PATH } from 'shared/config'

export const Restore = () => {
  return (
    <>
      <Typography.Title level={2}>Сброс пароля</Typography.Title>
      <Form>
        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Введите почту' }]}
        >
          <Input type='email' placeholder='Почта' size='large' />
        </Form.Item>
        <Form.Item>
          <Link to=''>
            <Button type='primary' block size='large'>
              Сбросить
            </Button>
          </Link>
        </Form.Item>
        <Form.Item>
          <Link to={PUBLIC_PATH.LOGIN}>
            <Button block size='large'>
              Назад
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}
