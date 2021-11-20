import { Typography } from 'antd'

import { useTasks } from 'entities/tasks/api'
import { TasksList } from 'entities/tasks/ui'
import { Grid } from 'shared/ui'

export const Tasks = () => {
  const { tasks } = useTasks()

  return (
    <Grid>
      <Typography.Title level={2}>Мои задания</Typography.Title>
      <TasksList tasks={tasks} />
    </Grid>
  )
}
