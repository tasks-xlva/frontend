import { Button, DatePicker, Form, Typography } from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useTask } from 'entities/tasks/api'
import { useDeleteTask } from 'pages/task/lib'
import { Attachments, Grid, Markdown } from 'shared/ui'

export const Task = () => {
  let { taskId } = useParams<{ taskId: string }>()
  const [isEditingDescription, setIsEditingDescription] = useState(false)
  const { task } = useTask(taskId)
  const { handleDeleteTask } = useDeleteTask(taskId)
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(task)
  }, [form, task])

  return (
    <Grid>
      <Typography.Title level={2}>{task?.name}</Typography.Title>
      <Form form={form} layout='vertical'>
        <Form.Item name='description'>
          <Markdown isEditing={isEditingDescription} />
        </Form.Item>
        <Form.Item>
          <Button
            block
            onClick={() => setIsEditingDescription(!isEditingDescription)}
          >
            {isEditingDescription ? `Сохранить` : `Редактировать`} описание
          </Button>
        </Form.Item>
        <Form.Item label='Дедлайн' name='deadline'>
          <DatePicker
            format={(date) => date && moment(date).format(`DD.MM.YY`)}
            placeholder='Укажите дедлайн'
          />
        </Form.Item>
        <Typography.Title level={3}>Вложения</Typography.Title>
        <Form.Item name='attachments'>
          <Attachments />
        </Form.Item>
        {task && (
          <Form.Item>
            <Button block danger onClick={handleDeleteTask}>
              Удалить
            </Button>
          </Form.Item>
        )}
      </Form>
    </Grid>
  )
}
