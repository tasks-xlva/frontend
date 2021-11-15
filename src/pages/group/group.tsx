import { EditOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { generatePath, useParams } from 'react-router-dom'

import { StudentsList } from 'entities/groups/ui'
import { PRIVATE_PATH } from 'shared/config'
import { Grid } from 'shared/ui'
import { LinkCard } from 'shared/ui/link-card/link-card'
import { PrivateLayout } from 'widgets/private-layout'

import styles from './group.module.scss'

export const Group = () => {
  let { groupId } = useParams<{ groupId: string }>()

  return (
    <Grid>
      <div className={styles.header}>
        <Typography.Title level={2}>{groupId}</Typography.Title>
        <Button type='primary' size='middle' icon={<ShareAltOutlined />} />
        <Button
          type='primary'
          size='middle'
          icon={<EditOutlined />}
          href={generatePath(PRIVATE_PATH.GROUP_EDIT, { groupId: groupId })}
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
