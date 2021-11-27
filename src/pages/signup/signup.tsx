import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { PUBLIC_PATH } from 'shared/config'
import { Grid } from 'shared/ui'

import styles from './signup.module.scss'

export const Signup = () => {
  return (
    <Grid>
      <Typography.Title level={2}>Регистрация</Typography.Title>
      <Form layout='vertical'>
        <Form.Item
          label='Имя'
          name='name'
          rules={[{ required: true, message: `Введите имя` }]}
        >
          <Input placeholder='Имя' />
        </Form.Item>
        <Form.Item
          label='Фамилия'
          name='surname'
          rules={[{ required: true, message: `Введите фамилию` }]}
        >
          <Input placeholder='Фамилия' />
        </Form.Item>
        <Form.Item
          label='Почта'
          name='email'
          rules={[{ required: true, message: `Введите почту` }]}
        >
          <Input placeholder='Почта' />
        </Form.Item>
        <Form.Item
          label='Логин'
          name='login'
          rules={[{ required: false, message: `Введите логин` }]}
        >
          <Input placeholder='Логин' />
        </Form.Item>
        <Form.Item
          hasFeedback
          label='Пароль'
          name='password'
          rules={[{ required: true, message: `Введите пароль` }]}
        >
          <Input placeholder='Пароль' type='password' />
        </Form.Item>
        <Form.Item
          hasFeedback
          dependencies={[`password`]}
          label='Повторите пароль'
          name='Confirm Password'
          rules={[{ required: true, message: `Введите пароль` }, ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue(`password`) === value) {
                return Promise.resolve()
              }
              return  Promise.reject(new Error(`Пароли должны совпадать!`))
            }
          })]}
        >
          <Input placeholder='Повторите пароль' type='password' />
        </Form.Item>
        <Form.Item>
          <Button block type='primary'>
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
