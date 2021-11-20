import { Typography } from 'antd'
import moment from 'moment'
import { generatePath } from 'react-router-dom'

import { PRIVATE_PATH } from 'shared/config'
import { Grid, LinkCard } from 'shared/ui'

interface Props {
  tasks: Components.Schemas.Task[] | undefined
}

export const TasksList = ({ tasks }: Props) => {
  return (
    <Grid>
      {tasks?.map((task) => (
        <LinkCard href={generatePath(PRIVATE_PATH.TASK, { taskId: task.id })}>
          <Typography.Title level={4}>{task.name}</Typography.Title>
          <Typography.Text type='secondary'>
            До {moment(task.deadline).format(`DD.mm.YY`)}
          </Typography.Text>
        </LinkCard>
      ))}
    </Grid>
  )
}
