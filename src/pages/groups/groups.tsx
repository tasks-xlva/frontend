import { Button, Typography } from 'antd'
import { generatePath } from 'react-router-dom'
import { LinkCard } from 'shared/ui/link-card/link-card'
import { PRIVATE_PATH } from '../../shared/config'

export const Groups = () => {
  return (
    <>
      <Typography.Title level={2}>Группы</Typography.Title>
      <LinkCard
        href={generatePath(PRIVATE_PATH.GROUP, {
          groupId: 'K33401',
        })}
      >
        K33401
      </LinkCard>
      <LinkCard
        href={generatePath(PRIVATE_PATH.GROUP, {
          groupId: 'K33402',
        })}
      >
        K33402
      </LinkCard>
      <Button block>Создать группу</Button>
    </>
  )
}
