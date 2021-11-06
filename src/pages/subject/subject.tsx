import { useParams } from 'react-router-dom'
import { Input, Typography } from 'antd'
import { LinkCard } from 'shared/ui/components/LinkCard/LinkCard'

export const Subject = () => {
  let { subjectId } = useParams<{ subjectId: string }>()

  return (
    <>
      <Typography.Title level={2}>{subjectId}</Typography.Title>
      <Input.TextArea />
      <Typography.Title level={3}>Задания</Typography.Title>
      <LinkCard href=''>
        <Typography.Title level={4}>Лаба 1</Typography.Title>
        <Typography.Text type='secondary'>До 18.10.21</Typography.Text>
      </LinkCard>
      <LinkCard href=''>
        <Typography.Title level={4}>Лаба 2</Typography.Title>
        <Typography.Text type='secondary'>До 18.12.21</Typography.Text>
      </LinkCard>
    </>
  )
}
