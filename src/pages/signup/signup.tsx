import { Button, Form, Input, Typography } from 'antd'
import styles from './signup.module.scss'
import { Link } from 'react-router-dom'
import { PUBLIC_PATH } from 'shared/config'
import { Grid } from 'shared/ui'

export const Signup = () => {
  return (
    <Grid>
      <Typography.Title level={2}>Регистрация</Typography.Title>
      <Form>
        <Form.Item
          label='Имя'
          name='name'
          rules={[{ required: true, message: 'Введите имя' }]}
        >
          <Input placeholder='Имя' />
        </Form.Item>
        <Form.Item
          label='Фамилия'
          name='surname'
          rules={[{ required: true, message: 'Введите фамилию' }]}
        >
          <Input placeholder='Фамилия' />
        </Form.Item>
        <Form.Item
          label='Почта'
          name='email'
          rules={[{ required: true, message: 'Введите почту' }]}
        >
          <Input placeholder='Почта' />
        </Form.Item>
        <Form.Item
          label='Логин'
          name='login'
          rules={[{ required: false, message: 'Введите логин' }]}
        >
          <Input placeholder='Логин' />
        </Form.Item>
        <Form.Item
          label='Пароль'
          name='password'
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input type='password' placeholder='Пароль' />
        </Form.Item>
        <Form.Item
          label='Повторите пароль'
          name='repeat-password'
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input type='password' placeholder='Повторите пароль' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' block>
            Зарегистрироваться
          </Button>
        </Form.Item>
        <Form.Item>
          <Typography.Paragraph className={styles.signupText}>
            Уже есть аккаунт? <Link to={PUBLIC_PATH.LOGIN}>Войти?</Link>
          </Typography.Paragraph>
        </Form.Item>
      </Form>
    </Grid>
  )
}
