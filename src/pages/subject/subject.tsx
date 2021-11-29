import { Button, Typography } from 'antd'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useSubject } from 'entities/subjects/api'
import { TasksList } from 'entities/tasks/ui'
import { Grid, Markdown } from 'shared/ui'

export const Subject = () => {
  let { subjectId } = useParams<{ subjectId: string }>()
  const { subject } = useSubject(subjectId)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Grid>
      <Typography.Title level={2}>{subject?.name}</Typography.Title>
      <Markdown isEditing={isEditing} />
      <Button block onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? `Сохранить` : `Редактировать`} описание
      </Button>
      <Typography.Title level={3}>Задания</Typography.Title>
      <TasksList tasks={subject?.tasks} />
    </Grid>
  )
}
