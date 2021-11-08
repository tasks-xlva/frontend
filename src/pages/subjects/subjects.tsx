import { Typography } from 'antd'
import { generatePath } from 'react-router-dom'
import { Grid, LinkCard } from 'shared/ui'
import { PRIVATE_PATH } from 'shared/config'

export const Subjects = () => {
  return (
    <Grid>
      <Typography.Title level={2}>Предметы</Typography.Title>
      <LinkCard
        href={generatePath(PRIVATE_PATH.SUBJECT, {
          subjectId: 2,
        })}
      >
        WEB
      </LinkCard>
      <LinkCard
        href={generatePath(PRIVATE_PATH.SUBJECT, {
          subjectId: 3,
        })}
      >
        Front-end
      </LinkCard>
    </Grid>
  )
}
