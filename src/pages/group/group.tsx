import { Button, Divider, List, Typography } from 'antd'
import { useParams } from 'react-router-dom'
import { LinkCard } from 'shared/ui/components/LinkCard/LinkCard'
import styles from './group.module.scss'
import { EditOutlined, ShareAltOutlined } from '@ant-design/icons'

export const Group = () => {
  let { groupId } = useParams<{ groupId: string }>()

  const data = ['Полухин Матвей', 'Борисов Тимофей']

  return (
    <>
      <div className={styles.header}>
        <Typography.Title level={2}>{groupId}</Typography.Title>
        <Button type='primary' icon={<ShareAltOutlined />} />
        <Button type='primary' icon={<EditOutlined />} />
      </div>
      <Typography.Title level={3}>Предметы</Typography.Title>
      <LinkCard href=''>WEB</LinkCard>
      <LinkCard href=''>Frond-end</LinkCard>
      <Button block>Добавить предмет</Button>
      <Typography.Title level={3}>Студенты</Typography.Title>
      <Divider orientation='left'>Админы</Divider>
      <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>{item}</Typography.Text>
          </List.Item>
        )}
      />
    </>
  )
}
