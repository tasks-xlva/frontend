import { Typography } from 'antd'
import { generatePath } from 'react-router-dom'
import { LinkCard } from 'shared/ui/link-card/link-card'
import { PRIVATE_PATH } from 'shared/config'

export const Subjects = () => {
  return (
    <>
      <Typography.Title level={2}>Предметы</Typography.Title>
      <LinkCard
        href={generatePath(PRIVATE_PATH.SUBJECT, {
          subjectId: 'WEB',
        })}
      >
        WEB
      </LinkCard>
      <LinkCard
        href={generatePath(PRIVATE_PATH.SUBJECT, {
          subjectId: 'Front-end',
        })}
      >
        Front-end
      </LinkCard>
    </>
  )
}
