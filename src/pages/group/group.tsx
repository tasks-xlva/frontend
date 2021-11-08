import { Button, Typography } from 'antd'
import { generatePath, useParams } from 'react-router-dom'
import { LinkCard } from 'shared/ui/link-card/link-card'
import styles from './group.module.scss'
import { EditOutlined, ShareAltOutlined } from '@ant-design/icons'
import { StudentsList } from '../../entities/ui/students-list/students-list'
import { PRIVATE_PATH } from '../../shared/config'

export const Group = () => {
  let { groupId } = useParams<{ groupId: string }>()

  return (
    <>
      <div className={styles.header}>
        <Typography.Title level={2}>{groupId}</Typography.Title>
        <Button type='primary' icon={<ShareAltOutlined />} />
        <Button
          type='primary'
          icon={<EditOutlined />}
          href={generatePath(PRIVATE_PATH.GROUP_EDIT, { groupId: groupId })}
        />
      </div>
      <Typography.Title level={3}>Предметы</Typography.Title>
      <LinkCard href=''>WEB</LinkCard>
      <LinkCard href=''>Frond-end</LinkCard>
      <Button block>Добавить предмет</Button>
      <StudentsList />
    </>
  )
}
