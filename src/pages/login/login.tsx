import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { PUBLIC_PATH } from 'shared/config'
import { useLogin } from './lib/use-login'
import { Grid } from 'shared/ui'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

export const Login = () => {
  const { handleLogin, isLoading } = useLogin()

  return (
    <Grid>
      <Typography.Title level={2}>Вход</Typography.Title>
      <Form onFinish={handleLogin} layout='vertical'>
        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Введите почту' }]}
        >
          <Input prefix={<UserOutlined />} placeholder='Почта' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type='password'
            placeholder='Пароль'
          />
        </Form.Item>
        <Form.Item>
          <Button loading={isLoading} type='primary' htmlType='submit' block>
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
    </Grid>
  )
}
