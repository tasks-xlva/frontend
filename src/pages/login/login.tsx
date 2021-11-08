import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { PUBLIC_PATH } from 'shared/config'
import { useLogin } from './lib/use-login'

export const Login = () => {
  const { handleLogin } = useLogin()
  return (
    <>
      <Typography.Title level={2}>Вход</Typography.Title>
      <Form onFinish={handleLogin}>
        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Введите почту' }]}
        >
          <Input placeholder='Почта' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input type='password' placeholder='Пароль' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block>
            Войти
          </Button>
        </Form.Item>
        <Form.Item>
          <Link to={PUBLIC_PATH.SIGNUP}>
            <Button block>Зарегистрироваться</Button>
          </Link>
        </Form.Item>
        <Form.Item>
          <Link to={PUBLIC_PATH.RESTORE}>
            <Button type='link' block>
              Забыли пароль?
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}
