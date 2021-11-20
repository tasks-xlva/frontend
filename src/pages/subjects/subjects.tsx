import { Typography } from 'antd'
import { generatePath } from 'react-router-dom'

import { useSubjects } from 'entities/subjects/api'
import { PRIVATE_PATH } from 'shared/config'
import { Grid, LinkCard } from 'shared/ui'

export const Subjects = () => {
  const { subjects } = useSubjects()

  return (
    <Grid>
      <Typography.Title level={2}>Предметы</Typography.Title>
      {subjects?.map((subject) => (
        <LinkCard
          key={subject.id}
          href={generatePath(PRIVATE_PATH.SUBJECT, {
            subjectId: subject.id,
          })}
        >
          {subject.name}
        </LinkCard>
      ))}
    </Grid>
  )
}
