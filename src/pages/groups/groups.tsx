import { Button, Typography } from 'antd'
import { generatePath } from 'react-router-dom'

import { useGroups } from 'entities/groups/api'
import { PRIVATE_PATH } from 'shared/config'
import { Grid, LinkCard } from 'shared/ui'

export const Groups = () => {
  const { groups } = useGroups()

  return (
    <Grid>
      <Typography.Title level={2}>Группы</Typography.Title>
      {groups?.map((group) => (
        <LinkCard
          key={group.id}
          href={generatePath(PRIVATE_PATH.GROUP, {
            groupId: group.id,
          })}
        >
          {group.number}
        </LinkCard>
      ))}
      <Button block>Создать группу</Button>
    </Grid>
  )
}
