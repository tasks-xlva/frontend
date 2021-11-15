import { Typography } from 'antd'
import { generatePath } from 'react-router-dom'

import { PRIVATE_PATH } from 'shared/config'
import { Grid, LinkCard } from 'shared/ui'

export const Tasks = () => {
  return (
    <Grid>
      <Typography.Title level={2}>Мои задания</Typography.Title>
      <LinkCard href={generatePath(PRIVATE_PATH.TASK, { taskId: 2 })}>
        <Typography.Title level={4}>Лаба 1</Typography.Title>
        <Typography.Text type='secondary'>До 18.10.21</Typography.Text>
      </LinkCard>
      <LinkCard href={generatePath(PRIVATE_PATH.TASK, { taskId: 3 })}>
        <Typography.Title level={4}>Лаба 2</Typography.Title>
        <Typography.Text type='secondary'>До 18.12.21</Typography.Text>
      </LinkCard>
    </Grid>
  )
}
