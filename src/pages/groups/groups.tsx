import { Button, Form, Input, Typography } from 'antd'
import { generatePath } from 'react-router-dom'
import { LinkCard } from 'shared/ui/components/LinkCard/LinkCard'
import { PRIVATE_PATH } from '../../shared/config'

export const Groups = () => {
  return (
    <>
      <Typography.Title level={2}>Группы</Typography.Title>
      <LinkCard
        href={generatePath(PRIVATE_PATH.GROUP, {
          groupId: 1,
        })}
        style={{ marginTop: 16 }}
      >
        K33401
      </LinkCard>
      <LinkCard
        href={generatePath(PRIVATE_PATH.GROUP, {
          groupId: 2,
        })}
        style={{ marginTop: 16 }}
      >
        K33402
      </LinkCard>
      <Button block size='large'>
        Создать группу
      </Button>
    </>
  )
}
