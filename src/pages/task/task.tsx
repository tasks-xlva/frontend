import { Button, DatePicker, Form, Typography, Upload } from 'antd'
import moment from 'moment'
import { ComponentProps, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useTask } from 'entities/tasks/api'
import { Grid, Markdown } from 'shared/ui'

const fileList: ComponentProps<typeof Upload>[`defaultFileList`] = [
  {
    uid: `-1`,
    name: `Вложение 1`,
    status: `done`,
    url: `https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80`,
    thumbUrl: `https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80`,
  },
  {
    uid: `-2`,
    name: `yyy.png`,
    status: `error`,
  },
]

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
            format={(date) => moment(date).format(`DD.MM.YY`)}
            placeholder='Укажите дедлайн'
          />
        </Form.Item>
      </Form>
      <Typography.Title level={3}>Вложения</Typography.Title>
      <Upload action='' defaultFileList={fileList} listType='picture-card'>
        {`Загрузить`}
      </Upload>
    </Grid>
  )
}
