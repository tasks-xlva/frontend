import { EditOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { generatePath, useParams } from 'react-router-dom'

import { useGroup } from 'entities/groups/api'
import { StudentsList } from 'entities/groups/ui'
import { PRIVATE_PATH } from 'shared/config'
import { Grid } from 'shared/ui'
import { LinkCard } from 'shared/ui/link-card/link-card'
import { PrivateLayout } from 'widgets/private-layout'

import styles from './group.module.scss'

export const Group = () => {
  let { groupId } = useParams<{ groupId: string }>()
  const { group } = useGroup(groupId)

  return (
    <Grid>
      <div className={styles.header}>
        <Typography.Title level={2}>{group?.number}</Typography.Title>
        <Button icon={<ShareAltOutlined />} size='middle' type='primary' />
        <Button
          href={generatePath(PRIVATE_PATH.GROUP_EDIT, { groupId: groupId })}
          icon={<EditOutlined />}
          size='middle'
          type='primary'
        />
      </div>
      <Typography.Title level={3}>Предметы</Typography.Title>
      <LinkCard href=''>WEB</LinkCard>
      <LinkCard href=''>Frond-end</LinkCard>
      <Button block>Добавить предмет</Button>

      <PrivateLayout.Aside>
        <StudentsList />
      </PrivateLayout.Aside>
    </Grid>
  )
}
