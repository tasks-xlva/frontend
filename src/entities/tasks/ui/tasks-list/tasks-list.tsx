import { Button, Empty, Typography } from 'antd'
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
      {!tasks || !!tasks.length ? (
        tasks?.map((task) => (
          <LinkCard
            key={task.id}
            href={generatePath(PRIVATE_PATH.TASK, { taskId: task.id })}
          >
            <Typography.Title level={4}>{task.name}</Typography.Title>
            <Typography.Text type='secondary'>
              {task.deadline
                ? `До` + moment(task.deadline).format(`DD.MM.YY`)
                : `Нет дедлайна`}
            </Typography.Text>
          </LinkCard>
        ))
      ) : (
        <Empty description='Заданий пока нет' />
      )}
      <Button block type='dashed'>
        Добавить задание
      </Button>
    </Grid>
  )
}
