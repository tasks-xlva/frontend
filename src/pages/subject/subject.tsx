import { Input, Typography } from 'antd'
import { generatePath, useParams } from 'react-router-dom'

import { PRIVATE_PATH } from 'shared/config'
import { Grid, LinkCard } from 'shared/ui'

export const Subject = () => {
  let { subjectId } = useParams<{ subjectId: string }>()

  return (
    <Grid>
      <Typography.Title level={2}>{subjectId}</Typography.Title>
      <Input.TextArea />
      <Typography.Title level={3}>Задания</Typography.Title>
      <LinkCard href={generatePath(PRIVATE_PATH.TASK, { taskId: 1 })}>
        <Typography.Title level={4}>Лаба 1</Typography.Title>
        <Typography.Text type='secondary'>До 18.10.21</Typography.Text>
      </LinkCard>
      <LinkCard href={generatePath(PRIVATE_PATH.TASK, { taskId: 2 })}>
        <Typography.Title level={4}>Лаба 2</Typography.Title>
        <Typography.Text type='secondary'>До 18.12.21</Typography.Text>
      </LinkCard>
    </Grid>
  )
}
