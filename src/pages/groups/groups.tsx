import { Button, Typography } from 'antd'
import { generatePath } from 'react-router-dom'
import { Grid, LinkCard } from 'shared/ui'
import { PRIVATE_PATH } from 'shared/config'

export const Groups = () => {
  return (
    <Grid>
      <Typography.Title level={2}>Группы</Typography.Title>
      <LinkCard
        href={generatePath(PRIVATE_PATH.GROUP, {
          groupId: 1,
        })}
      >
        K33401
      </LinkCard>
      <LinkCard
        href={generatePath(PRIVATE_PATH.GROUP, {
          groupId: 2,
        })}
      >
        K33402
      </LinkCard>
      <Button block>Создать группу</Button>
    </Grid>
  )
}
