import { Button, Typography } from 'antd'
import { generatePath } from 'react-router-dom'
import { Grid, LinkCard } from 'shared/ui'
import { PRIVATE_PATH } from 'shared/config'
import { useGroups } from 'entities/groups/api'

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
