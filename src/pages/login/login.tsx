import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { PATH } from '../../config'

export const Login = () => {
  return (
    <>
      <Typography.Title level={2}>Вход</Typography.Title>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{ remember: true }}
      >
        <Form.Item
          name='username'
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input placeholder='Почта' size='large' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input type='password' placeholder='Пароль' size='large' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' block size='large'>
            Войти
          </Button>
        </Form.Item>
        <Form.Item>
          <Link to={PATH.SIGNUP}>
            <Button block size='large'>
              Зарегистрироваться
            </Button>
          </Link>
        </Form.Item>
        <Form.Item>
          <Link to={PATH.RESTORE}>
            <Button type='link' block>
              Забыли пароль?
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}
