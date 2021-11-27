import { EditOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { generatePath, useParams } from 'react-router-dom'

import { useGroup } from 'entities/groups/api'
import { StudentsList } from 'entities/groups/ui'
import { SubjectsList } from 'entities/subjects/ui'
import { ShareOrCopy } from 'features/share-or-copy/ui'
import { baseURL, routes } from 'shared/api'
import { PRIVATE_PATH } from 'shared/config'
import { Grid } from 'shared/ui'
import { PrivateLayout } from 'widgets/private-layout'

import styles from './group.module.scss'

export const Group = () => {
  let { groupId } = useParams<{ groupId: string }>()
  const { group } = useGroup(groupId)

  return (
    <Grid>
      <div className={styles.header}>
        <Typography.Title level={2}>{group?.number}</Typography.Title>
        <Button
          icon={
            <ShareOrCopy
              title={`Вступить в группу ${group?.number}`}
              url={group && `${baseURL}${routes.join(group?.uuid)}`}
            />
          }
          size='middle'
          type='primary'
        />
        <Button
          href={generatePath(PRIVATE_PATH.GROUP_EDIT, { groupId: groupId })}
          icon={<EditOutlined />}
          size='middle'
          type='primary'
        />
      </div>
      <Typography.Title level={3}>Предметы</Typography.Title>
      <SubjectsList subjects={group?.subjects} />
      <Button block>Добавить предмет</Button>

      <PrivateLayout.Aside>
        <StudentsList />
      </PrivateLayout.Aside>
    </Grid>
  )
}
