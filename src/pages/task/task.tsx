import { useParams } from 'react-router-dom'
import { DatePicker, Input, Typography, Upload } from 'antd'
import { ComponentProps } from 'react'
import { Grid } from 'shared/ui'

const fileList: ComponentProps<typeof Upload>['defaultFileList'] = [
  {
    uid: '-1',
    name: 'Вложение 1',
    status: 'done',
    url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80',
    thumbUrl:
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80',
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'error',
  },
]

export const Task = () => {
  let { taskId } = useParams<{ taskId: string }>()

  return (
    <Grid>
      <Typography.Title level={2}>{taskId}</Typography.Title>
      <Input.TextArea />
      <DatePicker placeholder='Укажите дедлайн' />
      <Typography.Title level={3}>Вложения</Typography.Title>
      <Upload action='' listType='picture-card' defaultFileList={fileList}>
        {'Загрузить'}
      </Upload>
    </Grid>
  )
}
