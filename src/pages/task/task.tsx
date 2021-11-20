import { Button, DatePicker, Form, Typography, Upload } from 'antd'
import moment from 'moment'
import { ComponentProps, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useTask } from 'entities/tasks/api'
import { Attachments, Grid, Markdown } from 'shared/ui'

export const Task = () => {
  let { taskId } = useParams<{ taskId: string }>()
  const [isEditing, setIsEditing] = useState(false)
  const { task } = useTask(taskId)
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(task)
  }, [form, task])

  return (
    <Grid>
      <Typography.Title level={2}>{task?.name}</Typography.Title>
      <Form form={form} layout='vertical'>
        <Form.Item name='description'>
          <Markdown isEditing={isEditing} />
        </Form.Item>
        <Form.Item>
          <Button block onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? `Сохранить` : `Редактировать`} описание
          </Button>
        </Form.Item>
        <Form.Item label='Дедлайн' name='deadline'>
          <DatePicker
            format={(date) => moment(date).format(`DD.mm.YY`)}
            placeholder='Укажите дедлайн'
          />
        </Form.Item>
        <Typography.Title level={3}>Вложения</Typography.Title>
        <Form.Item name='attachments'>
          <Attachments />
        </Form.Item>
      </Form>
    </Grid>
  )
}
