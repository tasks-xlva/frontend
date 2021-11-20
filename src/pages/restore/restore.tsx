import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { PUBLIC_PATH } from 'shared/config'
import { Grid } from 'shared/ui'

export const Restore = () => {
  return (
    <Grid>
      <Typography.Title level={2}>Сброс пароля</Typography.Title>
      <Form layout='vertical'>
        <Form.Item
          label='Почта'
          name='email'
          rules={[{ required: true, message: `Введите почту` }]}
        >
          <Input placeholder='Почта' type='email' />
        </Form.Item>
        <Form.Item>
          <Link to=''>
            <Button block type='primary'>
              Сбросить
            </Button>
          </Link>
        </Form.Item>
        <Form.Item>
          <Link to={PUBLIC_PATH.LOGIN}>
            <Button block>Назад</Button>
          </Link>
        </Form.Item>
      </Form>
    </Grid>
  )
}
