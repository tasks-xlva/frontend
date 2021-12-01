import { EditOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Typography } from 'antd'
import moment from 'moment'
import { Dispatch, useCallback, useEffect } from 'react'

import { Attachments, Grid, Markdown } from 'shared/ui'

interface Props {
  isEditing?: boolean
  setIsEditing?: Dispatch<boolean>
  isNew?: boolean
  onSubmit: (values: Components.Schemas.TaskRequest) => Promise<void> | void
  onDelete?: () => Promise<void> | void
  values?: Components.Schemas.Task
}

export const TaskForm = ({
  onSubmit,
  values,
  isNew,
  setIsEditing,
  isEditing,
  onDelete,
}: Props) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(values)
  }, [form, values])

  const handleSave = useCallback(
    async (values) => {
      await onSubmit(values)
      if (setIsEditing) {
        setIsEditing(false)
      }
    },
    [onSubmit, setIsEditing],
  )

  return (
    <Grid>
      <Typography.Title level={2}>
        {isNew ? `Новое задание` : values?.name}
      </Typography.Title>
      {!isEditing && !!setIsEditing && (
        <Button
          icon={<EditOutlined onClick={() => setIsEditing(true)} />}
          size='middle'
          type='primary'
        />
      )}
      <Form form={form} layout='vertical' onFinish={handleSave}>
        {isEditing ? (
          <>
            <Form.Item label='Название работы' name='name'>
              <Input placeholder='Лабораторная работа' />
            </Form.Item>
            <Form.Item label='Описание' name='description'>
              <Markdown isEditing={isEditing} />
            </Form.Item>
            <Form.Item label='Дедлайн' name='deadline'>
              <DatePicker
                format={(date) => date && moment(date).format(`DD.MM.YY`)}
                placeholder='Укажите дедлайн'
              />
            </Form.Item>
            <Form.Item>
              <Button block htmlType='submit' type='primary'>
                Сохранить
              </Button>
            </Form.Item>
            <Form.Item>
              <Button block danger onClick={onDelete}>
                Удалить
              </Button>
            </Form.Item>
          </>
        ) : (
          <>
            <Typography.Title level={4}>
              Дедлайн{` `}
              {values ? moment(values.deadline).format(`DD.MM.YY`) : `не задан`}
            </Typography.Title>
            <Form.Item label='Описание'>
              <Markdown value={values?.description} />
            </Form.Item>
            <Typography.Title level={3}>Вложения</Typography.Title>
            <Form.Item name='attachments'>
              <Attachments />
            </Form.Item>
          </>
        )}
      </Form>
    </Grid>
  )
}
